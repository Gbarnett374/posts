import React from 'react';
import axios from 'axios';

class PostForm extends React.Component {

    constructor() {
        super();
        this.state = {
            id: '',
            title: '',
            body: '',
            published: ''
        };
    }
    componentDidMount() {
        this.setState({
            id: this.props.data.id,
            title: this.props.data.title,
            body: this.props.data.body,
            published: this.props.data.published
        });
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleBodyChange(e) {
        this.setState({
            body: e.target.value
        })
    }

    handlePublishedChange() {
        this.setState({
            published: !this.state.published
        })
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className='form-group'>
                    <label className='form-label'>Title</label>
                    <input className='form-input input-lg' value={this.state.title} 
                        onChange={(e) => this.handleTitleChange(e)} type='text' />
                </div>

                <div className='form-group'>
                    <label className='form-label'>Body</label>
                    <textarea value={this.state.body} className='form-input' 
                        onChange={(e) => this.handleBodyChange(e)}></textarea>
                </div>

                <div className='form-group'>
                    <label className='form-switch'>
                        <input type='checkbox' checked={this.state.published} className='form-input' 
                            onChange={() => this.handlePublishedChange()} />
                        <i className='form-icon'></i>Published
                    </label>
                </div>
                <div className='actions'>
                    <button className='btn btn-success'>Submit</button>
                </div>

                <br />
            </form>
        );
    }
}

export default PostForm;