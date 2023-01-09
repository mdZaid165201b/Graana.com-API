const URLS = {
    "lahore": "https://www.graana.com/residential/for_sale/lahore/all/2",
    "islamabad": "https://www.graana.com/residential/for_sale/islamabad/all/1",
    "rawalpindi": "https://www.graana.com/residential/for_sale/rawalpindi/all/3",
    "karachi": "https://www.graana.com/residential/for_sale/karachi/all/169",
    "peshawar": "https://www.graana.com/residential/for_sale/peshawar/all/176",
    "faisalabad": "https://www.graana.com/residential/for_sale/faisalabad/all/170",
    "multan": "https://www.graana.com/residential/for_sale/multan/all/168",
    "gujrat": "https://www.graana.com/residential/for_sale/gujrat/all/233",
    "kharian": "https://www.graana.com/residential/for_sale/kharian/all/235",
}

const getCityUrl = (name, min, max, page_no) => {
  const url = `${URLS[name]}?price_min=${min}&price_max=${max}&offset=30&page=${page_no}`;
  return url
};

module.exports = {
  getCityUrl,
};
