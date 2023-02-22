import React from "react";
import Header from "./Header";
import Row from "./Row";

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [
        {
          name: "Charlie",
          job: "Janitor",
        },
        {
          name: "Mac",
          job: "Bouncer",
        },
        {
          name: "Dee",
          job: "Aspring actress",
        },
        {
          name: "Dennis",
          job: "Bartender",
        },
      ],
    };
  }

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    return (
      <table>
        <Header />
        <Row
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
