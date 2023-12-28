export const AddsWrapper = () => {
  const adsWrapper = document.createElement("div");
  adsWrapper.className = "ads-wrapper";

  const section1 = document.createElement("div");
  section1.className = "section1";

  const label = document.createElement("span");
  label.className = "label";
  label.innerHTML = "AD CONTENT";

  const text = document.createElement("span");
  text.className = "text";
  text.innerHTML = "by";

  const icon = document.createElement("img");
  icon.src = "../assets/Taboola_Logo.png";
  icon.width = 50;

  section1.appendChild(label);
  section1.appendChild(text);
  section1.appendChild(icon);

  const section2 = document.createElement("div");

  const closeBtn = document.createElement("span");
  closeBtn.className = "close-btn";
  closeBtn.innerHTML = "X";

  section2.appendChild(closeBtn);

  adsWrapper.appendChild(section1);
  adsWrapper.appendChild(section2);

  return adsWrapper;
};
