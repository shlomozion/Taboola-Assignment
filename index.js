import { TaboolaAPI } from "./actions/TaboolaAPI.js";
import { Card } from "./card/Card.js";
import { OutboundLink } from "./card/OutboundLink.js";
import { AddsWrapper } from "./wrapper/AddsWrapper.js";

const elementContainer = document.getElementById("Ads");
elementContainer.className = "element-container";

const addsContainer = document.createElement("div");
addsContainer.className = "adds-container";

const adsData = await TaboolaAPI();

elementContainer.appendChild(AddsWrapper());

adsData &&
  adsData.forEach((add) => {
    const { url } = add;

    const link = OutboundLink(url);
    const card = Card(add);

    link.appendChild(card);

    addsContainer.appendChild(link);
    elementContainer.appendChild(addsContainer);
  });
