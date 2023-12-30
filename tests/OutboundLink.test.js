const { JSDOM } = require("jsdom");
const OutboundLink = require("../card/OutboundLink");

const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.document = dom.window.document;

test("OutboundLink.innerHTML is defined", () => {
  const string = "OutboundLink string";
  const outboundLink = OutboundLink(string);
  expect(outboundLink.innerHTML).toBeDefined();
});
