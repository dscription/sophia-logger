import styled from 'styled-components';
import { Handle } from '../../atoms';
import DotDotDot from '../../assets/icons/Dot_Dot_Dot.png';
import { Icon } from '../../atoms';

const DrawerHandle = ({toggleDrawer}) => {

  return (
    <Handle onClick={toggleDrawer}>
      <Dots src={DotDotDot} alt="Drawer Handle Icon, three dots." />
    </Handle>
  );
};

export default DrawerHandle;

const Dots = styled(Icon)`
  height: 100%;
`;
