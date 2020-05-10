import React from "react";
import PropTypes from 'prop-types';

const Order = ({ data, included }) => {
  if (!data && !included) return null;

  return (
    <>
      {data.links.orders.length === 0 && (
        <tr>
          <td>{"Замовлень немає"}</td>
        </tr>
      )}

      {data.links.orders.map((order, index) => {
        return (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{included.orders[index].price}</td>
            <td>{included.orders[index].currency}</td>
            <td>{included.orders[index].title}</td>
            <td>{included.orders[index].status}</td>
          </tr>
        );
      })}
    </>
  );
};

Order.propTypes = {
  data: PropTypes.shape({
    links: PropTypes.shape().isRequired,
  }),
  included: PropTypes.shape({
    orders: PropTypes.array.isRequired,
  }),
};

export default Order;