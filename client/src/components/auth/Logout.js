import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <li onClick={this.props.logout} href="#">
          Logout
        </li>
      </div>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
