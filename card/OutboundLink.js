const OutboundLink = (url) => {
  const element = document.createElement("a");
  element.href = url;
  element.target = "_blank";
  element.className = "flex";
  return element;
};
module.exports = OutboundLink;
