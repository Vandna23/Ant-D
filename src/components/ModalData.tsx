import Modal from "react-modal";

interface Idata {
  show: boolean;
  hideModal: (value: boolean) => void;
}

const ModalData = ({ show, hideModal }: Idata) => {
  // if (!show) {
  //   return null;
  // }

  return (
    <Modal isOpen={show} className="modal">
      <div>
        <div>This is the Modal</div>

        <div>
          <button onClick={() => hideModal(false)}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalData;
