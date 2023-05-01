export function createDiv(clsName, idName = "") {
  let div = document.createElement("div");
  div.className = clsName;
  idName ? (div.id = idName) : null;
  return div;
}

export function createP(text) {
  let p = document.createElement("p");
  p.textContent = text;
  return p;
}

export function createSpan(idName = "", text) {
  let span = document.createElement("span");
  span.id = idName;
  span.textContent = text;
  return span;
}
