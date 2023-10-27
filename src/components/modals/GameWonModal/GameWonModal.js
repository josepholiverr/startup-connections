import React from "react";
import BaseModal from "../BaseModal";

import { generateEmojiGrid } from "../../../lib/game-helpers";
import ShareScoreButton from "../../ShareScoreButton";
import CountdownToNextPuzzle from "../../CountdownToNextPuzzle";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";

function GameWonModal({ open, submittedGuesses }) {
  const { gameData } = React.useContext(PuzzleDataContext);

  return (
    <BaseModal
      title="You won the game!"
      initiallyOpen={open}
      footerElements={<ShareScoreButton />}
      showActionButton={false}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p>{"Great job, share your results!"}</p>
        <div className="justify-center">
          {/* the whitespace: pre style makes the emoji grid appear with new lines character */}
          <span className="text-center whitespace-pre">
            {"\n"}
            {generateEmojiGrid(gameData, submittedGuesses)}
          </span>
        </div>
        <CountdownToNextPuzzle />
      </div>
    </BaseModal>
  );
}

export default GameWonModal;
