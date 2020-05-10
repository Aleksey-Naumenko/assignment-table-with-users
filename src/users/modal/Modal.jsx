import React from "react";
import { connect } from "react-redux";
import { userDetailsSelector, modalOpenSelector } from "../users.selectors";
import Order from "./Order";
import * as usersActions from "../users.actions";
import "./modal.scss";

const Modal = ({ userDetails, onModalOpen, isModalOpen }) => {
  if (!isModalOpen) return null;

  return (
    <div className="modal-container" onClick={() => onModalOpen()}>
      <table className="modal users-table">
        <thead className="users-table__header">
          <tr>
            <th>ID замовлення</th>
            <th>Ціна</th>
            <th>Валюта</th>
            <th>Спосіб оплати</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody className="users-table__body">
          <Order {...userDetails} />
        </tbody>
      </table>
    </div>
  );
};

const mapState = (state) => {
  return {
    userDetails: userDetailsSelector(state),
    isModalOpen: modalOpenSelector(state),
  };
};

const mapDispatch = {
  onModalOpen: usersActions.changeModalState,
};

export default connect(mapState, mapDispatch)(Modal);
