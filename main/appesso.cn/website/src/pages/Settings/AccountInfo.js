/* eslint-disable react/jsx-no-constructed-context-values */
import { RiArrowLeftLine, RiArrowRightSLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import axios from '../../utils/axios';
import dayjs from '../../utils/day';

import usePageTitle from '../../hooks/usePageTitle';

import Spinner from '../../components/Spinner';

const AccountInfo = () => {
  usePageTitle('账户信息 / 猿星球');
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery(
    'account',
    async () => {
      const response = await axios.get('/api/users/me');
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (isError) return <div>出现了错误，请稍后再试。</div>;

  return (
    <div>
      <div className="px-4 py-4 sticky top-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/settings')}
            className="text-on-surface"
            title="back"
          >
            <IconContext.Provider
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
          <header>
            <h3 className="text-xl font-semibold">账户信息</h3>
          </header>
        </div>
      </div>
      <nav>
        <ul>
          <li className="pb-4">
            <NavLink to="/settings/username">
              <div className="flex justify-between items-center px-4">
                <div>
                  <p className="text-on-surface">用户名</p>
                  <p className="text-sm text-on-surface/70 -mt-1">
                    @{data.user.username}
                  </p>
                </div>
                <div className="text-on-surface/80">
                  <IconContext.Provider
                    value={{
                      size: '24px',
                      style: {
                        color: 'inherit',
                      },
                    }}
                  >
                    <RiArrowRightSLine />
                  </IconContext.Provider>
                </div>
              </div>
            </NavLink>
          </li>
          <li className="pb-4">
            <NavLink to="/settings/birthdate">
              <div className="flex justify-between items-center px-4">
                <div>
                  <p className="text-on-surface">出生日期</p>
                  <p className="text-sm text-on-surface/70 -mt-1">
                    {dayjs(data.user.profile.dob).format('YYYY年MMMD')}
                  </p>
                </div>
                <div className="text-on-surface/80">
                  <IconContext.Provider
                    value={{
                      size: '24px',
                      style: {
                        color: 'inherit',
                      },
                    }}
                  >
                    <RiArrowRightSLine />
                  </IconContext.Provider>
                </div>
              </div>
            </NavLink>
          </li>
          <li className="pb-4">
            <div className="flex justify-between items-center px-4">
              <div>
                <p className="text-on-surface">账户创建时间</p>
                <p className="text-sm text-on-surface/70 -mt-1">
                  {dayjs(data.user.createdAt).format('YYYY年MMMD, h:mm:ss A')}
                </p>
              </div>
            </div>
          </li>
          <li className="pb-4">
            <div className="px-4">
              <div>
                <p className="text-on-surface">年龄</p>
                <p className="text-sm text-on-surface/70 -mt-1">
                  {dayjs().diff(dayjs(data.user.profile.dob), 'year')}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AccountInfo;
