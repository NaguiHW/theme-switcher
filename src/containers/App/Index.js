import React, { useState } from 'react';
import { Container, Wrapper } from './style';
import NavMenu from '../../components/NavMenu';

const App = () => {
  const [colors, setColors] = useState({
    backgroundColor: 'hsl(232, 19%, 15%)',
    mainText: 'hsl(0, 0%, 100%)',
    secondaryText: 'hsl(228, 34%, 66%)',
    toggle: 'hsl(232, 19%, 15%)',
    sliderColor: 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
  });

  const changeHandler = () => {
    const { backgroundColor } = colors;
    if (backgroundColor === 'hsl(232, 19%, 15%)') {
      setColors({
        backgroundColor: 'hsl(225, 100%, 98%)',
        mainText: 'hsl(230, 17%, 14%)',
        secondaryText: 'hsl(228, 12%, 44%)',
        toggle: 'hsl(225, 100%, 98%)',
        sliderColor: 'hsl(228, 12%, 44%)',
      });
    } else {
      setColors({
        backgroundColor: 'hsl(232, 19%, 15%)',
        mainText: 'hsl(0, 0%, 100%)',
        secondaryText: 'hsl(228, 34%, 66%)',
        toggle: 'hsl(232, 19%, 15%)',
        sliderColor: 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
      });
    }
  };

  return (
    <Wrapper backgroundColor={colors.backgroundColor}>
      <Container>
        <NavMenu
          handleChange={changeHandler}
          mainText={colors.mainText}
          secondaryText={colors.secondaryText}
          toggle={colors.toggle}
          sliderColor={colors.sliderColor}
        />
      </Container>
    </Wrapper>
  );
};

export default App;
