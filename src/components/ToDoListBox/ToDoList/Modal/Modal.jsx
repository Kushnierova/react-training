import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.blackdrop} onClick={handleBackdropClick}>
      <div className={css.content}>{children}</div>
    </div>,
    modalRoot
  );
}

// class OldModal extends Component {
//   componentDidMount() {
//     console.log('Modal componentDidMount (монтується)');

//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     console.log('Modal componentWillUnmount (розмонтовується');

//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     // console.log(e.code)
//     if (e.code === 'Escape') {
//       // console.log('click Escape');
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     // console.log('Click on backdrop');

//     // console.log(e.currentTarget);
//     // console.log(e.target);
//     // Закриття спрацьовує і при кліці на саме модальне вікно,
//     //  для того щоб таого не сталось e.currentTarget має бути === e.target

//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className={css.blackdrop} onClick={this.handleBackdropClick}>
//         <div className={css.content}>{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }

export default Modal;
