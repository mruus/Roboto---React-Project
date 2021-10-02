import React from "react";
import CardArray from "./CardArray";
import SearchBox from "./SearchBox";
import ErrorBoundry from "./ErrorBoundry";
// import { robots } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robo) => {
      return robo.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="title">robotfriends</h1>
          <SearchBox searchChange={this.onSearchange} />
          <ErrorBoundry>
            <CardArray robots={filteredRobots} />
          </ErrorBoundry>
        </div>
      );
    }
  }
}

export default App;
