import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

var App = React.createClass({
  getInitialState: function(){
    return{
      users: []
    };
  },
  componentDidMount: function(){
    var _this = this;
    this.serverRequest =
      axios
        .get("http://localhost:3004/users")
        .then(function(results){
          console.log(results.data);
          _this.setState({
            users: results.data
          });
        });
  },
  componentWillUnmount: function(){
    this.serverRequest.abort();
  },
  render: function(){
    return(
        <div>
          <h1>React App Running</h1>
          <h3>Returning Users:</h3>
          {this.state.users.map(function(user) {
          return (
            <div key={user.index}>{user.name}</div>
          );
        })}
        </div>
    );
  }
});

export default App;
