import { useState } from 'react';

const useSelectedRoleId = () => {
  const [selectedRoleId, setSelectedRoleId] = useState('');

  return [selectedRoleId, setSelectedRoleId];
};

export default useSelectedRoleId;
