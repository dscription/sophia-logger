import styled from 'styled-components';

export const Card = styled.section`
  /* Display height */
  ${(props) => handleHeight(props)}
  /* Display background or background-image */
  ${(props) => handleBackground(props)}
  /* border: 1px solid black; */
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0px;
  min-width: 40%;
  font-family: ${(props) => handleFontFamily(props)};
  font-size: ${(props) => handleFontSize(props)};
  color: ${(props) => handleFontColor(props)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


const handleHeight = (props) => {
  switch (props.variant) {
    case 'image':
      return `height: 150px;`;
    case 'info':
      return `min-height: 30px;`;
    default:
      return 'min-height: 60px;';
  }
}

const handleBackground = (props) => {
  switch (props.variant) {
    case 'image':
      return `background-image: url(${props.src}); background-size: cover; background-repeat: no-repeat;`;
    case 'info':
      return `background: ${props.theme.colors.info};`;
    default:
      return `background: ${props.theme.colors.cardBg}; `;
  }
};

const handleFontColor = (props) => {
  switch (props.variant) {
    case 'image':
      return '';
    case 'info':
      return `${props.theme.colors.lightCardText}`;
    default:
      return `${props.theme.colors.cardText}`;
  }
};

const handleFontSize = (props) => {
  switch (props.variant) {
    case 'image':
      return `${props.theme.fonts.size.info}`;
    case 'info':
      return `${props.theme.fonts.size.info}`;
    default:
      return `${props.theme.fonts.size.info}`;
  }
};

const handleFontFamily = (props) => {
  switch (props.variant) {
    case 'image':
      return `${props.theme.fonts.fontName}`;
    case 'info':
      return `${props.theme.fonts.fontName}`;
    default:
      return `${props.theme.fonts.fontName}`;
  }
};
