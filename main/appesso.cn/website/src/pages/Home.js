import { useState, useEffect, useCallback, Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

import Fab from '../components/Fab';
import PageHeader from '../components/PageHeader';
import Role from '../components/Roles/Role';
import ComposePost from '../components/Posts/ComposePost';

import usePageTitle from '../hooks/usePageTitle';
import useScrollToTop from '../hooks/useScrollToTop';

import axios from '../utils/axios';

const Home = () => {
  useScrollToTop();
  const { setPageTitle } = usePageTitle('首页 / 猿星球');
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedRole, setSelectedRole] = useState(null);
  const { data, isLoading } = useQuery(['roles'], async () => {
    try {
      const response = await axios.get(`/api/roles`);
      return response.data;
    } catch (error) {
      return error;
    }
  });
  const openModal = useCallback(() => {
    setModalOpen(true);
    navigate('/sign-in', {
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
    if (location.state?.from?.pathname === '/sign-in') {
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
      <div className="mt-1 mb-14 pb-20 flex flex-col gap-6 mx-4">
        {data?.map((role) => {
          return (
            <Fragment key={role.id}>
              <Role
                role={role}
                key={role.id}
                isSelected={selectedRole === role.id}
                onSelect={(id) => setSelectedRole(id)}
              />
            </Fragment>
          );
        })}
      </div>
      <div className="fixed right-10 bottom-20 z-50">
        <Fab label="发布" onClick={openModal} />
      </div>
    </div>
  );
};

export default Home;
