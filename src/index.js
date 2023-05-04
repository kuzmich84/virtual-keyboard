import './styles/styles.scss';
import createKeyboard from './js/keyboard';
import runOnKeys from './js/helpers';

createKeyboard();

function init() {
  const keys = [...document.querySelectorAll('.key')];
  const textarea = document.querySelector('textarea');

  keys.map((item, i, arr) => {
    if (i === 0) {
      item.setAttribute('keycode', 'Backquote');
    } else if (i > 0 && i <= 10) {
      item.setAttribute('keycode', `Digit${arr[i].innerText.toUpperCase()}`);
    } else if (i === 11) {
      item.setAttribute('keycode', 'Minus');
    } else if (i === 12) {
      item.setAttribute('keycode', 'Equal');
    } else if (i === 13) {
      item.setAttribute('keycode', 'Backspace');
    } else if (i === 14) {
      item.setAttribute('keycode', 'Tab');
    } else if (i === 25) {
      item.setAttribute('keycode', 'BracketLeft');
    } else if (i === 26) {
      item.setAttribute('keycode', 'BracketRight');
    } else if (i === 27) {
      item.setAttribute('keycode', 'Backslash');
    } else if (i === 28) {
      item.setAttribute('keycode', 'CapsLock');
    } else if (i === 38) {
      item.setAttribute('keycode', 'Semicolon');
    } else if (i === 39) {
      item.setAttribute('keycode', 'Quote');
    } else if (i === 40) {
      item.setAttribute('keycode', 'Enter');
    } else if (i === 41) {
      item.setAttribute('keycode', 'ShiftLeft');
    } else if (i === 49) {
      item.setAttribute('keycode', 'Comma');
    } else if (i === 50) {
      item.setAttribute('keycode', 'Period');
    } else if (i === 51) {
      item.setAttribute('keycode', 'Slash');
    } else if (i === 52) {
      item.setAttribute('keycode', 'ArrowUp');
    } else if (i === 53) {
      item.setAttribute('keycode', 'ShiftRight');
    } else if (i === 54) {
      item.setAttribute('keycode', 'ControlLeft');
    } else if (i === 55) {
      item.setAttribute('keycode', 'OSLeft');
    } else if (i === 56) {
      item.setAttribute('keycode', 'AltLeft');
    } else if (i === 57) {
      item.setAttribute('keycode', 'Space');
    } else if (i === 58) {
      item.setAttribute('keycode', 'AltRight');
    } else if (i === 59) {
      item.setAttribute('keycode', 'ArrowLeft');
    } else if (i === 60) {
      item.setAttribute('keycode', 'ArrowDown');
    } else if (i === 61) {
      item.setAttribute('keycode', 'ArrowRight');
    } else if (i === 62) {
      item.setAttribute('keycode', 'ControlRight');
    } else {
      item.setAttribute('keycode', `Key${arr[i].innerText.toUpperCase()}`);
    }

    item.querySelector('.ru').classList.add('hidden');
    return null;
  });

  let isCaps = false;

  window.addEventListener('keydown', (e) => {
    e.preventDefault();
    keys.map((item, i, arr) => {
      if (e.code === arr[i].getAttribute('keycode')) {
        arr[i].classList.add('active');
        const spanList = [
          ...item
            .querySelector(`.${localStorage.lang}`)
            .querySelectorAll('span'),
        ];
        spanList.map((spanitem) => {
          if (!spanitem.classList.contains('hidden')) {
            if (e.code === 'Tab' || e.code === 'Space') {
              textarea.value += '  ';
              return '';
            }

            if (
              e.code === 'CapsLock'
              || e.code === 'ShiftLeft'
              || e.code === 'ShiftRight'
              || e.code === 'ControlRight'
              || e.code === 'ControlLeft'
              || e.code === 'AltRight'
              || e.code === 'AltLeft'
            ) {
              return '';
            }
            if (e.code === 'Enter') {
              textarea.value += '\r\n';
              return '';
            }

            if (e.code === 'Backspace') {
              textarea.value = textarea.value.slice(0, -1);
              return '';
            }
            if (
              e.code === 'ArrowLeft'
              || e.code === 'ArrowUp'
              || e.code === 'ArrowDown'
              || e.code === 'ArrowRight'
            ) {
              return '';
            }
            textarea.value += spanitem.innerText;
          }
          return true;
        });
      }
      return true;
    });

    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      keys.map((item) => {
        if (isCaps) {
          item
            .querySelector(`.${localStorage.lang}`)
            .querySelector('.caps')
            .classList.add('hidden');
          item
            .querySelector(`.${localStorage.lang}`)
            .querySelector('.shift-caps')
            .classList.remove('hidden');
          return '';
        }
        item
          .querySelector(`.${localStorage.lang}`)
          .querySelector('.case-down')
          .classList.add('hidden');
        item
          .querySelector(`.${localStorage.lang}`)
          .querySelector('.case-up')
          .classList.remove('hidden');

        return true;
      });
    }

    if (e.code === 'CapsLock') {
      if (isCaps) {
        isCaps = false;
      } else {
        isCaps = true;
      }

      keys.map((item) => {
        item
          .querySelector(`.${localStorage.lang}`)
          .querySelector('.case-down')
          .classList.toggle('hidden');
        item
          .querySelector(`.${localStorage.lang}`)
          .querySelector('.caps')
          .classList.toggle('hidden');

        return true;
      });
    }
  });

  window.addEventListener('keyup', (e) => {
    keys.map((item, i, arr) => {
      if (e.code === arr[i].getAttribute('keycode')) {
        arr[i].classList.remove('active');
        arr[i].classList.add('remove');
      }
      setTimeout(() => {
        arr[i].classList.remove('remove');
      }, 200);
      return null;
    });

    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      keys.map((item) => {
        if (isCaps) {
          item
            .querySelector(`.${localStorage.lang}`)
            .querySelector('.caps')
            .classList.remove('hidden');
          item
            .querySelector(`.${localStorage.lang}`)
            .querySelector('.shift-caps')
            .classList.add('hidden');
          return '';
        }

        item
          .querySelector(`.${localStorage.lang}`)
          .querySelector('.case-down')
          .classList.remove('hidden');
        item
          .querySelector(`.${localStorage.lang}`)
          .querySelector('.case-up')
          .classList.add('hidden');
        return null;
      });
    }
  });

  keys.map((key) => {
    key.addEventListener('mousedown', (e) => {
      e.currentTarget.classList.add('active');
      const spanList = [
        ...e.currentTarget
          .querySelector(`.${localStorage.lang}`)
          .querySelectorAll('span'),
      ];

      if (e.currentTarget.getAttribute('keycode') === 'CapsLock') {
        keys.map((itemCaps) => {
          itemCaps
            .querySelector(`.${localStorage.lang}`)
            .querySelector('.case-down')
            .classList.toggle('hidden');
          itemCaps
            .querySelector(`.${localStorage.lang}`)
            .querySelector('.caps')
            .classList.toggle('hidden');

          return true;
        });
      }

      if (e.currentTarget.getAttribute('keycode') === 'ShiftLeft') {
        keys.map((itemShift) => {
          if (isCaps) {
            itemShift
              .querySelector(`.${localStorage.lang}`)
              .querySelector('.caps')
              .classList.remove('hidden');
            itemShift
              .querySelector(`.${localStorage.lang}`)
              .querySelector('.shift-caps')
              .classList.add('hidden');
            return '';
          }

          itemShift
            .querySelector(`.${localStorage.lang}`)
            .querySelector('.case-down')
            .classList.remove('hidden');
          itemShift
            .querySelector(`.${localStorage.lang}`)
            .querySelector('.case-up')
            .classList.add('hidden');
          return null;
        });
      }

      spanList.map((item) => {
        if (!item.classList.contains('hidden')) {
          if (item.innerText === 'Tab' || e.code === 'Space') {
            textarea.value += '  ';
            return '';
          }

          if (
            item.innerText === 'CapsLock'
            || item.innerText === 'Shift'
            || item.innerText === 'Ctrl'
            || item.innerText === 'Alt'
          ) {
            return '';
          }
          if (item.innerText === 'Enter') {
            textarea.value += '\r\n';
            return '';
          }

          if (item.innerText === 'Backspace') {
            textarea.value = textarea.value.slice(0, -1);
            return '';
          }
          if (
            item.innerText === '◄'
            || item.innerText === '▲'
            || item.innerText === '▼'
            || item.innerText === '►'
          ) {
            return '';
          }
          textarea.value += item.innerText;
        }

        return true;
      });
    });

    key.addEventListener('mouseup', (e) => {
      e.currentTarget.classList.remove('active');
      e.currentTarget.classList.add('remove');

      setTimeout(() => {
        key.classList.remove('remove');
      }, 200);
    });
    return null;
  });

  runOnKeys(
    () => {
      if (localStorage.lang === 'en') {
        localStorage.setItem('lang', 'ru');
      } else {
        localStorage.setItem('lang', 'en');
      }

      keys.map((item) => {
        item.querySelector('.en').classList.toggle('hidden');
        item.querySelector('.ru').classList.toggle('hidden');
        item
          .querySelector('.ru')
          .querySelector('.case-down')
          .classList.toggle('hidden');
        item
          .querySelector('.en')
          .querySelector('.case-down')
          .classList.toggle('hidden');
        return null;
      });
    },
    'ControlLeft',
    'AltLeft',
  );
}

setTimeout(() => {
  localStorage.setItem('lang', 'en');
  init();
}, 1000);
