/* eslint-disable react/jsx-no-constructed-context-values */
import { NavLink } from 'react-router-dom';
import {
  RiHome7Line,
  RiHome7Fill,
  RiSearchLine,
  RiSearchFill,
  RiUserLine,
  RiUserFill,
  RiMailLine,
  RiMailFill,
} from 'react-icons/ri';

import { IconContext } from 'react-icons';
import { useAuth } from '../../contexts/auth-context';

const BottomNav = () => {
  const { user } = useAuth();
  return (
    <div className="flex bg-surface justify-between items-center px-8 h-14 border-t border-on-surface/20">
      <div className="text-on-surface">
        <NavLink to="/home">
          {({ isActive }) => (
            <IconContext.Provider
              value={{
                size: '24px',
                style: {
                  color: 'inherit',
                },
              }}
            >
              {isActive ? <RiHome7Fill /> : <RiHome7Line />}
            </IconContext.Provider>
          )}
        </NavLink>
      </div>
      <div className="text-on-surface">
        <NavLink to="/search">
          {({ isActive }) => (
            <IconContext.Provider
              value={{
                size: '24px',
                style: {
                  color: 'inherit',
                },
              }}
            >
              {isActive ? <RiSearchFill /> : <RiSearchLine />}
            </IconContext.Provider>
          )}
        </NavLink>
      </div>
      <div className="text-on-surface">
        <NavLink to="/messages">
          {({ isActive }) => (
            <IconContext.Provider
              value={{
                size: '24px',
                style: {
                  color: 'inherit',
                },
              }}
            >
              {isActive ? <RiMailFill /> : <RiMailLine />}
            </IconContext.Provider>
          )}
        </NavLink>
      </div>
      <div className="text-on-surface">
        <NavLink to={`/${user.username}`} aria-label="Profile">
          {({ isActive }) => (
            <div className="relative">
              <span>
                <IconContext.Provider
                  value={{
                    size: '24px',
                    style: {
                      color: 'inherit',
                    },
                  }}
                >
                  {isActive ? <RiUserFill /> : <RiUserLine />}
                </IconContext.Provider>
              </span>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNav;
