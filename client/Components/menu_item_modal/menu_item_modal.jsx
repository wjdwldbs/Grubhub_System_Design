import React from "react";
import ReactDom from "react-dom";

const MenuItemModal = ({ children, onClose, open }) =>
  open
    ? ReactDom.createPortal(
        <div className="modal">{children}</div>,
        document.body
      )
    : null;

export default MenuItemModal