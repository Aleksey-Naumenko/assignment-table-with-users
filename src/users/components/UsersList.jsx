import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as usersSelectors from "../users.selectors";
import User from "./User";
import Pagination from "./Pagination";
import * as usersActions from "../users.actions";
import Modal from "../modal/Modal";
import PropTypes from "prop-types";

const UsersList = ({ users, getUsers, isModalOpen }) => {
  const [page, setPage] = useState(0);
  const usersPerPage = 15;

  useEffect(() => {
    getUsers(usersPerPage, page * usersPerPage);
  }, []);

  const nextPageHandler = () => {
    setPage((page) => page + 1);
  };

  const prevPageHandler = () => {
    if (page === 0) return;
    setPage((page) => page - 1);
  };

  return (
    <>
      <table className="users-table">
        <caption className="users-table__title">Customers List</caption>
        <thead className="users-table__header">
          <tr>
            <th>#</th>
            <th>Ім'я</th>
            <th>Мессенджер</th>
            <th>Час останнього повідомлення</th>
            <th>Додаткова інформація</th>
          </tr>
        </thead>
        <tbody className="users-table__body">
          {users.map((user, index) => (
            <User
              key={user.id}
              userData={user}
              userNumber={index + 1}
              page={page}
              usersPerPage={usersPerPage}
            />
          ))}
        </tbody>
        <Pagination
          onNextPage={nextPageHandler}
          onPrevPage={prevPageHandler}
          page={page}
        />
      </table>
      {isModalOpen && <Modal />}
    </>
  );
};

const mapState = (state) => {
  return {
    users: usersSelectors.usersSelector(state),
    isModalOpen: usersSelectors.modalOpenSelector(state),
  };
};

const mapDispatch = {
  getUsers: usersActions.getUsersList,
};

UsersList.propTypes = {
  users: PropTypes.array,
  getUsers: PropTypes.func,
  isModalOpen: PropTypes.bool,
};

export default connect(mapState, mapDispatch)(UsersList);
