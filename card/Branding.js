const Branding = (branding) => {
  const brand = document.createElement("span");
  brand.className = "brand text-color-slate-600";
  brand.innerHTML = branding;

  return brand;
};
export default Branding;
