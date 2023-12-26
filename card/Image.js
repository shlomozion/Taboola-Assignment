export const Image = ([object]) => {
  const { url } = object;
  const imageContainer = document.createElement("div");
  imageContainer.className = "h-full"; // OR >> h-fit

  const element = document.createElement("img");
  element.src = url;
  element.alt = "image";
  element.className = "w-full h-full";
  element.draggable = false;
  imageContainer.appendChild(element);
  return imageContainer;
};
