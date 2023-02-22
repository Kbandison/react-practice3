import React from "react";

class Row extends React.Component {
  render() {
    return (
      <>
        {this.props.characterData.map((row, index) => {
          return (
            <tbody>
              <tr>
                <td key={index}>{row.name}</td>
                <td>{row.job}</td>
                <td>
                  <button onClick={() => this.props.removeCharacter(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </>
    );
  }
}

export default Row;
