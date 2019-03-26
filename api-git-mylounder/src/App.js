import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import Header from "./Components/Header";
import Form from "./Components/Form";
import RepoList from "./Components/RepoList";

class App extends Component {
  state = {
    user: "",
    repos: [],
    error: "",
    loading: false
  };

  changeUser = user => {
    this.setState({ user });
  };

  searchUser = async () => {
    const { user } = this.state;
    this.setState({ loading: true });

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      console.log(repos);

      this.setState({ repos, error: "", loading: false });
    } catch (error) {
      this.setState({
        error: "Usuário não encontrado",
        repos: [],
        loading: false
      });
    }
  };

  render() {
    const { user, repos, error, loading } = this.state;

    return (
      <div className="App">
        <Header />
        <Form
          changeUser={this.changeUser}
          user={user}
          error={error}
          loading={loading}
          buttonAction={this.searchUser}
        />
        <RepoList repos={repos} />
      </div>
    );
  }
}

export default App;
