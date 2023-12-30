const Image = require("./Image.js");
const Branding = require("./Branding.js");
const Name = require("./Name.js");

const Card = (item) => {
  const { branding, name, thumbnail } = item;

  const cardElement = document.createElement("div");
  cardElement.className = "cardElement flex-column h-full p-5px";

  cardElement.appendChild(Image(thumbnail));
  cardElement.appendChild(Name(name));
  cardElement.appendChild(Branding(branding));
  return cardElement;
};
module.exports = Card;
