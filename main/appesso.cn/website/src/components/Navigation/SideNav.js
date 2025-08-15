/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useMutation, useQueryClient } from 'react-query';
import {
  RiShareLine,
  RiHome7Line,
  RiHome7Fill,
  RiSearchLine,
  RiSearchFill,
  RiMailLine,
  RiMailFill,
  RiNotificationLine,
  RiNotificationFill,
  RiUserLine,
  RiUserFill,
  RiSettingsLine,
  RiSettingsFill,
} from 'react-icons/ri';
import toast from 'react-hot-toast';

import { useAuth } from '../../contexts/auth-context';

import DropDown from './DropDown/DropDown';
import DropDownItem from './DropDown/DropDownItem';

import axios from '../../utils/axios';

const SideNav = () => {
  const [, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { user, logout } = useAuth();

  const logoutMutation = useMutation(
    () => {
      return axios.post('/api/auth/logout');
    },
    {
      onSuccess: () => {
        logout();
        toast.dismiss();
        queryClient.removeQueries();
        navigate('/');
      },
    }
  );

  const openModal = () => {
    setModalOpen(true);
    navigate('/compose/post', {
      state: {
        backgroundLocation: location,
      },
      replace: true,
    });
  };

  const handleDropDownOpen = (evt) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleDropDownClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="px-4 py-6 border-r border-on-surface/20 min-h-full flex flex-col justify-between sm:items-center lg:items-stretch">
      <div>
        <div className="text-primary px-4 mb-3">
          <IconContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
              size: '36px',
              color: 'inherit',
            }}
          >
            <RiShareLine />
          </IconContext.Provider>
        </div>
        <nav className="navigation sm:flex sm:flex-col sm:items-center lg:block">
          <ul>
            <li className="text-on-surface mb-3">
              <NavLink to="/home" aria-label="Home">
                {({ isActive }) => (
                  <div
                    className={`flex items-center gap-3 rounded-3xl px-4 py-2 w-fit ${
                      isActive && 'bg-on-surface/10'
                    }`}
                  >
                    <span>
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
                    </span>
                    <span
                      className={`text-xl ${
                        isActive && 'font-semibold'
                      } sm:hidden lg:inline`}
                    >
                      首页
                    </span>
                  </div>
                )}
              </NavLink>
            </li>
            <li className="text-on-surface mb-3">
              <NavLink to="/search" aria-label="Search">
                {({ isActive }) => (
                  <div
                    className={`flex items-center gap-3 rounded-3xl px-4 py-2 w-fit ${
                      isActive && 'bg-on-surface/10'
                    }`}
                  >
                    <span>
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
                    </span>
                    <span
                      className={`text-xl ${
                        isActive && 'font-semibold'
                      } sm:hidden lg:inline`}
                    >
                      搜索
                    </span>
                  </div>
                )}
              </NavLink>
            </li>
            <li className="text-on-surface mb-3">
              <NavLink to="/messages" aria-label="Messages">
                {({ isActive }) => (
                  <div
                    className={`flex items-center gap-3 rounded-3xl px-4 py-2 w-fit ${
                      isActive && 'bg-on-surface/10'
                    }`}
                  >
                    <span>
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
                    </span>
                    <span
                      className={`text-xl ${
                        isActive && 'font-semibold'
                      } sm:hidden lg:inline`}
                    >
                      消息
                    </span>
                  </div>
                )}
              </NavLink>
            </li>
            <li className="text-on-surface mb-3">
              <NavLink to={`/${user.username}`} aria-label="Profile">
                {({ isActive }) => (
                  <div
                    className={`flex items-center gap-3 rounded-3xl px-4 py-2 w-fit ${
                      isActive && 'bg-on-surface/10'
                    }`}
                  >
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
                    <span
                      className={`text-xl ${
                        isActive && 'font-semibold'
                      } sm:hidden lg:inline`}
                    >
                      个人资料
                    </span>
                  </div>
                )}
              </NavLink>
            </li>
            <li className="text-on-surface mb-3 relative">
              <NavLink to="/settings" aria-label="Settings">
                {({ isActive }) => (
                  <div
                    className={`flex items-center gap-3 rounded-3xl px-4 py-2 w-fit ${
                      isActive && 'bg-on-surface/10'
                    }`}
                  >
                    <span>
                      <IconContext.Provider
                        value={{
                          size: '24px',
                          style: {
                            color: 'inherit',
                          },
                        }}
                      >
                        {isActive ? <RiSettingsFill /> : <RiSettingsLine />}
                      </IconContext.Provider>
                    </span>
                    <span
                      className={`text-xl ${
                        isActive && 'font-semibold'
                      } sm:hidden lg:inline`}
                    >
                      设置
                    </span>
                  </div>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-2 relative">
        <div
          className="h-10 w-10 overflow-hidden"
          onClick={handleDropDownOpen}
          onKeyDown={handleDropDownOpen}
          role="button"
          tabIndex={0}
        >
          <img
            className="h-full w-full rounded-full object-cover"
            src={user.username}
            alt="avatar"
          />
        </div>
        <div className="flex justify-between flex-1 items-center sm:hidden lg:flex">
          <div>
            <p className="font-semibold">{user.username}</p>
            <p className="text-sm text-on-surface/70 -mt-1">@{user.username}</p>
          </div>
          <button
            type="button"
            onClick={handleDropDownOpen}
            className="font-bold"
          >
            ...
          </button>
        </div>
        <DropDown
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleDropDownClose}
        >
          <DropDownItem onClose={handleDropDownClose}>
            <Link to={`/${user.username}`}>
              <div className="flex gap-2 relative px-4 py-4 border-b border-on-surface/20">
                <div className="h-10 w-10 overflow-hidden">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src={user?.avatar ?? '/avatars/default.webp'}
                    alt="avatar"
                  />
                </div>
                <div className="flex justify-between flex-1 items-center">
                  <div>
                    <p className="font-semibold">{user.username}</p>
                    <p className="text-sm text-on-surface/70 -mt-1">
                      @{user.username}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </DropDownItem>
          <DropDownItem onClose={handleDropDownClose}>
            <button
              type="button"
              className="px-4 py-3 w-full text-left"
              onClick={() => logoutMutation.mutate()}
            >
              退出登录 @{user.username}
            </button>
          </DropDownItem>
        </DropDown>
      </div>
    </div>
  );
};

export default SideNav;
