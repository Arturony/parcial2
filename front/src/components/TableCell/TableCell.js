import React from "react";

import { Component } from "react";

class TableCell extends Component
{
    state = this.props.device;
    z = this.props.z;
  render ()
  {
    return (
        <tr>
        <th scope="row">{this.z}</th>
        <td>{this.state.id}</td>
        <td>{this.state.name}</td>
        <td>{this.state.desired.value}</td>
      </tr>
    );
  } 
}

export default TableCell;