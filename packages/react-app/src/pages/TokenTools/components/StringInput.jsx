/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const StringInput = ({ title, placeholder, register, disabled }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="form-control w-full">
        {title === '' ? (
          ''
        ) : (
          <label className="label">
            <span className="label-text text-lg text-dark-gray">{title}</span>
          </label>
        )}

        <input
          type="text"
          placeholder={placeholder}
          className="input w-full focus:ring-0 border rounded-xl border-gray p-0 px-3.5 text-dark-gray
          disabled:text-dark-gray disabled:border disabled:border-gray disabled:bg-white
          "
          {...register}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

StringInput.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.shape().isRequired,
  disabled: PropTypes.bool,
};

StringInput.defaultProps = {
  disabled: false,
};

export default StringInput;
