import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function PokemonDetails({ buttonLabel, pokemon }) {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Button color="danger" onClick={() => setModal(!modal)}>
        {buttonLabel}
      </Button>
      <Modal toggle={() => setModal(!modal)} isOpen={modal}>
        <ModalHeader toggle={() => setModal(!modal)} />
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal(!modal)}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={() => setModal(!modal)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
