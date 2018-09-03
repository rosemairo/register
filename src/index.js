import React from 'react';
import ReactDOM from 'react-dom';

import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import ArticlePage from './pages/Article';
import Form from "./components/Form";
import {BrowserRouter, Route, Link} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
<div>
    <nav>
        <ul>
            <li>
                <Link to="/Login">Login</Link>
            </li>
            <li>
                <Link to="/Register">register</Link>
            </li>
            <li>
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/Article">Article</Link>
            </li>
            <li>
                <Link to="/Form">form</Link>
            </li>
        </ul>
    </nav>
    <Route path="/Login" component={LoginPage} />
    <Route path="/Register" component={RegisterPage} />
    <Route path="/Home" component={HomePage} />
    <Route path="/Article" component={ArticlePage} />
    <Route path="/Form" component={Form} />
</div>

</BrowserRouter>
, document.getElementById('root'));
