# react-piano-keyboard

## 概要

クリックで演奏できる ピアノ鍵盤の React コンポーネントです。

## 使い方

```jsx
import Keyboard from 'react-piano-keyboard';

function App() {
  return (
    <Keyboard
      keyboardWidth={400}
      classKeyboard={classKeyboard}
      classWhiteKeys={classWhiteKeys}
      classWhiteKey={classWhiteKey}
      classBlackKeys={classBlackKeys}
      classBlackKey={classBlackKey}
      noteSounds={soudObjects}
    />
  );
}
```

## Props

| props 名         | 型                                               | 説明                                                                  |
| ---------------- | ------------------------------------------------ | --------------------------------------------------------------------- |
| `keyboardWidth`  | **必須** `number`                                | 鍵盤全体の幅を指定してください。                                      |
| `classKeyboard`  | **必須** `string`                                | 鍵盤全体にかかる`className`を指定してください。                       |
| `classWhiteKeys` | **必須** `string`                                | 白鍵全体にかかる`className`を指定してください。                       |
| `classWhiteKey`  | **必須** `string`                                | 白鍵一つ一つにかかる`className`を指定してください。                   |
| `classBlackKeys` | **必須** `string`                                | 黒鍵全体にかかる`className`を指定してください。                       |
| `classBlackKey`  | **必須** `string`                                | 白鍵一つ一つにかかる`className`を指定してください。                   |
| `classActiveKey` | _任意_ `string`                                  | 強調したいキーがある場合、それにかかる`className`を指定してください。 |
| `activeKeys`     | _任意_ `string[]`                                | 強調したいキーがある場合、`keyName`を指定してください。               |
| `keyScale`       | _任意_ `number`                                  | 鍵盤のスケールを指定してください。初期値は`0`です。                   |
| `noteSounds`     | _任意_ `{ [keyName: string]: HTMLAudioElement }` | キーのクリック時に再生する`HTMLAudioElement`を指定してください。      |

### 音源について

[GitHub リポジトリ](https://github.com/perzikanz/react-piano-keyboard)の`./src/public/audio`にてピアノの音源を配布しています。

ピアノ以外の音源で演奏することも可能です。
