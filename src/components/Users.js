import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const UsersComponent = props => {
  return (
    <>
      <div className="page-body">
        <div className="users-header">
          <h1>Users Page</h1>
          <input
            className="search-users"
            type="text"
            placeholder="Type in name to search users..."
            value={props.searchString}
            onChange={props.updateSearchCriteria}
          />
        </div>
        {props.users.length ? (
          <div className="user-list">
            {props.users.map(user => {
              return (
                <Link to={`/users/${user.id}`} className="user">
                  <img src={user.avatar} alt={user.firstName} />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="no-users-found">No Users Found</div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state.users,
    users: state.users.users.filter(
      user =>
        user.firstName.includes(state.users.searchString) ||
        user.lastName.includes(state.users.searchString)
    )
  };
};

const mapDisptachToProps = dispatch => {
  return {
    updateSearchCriteria: event => {
      dispatch({
        type: "UPDATE_SEARCH_CRITERIA",
        payload: event.target.value
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(UsersComponent);
