const request = require("request-promise");
const { getCityUrl } = require("../utils/utilCityUrls");
const { getJsonData } = require("../utils/utils");

const getProperties = async (req, res, next) => {
  try{
    let min = 0; // default value
  let max = 289900000; // default value
  let city = "lahore";
  if (req.headers.min || req.headers.max, req.headers.city) {
    min = req.headers.min;
    max = req.headers.max;
    city = req.headers.city.toLowerCase();
  }

  let page_no = req.query.page_no;
  page_no = page_no === undefined ? 1 : page_no;
  const url = getCityUrl(city, min, max, page_no);

  const html = await request.get(url);
  const finalData = await getJsonData(html);

  res.send({ count: finalData.length, data: finalData });
  }
  catch(err){
    res.send(err.message)
  }
};


module.exports = {
  getProperties,
};
