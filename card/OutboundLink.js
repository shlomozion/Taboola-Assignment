export const OutboundLink = (url) => {
  const element = document.createElement("a");
  element.href = url;
  element.target = "_blank";
  element.className = "outbound-link";
  return element;
};
