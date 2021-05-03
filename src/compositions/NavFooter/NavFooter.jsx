import styled from 'styled-components';
import User_Icon from '../../assets/icons/User.png';
import Squares_Icon from '../../assets/icons/Squares.png';
import { Icon } from '../../atoms';

const NavFooter = () => {
  return (
    <Nav>
      <IconList>
        <Icon></Icon>
        {/* // todo: Add route to User Home */}
        <a href="/menu">
          <Icon src={Squares_Icon} alt="Menu Icon Button" />
        </a>
        {/* // todo: Add route to User Profile / Logout. */}
        <a href="">
          <Icon src={User_Icon} alt=" User Icon Button" />
        </a>
      </IconList>
    </Nav>
  );
};

export default NavFooter;

const IconList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
  align-items: center;
`;

const Nav = styled.nav`
  grid-area: footer;
  height: 60px;
  background: ${(props) => props.theme.colors.navBg};
  text-align: center;
`;
