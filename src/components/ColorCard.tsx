import { IonIcon, useIonToast } from "@ionic/react";
import { Share } from '@capacitor/share'
import { Clipboard } from "@capacitor/clipboard";
import React, { useCallback, useRef } from "react";
import { closest } from 'color-2-name'
import newColorSet from '../newColorSet.ts'
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem'
import html2canvas from 'html2canvas'
import './ColorCard.css'
import translate from "../translator.ts";
import { shareOutline, expandOutline } from "ionicons/icons";

interface ColorCardProps {
  hexColor: string;
  RGBcolor: number[];
}

async function copyToClip(toCopy: string, toastHook: any) {
  await Clipboard.write({
    string: toCopy,
  }).then(() => {
    toastHook({
      message: `Color copied`,
      duration: 1500,
      position: "bottom",
    });
  });
}

async function shareColor(toastHook: any, colorName: string, hexColor: string) {
  if (!(await Share.canShare()).value) {
    toastHook({
      message: `Could not share on this platform`,
      duration: 1500,
      position: "bottom",
    });
    return
  }
  Share.share({
    title: 'My color of day',
    text: `My color of the day is`,
    dialogTitle: 'Sharing my color of day',
    // TODO: this is not working on web, also this looks really ugly
    files: [`colorOfDay.png`]
  })
}

const ColorCardComponent = (props: ColorCardProps) => {
  const prewiewRef = useRef(null)

  const [present] = useIonToast();

  // Memoize copy handlers
  const handleCopyHex = useCallback(() => {
    copyToClip(props.hexColor, present);
  }, [props.hexColor, present]);

  const handleCopyRGB = useCallback(() => {
    copyToClip(props.RGBcolor.join(", "), present);
  }, [props.RGBcolor, present]);

  const generateImage = async (): Promise<string> => {
    const canvas = await html2canvas(prewiewRef.current);
    const imgData = canvas.toDataURL("image/png");
    const blobData = atob(imgData);
    return blobData;
  }

  const saveImage = async () => {
    await Filesystem.writeFile({
      path: `colorOfDay.png`,
      data: await generateImage(),
      directory: Directory.Cache
    })
  }

  // @ts-ignore
  const colorName = closest(`#${props.hexColor}`, newColorSet).name
  // const translated = translate(colorName, 'it')

  return (
    <div
      className="color-card"
      style={{
        backgroundColor: `#${props.hexColor}`, // inserting it here, not in css, because it needs to be dynamic, it css this isn't good enough :)
      }}
    >
      <strong>{colorName}</strong>
      <p>
        HEX:
        <br />
        <button onClick={handleCopyHex} className="copy-btn">
          {props.hexColor}
        </button>
      </p>
      <p>
        RGB:
        <br />
        <button onClick={handleCopyRGB} className="copy-btn">
          {props.RGBcolor.join(", ")}
        </button>
      </p>
      {/* TODO: this is for v2 release */}
      {/* <button
        onClick={() => shareColor(present, colorName, props.hexColor)}
        className="share-btn">
        <img src="assets/share_64.png" alt="Share icon" />
      </button> */}
      {/* <canvas id="myCanvas" width="500" height="500" style={{ border: "1px solid #fff" }}></canvas> */}
      <div className="side-btns">
        <button className="side-btn">
          <IonIcon icon={shareOutline} />
        </button>
        <button className="side-btn">
          <IonIcon icon={expandOutline} />
        </button>
      </div>
    </div>
  );
};

const ColorCard = React.memo(ColorCardComponent);

export default ColorCard;
