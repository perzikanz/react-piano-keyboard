import React, { useState } from 'react';

import {
  WHITE_KEY_NUM,
  BLUCK_KEY_NUM,
  WHITE_KEY_WIDTH,
  WHITE_KEY_HEIGHT,
  WHITE_KEY_LEVEL,
  BLACK_KEY_WIDTH,
  BLACK_KEY_HEIGHT,
  BLACK_KEY_SPASE,
  BLACK_KEY_LEVEL,
} from './constant';

type Props = {
  srcArray: string[];
  keyboadLength: number;
  keyText: boolean;
  firstScale?: number;
  className: string;
};

export const keyboard: React.FC<Props> = (props) => {
  const { firstScale = 0 } = props;
  let whiteKeys: JSX.Element[] = [];
  let whiteX = 0;

  let srcNum = 0;
  const keyboadLength = props.keyboadLength;

  for (let i = 0; i < keyboadLength; i++) {
    let octave = i;
    for (let i = 0; i < WHITE_KEY_NUM; i++) {
      const keyName = `${WHITE_KEY_LEVEL[i]}${octave}`;
      const src = props.srcArray[srcNum];
      srcNum = srcNum + 1;
      const audio = new Audio(src);
      const [hover, setHover] = useState(false);
      const whiteKey = (
        <rect
          x={whiteX}
          y={0}
          width={WHITE_KEY_WIDTH}
          height={WHITE_KEY_HEIGHT}
          className={props.className}
          onMouseDown={() => {
            playPiano(audio);
          }}
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseOut={() => {
            setHover(false);
          }}
          key={keyName}
        />
      );
      whiteKeys.push(whiteKey);
      whiteX = whiteX + WHITE_KEY_WIDTH;
    }
  }
  if (keyboadLength == 7) {
    const src = props.srcArray[srcNum];
    srcNum = srcNum + 1;
    const audio = new Audio(src);
    const [hover, setHover] = useState(false);
    whiteKeys.push(
      <rect
        x={whiteX}
        y={0}
        width={WHITE_KEY_WIDTH}
        height={WHITE_KEY_HEIGHT}
        className={props.className}
        onMouseDown={() => {
          playPiano(audio);
        }}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        key='c7'
      />
    );
    whiteX = whiteX + WHITE_KEY_WIDTH;
  }

  let blackKeys: JSX.Element[] = [];
  let blackX = 0;
  for (let i = 0; i < keyboadLength; i++) {
    let octave = i;
    blackX = blackX + BLACK_KEY_WIDTH;
    for (let i = 0; i < BLUCK_KEY_NUM; i++) {
      const keyName = `${BLACK_KEY_LEVEL[i]}${octave}`;
      const src = props.srcArray[srcNum];
      srcNum = srcNum + 1;
      const audio = new Audio(src);
      const [hover, setHover] = useState(false);
      const blackKey = (
        <rect
          x={blackX}
          y={0}
          width={BLACK_KEY_WIDTH}
          height={BLACK_KEY_HEIGHT}
          className={props.className}
          onMouseDown={() => {
            playPiano(audio);
          }}
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseOut={() => {
            setHover(false);
          }}
          key={keyName}
        />
      );
      blackKeys.push(blackKey);
      blackX = blackX + BLACK_KEY_WIDTH + BLACK_KEY_SPASE[i];
    }
  }

  let keyTexts: JSX.Element[] = [];
  if (props.keyText == true) {
    let textX = 20;
    const TEXT_Y = 380;
    let n = firstScale;
    for (let i = 0; i <= keyboadLength; i++) {
      const keyText = (
        <text x={textX} y={TEXT_Y} className={props.className} key={`Ct${i}`}>
          C{n}
        </text>
      );
      keyTexts.push(keyText);
      textX = textX + 560;
      n = n + 1;
    }
  }

  const SVG_WIDTH = whiteX + 2;
  const SVG_HEIGHT = WHITE_KEY_HEIGHT + 2;

  return (
    <div className={props.className}>
      <svg
        width={SVG_WIDTH}
        height={SVG_HEIGHT}
        viewBox={`-1 -1 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      >
        {whiteKeys}
        {blackKeys}
        {keyTexts}
      </svg>
    </div>
  );
};

const playPiano = (audio: HTMLAudioElement) => {
  if (!audio.seeking || audio.currentTime !== 0) {
    audio.currentTime = 0;
  }
  audio.play();
};
