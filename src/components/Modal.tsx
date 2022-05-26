interface Idata {
  show: boolean;
}
const Modal = ({ show }: Idata) => {
  if (!show) {
    return null;
  }
  return <div>Toggling the modal Modal</div>;
};

export default Modal;
