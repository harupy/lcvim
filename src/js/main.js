import * as kb from './keyBindings';

const applyKeyMaps = () => {
  const editor = document.querySelector('div.CodeMirror');

  if (!editor || !editor.CodeMirror) return;
  editor.CodeMirror.setOption('keyMap', 'vim');
  const cm = editor.CodeMirror.constructor;

  Object.entries(kb.normal).forEach(([key, value]) => cm.Vim.map(key, value, 'normal'));
  Object.entries(kb.insert).forEach(([key, value]) => cm.Vim.map(key, value, 'insert'));
  Object.entries(kb.visual).forEach(([key, value]) => cm.Vim.map(key, value, 'visual'));

  document.removeEventListener('mouseup', applyKeyMaps, false);
};

document.addEventListener('mouseup', applyKeyMaps, false);
