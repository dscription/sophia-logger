import {
  // red_light,
  red_medium,
  // red_dark ,
  green_light,
  // green_medium ,
  // green_dark ,
  // blue_light ,
  blue_medium,
  // blue_dark ,
  // yellow_light ,
  // orange_light ,
  // orange_medium ,
  // orange_dark ,
  purple_light,
  // purple_medium ,
  // purple_dark ,
  gray_light,
  gray_medium,
  gray_dark ,
  white_bright,
  // white_off ,
  white_eggshell ,
  // black_light ,
  // black_medium ,
  black_dark,
  lato,
  white_off,
} from '../utilities';

export const prototype = {
  colors: {
    // ! General Colors
    danger: red_medium,
    accent: green_light,
    current: blue_medium,
    untouched: gray_medium,
    success: purple_light,
    info: gray_light,
    // ! Footer
    navBg: white_eggshell,
    // ! Header
    headerBg: white_eggshell,
    // ! Main Background
    mainBg: gray_dark,
    // ! Cards
    cardBg: white_eggshell,
    lightCardText: white_bright,
    cardText: black_dark,
    // ! Text
    paragraph: white_eggshell,
    heading: black_dark,
    subheading: white_eggshell,
    button: white_bright,
    label: white_eggshell,
    
    // ! Drawer
    handle: gray_medium,
    drawerBg: gray_dark,
  },
  fonts: {
    fontName: lato,
    size: {
      heading: '24px',
      subHeading: '18px',
      paragraph: '14px',
      info: '14px',
      large: '48px',
      medium: '24px',
    },
  },
};
