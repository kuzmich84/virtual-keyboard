import getKeys from './get-keys';

export default function createKyes() {
  return getKeys().then((data) => {
    const rowList = Object.entries(data).map((item) => {
      const row = document.createElement('div');
      item[1].map((key) => {
        const keyDiv = document.createElement('div');
        keyDiv.classList.add('key');
        Object.entries(key).map(([subKey, value]) => {
          const span1 = document.createElement('span');
          span1.classList.add(subKey);

          Object.entries(value).map(([keyName, valueName]) => {
            const span2 = document.createElement('span');
            if (subKey === 'en' && keyName === 'case-down') {
              span2.classList.add(keyName);
            } else {
              span2.classList.add(keyName);
              span2.classList.add('hidden');
            }

            span2.innerText = valueName;
            return span1.append(span2);
          });

          return keyDiv.append(span1);
        });

        return row.append(keyDiv);
      });

      row.classList.add('row');
      return row;
    });

    return rowList;
  });
}
