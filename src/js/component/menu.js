class Menu {
    constructor() {
        this.categories = [];
    }

    addCategories(arr) {
        if (arr.length > 0) {
            this.categories = arr;
        } else {
            console.log("empty categories");
        }
    }
}

//============================================
const categoriesMenu = new Menu();
const urlMenu = `${URL_BASE}${PATH_ALL_CATEGORY}`;

const isEmptyArr = (fun) => (obj) => fun(obj).length > 0 ? true : false;

//-------------------------------------
// CREATE LINK
const createLink = valueId => {
    let a = document.createElement("a");
    let urlCategoryId = `./src/component/ListProduct/ListProduct.html?categoryId=${valueId}`;
    a.textContent = valueId.replace("_", " ");
        
    a.setAttribute("href", urlCategoryId);

    return a;
}

//-------------------------------------
// CREATE LI
const createLi = valueId => {

    let li = document.createElement("li");

    li.appendChild(createLink(valueId));

    return li;
}

//-------------------------------------
// CREATE DROPDOWN
const createDropdown = categoryChild => {
    let dropdown = document.createElement("ul");
    dropdown.setAttribute("class", "dropdown");

    for (item of categoryChild) {
        dropdown.appendChild(createLi(item.id));
    }
    
    return dropdown;
}

//-------------------------------------
// ADD TITLE MENU
const addTitleMenu = (categories) => {
    const menu = queryAll(".js-menu");
    let categoryChild = [];
    let li = null;
    let dropdown = null;
        
    for (childMenu of menu) {
        for (category of categories) {
            categoryChild = parseObj(category.categoryChild);

            li = createLi(category.id);

            if (isEmptyArr(parseObj)(category.categoryChild)) {
                dropdown = createDropdown(categoryChild);
                li.appendChild(dropdown);
            }

            childMenu.appendChild(li);
        }
    }
}

//-------------------------------------
// GET DATA
getData(urlMenu)
    .then(res => res.json())
    .then(data => {
        categoriesMenu.addCategories(data.content);

        addTitleMenu(categoriesMenu.categories);
    })
    .catch(err => console.log(err))
