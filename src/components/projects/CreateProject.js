import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import createProject from '../../store/actions/projectActions';

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container section">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <form onSubmit={this.handleSubmit} className="white">

              <h5 className="grey-text text-darken-3">Create New Project</h5>

              <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange} />
              </div>

              <div className="input-field">
                <label htmlFor="content">Content</label>
                <textarea
                  name="content"
                  id="content"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                />
              </div>

              <div className="input-field">
                <button className="btn blue accent-3 z-depth-0">Create</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
