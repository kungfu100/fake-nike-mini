const feature = new Carousel("true");
const urlFeature = `${URL_BASE}${PATH_FEATURE}?${PARAM_FEATURE}${feature.nameId}`;

getData(urlFeature)
    .then(res => res.json())
    .then(data => {
        let posStart = 0;    
    
        feature.addData(data.content);

        createCard(feature.sliceData(posStart), "feature");
    
        carouselControl(posStart, feature, 1);   
    })
    .catch(err => console.log(err))
