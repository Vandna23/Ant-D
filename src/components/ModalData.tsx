import Modal from "react-modal";

interface Idata {
  isOpen: boolean;
  hideModal: (value: boolean) => void;
}

const ModalData = ({ isOpen, hideModal }: Idata) => {
  // if (!show) {
  //   return null;
  // }

  return (
    <Modal isOpen={isOpen} className="modal">
      <div>
        <div>This is the Modal</div>

        <div className="btn">
          <button onClick={() => hideModal(false)}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalData;
