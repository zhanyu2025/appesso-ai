import { useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import PageHeader from '../components/PageHeader';

import usePageTitle from '../hooks/usePageTitle';
import useScrollToTop from '../hooks/useScrollToTop';

import FeaturedUsers from '../components/Users/FeaturedUsers';

const Home = () => {
  useScrollToTop();
  const { setPageTitle } = usePageTitle('首页 / 猿星球');
  const navigate = useNavigate();
  const location = useLocation();
  // 派生状态，而不是维护一个独立的 state
  // 当 location.state 中有 backgroundLocation 时，说明模态框是打开的
  const modalOpen = !!location.state?.backgroundLocation;

  const openModal = useCallback(
    (path) => {
      navigate(path, {
        state: {
          backgroundLocation: location,
        },
        replace: true,
      });
    },
    [location, navigate]
  );

  useEffect(() => {
    if (location.pathname === '/home') {
      setPageTitle('首页 / 猿星球');
    }
  }, [location.pathname, setPageTitle]);

  useEffect(() => {
    if (location.state?.from?.pathname === '/signin') {
      openModal('/signin');
    }
    if (location.state?.from?.pathname === '/device/activation') {
      openModal('/device/activation');
    }
  }, [openModal, location.state?.from?.pathname]);

  return (
    <div
      className={`bg-background h-fit ${
        modalOpen ? 'pointer-events-none' : ''
      }`}
    >
      <div className="sticky top-0 left-0 w-full z-[100]">
        <PageHeader title="首页" />
      </div>
      <FeaturedUsers handleModalOpen={openModal} />
    </div>
  );
};

export default Home;
