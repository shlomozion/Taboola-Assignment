import { TaboolaAPI } from "./actions/TaboolaAPI.js";
import { Card } from "./card/Card.js";
import { OutboundLink } from "./card/OutboundLink.js";
import { AddsWrapper } from "./wrapper/AddsWrapper.js";

const elementContainer = document.getElementById("Ads");
elementContainer.className =
  " max-md:gap-1 max-md:p-2 md:w-[20%] md:h-[100vh] md:absolute md:right-0 md:overflow-y-scroll md:border";

const addsContainer = document.createElement("div");
addsContainer.className =
  "max-md:grid max-md:grid-cols-2 max-md:gap-2 md:shadow-lg";

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
