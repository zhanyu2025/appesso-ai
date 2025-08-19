import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
  matchPath,
} from 'react-router-dom';
import { useMutation } from 'react-query';
import PropTypes from 'prop-types';
import axios from 'axios';

import { useAuth } from './contexts/auth-context';
import useScrollToTop from './hooks/useScrollToTop';

import { STATUS } from './utils/utils';

import Home from './pages/Home';

import Signin from './pages/Signin';

import UserProfile from './pages/UserProfile';
import DeviceActivation from './pages/DeviceActivation';
import NoMatch from './pages/NoMatch';
import Messages from './pages/Messages';
import Chat from './pages/Chat';
import Search from './pages/Search';
import Settings from './pages/Settings/Settings';
import AccountInfo from './pages/Settings/AccountInfo';
import ChangeUserName from './pages/Settings/ChangeUserName';
import ChangeBirthDate from './pages/Settings/ChangeBirthDate';
import EditProfile from './pages/Settings/EditProfile';
import Display from './pages/Settings/Display';

import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';
import Modal from './components/Modal';
import SigninForm from './components/SigninForm';
import DeviceActivationForm from './components/DeviceActivationForm';
import AddPostHeader from './components/AddPostHeader';

import useMediaQuery from './hooks/useMediaQuery';
import useSelectedRoleId from './hooks/useSelectedRoleId';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [_, setSelectedRoleId] = useSelectedRoleId();
  const { login, isAuthenticated, expiresAt, logout, user } = useAuth();
  const isWidthGreaterThan640 = useMediaQuery('(min-width: 640px)');
  useScrollToTop();
  const { state } = location;
  const verifyToken = useMutation(
    () => {
      return axios.post(
        '/api/auth/verify-token',
        {},
        {
          withCredentials: true,
        }
      );
    },
    {
      onSuccess: (response) => {
        // eslint-disable-next-line no-shadow
        const { user, accessToken: token, expiresAt } = response.data;
        if (response.status === 204) {
          logout();
        } else {
          login(user, token, expiresAt);
        }
      },
      onError: () => {
        logout();
      },
    }
  );

  useEffect(() => {
    verifyToken.mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    login,
    // exclude mutations - because verifyToken is an unstable refrence and linter prevents listing only mutation function
  ]);

  useEffect(() => {
    let verifyTokenTimer;
    if (isAuthenticated) {
      verifyTokenTimer = setTimeout(() => {
        verifyToken.mutate();
      }, new Date(expiresAt).getTime() - Date.now() - 10 * 1000);
    }
    return () => {
      if (isAuthenticated && verifyTokenTimer) {
        clearTimeout(verifyTokenTimer);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isAuthenticated,
    expiresAt,
    // exclude mutations - because verifyToken is an unstable refrence and linter prevents listing only mutation function
  ]);
  const handleDeviceActivationDismiss = () => {
    setSelectedRoleId('');
    navigate(`${state.backgroundLocation.pathname}`, {
      replace: true,
    });
  };
  const handleSignInDismiss = () => {
    setSelectedRoleId('');
    navigate(`${state.backgroundLocation.pathname}`, {
      replace: true,
    });
  };

  return (
    <div>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route
            path="search"
            element={
              <RequireAuth redirectTo="/signin">
                <Search />
              </RequireAuth>
            }
          />
          <Route
            path="settings"
            element={
              <RequireAuth redirectTo="/signin">
                <Settings />
              </RequireAuth>
            }
          >
            {isWidthGreaterThan640 && (
              <>
                <Route
                  index
                  element={
                    <RequireAuth redirectTo="/signin">
                      <Navigate to="account" />
                    </RequireAuth>
                  }
                />
                <Route
                  path="account"
                  element={
                    <RequireAuth redirectTo="/signin">
                      <AccountInfo />
                    </RequireAuth>
                  }
                />

                <Route
                  path="username"
                  element={
                    <RequireAuth redirectTo="/signin">
                      <ChangeUserName />
                    </RequireAuth>
                  }
                />

                <Route
                  path="birthdate"
                  element={
                    <RequireAuth redirectTo="/signin">
                      <ChangeBirthDate />
                    </RequireAuth>
                  }
                />
                <Route
                  path="display"
                  element={
                    <RequireAuth redirectTo="/signin">
                      <Display />
                    </RequireAuth>
                  }
                />
              </>
            )}
            <Route
              path="profile"
              element={
                <RequireAuth redirectTo="/signin">
                  <Navigate
                    to={`/${user.username}`}
                    state={{
                      from: location,
                    }}
                  />
                </RequireAuth>
              }
            />
          </Route>
          <Route
            path="messages"
            element={
              <RequireAuth redirectTo="/signin">
                <Messages />
              </RequireAuth>
            }
          >
            {isWidthGreaterThan640 && (
              <Route
                path=":chatId"
                element={<Chat key={location.pathname} />}
              />
            )}
          </Route>
          <Route
            path="/:username"
            element={
              <RequireAuth redirectTo="/signin">
                <UserProfile />
              </RequireAuth>
            }
          />
          <Route
            path="device/activation"
            element={
              <RequireAuth redirectTo="/signin">
                <DeviceActivation />
              </RequireAuth>
            }
          />
        </Route>

        <Route
          path="/signin"
          element={
            <RedirectIfLoggedIn redirectTo="/">
              <Signin />
            </RedirectIfLoggedIn>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {state?.backgroundLocation && matchPath('/signin', location.pathname) && (
        <Routes>
          <Route
            path="/signin"
            element={
              <Modal
                isOpen
                closeButtonVisible={false}
                onDismiss={handleSignInDismiss}
                customHeader={<AddPostHeader onDismiss={handleSignInDismiss} />}
              >
                <SigninForm />
              </Modal>
            }
          />
        </Routes>
      )}
      {state?.backgroundLocation &&
        matchPath('/device/activation', location.pathname) && (
          <Routes>
            <Route
              path="/device/activation"
              element={
                <Modal
                  isOpen
                  closeButtonVisible={false}
                  onDismiss={handleDeviceActivationDismiss}
                  customHeader={
                    <AddPostHeader
                      onDismiss={() =>
                        navigate(`${state.backgroundLocation.pathname}`, {
                          replace: true,
                        })
                      }
                    />
                  }
                >
                  <DeviceActivationForm />
                </Modal>
              }
            />
          </Routes>
        )}
      {state?.backgroundLocation &&
        matchPath('/settings/profile', location.pathname) && (
          <Routes>
            <Route
              path="/settings/profile"
              element={
                <RequireAuth redirectTo="/signin">
                  <Modal
                    isOpen
                    onDismiss={() =>
                      navigate(`${state.backgroundLocation.pathname}`, {
                        replace: true,
                      })
                    }
                    rounded={!!isWidthGreaterThan640}
                    headerVisible={false}
                  >
                    <EditProfile />
                  </Modal>
                </RequireAuth>
              }
            />
          </Routes>
        )}
      {!isWidthGreaterThan640 &&
        matchPath('/messages/:chatId', location.pathname) && (
          <Routes>
            <Route
              path="/messages/:chatId"
              element={
                <RequireAuth redirectTo="/signin">
                  <Modal
                    isOpen
                    onDismiss={() => navigate(-1)}
                    headerVisible={false}
                  >
                    <Chat key={location.pathname} />
                  </Modal>
                </RequireAuth>
              }
            />
          </Routes>
        )}
      {!isWidthGreaterThan640 &&
        !matchPath('/settings', location.pathname) &&
        !matchPath('/settings/profile', location.pathname) &&
        matchPath('/settings/*', location.pathname) && (
          <Routes>
            <Route
              path="/settings/account"
              element={
                <RequireAuth redirectTo="/signin">
                  <Modal
                    isOpen
                    onDismiss={() => navigate(-1)}
                    headerVisible={false}
                  >
                    <AccountInfo />
                  </Modal>
                </RequireAuth>
              }
            />

            <Route
              path="/settings/username"
              element={
                <RequireAuth redirectTo="/signin">
                  <Modal
                    isOpen
                    onDismiss={() => navigate(-1)}
                    headerVisible={false}
                  >
                    <ChangeUserName />
                  </Modal>
                </RequireAuth>
              }
            />

            <Route
              path="/settings/birthdate"
              element={
                <RequireAuth redirectTo="/signin">
                  <Modal
                    isOpen
                    onDismiss={() => navigate(-1)}
                    headerVisible={false}
                  >
                    <ChangeBirthDate />
                  </Modal>
                </RequireAuth>
              }
            />
            <Route
              path="/settings/display"
              element={
                <RequireAuth redirectTo="/signin">
                  <Modal
                    isOpen
                    onDismiss={() => navigate(-1)}
                    headerVisible={false}
                  >
                    <Display />
                  </Modal>
                </RequireAuth>
              }
            />
          </Routes>
        )}
    </div>
  );
};

const RequireAuth = ({ children, redirectTo }) => {
  const { isAuthenticated, status } = useAuth();
  const location = useLocation();

  if (status === STATUS.PENDING) return <SplashScreen />;

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
};

const RedirectIfLoggedIn = ({ children, redirectTo }) => {
  const { isAuthenticated, status } = useAuth();
  const location = useLocation();

  if (status === STATUS.PENDING) return <SplashScreen />;

  return isAuthenticated ? (
    <Navigate to={location.state?.from?.pathname || redirectTo} />
  ) : (
    children
  );
};

RequireAuth.propTypes = {
  children: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

RedirectIfLoggedIn.propTypes = {
  children: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default App;
