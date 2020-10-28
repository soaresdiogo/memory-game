import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const Board = ({ children }) => <Grid container>{children}</Grid>;

Board.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Board;
