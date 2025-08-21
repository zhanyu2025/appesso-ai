import PropTypes from 'prop-types';
import { useQuery, useMutation } from 'react-query';
import { Fragment } from 'react';

import axios from '../../utils/axios';
import FeaturedUser from './FeaturedUser';
import Spinner from '../Spinner';
import useSelectedUserId from '../../hooks/useSelectedUserId';
import { useAuth } from '../../contexts/auth-context';

const FeaturedUsers = ({ handleModalOpen }) => {
  const [selectedUserId, setSelectedUserId] = useSelectedUserId();
  const { isAuthenticated } = useAuth();
  const featuredUsersQuery = useQuery(
    ['featured-users'],
    async () => {
      try {
        const response = await axios.get(`/api/users/featured`);
        return response.data;
      } catch (error) {
        return error;
      }
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  const devicesQuery = useQuery(
    ['devices'],
    async () => {
      try {
        const response = await axios.get(`/api/users/me/devices`);
        return response.data;
      } catch (error) {
        return error;
      }
    },
    {
      enabled: isAuthenticated,
    }
  );
  const selectUserMutation = useMutation(
    ({ id }) => {
      return axios.put(`/api/users/me/devices/connected`, { chatUserId: id });
    },
    {
      onSuccess: () => {
        featuredUsersQuery.refetch();
        devicesQuery.refetch();
      },
    }
  );
  const handleUserSelect = (id) => {
    if (!isAuthenticated) {
      handleModalOpen('/signin');
    }
    if (!devicesQuery.data) {
      return;
    }
    if (!devicesQuery?.data?.length) {
      setSelectedUserId(id);
      handleModalOpen(`/device/activation?userId=${id}`);
      return;
    }
    selectUserMutation.mutate({ id });
  };
  if (featuredUsersQuery?.isFetching)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (featuredUsersQuery?.isError) return <div>出现了错误，请稍后再试。</div>;
  return (
    <div className="mt-1 mb-14 pb-20 flex flex-col gap-6 mx-4">
      {featuredUsersQuery?.data.map((user) => {
        return (
          <Fragment key={user.id}>
            <FeaturedUser
              user={user}
              key={user.id}
              selectedUserId={selectedUserId}
              devices={devicesQuery?.data ?? []}
              onSelect={handleUserSelect}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

FeaturedUsers.propTypes = {
  handleModalOpen: PropTypes.func.isRequired,
};

export default FeaturedUsers;
