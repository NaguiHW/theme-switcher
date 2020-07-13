import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 0 25px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${props => props.mainText};
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${props => props.secondaryText};
  font-weight: bold;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 22px;
  margin-left: 10px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span::before {
    -webkit-transform: translateX(22px);
    -ms-transform: translateX(22px);
    transform: translateX(22px);
  };
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${props => props.sliderColor};
  background-color: ${props => props.sliderColor};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 4px;
    bottom: 4px;
    background-color: ${props => props.toggle};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;
