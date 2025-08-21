/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { RiCalendar2Line, RiLinksLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

import Spinner from '../components/Spinner';
import NoMatch from './NoMatch';

import useUser from '../hooks/useUser';
import useScrollToTop from '../hooks/useScrollToTop';
import usePageTitle from '../hooks/usePageTitle';

import { useAuth } from '../contexts/auth-context';

const UserProfile = () => {
  useScrollToTop();
  const { username } = useParams();
  const { isAuthenticated, user: authUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { setPageTitle } = usePageTitle();

  const userData = useUser(username);

  const { user } = userData.data || {};

  useEffect(() => {
    if (user?.username) {
      setPageTitle(`${user.profile.name} (@${user.username})`);
    }
  }, [user, setPageTitle]);

  const openModal = useCallback(() => {
    navigate('/settings/profile', {
      state: {
        backgroundLocation: location,
      },
      replace: true,
    });
  }, [location, navigate]);

  useEffect(() => {
    if (location.state?.from?.pathname === '/settings/profile') {
      openModal();
    }
  }, [openModal, location.state?.from?.pathname]);

  if (userData.isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (userData.isError) return <NoMatch />;

  return (
    <div>
      <div className="bg-gray-500 h-24" />
      <div className="px-3">
        <div className="flex justify-between mt-2">
          <div className="w-24 h-24 rounded-full overflow-hidden -mt-14">
            <img
              src={user.profile?.img || '/avatars/default.webp'}
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          {isAuthenticated && user.sys_user_id === authUser.id && (
            <div>
              <button
                type="button"
                className="text-on-surface font-semibold border-2 border-on-surface/40 rounded-full py-1 px-3"
                onClick={openModal}
              >
                编辑个人资料
              </button>
            </div>
          )}
        </div>
        <div className="mt-5">
          <h2 className="text-on-surface text-lg font-bold">
            {user.profile.name}
          </h2>
          <h5 className="text-on-surface/75 text-sm -mt-1">@{user.username}</h5>
        </div>
        <div className="my-4">
          <p className="text-on-surface/95">{user.profile.bio}</p>
        </div>
        <div className="my-4 flex gap-2 flex-col sm:flex-row">
          {user.profile.website && (
            <div className="flex gap-1 items-center">
              <span className="text-on-surface/75">
                <IconContext.Provider
                  value={{
                    size: '18px',
                    style: {
                      color: 'inherit',
                    },
                  }}
                >
                  <RiLinksLine />
                </IconContext.Provider>
              </span>
              <span>
                <a
                  href={`${
                    user.profile.website.startsWith('https://') ||
                    user.profile.website.startsWith('http://')
                      ? user.profile.website
                      : `//${user.profile.website}`
                  }`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  {user.profile.website}
                </a>
              </span>
            </div>
          )}
        </div>
        <div className="my-4 flex gap-2 flex-col sm:flex-row">
          <div className="text-on-surface/75 flex items-center gap-1">
            <span>
              <IconContext.Provider
                value={{
                  size: '18px',
                  style: {
                    color: 'inherit',
                  },
                }}
              >
                <RiCalendar2Line />
              </IconContext.Provider>
            </span>
            <span>
              加入于{' '}
              {new Date(user.create_at).toLocaleString('zh-CN', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
