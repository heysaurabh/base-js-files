function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello from TS File";

  return element;
}
console.log("hello")

document.body.appendChild(component());
