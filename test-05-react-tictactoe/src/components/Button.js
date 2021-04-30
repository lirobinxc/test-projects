import React from 'react';
import styled from 'styled-components';
import globalTheme from '../utilities/globalTheme';
import PropTypes from 'prop-types';

/* ======= COMPONENT ======= */
const StyledButton = styled.button`
  background: ${globalTheme.font1};
  border: none;
  font-size: 2rem;
  margin: 20px;
`;

/* ======= COMPONENT ======= */
const Button = ({ name, handleClick }) => {
  return <StyledButton onClick={handleClick}>{name}</StyledButton>;
};

export default Button;

/* ======= PROPTYPES ======= */
Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
