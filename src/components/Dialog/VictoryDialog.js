import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const VictoryDialog = ({ isOpen, onClose, onGameRestart }) => (
  <Dialog data-testid="victoryDialog" open={isOpen} onClose={onClose}>
    <DialogTitle data-testid="victoryDialogTitle">Congrats!</DialogTitle>
    <DialogContent>
      <DialogContentText data-testid="victoryDialogContentText">
        You win the game.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        data-testid="victoryDialogRestartButton"
        color="primary"
        onClick={onGameRestart}
      >
        Restart
      </Button>
      <Button
        data-testid="victoryDialogOkButton"
        color="primary"
        onClick={onClose}
        autoFocus
      >
        Ok
      </Button>
    </DialogActions>
  </Dialog>
);

VictoryDialog.defaultProp = {
  onClose: PropTypes.func,
  onGameRestart: PropTypes.func,
};

VictoryDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default VictoryDialog;
