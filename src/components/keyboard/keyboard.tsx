import React from 'react';
import clsx from 'clsx';

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
  srcArray?: string[];
  keyboardLength: number;
  keyText?: boolean;
  firstScale?: number;
  className?: {
    keyboard?: string;
    whiteKey?: string;
    blackKey?: string;
    text?: string;
  };
  classKeyboard: string;
  classWhiteKeys: string;
  classWhiteKey: string;
  classBlackKeys: string;
  classBlackKey: string;
  keyboardWidth: number;
  activeKey?: string[];
};

// export const keyboard: React.FC<Props> = (props) => {
//   const {
//     firstScale = 0,
//     className = {
//       keyboard: 'keyboard',
//       whiteKey: 'whiteKey',
//       blackKey: 'blackKey',
//       text: 'text',
//     },
//   } = props;
//   let whiteKeys: JSX.Element[] = [];
//   let whiteX = 0;

//   let srcNum = 0;
//   const keyboardLength = props.keyboardLength;

//   for (let i = 0; i < keyboardLength; i++) {
//     let octave = i;
//     for (let i = 0; i < WHITE_KEY_NUM; i++) {
//       const keyName = `${WHITE_KEY_LEVEL[i]}${octave}`;
//       const src = props.srcArray[srcNum];
//       srcNum = srcNum + 1;
//       const audio = new Audio(src);
//       const whiteKey = (
//         <rect
//           x={whiteX}
//           y={0}
//           width={WHITE_KEY_WIDTH}
//           height={WHITE_KEY_HEIGHT}
//           className={className.whiteKey}
//           onMouseDown={() => {
//             playPiano(audio);
//           }}
//           key={keyName}
//         />
//       );
//       whiteKeys.push(whiteKey);
//       whiteX = whiteX + WHITE_KEY_WIDTH;
//     }
//   }
//   if (keyboardLength == 7) {
//     const src = props.srcArray[srcNum];
//     srcNum = srcNum + 1;
//     const audio = new Audio(src);
//     whiteKeys.push(
//       <rect
//         x={whiteX}
//         y={0}
//         width={WHITE_KEY_WIDTH}
//         height={WHITE_KEY_HEIGHT}
//         className={className.whiteKey}
//         onMouseDown={() => {
//           playPiano(audio);
//         }}
//         key='c7'
//       />
//     );
//     whiteX = whiteX + WHITE_KEY_WIDTH;
//   }

//   let blackKeys: JSX.Element[] = [];
//   let blackX = 0;
//   for (let i = 0; i < keyboardLength; i++) {
//     let octave = i;
//     blackX = blackX + BLACK_KEY_WIDTH;
//     for (let i = 0; i < BLUCK_KEY_NUM; i++) {
//       const keyName = `${BLACK_KEY_LEVEL[i]}${octave}`;
//       const src = props.srcArray[srcNum];
//       srcNum = srcNum + 1;
//       const audio = new Audio(src);
//       const blackKey = (
//         <rect
//           x={blackX}
//           y={0}
//           width={BLACK_KEY_WIDTH}
//           height={BLACK_KEY_HEIGHT}
//           className={className.blackKey}
//           onMouseDown={() => {
//             playPiano(audio);
//           }}
//           key={keyName}
//         />
//       );
//       blackKeys.push(blackKey);
//       blackX = blackX + BLACK_KEY_WIDTH + BLACK_KEY_SPASE[i];
//     }
//   }

//   let keyTexts: JSX.Element[] = [];
//   if (props.keyText == true) {
//     let textX = 20;
//     const TEXT_Y = 380;
//     let n = firstScale;
//     for (let i = 0; i <= keyboardLength; i++) {
//       const keyText = (
//         <text x={textX} y={TEXT_Y} className={className.text} key={`Ct${i}`}>
//           C{n}
//         </text>
//       );
//       keyTexts.push(keyText);
//       textX = textX + 560;
//       n = n + 1;
//     }
//   }

//   const SVG_WIDTH = whiteX + 2;
//   const SVG_HEIGHT = WHITE_KEY_HEIGHT + 2;

//   return (
//     <div className={className.keyboard}>
//       <svg
//         width={SVG_WIDTH}
//         height={SVG_HEIGHT}
//         viewBox={`-1 -1 ${SVG_WIDTH} ${SVG_HEIGHT}`}
//       >
//         {whiteKeys}
//         {blackKeys}
//         {keyTexts}
//       </svg>
//     </div>
//   );
// };

// const playPiano = (audio: HTMLAudioElement) => {
//   if (!audio.seeking || audio.currentTime !== 0) {
//     audio.currentTime = 0;
//   }
//   audio.play();
// };

export const Keyboard: React.FC<Props> = (props) => {
  const { firstScale = 0 } = props;
  const { activeKey = [] } = props;

  let whiteKeys: JSX.Element[] = [];
  let blackKeys: JSX.Element[] = [];

  const keyboardWidth = `${props.keyboardWidth}px`;
  const keybardStyle = {
    width: keyboardWidth,
  };

  const whiteKeysStyle = {
    display: 'flex',
  };

  const whiteKeyWdth = `${(1 / 7) * 100}%`;
  const whiteKeyStyle = {
    width: whiteKeyWdth,
  };

  const blackKeysStyle = {
    display: 'flex',
  };

  const blackKeyWidth = `${(1 / 7) * (5 / 8) * 100}%`;
  const blackKeyStyle = {
    width: blackKeyWidth,
  };
  let blackKeyMargin: string[] = [];
  for (const spase of BLACK_KEY_SPASE) {
    const per = (1 / 7) * (spase / 80);
    const margin = `${per * (props.keyboardWidth / props.keyboardLength)}px`;
    blackKeyMargin.push(margin);
  }

  for (let i = 0; i < props.keyboardLength; i++) {
    let octave = i;
    for (let i = 0; i < WHITE_KEY_NUM; i++) {
      const keyScale = firstScale + octave;
      const keyName = `${WHITE_KEY_LEVEL[i]}${keyScale}`;
      let selectActive = '';
      for (const key of activeKey) {
        if (keyName == key) {
          selectActive = ' active_key';
        }
      }
      const whiteKey = (
        <div
          key={keyName}
          className={props.classWhiteKey}
          style={whiteKeyStyle}
        ></div>
      );
      whiteKeys.push(whiteKey);
    }
    for (let i = 0; i < BLUCK_KEY_NUM; i++) {
      const keyScale = firstScale + octave;
      const keyName = `${BLACK_KEY_LEVEL[i]}${keyScale}`;
      let selectActive = '';
      for (const key of activeKey) {
        if (keyName == key) {
          selectActive = ' active_key';
        }
      }
      const blackKey = (
        <div
          key={keyName}
          className={props.classBlackKey}
          style={{ ...blackKeyStyle, marginLeft: blackKeyMargin[i] }}
        ></div>
      );
      blackKeys.push(blackKey);
    }
  }

  return (
    <div className={props.classKeyboard} style={keybardStyle}>
      <div className={props.classWhiteKeys} style={whiteKeysStyle}>
        {whiteKeys}
      </div>
      <div className={props.classBlackKeys} style={blackKeysStyle}>
        {blackKeys}
      </div>
    </div>
  );
};
