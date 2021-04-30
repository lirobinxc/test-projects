import React from 'react';
import styled from 'styled-components';
import globalTheme from '../utilities/globalTheme';
import PropTypes from 'prop-types';

/* ======= COMPONENT ======= */
const StyledBanner = styled.div`
  margin: 0;
  text-align: center;
  font-size: 2rem;
  p {
    margin: 0;
  }
  h2 {
    margin: 0;
    font-weight: bold;
    color: ${globalTheme.back2};
  }
`;

/* ======= COMPONENT ======= */
const Banner = ({ text, player }) => {
  return (
    <StyledBanner>
      <p>{text}</p>
      <h2>{player}</h2>
    </StyledBanner>
  );
};

export default Banner;

/* ======= PROPTYPES ======= */
Banner.propTypes = {
  player: PropTypes.string,
};
