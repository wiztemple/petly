import React from 'react';
import PropTypes from 'prop-types'

const Background = ({ children }) => (
  // Remove transition-all to disable the background color transition.
  <div className="bg-white dark:bg-gray-900 transition-all">
    {children}
  </div>
)

export default Background;

Background.propTypes = {
  children: PropTypes.node
};

Background.defaultProps = {
  children: null,
};
