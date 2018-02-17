import React from 'react';
import axios from 'axios';
import Post from './post';
import { Link } from 'react-router-dom';

class PostList extends React.Component {
    
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    
    getPosts() {
        axios.get('/posts.json')
            .then(response => {
                this.setState({posts: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getPosts();   
    }

    render() {
        return (
            <div>
                {this.props.location.state && this.props.location.state.success &&
                    <div className='toast toast-success'>
                        Post successfuly destroyed!
                    </div>
                }
                <h1>Posts</h1>
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Published</th>
                            <th colSpan='3'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((post) => {
                            return (
                                <Post key={post.id} data={post} />
                            )
                        })}
                    </tbody>
                </table>
                <br />
                <Link to='/new' className='btn btn-success'>New Post</Link>
            </div>
        );
    }
}
export default PostList;