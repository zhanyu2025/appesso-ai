/* eslint-disable react/jsx-no-constructed-context-values */
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { RiChat1Line, RiHeartFill, RiShareLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useTheme } from '../../contexts/theme-context';

const FeaturedUser = ({ user, devices, onSelect, selectedUserId }) => {
  const { primaryColor, theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const isSelected =
    user.id === selectedUserId ||
    devices?.some((device) => device.chat_user_id === user.id);
  // eslint-disable-next-line no-nested-ternary
  const backgroundColor = isSelected
    ? `${primaryColor.color}20`
    : isHovered
    ? `${primaryColor.color}10`
    : theme.bgColor;
  // eslint-disable-next-line no-nested-ternary
  const borderColor = isSelected
    ? `1px solid ${primaryColor.color}`
    : isHovered
    ? `1px solid ${primaryColor.color}`
    : '1px solid rgba(231, 233, 234)';
  return (
    <div
      className="flex flex-col flex-1 py-5 rounded-xl px-3 gap-5 items-center justify-between cursor-pointer disabled:cursor-not-allowed"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor,
        color: theme.fgColor,
        border: borderColor,
      }}
    >
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Link to={`/${user.username}`}>
            <div className="flex gap-2 relative">
              <div className="h-10 w-10 overflow-hidden">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={user.profile.img || '/avatars/default.webp'}
                  alt="avatar"
                />
              </div>
              <div className="flex justify-between flex-1 items-center">
                <div>
                  <p className="font-semibold">{user.profile.name}</p>
                  <p className="text-sm text-on-surface/70 -mt-1">
                    @{user.username}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {isSelected ? (
            <svg
              viewBox="0 0 22 22"
              aria-label="认证账号"
              role="img"
              className="w-5 h-5"
            >
              <g>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="12-b"
                  x1="5.355"
                  x2="16.361"
                  y1="3.395"
                  y2="19.133"
                >
                  <stop offset="0" stopColor="#f9e87f" />
                  <stop offset=".406" stopColor="#e2b719" />
                  <stop offset=".989" stopColor="#e2b719" />
                </linearGradient>
                <g clipRule="evenodd" fillRule="evenodd">
                  <path
                    d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                    fill="url(#12-a)"
                  />
                  <path
                    d="M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                    fill="url(#12-b)"
                  />
                  <path
                    d="M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z"
                    fill="#d18800"
                  />
                </g>
              </g>
            </svg>
          ) : (
            <button
              type="button"
              disabled={isSelected}
              onClick={() => onSelect(user.id)}
            >
              跟Ta聊天
            </button>
          )}
        </div>
        <p className="text-sm text-on-surface/70 text-pretty line-clamp-3">
          {user.profile.bio}
        </p>
      </div>
      <div className="w-full flex justify-between text-on-surface/50">
        <div className="flex items-center gap-2">
          <button type="button" className="cursor-pointer">
            <IconContext.Provider
              value={{
                size: '24px',
                style: {
                  color: 'inherit',
                },
              }}
            >
              <RiChat1Line />
            </IconContext.Provider>
          </button>
          <span className="text-on-surface/70 text-xs">10</span>
        </div>
        <div className="flex items-center gap-2">
          <button type="button">
            <IconContext.Provider
              value={{
                size: '24px',
                style: {
                  color: 'inherit',
                },
              }}
            >
              <RiHeartFill />
            </IconContext.Provider>
          </button>
          <span className="text-on-surface/70 text-xs">5</span>
        </div>
        <div>
          <IconContext.Provider
            value={{
              size: '24px',
              style: {
                color: 'inherit',
              },
            }}
          >
            <RiShareLine />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

FeaturedUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    profile: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      bio: PropTypes.string,
      dob: PropTypes.string,
    }),
  }).isRequired,
  selectedUserId: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      agent_id: PropTypes.string,
      alias: PropTypes.string,
      board: PropTypes.string,
      user_id: PropTypes.string,
      owner_id: PropTypes.string,
      chat_user_id: PropTypes.string,
      create_date: PropTypes.string,
    })
  ).isRequired,
};

FeaturedUser.defaultProps = {
  onSelect: () => {},
};

export default FeaturedUser;
