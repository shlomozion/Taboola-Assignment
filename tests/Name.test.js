const { JSDOM } = require("jsdom");
const Name = require("../card/Name");

const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.document = dom.window.document;

test("name.innerHTML is defined", () => {
  const string = "name string";
  const name = Name(string);
  expect(name.innerHTML).toBeDefined();
});
