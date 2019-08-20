# LCVim

A Chrome extension to apply custom vim key-bindings on LeetCode.

![demo](https://user-images.githubusercontent.com/17039389/63363879-6acca380-c3af-11e9-8568-26d8d64f2c6c.gif)

## Installation

1. Clone this repository
1. Run `npm install`
1. Run `npm run build` (or `npm run dev`)
1. Open `chrome://extensions` on Chrome
1. Enable `Developer mode` if it's disabled
1. Click `Load unpacked`
1. Select `src` in the extension directory

## Customize

Edit `keyBindings.js` in `src/js`.

```javascript
export const insert = {
  jk: '<Esc>',
};

export const normal = {
  J: '}',
  K: '{',
  H: '^',
  L: '$',
  j: 'gj',
  k: 'gk',
};

export const visual = {
  J: '}',
  K: '{',
  H: '^',
  L: '$',
  j: 'gj',
  k: 'gk',
};
```

## License

MIT
