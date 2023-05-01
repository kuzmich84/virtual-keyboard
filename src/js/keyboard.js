import createKyes from './kyes';

export default function createKeyboard() {
  const root = document.getElementById('root');
  const div = document.createElement('div');
  const keyboard = document.createElement('div');
  const keyboardKeys = document.createElement('div');
  const h1 = document.createElement('h1');

  h1.innerText = 'RSS Виртуальная клавиатура';

  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');

  textarea.rows = '5';
  textarea.cols = '50';

  div.classList.add('container');
  div.append(h1);
  div.append(textarea);
  keyboard.classList.add('keyboard-wrapp');

  keyboardKeys.classList.add('keyboard-keys');
  createKyes()
    .then((keys) => keys.map((item) => keyboardKeys.append(item)))
    .then(() => {
      const keyList = [...document.querySelectorAll('.key')];

      keyList.map((key) => {
        if (key.outerText === 'Backspace') {
          key.classList.add('backspace-key');
        } else if (key.outerText === 'Tab') {
          key.classList.add('key-tab');
        } else if (key.outerText === 'CapsLock') {
          key.classList.add('key-caps-lock');
        } else if (key.outerText === 'Enter') {
          key.classList.add('key-enter');
        } else if (key.outerText === 'Shift') {
          key.classList.add('key-shift');
        } else if (key.outerText === '') {
          key.classList.add('key-space');
        }
        return null;
      });
    });

  keyboard.append(keyboardKeys);
  div.append(keyboard);
  root.append(div);
}
