import { useState } from "react";
import { BiggerHeader } from "./BiggerHeader";
import { Header } from "./Header";

export function DynamicHeader() {
  const [showBiggerHeader, setShowBiggerHeader] = useState(false);

  function onLittleFilterClick() {
    setShowBiggerHeader(true);
    
  }
  function onOverlayClick() {
    setShowBiggerHeader(false);
    
  }

  return (
    <>
      <Header onLittleFilterClick={onLittleFilterClick} />
      {showBiggerHeader && <BiggerHeader onOverlayClick={onOverlayClick} />}
    </>
  );
}
