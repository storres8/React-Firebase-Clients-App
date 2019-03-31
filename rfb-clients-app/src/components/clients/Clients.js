import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";

class Clients extends Component {
  state = {
    totalOwed: null
  };

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;

    if (clients) {
      const total = clients.reduce((total, client) => {
        return total + parseFloat(client.balance.toString());
      }, 0);
      return (state.totalOwed = total);
    } else {
      return null;
    }
  }

  render() {
    const { clients } = this.props;

    if (clients) {
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fas fa-users" />
              <span className="ml-1">Clients</span>
            </h2>
          </div>
          <div className="col-md-6">
            <h5 className="text-right text-seconday">
              Total: $
              <span className="text-primary ml-1">
                {parseFloat(this.state.totalOwed).toFixed(2)}
              </span>
            </h5>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Balance</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td> {client.email}</td>
                  <td> ${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/clients/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" />
                      <span className="ml-1">Details</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default compose(
  firestoreConnect([{ collection: "Clients", orderBy: "lastName" }]),
  connect(state => ({
    clients: state.firestore.ordered.Clients
  }))
)(Clients);
