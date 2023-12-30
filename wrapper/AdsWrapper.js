const AdsWrapper = () => {
  const adsWrapper = document.createElement("div");
  adsWrapper.className = "ads-wrapper flex justify-between items-center";

  const section1 = document.createElement("div");
  section1.className = "section1 flex";

  const label = document.createElement("span");
  label.className = "label flex text-color-slate-600";
  label.innerHTML = "AD CONTENT";

  const text = document.createElement("span");
  text.className = "text text-color-gray-500";
  text.innerHTML = "by";

  const icon = document.createElement("img");
  icon.src = "./assets/Taboola_Logo.png";
  icon.width = 50;

  section1.appendChild(label);
  section1.appendChild(text);
  section1.appendChild(icon);

  const section2 = document.createElement("div");

  const closeBtn = document.createElement("span");
  closeBtn.className = "close-btn flex text-color-slate-600";
  closeBtn.innerHTML = "X";
  closeBtn.addEventListener("click", function () {
    const [element] = document.getElementsByClassName("adds-container");
    element.classList.toggle("closeAnimation");
  });
  closeBtn.addEventListener("click", function () {
    if (closeBtn.innerHTML === "X") {
      return (closeBtn.innerHTML = "See More");
    }
    if (closeBtn.innerHTML === "See More") {
      return (closeBtn.innerHTML = "X");
    }
  });

  section2.appendChild(closeBtn);

  adsWrapper.appendChild(section1);
  adsWrapper.appendChild(section2);

  return adsWrapper;
};
export default AdsWrapper;
