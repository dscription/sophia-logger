import { useState } from "react";
import styled from "styled-components";
import { Button, Text } from "../../atoms";
import DrawerHandle from "../DrawerHandle/DrawerHandle";
import * as curiosityAPI from "../../services/curiosityService";

const Drawer = ({ user }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [curiosity, setCuriosity] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    curiosityAPI.create(user._id, curiosity).then((curr) => console.log(curr));
    console.log("submitting");
  };

  const handleToggleDrawer = () => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
  };

  return (
    <DrawerContainer isOpen={isDrawerOpen}>
      <DrawerHandle toggleDrawer={handleToggleDrawer} />
      <DrawerBody isOpen={isDrawerOpen}>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="curiosity">Tell me what you are curious about:</label>
          <TextArea
            id="curiosity"
            name="curiosity"
            placeholder="I want to learn about..."
            value={curiosity}
            onChange={(event) => setCuriosity(event.target.value)}
          />
          <Button size="small" style={{ marginLeft: "auto" }} type="submit">
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
  ${({ isOpen }) => (isOpen ? " " : "height: 35px")};
`;

const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  ${({ isOpen }) => (isOpen ? " " : "display: none")};
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
