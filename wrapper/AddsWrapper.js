export const AddsWrapper = () => {
  const container = document.createElement("div");
  container.className = "pl-1 flex justify-between items-center";
  const section1 = document.createElement("div");
  section1.className = "flex gap-1";
  const label = document.createElement("span");
  label.className = "text-[0.5rem] font-bold text-slate-600";
  label.innerHTML = "AD CONTENT";
  const text = document.createElement("span");
  text.className = "text-[0.4rem] text-gray-500";
  text.innerHTML = "by";
  const icon = document.createElement("img");
  icon.src = "../assets/Taboola_Logo.png";
  icon.width = 50;

  section1.appendChild(label);
  section1.appendChild(text);
  section1.appendChild(icon);

  const section2 = document.createElement("div");
  const closeBtn = document.createElement("span");
  closeBtn.className =
    "font-bold text-sm text-slate-600 hover:cursor-pointer pl-1  md:p-1";
  closeBtn.innerHTML = "X";
  section2.appendChild(closeBtn);

  container.appendChild(section1);
  container.appendChild(section2);
  return container;
};
