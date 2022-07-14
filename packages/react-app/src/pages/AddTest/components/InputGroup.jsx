/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const StringInput = ({ placeholder, register, disabled }) => {
  return (
    <div className="flex flex-col justify-center pt-6">
      <div className="form-control w-full">
        <input
          type="text"
          placeholder={placeholder}
          className="
          input w-full h-14 focus:ring-0 border border-white rounded-3xl text-sm font-bold text-lilac-dark bg-lilac-blond
          disabled:bg-lilac-blond disabled:text-lilac-dark
        "
          {...register}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

StringInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.shape().isRequired,
  disabled: PropTypes.bool,
};

StringInput.defaultProps = {
  disabled: false,
};

export default StringInput;
