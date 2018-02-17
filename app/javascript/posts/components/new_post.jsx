import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import PostForm from './post_form';
import generateFactorial from '../helper';

class NewPost extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
            error: false
        };
        this.post_id;
    }
    
    create(e) {
        const formData = {
            title: e.target[0].value,
            body: e.target[1].value,
            published: e.target[2].checked,
            factorial: generateFactorial()
        };
        axios.post(`/posts.json`, formData)
            .then(response => {
                this.post_id = response.data.id
                this.setState({
                    redirect: true,
                    error: false
                });
            })
            .catch(error => {
                this.setState({ error: true });
                console.log(error);
            });
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={{
                    pathname: `/show/${this.post_id}`,
                    state: { success: this.state.redirect }
                }} />
            )
        }
        return (
            <div>
                {this.state.error &&
                    <div className='toast toast-error'>
                        We are sorry there was a problem creating your post.
                    </div>
                }
                <h1>New Post</h1>
                    
                <PostForm onSubmit={(e) => this.create(e)} data={this.state.data} />
                <Link className='btn btn-primary' to='/'>Back</Link>
            </div>
        )
    }
}

export default NewPost;