import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Fab from '../components/Fab';
import PageHeader from '../components/PageHeader';

import usePageTitle from '../hooks/usePageTitle';
import useScrollToTop from '../hooks/useScrollToTop';

import Roles from '../components/Roles/Roles';

const Home = () => {
  useScrollToTop();
  const { setPageTitle } = usePageTitle('首页 / 猿星球');
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = useCallback(() => {
    setModalOpen(true);
    navigate('/signin', {
      state: {
        backgroundLocation: location,
      },
      replace: true,
    });
  }, [location, navigate]);

  useEffect(() => {
    if (location.pathname === '/home') {
      setModalOpen(false);
      setPageTitle('首页 / 猿星球');
    }
  }, [location.pathname, setPageTitle]);

  useEffect(() => {
    if (location.state?.from?.pathname === '/signin') {
      openModal();
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
      <Roles />
      <div className="fixed right-10 bottom-20 z-50">
        <Fab label="发布" onClick={openModal} />
      </div>
    </div>
  );
};

export default Home;
