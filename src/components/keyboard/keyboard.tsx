import React from 'react';
import clsx from 'clsx';

import {
  WHITE_KEY_NUM,
  BLUCK_KEY_NUM,
  WHITE_KEY_LEVEL,
  BLACK_KEY_SPASE,
  BLACK_KEY_LEVEL,
} from './constant';

type Props = {
  keyboardLength: number;
  keyboardWidth: number;
  firstScale?: number;
  classKeyboard: string;
  classWhiteKeys: string;
  classWhiteKey: string;
  classBlackKeys: string;
  classBlackKey: string;
  classActiveKey?: string;
  activeKeys?: string[];
};

export const Keyboard: React.FC<Props> = (props) => {
  const { firstScale = 0 } = props;
  const { activeKeys = [] } = props;

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
    const margin = `${per * (props.keyboardWidth / props.keyboardLength)}px`;
    blackKeyMargin.push(margin);
  }

  for (let i = 0; i < props.keyboardLength; i++) {
    let octave = i;
    for (let i = 0; i < WHITE_KEY_NUM; i++) {
      const keyScale = firstScale + octave;
      const keyName = `${WHITE_KEY_LEVEL[i]}${keyScale}`;
      let activeKey = '';
      for (const key of activeKeys) {
        if (keyName == key) {
          activeKey = ' active_key';
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
      let activeKey = '';
      for (const key of activeKeys) {
        if (keyName == key) {
          activeKey = ' active_key';
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
      <div className={props.classWhiteKeys}>{whiteKeys}</div>
      <div className={props.classBlackKeys}>{blackKeys}</div>
    </div>
  );
};
