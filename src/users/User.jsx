import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";

const User = ({
  userData,
  userNumber,
  page,
  usersPerPage,
  showDetails,
  onModalOpen,
}) => {
  const { name, from, lastMessageTime } = userData;
  const lastMessageDate = moment(lastMessageTime).format("DD-MM-YYYY");
  const lastMessageHours = moment(lastMessageTime).format("hh:mm:ss");

  const onShowDetails = () => {
    showDetails(userData.id);
    onModalOpen();
  };

  return (
    <tr>
      <td>{userNumber + usersPerPage * page}</td>
      <td>{name}</td>
      <td>{from}</td>
      <td>
        {lastMessageDate}
        {lastMessageHours}
      </td>
      <td>
        <button className="order-btn" onClick={() => onShowDetails()}>Замовлення</button>
      </td>
    </tr>
  );
};

const mapDispatch = {
  showDetails: usersActions.getUserDetails,
  onModalOpen: usersActions.changeModalState,
};

export default connect(null, mapDispatch)(User);
