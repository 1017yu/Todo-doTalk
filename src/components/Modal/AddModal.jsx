import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TodoItemCreator from "~/src/components/Todo/TodoItemCreator";
import AddIcon from "@mui/icons-material/Add";
import colors from "~/src/styles/colors.js";

const AddModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledButton onClick={handleOpen}>
        <StyledAddIcon />
      </StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          {/* `onClose` props로 `handleClose()` 전달 */}
          <TodoItemCreator onClose={handleClose} />
        </StyledBox>
      </Modal>
    </>
  );
};

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const StyledButton = styled(Button)`
  height: 60px;
  border-radius: 90%;
  background-color: ${colors.blue[4]};
`;

const StyledAddIcon = styled(AddIcon)`
  font-size: 2rem;
  color: white;
`;

export default AddModal;
