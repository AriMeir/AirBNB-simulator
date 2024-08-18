import { useState } from "react";
import { BiggerHeader } from "./BiggerHeader";
import { Header } from "./Header";

export function DynamicHeader({stayId}) {
  const [showBiggerHeader, setShowBiggerHeader] = useState(false);

  function onLittleFilterClick() {
    setShowBiggerHeader(true);
    
  }
  function onOverlayClick() {
    setShowBiggerHeader(false);
    
  }

  return (
    <>
      <Header onLittleFilterClick={onLittleFilterClick} stayId={stayId} />
      {showBiggerHeader && <BiggerHeader onOverlayClick={onOverlayClick} stayId={stayId} />}
    </>
  );
}
