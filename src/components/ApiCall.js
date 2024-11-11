import axios from 'axios';
import React, { Component, memo } from 'react'


class ApiCall extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
      
      }
    }

    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response =>{
        console.log(response);
        this.setState({
          posts:response.data
        });
      })
      .catch(error =>{
        console.log(error);
        this.setState(
          {
          }
        )
      })
    }
  render() {
    const {posts} = this.state;
    return (
      <div>
        <h1>These are my new posts!</h1>
        <ul>
          {posts.length? posts.map(post => <li key={post.id}>{post.title}</li>):null}
        </ul>
    
      </div>
    )
  }
}

export default ApiCall;

