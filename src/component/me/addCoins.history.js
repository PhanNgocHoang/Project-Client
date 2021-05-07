import React, { useState, useEffect } from "react";
import { PaymentHistory } from "../../api/index";
import queryString from "query-string";
import moment from "moment";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Alert from "react-s-alert";
export const AddCoinsHistory = () => {
  const [history, setHistory] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 5,
    page: 1,
  });
  const getData = async () => {
    try {
      const paramsString = queryString.stringify(pagination);
      const response = await PaymentHistory(paramsString);
      setHistory(response.data.data);
    } catch (error) {
      if (error.response.data.message) {
        return Alert.error(
          `<div role="alert"><i class="fa fa-times-circle" aria-hidden="true"></i>
         ${error.response.data.message}</div>`,
          {
            html: true,
            position: "top-right",
            effect: "slide",
          }
        );
      };
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);
  const user = useSelector((state) => {
    return state.login.data;
  });
  if (!user._id) {
    return <Redirect to="/" />;
  }
  return (
    <div style={{ marginBottom: "20%" }}>
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width"> Coin deposit history</h1>
          </div>
        </div>
      </div>
      {/*End Page Title*/}
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
            <div className="table-content table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    <th className="product-price text-center alt-font">
                      Payment ID
                    </th>
                    <th className="product-name alt-font">Amount</th>
                    <th className="product-price text-center alt-font">
                      Currency
                    </th>
                    <th className="product-price text-center alt-font">
                      Payee Email
                    </th>
                    <th className="product-price text-center alt-font">
                      Payment At
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item) => (
                    <tr key={item._id}>
                      <td
                        className="product-remove text-center"
                        valign="middle"
                      >
                        {item.paymentId}
                      </td>
                      <td className="product-thumbnail text-center">
                        {item.amount}
                      </td>
                      <td className="product-name">{item.currency}</td>
                      <td className="product-price text-center">
                        {item.payeeEmail}
                      </td>
                      <td className="product-price text-center">
                        {moment(item.createdAt).format("YYYY-MM-DD HH:MM")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              className="btn btn-dark"
              onClick={() => {
                setPagination({ ...pagination, limit: pagination.limit + 5 });
              }}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
