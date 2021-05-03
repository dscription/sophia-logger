import styled from 'styled-components';
import User_Icon from '../../assets/icons/User.png';
import Squares_Icon from '../../assets/icons/Squares.png';
import { Icon } from '../../atoms';

const NavFooter = () => {
  return (
    <Nav>
      <Icon></Icon>
      {/* // todo: Add route to User Home */}
      <a href="">
        <Icon src={Squares_Icon} alt="Home Icon Button" />
      </a>
      {/* // todo: Add route to User Profile / Logout. */}
      <a href="">
        <Icon src={User_Icon} alt=" User Icon Button" />
      </a>
    </Nav>
  );
};

export default NavFooter;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  border: 3px solid black;
  background: ${(props) => props.theme.colors.navBg};
  position: fixed;
  bottom: 0;
`;
