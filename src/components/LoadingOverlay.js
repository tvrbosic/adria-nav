import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';

import styles from './LoadingOverlay.module.css';

const Backdrop = (props) => {
  return <div className={styles.Backdrop} onClick={props.onClose}></div>;
};

const LoadingSpinner = (props) => {
  return (
    <Container
      fluid
      className={`${styles.LoadingSpinner} d-flex flex-column align-items-center justify-content-center vh-100 fixed-top`}>
      {props.children}
    </Container>
  );
};

const portalElement = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <LoadingSpinner>{props.children}</LoadingSpinner>,
        portalElement
      )}
    </>
  );
};

export default Modal;
