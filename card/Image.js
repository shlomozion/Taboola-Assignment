export const Image = ([object]) => {
  const { url } = object;

  const element = document.createElement("img");
  element.src = url;
  element.alt = "image";
  element.className = "image";
  element.draggable = false;

  return element;
};
