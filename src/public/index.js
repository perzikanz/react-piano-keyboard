import React from 'react';
import ReactDOM from 'react-dom';
import Keyboard from '../components/keyboard';
import { SRC } from './src';

ReactDOM.render(
  <Keyboard src={SRC} keyboadLength={7} text={true} firstScale={0} />,
  document.getElementById('root')
);
