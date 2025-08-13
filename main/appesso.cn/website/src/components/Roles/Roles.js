import { useQuery, useMutation } from 'react-query';
import { Fragment } from 'react';

import axios from '../../utils/axios';
import Role from './Role';
import Spinner from '../Spinner';

const Roles = () => {
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
  const devicesQuery = useQuery(['devices'], async () => {
    try {
      const response = await axios.get(`/api/users/me/devices`);
      return response.data;
    } catch (error) {
      return error;
    }
  });
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
              devices={devicesQuery?.data ?? []}
              onSelect={(id) => selectRoleMutation.mutate({ id })}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Roles;
