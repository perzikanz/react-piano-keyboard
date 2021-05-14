import React from 'react';

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

import {
  keyboardStyle,
  whiteKeyStyle,
  blackKeyStyle,
  keyTextStyle,
} from './keyboardStyle';

type Props = {
  srcArray: string[];
  keyboadLength: number;
  keyText: boolean;
  firstScale: number;
};

export const keyboard: React.FC<Props> = (props) => {
  let whiteKeys: JSX.Element[] = [];
  let whiteX = 0;
  let keyboadLength: number;

  let srcNum = 0;

  keyboadLength = props.keyboadLength;

  for (let i = 0; i < keyboadLength; i++) {
    let octave = i;
    for (let i = 0; i < WHITE_KEY_NUM; i++) {
      const keyName = `${WHITE_KEY_LEVEL[i]}${octave}`;
      const src = props.srcArray[srcNum];
      srcNum = srcNum + 1;
      const audio = new Audio(src);
      const whiteKey = (
        <rect
          x={whiteX}
          y={0}
          width={WHITE_KEY_WIDTH}
          height={WHITE_KEY_HEIGHT}
          style={whiteKeyStyle}
          onMouseDown={() => {
            playPiano(audio);
          }}
          key={keyName}
        />
      );
      whiteKeys.push(whiteKey);
      whiteX = whiteX + WHITE_KEY_WIDTH;
    }
  }
  if (props.keyboadLength == 7) {
    const src = props.srcArray[srcNum];
    srcNum = srcNum + 1;
    const audio = new Audio(src);
    whiteKeys.push(
      <rect
        x={whiteX}
        y={0}
        width={WHITE_KEY_WIDTH}
        height={WHITE_KEY_HEIGHT}
        style={whiteKeyStyle}
        onMouseDown={() => {
          playPiano(audio);
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
      const blackKey = (
        <rect
          x={blackX}
          y={0}
          width={BLACK_KEY_WIDTH}
          height={BLACK_KEY_HEIGHT}
          style={blackKeyStyle}
          onMouseDown={() => {
            playPiano(audio);
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
    let n = props.firstScale;
    for (let i = 0; i <= keyboadLength; i++) {
      const keyText = (
        <text x={textX} y={TEXT_Y} style={keyTextStyle} key={`Ct${i}`}>
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
    <div style={keyboardStyle}>
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
