import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';


import HomePage from './home/HomePage';


class App extends React.Component {
constructor(props) {
super(props);
this.state = {
title: 'DBE',
headerLinks: [
{ title: 'Home', path: '/' },
],


}
}

render() {

return(
<Router>


<Route path = "/" component = {HomePage} />

</Router>


);
}
}

export default App;

