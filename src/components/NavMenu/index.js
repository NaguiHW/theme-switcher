/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Container, Title, Subtitle, LeftSide, RightSide, Switch, Input, Slider,
} from './style';

const NavMenu = () => (
  <Container>
    <LeftSide>
      <Title>Social Media Dashboard</Title>
      <Subtitle>Total Followers: 23,004</Subtitle>
    </LeftSide>
    <RightSide>
      <Subtitle>Dark Mode</Subtitle>
      <Switch>
        <Input type="checkbox" checked />
        <Slider />
      </Switch>
    </RightSide>
  </Container>
);

export default NavMenu;
