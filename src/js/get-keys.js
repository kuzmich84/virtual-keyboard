export default async function getKeys() {
  try {
    const keysURL = 'data/data.json';
    const res = await fetch(keysURL);
    return await res.json();
  } catch (e) {
    throw new Error('Возникла шибка получения клавиш');
  }
}
