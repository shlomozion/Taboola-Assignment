export const Branding = (branding) => {
  const brandingContainer = document.createElement("div");

  const brand = document.createElement("span");
  brand.className = "font-bold text-sm italic text-slate-600";
  brand.innerHTML = branding;

  brandingContainer.appendChild(brand);

  return brandingContainer;
};
