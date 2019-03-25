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

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = <h4>{profile.user.user_status}: {user.name}</h4>
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
    userProfile: state.profile
  };
};

export default connect(mapStateToProps, { getUserProfile })(Profile);