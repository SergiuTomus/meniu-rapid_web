import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../store/actions/profileActions';
import Spinner from '../layout/Spinner';
import { faShoppingCart, faPhoneSquare, faEnvelope, faUser, faShippingFast, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

        <div className="col-md-12 bg-light card card-body bg-light">

          <div className="row">
            <div className="col-md-12 text-center">
              <br />
              <img src={`https://rocky-lowlands-58601.herokuapp.com/${profile.restaurant.image_url}`}
                className="col-md-4 col-8 rounded-circle" alt={profile.restaurant.name} />
              <div className="text-center">
                <br />
                <h2>Restaurant <b>{profile.restaurant.name}</b></h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center">
              <br />
              <h3 className="text-success"><b>Date Restaurant</b></h3>
              <h5><FontAwesomeIcon icon={faMapMarkerAlt} className="text-success mr-2" />Adresa: {profile.restaurant.address}</h5>
              <h5><FontAwesomeIcon icon={faShoppingCart} className="text-success mr-2" />Comanda minima: {profile.restaurant.minimum_order} lei</h5>
              <h5><FontAwesomeIcon icon={faShippingFast} className="text-success mr-2" />Cost de livrare: {profile.restaurant.cost_delivery} lei</h5>
              <h5><FontAwesomeIcon icon={faPhoneSquare} className="text-success mr-2" /> {profile.restaurant.phone}</h5>

            </div>
            <div className="col-md-6 text-center">
              <br />
              <h3 className="text-success"><b>Date Utilizator</b></h3>
              <h5><FontAwesomeIcon icon={faUser} className="text-success mr-2" />{profile.user.user_status}: <b>{user.name}</b></h5>
              <h5><FontAwesomeIcon icon={faEnvelope} className="text-success mr-2" />{user.email}</h5>
              <h5><FontAwesomeIcon icon={faPhoneSquare} className="text-success mr-2" /> {profile.user.user_phone}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <h4 className="text-success"><b>Program</b></h4>
              <h5>Luni-Vineri: {profile.restaurant.week_program}</h5>
              <h5>Sambata: {profile.restaurant.saturday_program}</h5>
              <h5>Duminica: {profile.restaurant.sunday_program}</h5>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="profile">
        <div className="container">
          {profileContent}
        </div>
        <br /><br /><br /><br />
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