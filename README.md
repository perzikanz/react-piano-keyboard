# react-piano-keyboard

## 概要

クリックで演奏できる ピアノ鍵盤の React コンポーネントです。

スタイルは全くあたっていないので、ご自身でスタイリングしてください。

## 使い方

### インストール

`yarn add react-piano-keyboard`

### 鍵盤を表示する

```jsx
import Keyboard from 'react-piano-keyboard';

function App() {
  return (
    <Keyboard
      keyboardWidth={400}
      classKeyboard={'classKeyboard'}
      classWhiteKeys={'classWhiteKeys'}
      classWhiteKey={'classWhiteKey'}
      classBlackKeys={'classBlackKeys'}
      classBlackKey={'classBlackKey'}
      noteSounds={soudObjects}
    />
  );
}
```

<img src="https://user-images.githubusercontent.com/65535030/119935914-43aef700-bfc3-11eb-94cf-5fbde669b1f5.png" width="400" />

### キーを強調する

```jsx
<Keyboard
  keyboardWidth={400}
  classKeyboard={'classKeyboard'}
  classWhiteKeys={'classWhiteKeys'}
  classWhiteKey={'classWhiteKey'}
  classBlackKeys={'classBlackKeys'}
  classBlackKey={'classBlackKey'}
  noteSounds={soudObjects}
  classActiveKey={'classActiveKey'}
  activeKeys={['C0', 'E0', 'G0']}
/>
```

<img width="400" src="https://user-images.githubusercontent.com/65535030/119936102-912b6400-bfc3-11eb-895e-a907c89fd04b.png">

## Props

| props 名         | 型                                                 | 説明                                                                         |
| ---------------- | -------------------------------------------------- | ---------------------------------------------------------------------------- |
| `keyboardWidth`  | **必須** `number`                                  | 鍵盤全体の幅を指定してください。                                             |
| `classKeyboard`  | **必須** `string`                                  | 鍵盤全体の`className`を指定してください。                                    |
| `classWhiteKeys` | **必須** `string`                                  | 白鍵全体の`className`を指定してください。                                    |
| `classWhiteKey`  | **必須** `string`                                  | 白鍵一つ一つの`className`を指定してください。                                |
| `classBlackKeys` | **必須** `string`                                  | 黒鍵全体の`className`を指定してください。                                    |
| `classBlackKey`  | **必須** `string`                                  | 黒鍵一つ一つの`className`を指定してください。                                |
| `noteSounds`     | **必須** `{ [keyName: string]: HTMLAudioElement }` | キーのクリック時に再生する`HTMLAudioElement`を指定してください。             |
| `classActiveKey` | _任意_ `string`                                    | 強調したいキーがある場合、その`className`を指定してください。                |
| `activeKeys`     | _任意_ `string[]`                                  | 強調したいキーがある場合、`keyName`を指定してください。(C3, A6, Eb2, etc...) |
| `keyScale`       | _任意_ `number`                                    | 鍵盤のスケールを指定してください。初期値は`0`です。                          |

## keyName

`#`(シャープ)は使えません。代わりに`b`(フラット)を使ってください。

```js
C# == Db
D# == Eb
F# == Gb
G# == Ab
A# == Bb
```

## 音源について

[GitHub リポジトリ](https://github.com/perzikanz/react-piano-keyboard)の`./src/public/audio`にてピアノの音源を配布しています。

ピアノ以外の音源で演奏することも可能です。
