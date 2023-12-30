import TaboolaAPI from "./actions/TaboolaAPI.js";
import Card from "./card/Card.js";
import OutboundLink from "./card/OutboundLink.js";
import AdsWrapper from "./wrapper/AdsWrapper.js";

const elementContainer = document.getElementById("Ads");
elementContainer.className = "element-container";

elementContainer.appendChild(AdsWrapper());

const adsContainer = document.createElement("div");
adsContainer.className = "adds-container";

const adsData = await TaboolaAPI();

adsData &&
  adsData.forEach((ad) => {
    const { url } = ad;

    const link = OutboundLink(url);
    const card = Card(ad);

    link.appendChild(card);

    adsContainer.appendChild(link);
    elementContainer.appendChild(adsContainer);
  });
