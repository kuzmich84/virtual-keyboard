import getKeys from './get-keys';

export default function createKeyboard() {
  const root = document.getElementById('root');
  const div = document.createElement('div');
  const keyboard = document.createElement('div');
  const keyboardKeys = document.createElement('div');
  const row = document.createElement('div');
  const key = document.createElement('div');

  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');

  textarea.rows = '5';
  textarea.cols = '50';

  div.classList.add('container');
  div.append(textarea);
  keyboard.classList.add('keyboard-wrapp');

  keyboardKeys.classList.add('keyboard-keys');
  row.classList.add('row');
  keyboardKeys.append(row);
  keyboard.append(keyboardKeys);
  div.append(keyboard);

  getKeys().then((data) => console.log(data[0]));

  root.append(div);
}
