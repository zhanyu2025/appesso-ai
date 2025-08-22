import { NavLink, Outlet } from 'react-router-dom';
import { useQuery } from 'react-query';

import Spinner from '../components/Spinner';
import PageHeader from '../components/PageHeader';
import { useAuth } from '../contexts/auth-context';
import axios from '../utils/axios';
import usePageTitle from '../hooks/usePageTitle';

const Messages = () => {
  usePageTitle('消息 / 猿星球');
  const { isAuthenticated } = useAuth();
  const messagesQuery = useQuery(
    ['chats'],
    async () => {
      try {
        const response = await axios.get(`/api/chat/all`);
        return response.data;
      } catch (error) {
        return error;
      }
    },
    {
      enabled: !!isAuthenticated,
      refetchOnWindowFocus: false,
    }
  );

  if (messagesQuery?.isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  if (messagesQuery?.isError) return <div>出现了错误，请稍后再试。</div>;
  return (
    <div className="flex sm:h-full">
      <div className="static top-0 overflow-y-auto overflow-x-hidden h-[calc(100vh_-_56px)] flex-1 sm:h-full">
        <div className="sticky top-0 left-0 w-full">
          <PageHeader title="消息" />
        </div>
        <div className="flex flex-col mx-6">
          {messagesQuery?.data.map((message) => (
            <NavLink
              to={`${message.id}`}
              className={({ isActive }) =>
                isActive
                  ? 'flex px-4 py-2 items-center gap-1 bg-on-surface/10'
                  : 'flex px-4 py-2 items-center gap-1'
              }
              key={message.id}
            >
              <div className="h-10 w-10 overflow-hidden">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={message.user.profile.img ?? '/avatars/default.webp'}
                  alt="avatar"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div className="flex gap-1 items-center">
                    <h3 className="font-bold text-on-surface">
                      {message.user.profile.name}
                    </h3>
                    <span className="text-on-surface/70 font-semibold text-sm">
                      @{message.user.username}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-on-surface/80 font-medium empty:after:content-['']  empty:inline-block">
                    {message.content}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex-1 empty:hidden static top-0 overflow-y-auto overflow-x-hidden h-[calc(100vh_-_56px)] sm:h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Messages;
