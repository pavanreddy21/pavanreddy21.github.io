/* eslint-disable prettier/prettier */
import React from 'react'

// var React = require('react');

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

// eslint-disable-next-line react/no-deprecated
var Button = React.createClass({
  // eslint-disable-next-line react/display-name
  render: function () {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}</button>
    );
  },
});

module.exports = Button;