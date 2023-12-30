const { JSDOM } = require("jsdom");
const Branding = require("../card/Branding.js");

const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.document = dom.window.document;

test("branding.innerHTML is defined", () => {
  const string = "branding string";
  const branding = Branding(string);
  expect(branding.innerHTML).toBeDefined();
});
