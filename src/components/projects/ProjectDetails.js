import React from 'react';

const ProjectDetails = (props) => {
  const { id } = props.match.params;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione porro</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>posted by</div>
          <div>date</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
