import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useTheme } from '../../contexts/theme-context';

const Role = ({ role, devices, onSelect }) => {
  const { primaryColor, theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = !devices
    ? false
    : devices?.some((device) =>
        device?.roles?.some((item) => item.role_id === role.id)
      );
  return (
    <div
      key={role.id}
      className="flex flex-1 py-5 rounded-xl px-3 gap-5 items-center justify-between cursor-pointer disabled:cursor-not-allowed"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? `${primaryColor.color}20` : theme.bgColor,
        color: theme.fgColor,
        border: `1px solid ${
          isSelected || isHovered ? primaryColor.color : 'rgba(231, 233, 234)'
        }`,
      }}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Link to={`/${role.username}`}>
            <div className="flex gap-2 relative">
              <div className="h-10 w-10 overflow-hidden">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={role.profile.img ?? '/avatars/default.webp'}
                  alt="avatar"
                />
              </div>
              <div className="flex justify-between flex-1 items-center">
                <div>
                  <p className="font-semibold">{role.profile.name}</p>
                  <p className="text-sm text-on-surface/70 -mt-1">
                    @{role.username}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <p className="text-sm text-on-surface/70 text-pretty line-clamp-3">
          {role.profile.bio}
        </p>
      </div>
    </div>
  );
};

Role.propTypes = {
  role: PropTypes.shape({
    id: PropTypes.string,
    ai_role_id: PropTypes.string,
    username: PropTypes.string,
    profile: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      bio: PropTypes.string,
      dob: PropTypes.string,
    }),
  }).isRequired,
  onSelect: PropTypes.func,
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      agent_id: PropTypes.string,
      alias: PropTypes.string,
      board: PropTypes.string,
      user_id: PropTypes.string,
      create_date: PropTypes.string,
      roles: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          role_id: PropTypes.string,
          device_id: PropTypes.string,
          create_date: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

Role.defaultProps = {
  onSelect: () => {},
};

export default Role;
