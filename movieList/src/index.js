import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';

const App = () => (
<div className="container-fluid">
  <nav className="navbar navbar-light bg-dark sticky-top">
    <h2 className="navbar-brand text-light">Movie List</h2>
  </nav>
  <List />

</div>
)

ReactDOM.render(<App />, document.getElementById('root'));