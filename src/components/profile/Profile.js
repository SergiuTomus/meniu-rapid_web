import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../store/actions/profileActions';
import Spinner from '../layout/Spinner';

class Profile extends Component {

  componentDidMount() {
    this.props.getUserProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.userProfile;
    let profileContent;
    console.log(profile);
    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div className="col-md-12">
          <h3>Restaurant <b>{profile.restaurant.name}</b></h3>
          <br />
          <h5>{profile.user.user_status}: <b>{user.name}</b></h5>
        </div>
      )
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            {profileContent}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    userProfile: state.profile
  };
};

export default connect(mapStateToProps, { getUserProfile })(Profile);