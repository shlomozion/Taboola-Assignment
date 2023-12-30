const { JSDOM } = require("jsdom");
const Image = require("../card/Image.js");

const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.document = dom.window.document;

test("image.innerHTML is defined", () => {
  const string = "Image string.jpg";
  const image = Image(string);
  expect(image.innerHTML).toBeDefined();
});
