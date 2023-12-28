import { TaboolaAPI } from "./actions/TaboolaAPI.js";
import { Card } from "./card/Card.js";
import { OutboundLink } from "./card/OutboundLink.js";
import { AddsWrapper } from "./wrapper/AddsWrapper.js";

const elementContainer = document.getElementById("Ads");
elementContainer.className = "element-container";

elementContainer.appendChild(AddsWrapper());

const addsContainer = document.createElement("div");
addsContainer.className = "adds-container";

const adsData = await TaboolaAPI();

adsData &&
  adsData.forEach((ad) => {
    const { url } = ad;

    const link = OutboundLink(url);
    const card = Card(ad);

    link.appendChild(card);

    addsContainer.appendChild(link);
    elementContainer.appendChild(addsContainer);
  });
