import React from "react";
import { closest } from 'color-2-name'
import newColorSet from '../newColorSet.ts'
import './FullscreenColorCard.css'

interface FullscreenColorCardProps {
  hexColor: string;
}

const ColorCardComponent = (props: FullscreenColorCardProps) => {
  document.addEventListener('ionBackButton', () => {
    document.exitFullscreen();
  })


  return (
    <div
      className="color-card"
      style={{
        backgroundColor: `#${props.hexColor}`, // inserting it here, not in css, because it needs to be dynamic, it css this isn't good enough :)
      }}
    >
    </div>
  );
};

const ColorCard = React.memo(ColorCardComponent);

export default ColorCard;
