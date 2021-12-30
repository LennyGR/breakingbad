import React from 'react';
import PropTypes from 'prop-types';

import ErrorAlert from '../Status/ErrorAlert';

class ErrorBoundary extends React.Component {
  // Define a Local State (only for error check and decide to render children)
  state = {
    hasError: false,
  };

  // Define PropType children
  static propTypes = {
    children: PropTypes.any,
    component: PropTypes.string.isRequired,
  }
  
  // It will be executed when an error ocurrs
  componentDidCatch(_error, _info){
    console.error('[ErrorBoundary] Has failed:', this.props.component);
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      // Render this when error occurs (by the local state)
      return <ErrorAlert />;
    } else {
      // Render the child node when there is no errors
      return this.props.children;
    }  
  }
}

export default ErrorBoundary;