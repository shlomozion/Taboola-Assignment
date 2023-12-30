const Image = ([object]) => {
  const { url } = object;
  const element = document.createElement("img");
  element.src = url;
  element.alt = "ad-image";
  element.className = "w-full h-full";
  element.draggable = false;

  return element;
};
module.exports = Image;
