import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';  

class Post extends React.Component {

    constructor(){
        super();
        this.state = {
            redirect: false,
        }
    }

    destroy() {
        const post_id = this.props.data.id;
        axios.delete(`/posts/${post_id}.json`)
            .then(response => {
                this.post_id = response.data.id
                this.setState({
                    redirect: true
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={{
                    pathname: '/',
                    state: { success: this.state.redirect }
                }} />
            )
        }
        return(
            <tr>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.body}</td>
                <td>{this.props.data.published.toString()}</td>
                <td><Link to={`/show/${this.props.data.id}`} className='btn btn-primary'>Show</Link></td>
                <td><Link to={`/edit/${this.props.data.id}`} className='btn btn-success'>Edit</Link></td>
                <td><button onClick={() => this.destroy()} className='btn btn-error'>Destory</button></td>
            </tr>
        );
    }
}

export default Post;