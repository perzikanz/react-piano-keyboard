# react-piano-keyboard

## 概要

クリックで演奏できる ピアノ鍵盤の React コンポーネントです。

## 使い方

```jsx
import Keyboard from 'react-piano-keyboard';

import SRC_ARRAY from 'src/constant/hoge.js';

function App() {
  return (
    <Keyboard
      srcArray={SRC_ARRAY}
      keyboadLength={7}
      keyText={true}
      firstScale={0}
    />
  );
}
```

## Props

| props 名        | 型                                     | 説明                                                                           |
| --------------- | -------------------------------------- | ------------------------------------------------------------------------------ |
| `srcArray`      | **必須** `string[]`                    | 鍵盤のクリック時に鳴らす音源のソースパスの配列 `c0~c7,cs0~as6`の順で配列で指定 |
| `keyboadLength` | **必須** `number`                      | 鍵盤の数(ド〜シをいくつ繰り返すか) `1~7`の数を指定                             |
| `keyText`       | **必須** `boolean`                     | 鍵盤にキーネームを表示するかどうか `true`で表示                                |
| `firstScale`    | `keyText`が`true`の場合は必須 `number` | 鍵盤にキーネームを表示する場合、どの音階から始めるか `0~6`の数字で指定         |
