import React from 'react';
import PropTypes from 'prop-types';
import { SelectContainer, LabelTag, SelectTag } from './Select.styles';
import InputWrapper from '../../theme/inputs.styles';

const Select = ({ name, label, onBlur, options, placeholder }) => {
  return (
    <InputWrapper>
      <LabelTag htmlFor={name}>{label}</LabelTag>
      <SelectContainer>
        <SelectTag name={name} id={name} onBlur={onBlur}>
          <option value="" selected disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.label}
              className="select--option"
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </SelectTag>
      </SelectContainer>
    </InputWrapper>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onBlur: PropTypes.func.isRequired
};

export default Select;
