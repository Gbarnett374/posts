import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import PostForm from './post_form';
import generateFactorial from '../helper';

class EditPost extends React.Component {

    constructor(props) {
        super(props);
        this.post_id = this.props.match.params.id
        this.state = {
            redirect: false,
            error: false
        };
    }

    componentDidMount() {
        this.getPost();
    }

    getPost() {
        axios.get(`/posts/${this.post_id}.json`)
            .then(response => {
                this.setState({
                    data: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    update(e) {
        const formData = {
            title: e.target[0].value,
            body: e.target[1].value,
            published: e.target[2].checked,
            factorial : generateFactorial()
        };
        axios.put(`/posts/${this.post_id}.json`, formData)
            .then(response => {
                this.setState({
                    redirect: true,
                    error: false
                });
            }).catch(error => {
                this.setState({error: true});
                console.log(error);
            });
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={{
                    pathname: `/show/${this.post_id}`,
                    state: {success: this.state.redirect} 
                }}/>
            )
        }
        return(
            <div>
                { this.state.error &&
                    <div className='toast toast-error'>
                        Sorry there was a problem updating your post.
                    </div>
                }
                <h1>Editing Post</h1>
                { this.state && this.state.data &&
                    <PostForm onSubmit={(e) => this.update(e)} data={this.state.data} />
                }
                <Link className='btn' to={`/show/${this.post_id}`}>Show</Link>
                <Link className='btn btn-primary' to='/'>Back</Link>
            </div>
        )
    }
}

export default EditPost;