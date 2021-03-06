import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import chat from './components/Chat/Chat';

const App = () =>(
    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={chat} />
    </Router>
);

export default App;