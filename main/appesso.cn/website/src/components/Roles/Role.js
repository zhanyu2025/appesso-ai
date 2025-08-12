import PropTypes from 'prop-types';

import RadioButton from '../RadioButton';
import { useTheme } from '../../contexts/theme-context';

const Role = ({ role, onSelect, isSelected }) => {
  const { primaryColor, theme } = useTheme();
  return (
    <div
      key={role.id}
      className="flex flex-1 py-5 rounded-xl px-3 gap-5 items-center justify-between cursor-pointer"
      role="button"
      tabIndex={0}
      style={{
        backgroundColor: theme.bgColor,
        color: theme.fgColor,
        border: `2px solid ${isSelected ? primaryColor.color : 'white'}`,
      }}
      onClick={() => onSelect(role.id)}
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
            borderColor={isSelected ? 'transparent' : `${theme.fgColor}4d`}
            radioBtnChangeHandler={() => onSelect(role.id)}
          />
        </div>
        <p className="text-xs text-black/20 dark:text-white/25">
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
  isSelected: PropTypes.bool,
};

Role.defaultProps = {
  isSelected: false,
  onSelect: (id) => {},
};
export default Role;
