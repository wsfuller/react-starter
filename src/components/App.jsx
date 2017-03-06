import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions.js';
import { fetchTweets } from '../actions/tweetsActions.js';

//import axios from 'axios';
@connect((store) => {
  return{
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets
  }
})
export default class App extends React.Component{
  componentWillMount(){
    this.props.dispatch(fetchUser());
  }
  fetchTweets(){
    this.props.dispatch(fetchTweets());
  }
  render(){
    const { user, tweets } = this.props;
    if(!tweets.length){
      return <button onClick={this.fetchTweets.bind(this)}>Get Tweets</button>
    }
    const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)
    return(
      <div>
        <p>{user.name}</p>
        <ul>
          {mappedTweets}
        </ul>
      </div>

        // <div>
        //   <h1>React App Running</h1>
        //   <h3>Returning Users:</h3>
        //   {this.state.users.map(function(user) {
        //   return (
        //     <div key={user.index}>{user.name}</div>
        //   );
        // })}
        // </div>
    );
  }
}
//var App = React.createClass({
  // getInitialState: function(){
  //   return{
  //     users: []
  //   };
  // },
  // componentDidMount: function(){
  //   var _this = this;
  //   this.serverRequest =
  //     axios
  //       .get("http://localhost:3004/users")
  //       .then(function(results){
  //         console.log(results.data);
  //         _this.setState({
  //           users: results.data
  //         });
  //       });
  // },
  // componentWillUnmount: function(){
  //   this.serverRequest.abort();
  // },

//});

//export default App;
