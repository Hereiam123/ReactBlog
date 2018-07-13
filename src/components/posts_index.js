import React, { Component } from 'react';
import {fetchPosts} from '../actions';
import {connect} from 'react-redux';

class PostsIndex extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    console.log(this.props.posts);
    return(
      <div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {posts: state.posts};
}

//Don't forget mapDispatchToProps exists
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
