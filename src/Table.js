import React from "react";
import Header from "./Header";
import Row from "./Row";
import Form from "./Form";

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

  // addCharacter = (name, job) => {
  //   this.characters.push({ name: name });

  //   this.setState({
  //     characters: this.characters,
  //   });
  // };

  addCharacter = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    return (
      <>
        <table>
          <Header />
          <Row
            characterData={this.state.characters}
            removeCharacter={this.removeCharacter}
          />
        </table>
        <br />
        <Form addCharacter={this.addCharacter} />
      </>
    );
  }
}

export default Table;
