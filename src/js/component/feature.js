const feature = new Carousel("true");
const urlFeature = `${URL_BASE}${PATH_FEATURE}?${PARAM_FEATURE}${feature.nameId}`;

getData(urlFeature) 
 .then(res => res.json())
 .then(data => {
    //console.log(data.content);
    
    feature.addData(data.content);

    createCard(feature.carousels, "feature");
})
 .catch(err => console.log(err))