import React, { Component } from 'react';
import { pick } from 'lodash';


export class HomeworkDetails extends Component {
  state = {
    number: 0,
    title: '',
    description: ''
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }
  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAction({
      type: 'update',
      value: pick(this.state, ['title', 'description', 'id'])
    });
  }

  handleReset = () => {
    this.setState(this.props.homework);
  }

  componentDidMount() {
    this.setState(this.props.homework);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="number">Number
          <input name="number" type="text" disabled value={this.state.number} />
        </label>
        <label htmlFor="title">Title
          <input name="title" type="text" value={this.state.title} onChange={this.handleTitleChange} />
        </label>
        <label htmlFor="description">Description
          <textarea name="description" type="text" rows="15" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
        </label>
        <div className="toolbar">
          <button type="reset" onClick={this.handleReset}>Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}