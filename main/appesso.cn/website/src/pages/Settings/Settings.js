/* eslint-disable react/jsx-no-constructed-context-values */
import { Outlet, NavLink } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

import usePageTitle from '../../hooks/usePageTitle';

import PageHeader from '../../components/PageHeader';

const Settings = () => {
  usePageTitle('设置 / 猿星球');
  return (
    <div className="flex min-h-full">
      <div className="flex-1 border-r border-on-surface/20 min-h-full">
        <div>
          <PageHeader title="设置" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="account">
                {({ isActive }) => (
                  <div
                    className={`flex justify-between py-3 px-4 ${
                      isActive && 'bg-on-surface/10'
                    }`}
                  >
                    <p className="text-on-surface">账户信息</p>
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
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="display">
                {({ isActive }) => (
                  <div
                    className={`flex justify-between py-3 px-4 ${
                      isActive && 'bg-on-surface/10'
                    }`}
                  >
                    <p>显示</p>
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
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 empty:hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
