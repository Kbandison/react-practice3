import React from "react";

class Row extends React.Component {
  render() {
    return (
      <tbody>
        {this.props.characterData.map((row, index) => {
          return (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.job}</td>
              <td>
                <button onClick={() => this.props.removeCharacter(index)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default Row;
