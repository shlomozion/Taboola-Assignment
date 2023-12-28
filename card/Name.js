export const Name = (name) => {
  const element = document.createElement("span");
  element.className = "name";
  element.innerHTML = name;

  return element;
};
