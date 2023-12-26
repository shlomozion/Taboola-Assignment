export const Name = (name) => {
  const nameContainer = document.createElement("div");

  const element = document.createElement("span");
  element.className = "text-sm underline text-slate-600";
  element.innerHTML = name;

  nameContainer.appendChild(element);

  return nameContainer;
};
