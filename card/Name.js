const Name = (name) => {
  const element = document.createElement("span");
  element.className = "name text-color-slate-600";
  element.innerHTML = name;

  return element;
};
export default Name;
