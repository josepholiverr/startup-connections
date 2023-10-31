import React from "react";
import { shuffleGameData } from "../../lib/game-helpers";
import GameGrid from "../GameGrid";
import NumberOfMistakesDisplay from "../NumberOfMistakesDisplay";
import GameLostModal from "../modals/GameLostModal";
import GameWonModal from "../modals/GameWonModal";

import { Separator } from "../ui/separator";
import ConfettiExplosion from "react-confetti-explosion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import BaseModal from "../modals/BaseModal";
import { PuzzleDataContext } from "../../providers/PuzzleDataProvider";
import { GameStatusContext } from "../../providers/GameStatusProvider";
import GameControlButtonsPanel from "../GameControlButtonsPanel";

import ViewResultsModal from "../modals/ViewResultsModal";
import InfoModal from "../modals/InfoModal";

function Game() {
  const { gameData, categorySize, numCategories } =
    React.useContext(PuzzleDataContext);
  const { submittedGuesses, solvedGameData, isGameOver, isGameWon } =
    React.useContext(GameStatusContext);

  const [shuffledRows, setShuffledRows] = React.useState(
    shuffleGameData({ gameData })
  );
  const [isEndGameModalOpen, setisEndGameModalOpen] = React.useState(false);
  const [gridShake, setGridShake] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);

  // use effect to update Game Grid after a row has been correctly solved
  React.useEffect(() => {
    const categoriesToRemoveFromRows = solvedGameData.map(
      (data) => data.category
    );
    const dataLeftForRows = gameData.filter((data) => {
      return !categoriesToRemoveFromRows.includes(data.category);
    });
    if (dataLeftForRows.length > 0) {
      setShuffledRows(shuffleGameData({ gameData: dataLeftForRows }));
    }
  }, [solvedGameData]);

  // Handle End Game!
  React.useEffect(() => {
    if (!isGameOver) {
      return;
    }
    // extra delay for game won to allow confetti to show
    const modalDelay = isGameWon ? 2000 : 250;
    const delayModalOpen = window.setTimeout(() => {
      setisEndGameModalOpen(true);
      //unmount confetti after modal opens
      setShowConfetti(false);
    }, modalDelay);

    if (isGameWon) {
      setShowConfetti(true);
    }

    return () => window.clearTimeout(delayModalOpen);
  }, [isGameOver]);

  return (
    <>
      <h3 className="text-xl text-center mt-4">
        Create four groups of four!
      </h3>

      <div className={`game-wrapper`}>
        {isGameOver && isGameWon ? (
          <GameWonModal
            open={isEndGameModalOpen}
            submittedGuesses={submittedGuesses}
          />
        ) : (
          <GameLostModal
            open={isEndGameModalOpen}
            submittedGuesses={submittedGuesses}
          />
        )}
       
        <GameGrid
          gameRows={shuffledRows}
          shouldGridShake={gridShake}
          setShouldGridShake={setGridShake}
        />
        {showConfetti && isGameOver && (
          <div className="grid place-content-center">
            <ConfettiExplosion
              particleCount={100}
              force={0.8}
              duration={2500}
            />
          </div>
        )}
        <Separator />

        {!isGameOver ? (
          <>
           <BaseModal
      title=""
      
      initiallyOpen={true}
      actionButtonText="Got It!"
    >
      
      
          {" "}
          <h1 className="font-bold text-start text-lg">How to play Company Connections:</h1>
          <h2 className="font-bold mt-4">Find groups of companies that share something in common.</h2>
          <ul style={{ listStyleType: 'disc' }}>
            <li className="ml-4">Select four items and tap 'Submit' to check if your guess is correct.</li>
            <li className="ml-4">Find the groups without making 4 mistakes!</li>
          </ul>
          <h2 className="font-bold mt-4">Category Example</h2>
          <ul style={{ listStyleType: 'disc' }}>
            <li className="ml-4">TECH IN NYC: IBM, Yext, Kickstarter, Hugging Face</li>
           
          </ul>
        

          <p className="mt-2">Each puzzle has exactly one solution. Watch out for words that seem to belong to multiple categories!</p>
          <p className="mt-4">Each group is assigned a color, which will be revealed as you solve: </p>

          <div class="flex flex-col help-emojis mt-0.5 ml-4">
            <div class="inline-flex items-center h-5">
              <span className="help-emoji group-0 font-bold"></span> Straightforward
            </div>
            <div class="inline-flex items-center h-5">
              <span className="help-emoji group-1"></span>
            </div>
            <div class="inline-flex items-center h-5">
              <span className="help-emoji group-2"></span>
            </div>
            <div class="relative inline-flex items-center h-5">
              <img
                id="help-arrow"
                class="h-[2.2rem] left-[1.5rem] bottom-[1.4rem] absolute"
                src="https://www.nytimes.com/games-assets/v2/metadata/help_arrow.svg"
                alt="levels description arrow"
              />
              <span className="help-emoji group-3 font-bold"></span> Tricky
            </div>
          </div>

   
        
    </BaseModal>
            <NumberOfMistakesDisplay />
            <GameControlButtonsPanel
              shuffledRows={shuffledRows}
              setShuffledRows={setShuffledRows}
              setGridShake={setGridShake}
            />
          </>
        ) : (
          <ViewResultsModal />
        )}
      </div>
    </>
  );
}

export default Game;
