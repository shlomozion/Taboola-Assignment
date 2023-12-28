import { Image } from "./Image.js";
import { Branding } from "./Branding.js";
import { Name } from "./Name.js";

export const Card = (item) => {
  const { branding, name, thumbnail } = item;

  const cardElement = document.createElement("div");
  cardElement.className = "cardElement flex-column h-full p-5px";

  cardElement.appendChild(Image(thumbnail));
  cardElement.appendChild(Name(name));
  cardElement.appendChild(Branding(branding));

  return cardElement;
};
