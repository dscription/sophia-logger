import styled from 'styled-components';

export const Button = styled.button`
  /* Default button, full width, main color, 10px top-bottom margin */
  height: 36px;
  margin: 5px;/
  padding: 5px;
  color: ${(props) => props.theme.colors.lightText};
  background: ${(props) => props.theme.colors.success};
  border: ${(props) =>
    props.variant === 'outlined'
      ? `1px solid ${props.theme.colors[props.color]}`
      : 'none'};
  border-radius: 4px;

  /* button variants handled by helper function */
  ${(props) => handleButtonSize(props)}
  ${(props) => handleBackgroundColor(props)}
  ${(props) => handleCentered(props)}
`;

const handleButtonSize = (props) => {
  switch (props.size) {
    case 'large':
      return 'width: 200px;';
    case 'medium':
      return 'width: 150px;';
    case 'small':
      return 'width: 80px;';
    default:
      return;
  }
};

const handleCentered = (props) => {
  return props.centered ? 'margin:10px auto' : '';
};

const handleBackgroundColor = (props) => {
  return props.variant && props.variant === "outlined" && !props.disabled 
    ? `background: ${props.theme.colors[props.color] + '60'}`
    : props.disabled
    ? `background: ${props.theme.colors.info}`
    : `background: ${props.theme.colors[props.color]}`;
};
