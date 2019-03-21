import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../store/actions/profileActions';

class Profile extends Component {

  componentDidMount() {
    this.props.getUserProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <h4>Loading...</h4>
    } else {
      profileContent = <h4>Admin: {user.name}</h4>
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-5">Spartan</h1>
              {profileContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    profile: state.profile
  };
};

export default connect(mapStateToProps, { getUserProfile })(Profile);