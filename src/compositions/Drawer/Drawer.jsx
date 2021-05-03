import { useState } from 'react';
import styled from 'styled-components';
import DotDotDot from '../../assets/icons/Dot_Dot_Dot.png';
import { Button, Icon, Text } from '../../atoms';

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitting');
  };

  return (
    <DrawerContainer isOpen={isDrawerOpen}>
      <DrawerHandle onClick={() => setIsDrawerOpen(prevIsDrawerOpen => !prevIsDrawerOpen)} >
        <Icon src={DotDotDot} alt="Drawer Handle Icon, three dots." />
      </DrawerHandle>
      <DrawerBody>
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
  display: flex;
  flex-direction: column;
  width: 100%;
  /* //!. Ensure drawer height is the height of its content, not fixed. */
  /* height: 600px; */
  height: 0px;
  background: ${(props) => props.theme.colors.drawerBg};
  /* display: none; */
  visibility: hidden;
`;

const DrawerHandle = styled.div`
  height: 20px;
  width: 100%;
  background: ${(props) => props.theme.colors.handle};
  align-items: center;
  text-align: center;
  align-items: flex-start;
`;

const DrawerBody = styled.div`
  display: flex;
  /* height: auto; */
  flex-direction: column;
  padding: 10px 10px;
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
