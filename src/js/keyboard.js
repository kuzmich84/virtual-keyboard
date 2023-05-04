import createKyes from './kyes';

export default function createKeyboard() {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const keyboard = document.createElement('div');
  const keyboardKeys = document.createElement('div');
  const h1 = document.createElement('h1');
  const a = document.createElement('a');

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
          key.classList.add('key-backspace');
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
        } else if (key.outerText === 'Ctrl') {
          key.classList.add('key-ctrl');
        } else if (key.outerText === 'Win') {
          key.classList.add('key-win');
        } else if (key.outerText === 'Alt') {
          key.classList.add('key-alt');
        }
        return null;
      });

      const shift = document.querySelectorAll('.key-shift');
      const ctrl = document.querySelectorAll('.key-ctrl');
      const alt = document.querySelectorAll('.key-alt');
      shift[0].classList.add('shift-left');
      shift[1].classList.add('shift-right');
      ctrl[0].classList.add('ctrl-left');
      ctrl[1].classList.add('ctrl-right');
      alt[0].classList.add('alt-left');
      alt[1].classList.add('alt-right');
    });

  keyboard.append(keyboardKeys);
  div.append(keyboard);

  [
    'Клавиатура создана в операционной системе Windows',
    'Для переключения языка комбинация: левыe ctrl + alt',
  ]
    .map((item) => {
      const p = document.createElement('p');
      p.innerText = item;
      return p;
    })
    .map((item2) => div.append(item2));

  a.href = 'https://github.com/kuzmich84/virtual-keyboard/pull/1';
  a.textContent = 'Ссылка на PullRequest: https://github.com/kuzmich84/virtual-keyboard/pull/1';

  div.append(a);

  body.append(div);
}
