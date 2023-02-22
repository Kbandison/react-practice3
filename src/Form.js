import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      job: "",
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.addCharacter(this.state);

    this.setState(this.state);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, job } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <label for="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={this.handleChange}
        ></input>
        <br />
        <label for="job">Job:</label>
        <br />
        <input
          type="text"
          id="job"
          name="job"
          value={job}
          onChange={this.handleChange}
        ></input>
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
    );
  }
}

export default Form;
