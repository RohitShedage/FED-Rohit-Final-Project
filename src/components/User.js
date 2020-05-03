import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const UserComponent = props => {
  return (
    <>
      <div className="user-details">
        <div className="full-name">
          {props.user.firstName} {props.user.lastName}
        </div>
        <img src={props.user.avatar} alt={props.user.firstName} />
        <div>
          Gender:
          {props.user.gender}
        </div>
        <div>
          Email:
          {props.user.email}
        </div>
        <div>
          Phone:
          {props.user.phone}
        </div>
        <Link to="/users">
          <button className="go-back">&lt;&lt;Go Back</button>
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    user: state.users.users.find(user => {
      return user.id === Number(ownProps.match.params.id);
    })
  };
};

export default connect(mapStateToProps)(UserComponent);
