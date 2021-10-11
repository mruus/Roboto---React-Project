import React, { useState, useEffect } from "react";
import CardArray from "./CardArray";
import SearchBox from "./SearchBox";
import ErrorBoundry from "./ErrorBoundry";
// import { robots } from "./robots";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchField: "",
  //   };
  // }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  const onSearchange = (event) => {
    // this.setState({
    //   searchField: event.target.value,
    // });
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robo) => {
    return robo.name
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  if (robots.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="title">robotfriends</h1>
        <SearchBox searchChange={onSearchange} />
        <ErrorBoundry>
          <CardArray robots={filteredRobots} />
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
