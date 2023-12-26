import { Image } from "./Image.js";
import { Branding } from "./Branding.js";
import { Name } from "./Name.js";

export const Card = (item) => {
  const { branding, name, thumbnail } = item;

  const cardContainer = document.createElement("div");
  cardContainer.className = "";

  const cardElement = document.createElement("div");
  cardElement.className = `h-full flex shadow-xl bg-white flex-col hover:cursor-pointer hover:bg-slate-100`;

  cardElement.appendChild(Image(thumbnail));
  cardElement.appendChild(Name(name));
  cardElement.appendChild(Branding(branding));

  cardContainer.appendChild(cardElement);
  return cardContainer;
};
