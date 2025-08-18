import PropTypes from 'prop-types';
import { useQuery, useMutation } from 'react-query';
import { Fragment } from 'react';

import axios from '../../utils/axios';
import Role from './Role';
import Spinner from '../Spinner';
import useSelectedRoleId from '../../hooks/useSelectedRoleId';
import { useAuth } from '../../contexts/auth-context';

const Roles = ({ handleModalOpen }) => {
  const [selectedRoleId, setSelectedRoleId] = useSelectedRoleId();
  const { isAuthenticated } = useAuth();
  const rolesQuery = useQuery(
    ['roles'],
    async () => {
      try {
        const response = await axios.get(`/api/roles`);
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
  const selectRoleMutation = useMutation(
    ({ id }) => {
      return axios.put(`/api/roles/${id}/device`);
    },
    {
      onSuccess: () => {
        rolesQuery.refetch();
        devicesQuery.refetch();
      },
    }
  );
  const handleRoleSelect = (id) => {
    if (!isAuthenticated) {
      handleModalOpen('/signin');
    }
    if (!devicesQuery.data) {
      return;
    }
    if (!devicesQuery?.data?.length) {
      handleModalOpen(`/device/activation?roleId=${id}`);
      return;
    }
    selectRoleMutation.mutate({ id });
  };
  if (rolesQuery?.isFetching)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (rolesQuery?.isError) return <div>出现了错误，请稍后再试。</div>;
  return (
    <div className="mt-1 mb-14 pb-20 flex flex-col gap-6 mx-4">
      {rolesQuery?.data.map((role) => {
        return (
          <Fragment key={role.id}>
            <Role
              role={role}
              key={role.id}
              selectedRoleId={selectedRoleId}
              devices={devicesQuery?.data ?? []}
              onSelect={handleRoleSelect}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

Roles.propTypes = {
  handleModalOpen: PropTypes.func.isRequired,
};

export default Roles;
