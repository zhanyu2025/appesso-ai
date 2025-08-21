import { useState } from 'react';

const useSelectedUserId = () => {
  const [selectedUserId, setSelectedUserId] = useState('');

  return [selectedUserId, setSelectedUserId];
};

export default useSelectedUserId;
