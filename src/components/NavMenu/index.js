/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Title, Subtitle, LeftSide, RightSide, Switch, Input, Slider,
} from './style';

const NavMenu = ({
  handleChange, mainText, secondaryText, toggle, sliderColor,
}) => (
  <Container>
    <LeftSide>
      <Title mainText={mainText}>Social Media Dashboard</Title>
      <Subtitle secondaryText={secondaryText}>Total Followers: 23,004</Subtitle>
    </LeftSide>
    <RightSide>
      <Subtitle secondaryText={secondaryText}>Dark Mode</Subtitle>
      <Switch>
        <Input type="checkbox" onChange={handleChange} />
        <Slider toggle={toggle} sliderColor={sliderColor} />
      </Switch>
    </RightSide>
  </Container>
);

NavMenu.propTypes = {
  handleChange: PropTypes.func.isRequired,
  mainText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  toggle: PropTypes.string.isRequired,
  sliderColor: PropTypes.string.isRequired,
};

export default NavMenu;
