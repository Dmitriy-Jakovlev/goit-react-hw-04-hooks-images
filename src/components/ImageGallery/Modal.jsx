import PropTypes from "prop-types";
import { createPortal } from "react-dom";
//import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ srcImgs, tags, onClose }) {
  function handleKeyDown(event) {
    if (event.code === "Escape") {
      return onClose();
    }
  }

  return createPortal(
    <div
      className="Overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex="-1"
    >
      <div>
        <img src={srcImgs} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  srcImgs: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
