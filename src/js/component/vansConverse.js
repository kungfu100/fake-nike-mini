const vansConverse = new Carousel("VANS_CONVERSE");
const urlVansConverse = `${URL_BASE}${PATH_CATEGORY}?${PARAM_CATEGORY}${vansConverse.nameId}`

getData(urlVansConverse)
    .then(data => {
        vansConverse.addData(data.content);

        createCard(vansConverse.carousels, "vans-converse");
    })
    .catch(err => console.log(err))
