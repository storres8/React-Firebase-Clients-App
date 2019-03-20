import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Clients extends Component {
  render() {
    const clients = [
      {
        id: "1",
        firstName: "Chris",
        lastName: "Johnson",
        email: "Chris@gmail.com",
        phone: "555-555-5555",
        balance: "100"
      },
      {
        id: "2",
        firstName: "Janalyce",
        lastName: "Torres",
        email: "JT@gmail.com",
        phone: "444-444-4444",
        balance: "5"
      }
    ];

    let load = <h1>Loading...</h1>;

    if (clients) {
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fas fa-users" />
              <span className="ml-1">Clients</span>
            </h2>
          </div>
          <div className="col-md-6" />{" "}
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
      return load;
    }
  }
}
