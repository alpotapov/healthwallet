import React from 'react';
import PropTypes from 'prop-types';

const CustomCheckbox = ({ value, setValue }) => {
  return (
    <div className="form-control h-full">
      <label className="label">
        <span className="label-text text-xs text-silver">Lock</span>
      </label>
      <label className="flex flex-col justify-center items-center flex-grow">
        <input
          type="checkbox"
          checked={value}
          className="checkbox"
          onChange={(event) => setValue(event.target.checked)}
        />
      </label>
    </div>
  );
};

CustomCheckbox.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default CustomCheckbox;
