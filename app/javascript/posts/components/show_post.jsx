import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShowPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.post_id = this.props.match.params.id;
    }
    
    componentDidMount()  {
        this.getPost();
    }

    getPost() {
        axios.get(`/posts/${this.post_id}.json`)
            .then(response => {
                const {
                    id, 
                    title, 
                    body, 
                    factorial, 
                    published
                } = response.data;

                this.setState({
                    id,
                    title,
                    body,
                    factorial,
                    published: published.toString()
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return(
            <div>
                {this.props.location.state && this.props.location.state.success &&
                    <div className='toast toast-success'>Great Success!</div>
                }
                <br />
                <p>
                    <strong>Title: </strong>
                    {`${this.state.title} ${this.state.factorial}`}
                </p>

                <p>
                    <strong>Body: </strong>
                    {this.state.body}
                </p>

                <p>
                    <strong> Published: </strong>
                    {this.state.published}
                </p>
                <Link className='btn btn-success' to={`/edit/${this.state.id}`}>Edit</Link>&nbsp;
                <Link className='btn btn-primary' to='/'>Back</Link>
            </div>

        )
    }
}

export default ShowPost;