import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      count: 0,
    };
  }
  async componentDidMount() {
    //API CALL
    const data = await fetch("https://api.github.com/users/upmanyu07amartya");
    const json = await data.json();
    console.log("user", json);
    this.setState({
      userInfo: json,
    });
  }

  // componentDidUpdate(){

  // }

  // componentWillUnmount(){

  // }

  render() {
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>NAME: {this.state.userInfo.login}</h2>
        <h3>Id : {this.state.userInfo.id}</h3>

        <img src={this.state.userInfo.avatar_url} />
      </div>
    );
  }
}

export default UserClass;
