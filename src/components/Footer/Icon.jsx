import useHover from "../../hooks/useHover";
import PropTypes from "prop-types";

const Icon = ({ name, width, height, d}) => {

  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const iconColor = isHovered ? 'hsl(180, 66%, 49%)' : '#FFF';

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={ width } 
      height={ height }
      aria-label={ name }
      onMouseEnter={ handleMouseEnter }
      onMouseLeave= { handleMouseLeave }
    >
      <path fill={iconColor} d={ d }/>
    </svg>
  )
}
Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  d: PropTypes.string,
};

export default Icon;