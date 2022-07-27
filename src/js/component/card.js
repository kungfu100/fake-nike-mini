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
