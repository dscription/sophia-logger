import { useState } from 'react';
import styled from 'styled-components';
import { Button, Text } from '../../atoms';
import DrawerHandle from '../DrawerHandle/DrawerHandle';

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitting');
  };

  const handleToggleDrawer = () => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
  };

  return (
    <DrawerContainer isOpen={isDrawerOpen}>
      <DrawerHandle toggleDrawer={handleToggleDrawer} />
      <DrawerBody isOpen={isDrawerOpen}>
        <Text size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit
          libero, interdum ac elit sed.
        </Text>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="curiosity">Tell me what you are curious about:</label>
          <TextArea
            id="curiosity"
            name="curiosity"
            placeholder="I want to learn about..."
          />
          <Button size="small" style={{ marginLeft: 'auto' }} type="submit">
            Submit
          </Button>
        </Form>
      </DrawerBody>
    </DrawerContainer>
  );
};

export default Drawer;

const DrawerContainer = styled.div`
  grid-area: drawer;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.colors.drawerBg};
  ${({ isOpen }) => (isOpen ? ' ' : 'height: 35px')};
`;

const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  ${({ isOpen }) => (isOpen ? ' ' : 'display: none')};
`;

// !. Consider a maximum number of characters?
const TextArea = styled.textarea`
  resize: none;
  margin: 5px 0px;
  border-radius: 5px;
  padding: 5px 5px;
  max-height: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;
