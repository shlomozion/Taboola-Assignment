const TaboolaAPI = async () => {
  try {
    const res = await fetch(
      `http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187`
    );
    const data = await res.json();
    const dataList = data.list;
    return dataList;
  } catch (error) {
    console.log(error);
  }
};
export default TaboolaAPI;
