export const Branding = (branding) => {
  const brand = document.createElement("span");
  brand.className = "brand";
  brand.innerHTML = branding;

  return brand;
};
