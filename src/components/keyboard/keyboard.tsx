import React from 'react';
import clsx from 'clsx';

const WHITE_KEY_NUM = 7;
const BLUCK_KEY_NUM = 5;

const WHITE_KEY_LEVEL = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const BLACK_KEY_SPASE = [50, 40, 100, 35, 35, 50];
const BLACK_KEY_LEVEL = ['Db', 'Eb', 'Gb', 'Ab', 'Bb'];

type Props = {
  keyboardWidth: number;
  keyScale?: number;
  classKeyboard: string;
  classWhiteKeys: string;
  classWhiteKey: string;
  classBlackKeys: string;
  classBlackKey: string;
  classActiveKey?: string;
  activeKeys?: string[];
  noteSounds: { [keyName: string]: HTMLAudioElement };
};

export const Keyboard: React.FC<Props> = (props) => {
  const {
    keyScale = 0,
    activeKeys = [],
    classWhiteKey,
    classBlackKey,
    classActiveKey,
    noteSounds,
  } = props;

  let whiteKeys: JSX.Element[] = [];
  let blackKeys: JSX.Element[] = [];

  const keyboardWidth = `${props.keyboardWidth}px`;
  const keybardStyle = {
    width: keyboardWidth,
  };

  const whiteKeyWdth = `${(1 / 7) * 100}%`;
  const whiteKeyStyle = {
    width: whiteKeyWdth,
  };

  const blackKeyWidth = `${(1 / 7) * (5 / 8) * 100}%`;
  const blackKeyStyle = {
    width: blackKeyWidth,
  };
  let blackKeyMargin: string[] = [];
  for (const spase of BLACK_KEY_SPASE) {
    const per = (1 / 7) * (spase / 80);
    const margin = `${per * props.keyboardWidth}px`;
    blackKeyMargin.push(margin);
  }

  for (let i = 0; i < WHITE_KEY_NUM; i++) {
    const keyName = `${WHITE_KEY_LEVEL[i]}${keyScale}`;
    let isActive = false;
    for (const key of activeKeys) {
      if (keyName == key) {
        isActive = true;
      }
    }
    const whiteKey = (
      <div
        key={keyName}
        className={clsx(classWhiteKey, isActive && classActiveKey)}
        style={whiteKeyStyle}
        onClick={() => {
          const audio = noteSounds[`${keyName}`];
          if (!audio.seeking || audio.currentTime !== 0) {
            audio.currentTime = 0;
          }
          audio.play();
        }}
      ></div>
    );
    whiteKeys.push(whiteKey);
  }
  for (let i = 0; i < BLUCK_KEY_NUM; i++) {
    const keyName = `${BLACK_KEY_LEVEL[i]}${keyScale}`;
    let isActive = false;
    for (const key of activeKeys) {
      if (keyName == key) {
        isActive = true;
      }
    }
    const blackKey = (
      <div
        key={keyName}
        className={clsx(classBlackKey, isActive && classActiveKey)}
        style={{ ...blackKeyStyle, marginLeft: blackKeyMargin[i] }}
        onClick={() => {
          const audio = noteSounds[`${keyName}`];
          if (!audio.seeking || audio.currentTime !== 0) {
            audio.currentTime = 0;
          }
          audio.play();
        }}
      ></div>
    );
    blackKeys.push(blackKey);
  }

  return (
    <div className={props.classKeyboard} style={keybardStyle}>
      <div className={props.classWhiteKeys}>{whiteKeys}</div>
      <div className={props.classBlackKeys}>{blackKeys}</div>
    </div>
  );
};
