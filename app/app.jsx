var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// var Route = require('react-router').Route  -> object destructuring

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate 3 Project</p>
  document.getElementById('app')
);
