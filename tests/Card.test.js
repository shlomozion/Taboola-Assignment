const { JSDOM } = require("jsdom");
const Card = require("../card/Card");

const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.document = dom.window.document;

test("the card component is being renderd with the children", () => {
  // Mock data
  const item = {
    branding: "Test Brand",
    name: "Test Name",
    thumbnail: "test-thumbnail.jpg",
  };

  // Mock functions
  const mockImage = jest.fn();
  const mockName = jest.fn();
  const mockBranding = jest.fn();

  // Mock module imports
  jest.mock("../card/Image", () => jest.fn(() => mockImage));
  jest.mock("../card/Name", () => jest.fn(() => mockName));
  jest.mock("../card/Branding", () => jest.fn(() => mockBranding));

  // Call the function under test
  const card = Card(item);
  // Assertions
  expect(card.children.length).toBeGreaterThan(0);
});
