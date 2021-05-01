import styled from 'styled-components';

export const Text = styled.p`
  ${(props) => handleSize(props)}
`;

const handleSize = (props) => {
  switch (props.size) {
    case 'large':
      return `font-size: ${props.theme.fonts.size.large}`;
    case 'medium':
      return `font-size: ${props.theme.fonts.size.medium}`
    default:
      return `font-size: ${props.theme.fonts.size.paragraph}`;
  }
};
