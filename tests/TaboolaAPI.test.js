const TaboolaAPI = require("../actions/TaboolaAPI");

test("TaboolaAPI intergration test", async () => {
  const result = await TaboolaAPI();
  expect(result).toBeDefined();
});
