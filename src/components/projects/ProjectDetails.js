import React from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  return project ? (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>posted by {project.author}</div>
          <div>{ moment(project.createdAt.toDate()).calendar() }</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container section project-details">
      <div>mising info</div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  const { projects } = state.firestore.data;
  const project = projects ? projects[id] : null;
  return {
    auth: state.firebase.auth,
    project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }]),
)(ProjectDetails);
