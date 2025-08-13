import { Outlet } from 'react-router-dom';
import { useQuery } from 'react-query';

import dayjs from '../utils/day';

import Spinner from '../components/Spinner';
import PageHeader from '../components/PageHeader';
import { useAuth } from '../contexts/auth-context';
import axios from '../utils/axios';
import usePageTitle from '../hooks/usePageTitle';

const Messages = () => {
  usePageTitle('消息 / 猿星球');
  const { isAuthenticated } = useAuth();
  const messagesQuery = useQuery(
    ['roles'],
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
          {messagesQuery?.data.chats?.map((chat) => {
            if (chat.chat_type === 1) {
              return (
                <div
                  className="flex flex-col items-end gap-1 mb-5"
                  key={chat.id}
                >
                  <p className="bg-primary text-on-primary text-base p-3 rounded-t-xl rounded-bl-xl max-w-[80%] break-words">
                    {chat.content}
                  </p>
                  <span className="text-on-surface/80 font-light text-xs">
                    {dayjs(chat.createdAt).format('MMM D, YYYY, hh:mm A')}
                  </span>
                </div>
              );
            }
            return (
              <div
                className="flex flex-col items-start gap-1 mb-5"
                key={chat.id}
              >
                <p className="bg-on-surface/30 text-on-surface text-base p-3 rounded-t-xl rounded-br-xl max-w-[80%] break-words">
                  {chat.content}
                </p>
                <span className="text-on-surface/80 font-light text-xs">
                  {dayjs(chat.createdAt).format('MMM D, YYYY, hh:mm A')}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 empty:hidden static top-0 overflow-y-auto overflow-x-hidden h-[calc(100vh_-_56px)] sm:h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Messages;
