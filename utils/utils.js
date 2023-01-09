const cheerio = require("cheerio");


const getJsonData = async(html) => {
  const $ = await cheerio.load(html);
  const htmlData = await $("#__NEXT_DATA__").html();
  const jsonData = JSON.parse(htmlData);
  const { items } = jsonData.props.pageProps.propertyServer.listings;

  const finalData = [];

  const formatPrice = new Intl.NumberFormat();
  items.forEach((item, index) => {
    const JsonDataStructure = {
      id: item.id,
      type: item.type,
      price: formatPrice.format(item.price),
      plot_size: item.size,
      size_unit: item.size_unit,
      view: item.view,
      bed: item.bed,
      bath: item.bath,
      features: JSON.parse(item.features),
      phone: item.phone,
      title: item.custom_title,
      city: item.city.name,
      agency: item.agency === null ? "" : item.agency.name,
      area: item.area,
      property_images: item.property_images,
    };
    finalData.push(JsonDataStructure);
  });
  return finalData;
}

module.exports = { getJsonData }