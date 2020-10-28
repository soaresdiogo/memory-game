import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Board, Card, VictoryDialog } from '../../components';
import { selectCard, closeVictoryDialog, startGame } from '../../store/actions';

const GamePage = ({
  cards,
  onCardClick,
  isVictoryDialogOpen,
  onCloseVictoryDialog,
  onStartGame,
}) => (
  <>
    <Board>
      {cards.map((card) => (
        <Card
          key={card.key}
          name={card.name}
          startLetter={card.startLetter}
          image={card.image}
          isActive={card.isActive}
          onClick={() => {
            onCardClick(card.key);
          }}
        />
      ))}
    </Board>
    <VictoryDialog
      isOpen={isVictoryDialogOpen}
      onClose={onCloseVictoryDialog}
      onGameRestart={onStartGame}
    />
  </>
);

const mapStateToProps = (state) => ({
  cards: state.cards,
  isVictoryDialogOpen: state.isVictoryDialogOpen,
});

const mapDispatchToProps = {
  onCardClick: selectCard,
  onCloseVictoryDialog: closeVictoryDialog,
  onStartGame: startGame,
};

GamePage.propTypes = {
  cards: PropTypes.node.isRequired,
  onCardClick: PropTypes.func.isRequired,
  isVictoryDialogOpen: PropTypes.bool.isRequired,
  onCloseVictoryDialog: PropTypes.func.isRequired,
  onStartGame: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
