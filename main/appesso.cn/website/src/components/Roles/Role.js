import PropTypes from 'prop-types';

import RadioButton from '../RadioButton';
import { useTheme } from '../../contexts/theme-context';

const Role = ({ role, devices, onSelect }) => {
  const { primaryColor, theme } = useTheme();
  const isSelected = devices?.some((device) =>
    device?.roles?.some((item) => item.role_id === role.id)
  );
  return (
    <div
      key={role.id}
      className="flex flex-1 py-5 rounded-xl px-3 gap-5 items-center justify-between cursor-pointer disabled:cursor-not-allowed"
      role="button"
      tabIndex={0}
      style={{
        backgroundColor: theme.bgColor,
        color: theme.fgColor,
        border: `2px solid ${isSelected ? primaryColor.color : 'white'}`,
      }}
      onClick={() => (isSelected ? null : onSelect(role.id))}
      disabled={isSelected}
      onKeyDown={(e) => e.key !== 'Tab' && onSelect(role.id)}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="capitalize font-semibold">{role.name}</p>
          <RadioButton
            id={role.name}
            name="role"
            value={role.name}
            bgColor={isSelected ? primaryColor.color : 'transparent'}
            fgColor="#fff"
            selected={isSelected}
            size="20px"
            disabled={isSelected}
            borderColor={isSelected ? 'transparent' : `${theme.fgColor}4d`}
            radioBtnChangeHandler={() =>
              isSelected ? null : onSelect(role.id)
            }
          />
        </div>
        <p className="text-sm text-white/25 text-pretty line-clamp-3">
          {role.system_prompt}
        </p>
      </div>
    </div>
  );
};

Role.propTypes = {
  role: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    tts_model_id: PropTypes.string,
    tts_voice_id: PropTypes.string,
    system_prompt: PropTypes.string,
    create_date: PropTypes.string,
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
