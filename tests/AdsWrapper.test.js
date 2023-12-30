const { JSDOM } = require("jsdom");
const AdsWrapper = require("../wrapper/AdsWrapper");

const dom = new JSDOM(
  `<!DOCTYPE html><html lang="en"><head></head><body></body></html>`
);
global.document = dom.window.document;

test("ads wrapper has children", () => {
  const adsWrapper = AdsWrapper();
  expect(adsWrapper.children).toBeTruthy();
});
