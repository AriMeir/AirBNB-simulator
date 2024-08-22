import { useState } from "react";
import { BiggerHeader } from "./BiggerHeader";
import { Header } from "./Header";

export function DynamicHeader({stayId, hostMode, showFilter}) {
  const [showBiggerHeader, setShowBiggerHeader] = useState(false);

  function onLittleFilterClick() {
    setShowBiggerHeader(true);
    
  }
  function onOverlayClick() {
    setShowBiggerHeader(false);
    
  }

  return (
    <>
      <Header onLittleFilterClick={onLittleFilterClick} stayId={stayId} hostMode={hostMode} showFilter={showFilter} />
      {showBiggerHeader && <BiggerHeader onOverlayClick={onOverlayClick} stayId={stayId} />}
    </>
  );
}
