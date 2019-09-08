import * as kb from './key-bindings';

const withParams = (url, params) => {
  const urlParams = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => urlParams.set(k, v));
  return url + (url.endsWith('?') ? '' : '?') + urlParams.toString();
};

const updateEditor = () => {
  const editor = document.querySelector('div.CodeMirror');

  if (!editor || !editor.CodeMirror) return;
  editor.CodeMirror.setOption('keyMap', 'vim');
  const cm = editor.CodeMirror.constructor;

  Object.entries(kb.normal).forEach(([key, value]) => cm.Vim.map(key, value, 'normal'));
  Object.entries(kb.insert).forEach(([key, value]) => cm.Vim.map(key, value, 'insert'));
  Object.entries(kb.visual).forEach(([key, value]) => cm.Vim.map(key, value, 'visual'));

  // enable auto-format
  cm.keyMap.default['Ctrl-J'] = async cm => {
    const params = { code: cm.getValue(), indent_size: 4, max_line_length: 100 };
    const resp = await fetch(withParams('https://pyformatter.com/api/format', params));

    const data = await resp.json();
    const cur = cm.getCursor();
    cm.setValue(data.code);
    cm.setCursor(cur);
  };

  document.removeEventListener('mouseup', updateEditor);
};

document.addEventListener('mouseup', updateEditor);
