import React from 'react';
import PostList from './post_list';
import ShowPost from './show_post';
import EditPost from './edit_post';
import NewPost from './new_post';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

const App = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={ PostList } />
            <Route path='/show/:id' component={ ShowPost } />
            <Route path='/edit/:id' component={ EditPost } />
            <Route path='/new' component={ NewPost } />
        </Switch>
    </Router>
);

export default App;
