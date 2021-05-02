import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* The Universal Selector */
*, /* All elements*/
   *::before, /* All ::before pseudo-elements */
   *::after { /* All ::after pseudo-elements */
    /* height & width will now include border & padding by default
       but can be over-ridden as needed */
    box-sizing: inherit;
   }



html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  };

// html {
//     min-height: 100%;

// }

#root {
    height: 100vh;
    margin: 0;
}
   

body {
    line-height: 1;
    margin: 0;
	padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
}

h1 {
  font-family: ${(props) => props.theme.fonts.fontName};
  font-size: ${(props) => props.theme.fonts.size.heading};
  color: ${(props) => props.theme.colors.heading};
}

h2 {
  font-family: ${(props) => props.theme.fonts.fontName};
  font-size: ${(props) => props.theme.fonts.size.subHeading};
  color: ${(props) => props.theme.colors.subheading};
}

p {
  font-family: ${(props) => props.theme.fonts.fontName};
  color: ${(props) => props.theme.colors.paragraph};
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyle;
