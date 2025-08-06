import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { RiRepeatLine } from 'react-icons/ri';

import Post from './Post';

import { useAuth } from '../../contexts/auth-context';

const Repost = ({ repost }) => {
  const { user } = useAuth();
  return (
    <div>
      <div className="flex items-center text-sm ml-4 sm:text-base">
        <span className="text-on-surface mr-1">
          <IconContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
              size: '14px',
              style: {
                color: 'inherit',
              },
            }}
          >
            <RiRepeatLine />
          </IconContext.Provider>
        </span>
        <span className="text-on-surface font-bold">{`${
          repost.userId === user.id ? '你' : `${repost.user.profile.name}`
        } 转发了`}</span>
      </div>
      <div>
        <Post post={repost.post} />
      </div>
    </div>
  );
};

Repost.propTypes = {
  repost: PropTypes.shape({
    userId: PropTypes.number,
    user: PropTypes.shape({
      username: PropTypes.string,
      profile: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
    post: PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string,
      user: PropTypes.shape({
        username: PropTypes.string,
        profile: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
      createdAt: PropTypes.string,
      replies: PropTypes.arrayOf(PropTypes.shape({})),
      likes: PropTypes.arrayOf(PropTypes.shape({})),
      reposts: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
};

export default Repost;
