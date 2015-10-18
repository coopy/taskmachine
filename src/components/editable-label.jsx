import React, { Component, PropTypes } from 'react';

const styles = {
  input: {
    fontSize: '1em'
  }
};

export default class EditableLabel extends Component {
  handleInputBlur(ev) {
    this.props.labelChangedCallback(ev.target.value);
  }

  renderInput() {
    return (
      <input
        onBlur={this.handleInputBlur.bind(this)}
        style={styles.input}
        placeholder={this.props.prompt}
      />
    );
  }

  renderLabel() {
    return (
      <strong>{this.props.label}</strong>
    );
  }

  renderInputOrLabel() {
    if (this.props.label) {
      return this.renderLabel();
    } else {
      return this.renderInput();
    }
  }

  render() {
    return (
      <span>
        {this.renderInputOrLabel()}
      </span>
    );
  }
};

EditableLabel.propTypes = {
  labelChangedCallback: PropTypes.func.isRequired,
  prompt: PropTypes.string,
  label: PropTypes.string
};
