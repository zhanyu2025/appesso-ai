/* eslint-disable react/jsx-no-constructed-context-values */
import { useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

import dayjs from '../utils/day';

import useChat from '../hooks/useChat';

import Spinner from '../components/Spinner';

const Chat = () => {
  const { chatId } = useParams();
  const { data, isLoading, isError } = useChat(chatId);
  const messagesRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  }, [data, chatId]);

  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (isError) return <div>出现了错误，请稍后再试。</div>;

  return (
    <div className="flex flex-col justify-between sm:border-l sm:border-on-surface/20 min-h-full h-fit relative">
      <div className="px-4 py-2 sticky top-0 backdrop-blur-sm">
        <div className="flex justify-between items-center gap-3">
          <div>
            <button
              type="button"
              onClick={() => navigate('/messages')}
              className="text-on-surface"
            >
              <IconContext.Provider
                // eslint-disable-next-line react/jsx-no-constructed-context-values
                value={{
                  size: '18px',
                  style: {
                    color: 'inherit',
                  },
                }}
              >
                <RiArrowLeftLine />
              </IconContext.Provider>
            </button>
          </div>
          <div className="flex flex-1 items-center gap-2">
            <div className="h-6 w-6 overflow-hidden">
              <img
                className="h-full w-full rounded-full object-cover"
                src={data.user.profile.img ?? '/avatars/default.webp'}
                alt="avatar"
              />
            </div>
            <div>
              <h3 className="text-on-surface font-bold text-base">
                {data.user.profile.name}
              </h3>
              <h5 className="text-on-surface/70 text-xs">
                @{data.user.username}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        {data.messages.map((message) => {
          if (message.chat_type === 1) {
            return (
              <div
                className="flex flex-col items-end gap-1 mb-5"
                key={message.id}
              >
                <p className="bg-primary text-on-primary text-base p-3 rounded-t-xl rounded-bl-xl max-w-[80%] break-words">
                  {message.content}
                </p>
                <span className="text-on-surface/80 font-light text-xs">
                  {dayjs(message.created_at).format('YYYY年MMMD, hh:mm A')}
                </span>
              </div>
            );
          }
          return (
            <div
              className="flex flex-col items-start gap-1 mb-5"
              key={message.id}
            >
              <p className="bg-on-surface/30 text-on-surface text-base p-3 rounded-t-xl rounded-br-xl max-w-[80%] break-words">
                {message.content}
              </p>
              <span className="text-on-surface/80 font-light text-xs">
                {dayjs(message.created_at).format('YYYY年MMMD, hh:mm A')}
              </span>
            </div>
          );
        })}
      </div>
      <div ref={messagesRef} className="min-h-16" />
    </div>
  );
};

export default Chat;
