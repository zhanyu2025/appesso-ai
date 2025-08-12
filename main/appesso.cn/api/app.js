const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const authRoutes = require('./routes/auth');
const rolesRoutes = require('./routes/role');
const usersRoutes = require('./routes/user');
const feedRoutes = require('./routes/feed');
const notificationRoutes = require('./routes/notification');
const chatRoutes = require('./routes/chat');
const searchRoutes = require('./routes/search');

const { errorLogger, errorResponder } = require('./middlewares/error-handler');
const { NODE_ENV, COOKIE_SECRET } = require('./utils/config');

const app = express();

const isDev = NODE_ENV === 'development';

app.use(morgan('dev'));
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: { policy: 'same-origin-allow-popups' },
    referrerPolicy: {
      policy: 'strict-origin-when-cross-origin',
    },
  })
);
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'img-src': ["'self'", 'https: data:'],
    },
  })
);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Allow all origins in IP+port mode
    optionsSuccessStatus: 200,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',
      'Origin',
    ],
  })
);

app.use(express.json({ type: 'application/json' }));
app.use(cookieParser(COOKIE_SECRET));

// Serve static files for production, but only for non-API routes
if (!isDev) {
  app.use('/static', express.static(path.join(__dirname, 'public/static')));
}

app.use('/api/auth', authRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/feed', feedRoutes);
app.use('/api/notification', notificationRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/search', searchRoutes);

// Serve React app for non-API routes in production
if (!isDev) {
  app.get('/*', (req, res) => {
    // Only serve React app for non-API routes
    if (!req.path.startsWith('/api/')) {
      res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    } else {
      res.status(404).json({ error: 'API endpoint not found', path: req.path });
    }
  });
}

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use(errorLogger);
app.use(errorResponder);

module.exports = app;
