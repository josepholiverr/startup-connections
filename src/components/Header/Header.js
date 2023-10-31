import React from "react";

import InfoModal from "../modals/InfoModal";

function Header() {
  const now = new Date();


  const offset = -5.0;
  const est = new Date(now.getTime() + offset * 3600 * 1000);

 
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(est);

  return (
    <header className="flex justify-between mt-12 mobile-header">
    <div className="ml-6 pb-1 pz-game-title-bar">
      <div>
      <h2 className="pt-2 flex align-baseline">
        <em className="pz-game-title">Company Connections</em>
        <span className="pz-game-date">{formattedDate}</span>
      </h2>
      </div>
    </div>
    <InfoModal className=""/>
  </header>
  );
}

export default Header;
