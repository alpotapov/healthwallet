import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  primary:
    'btn rounded-xl text-lg font-extralight bg-cornflower-blue border-cornflower-blue',
  white:
    'btn rounded-xl text-lg font-extralight bg-white border-cornflower-blue',
  emerald: 'btn rounded-xl text-lg font-extralight bg-emerald border-emerald',
  black: 'btn rounded-xl text-lg font-extralight bg-black border-black',
  lettuce: 'btn rounded-lg text-base font-normal bg-lettuce border-0',
  violet: 'btn rounded-lg text-base font-normal bg-cornflower-blue border-0',
};

const PrimaryButton = ({
  onClick,
  disabled,
  children,
  className,
  icon,
  variation,
  isSubmit,
}) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`${className} ${buttonStyles[variation]}`}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="w-full flex flex-row justify-between items-center">
        {icon ? (
          <img src={icon} alt="Button Icon" className="flex-shrink w-6" />
        ) : null}
        <div className="flex-grow">{children}</div>
      </div>
    </button>
  );
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
  variation: PropTypes.oneOf([
    'primary',
    'white',
    'black',
    'emerald',
    'lettuce',
    'violet',
  ]),
  isSubmit: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  disabled: false,
  className: '',
  icon: undefined,
  variation: 'primary',
  isSubmit: false,
};

export default PrimaryButton;
