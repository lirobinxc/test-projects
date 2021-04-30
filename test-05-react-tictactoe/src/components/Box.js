import React from 'react';
import styled from 'styled-components';
import globalTheme from '../utilities/globalTheme';
import PropTypes from 'prop-types';

/* ======= COMPONENT ======= */
const StyledBox = styled.div`
  @media (orientation: landscape) {
    font-size: 10vh;
    height: 15vh;
    width: 15vh;
  }
  @media (orientation: portrait) {
    font-size: 20vw;
    height: 20vw;
    width: 20vw;
  }

  background: ${globalTheme.back2};
  color: ${globalTheme.font2};
  border: 1px solid ${globalTheme.font2};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

/* ======= COMPONENT ======= */
const Box = ({ id, handleClick, value }) => {
  return (
    <StyledBox id={id} onClick={handleClick} value={value}>
      {value}
    </StyledBox>
  );
};

export default Box;

/* ======= PROPTYPES ======= */
Box.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.string,
};
