import React from "react";
import { range } from "../../lib/utils";
import { Circle, CircleSlash } from "lucide-react";
import { MAX_MISTAKES } from "../../lib/constants";
import { GameStatusContext } from "../../providers/GameStatusProvider";

function SingleMistakeDisplay({ isUsed }) {
  return (
    <div>
      {isUsed ? (
       null
      ) : (
        <Circle className="h-4 w-4 mt-1 fill-green-300 stroke-green-300" />
      )}
    </div>
  );
}

function NumberOfMistakesDisplay() {
  const { numMistakesUsed } = React.useContext(GameStatusContext);
  // array size of number of guess. [1, 2, 3, 4]
  const mistakeRange = range(MAX_MISTAKES);
  return (
    <>
    <div className="flex flex-wrap justify-center">
    <p className="text-base -mr-3">Mistakes Remaining: </p>
    <div className="flex flex-row gap-x-4 justify-center">
     
      {mistakeRange.map((el) => (
        <SingleMistakeDisplay key={el} isUsed={el < numMistakesUsed} />
      ))}
    </div>
    </div>
    </>
  );
}

export default NumberOfMistakesDisplay;
