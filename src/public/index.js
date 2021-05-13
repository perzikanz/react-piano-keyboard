import React from 'react';
import ReactDOM from 'react-dom';
import Keyboard from '../components/keyboard';
import { SRC_ARRAY } from './src';

ReactDOM.render(
  <Keyboard src={SRC_ARRAY} keyboadLength={7} text={true} firstScale={0} />,
  document.getElementById('root')
);
