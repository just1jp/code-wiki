import React from 'react';

import MainHeader from './mainHeader.jsx';
import Posts from './posts.jsx';
import NewPost from './newPost.jsx';

export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createPost: true
    }
  }
  showExistingPosts() {
    return (
      <div>
        <MainHeader category={this.props.category}/>
        <div className="divider-full"></div>
        <Posts />
      </div>
    );
  }
  createNewPost() {
    return (
      <NewPost />
    );
  }
  render() {
    return (
      <div className="col-sm-10 main-container">
        <div className="main">
          {this.state.createPost ? this.createNewPost() : this.showExistingPosts()}
        </div>
      </div>
    );
  }
}