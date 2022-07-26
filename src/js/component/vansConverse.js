const vansConverse = new Carousel("VANS_CONVERSE");
const urlVansConverse = `${URL_BASE}${PATH_CATEGORY}?${PARAM_CATEGORY}${vansConverse.nameId}`

const createCard = (cards, id) => {
    let content = "";

    for (card of cards) {
        content += `
            <div class="col col-12 col-6-sm col-3-mid">
                <a href="#">
                    <img src=${card.image} alt="" width="260" height="260">
                    <h3>${card.name}</h3>
                    <p>$${card.price}</p>
                </a>
            </div>
        `;
    }
    
    getId(id).innerHTML = content;
}

getData(urlVansConverse)
    .then(res => res.json())
    .then(data => {
        //console.log(data.content);
        vansConverse.addData(data.content);

        createCard(vansConverse.carousels, "vans-converse");
    })
    .catch(err => console.log(err))
