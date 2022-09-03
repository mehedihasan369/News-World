const loadCategories = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(status => displayCategoies(status.data.news_category));
}

 /////---category buttons--------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const displayCategoies = catagory =>{
    const catagoriesContainer = document.getElementById('catagory')
    catagory.forEach(news_category => {
        
         const catagoryBtn = document.createElement('div');
         catagoryBtn.classList.add('categoryBtn');
         catagoryBtn.innerHTML = `<button onclick="onclickCategory(${news_category.category_id})" type="button"  class="btn btn-light text-secondary">${news_category.category_name}</button>`;
         catagoriesContainer.appendChild(catagoryBtn);
        ////----------
        
        ///--------
    });
}

///catagory id calling--------
const onclickCategory =(category_id) =>{ 
    // console.log(category_id)
    loadArticles(category_id)
}
///>>>>>>>>>>>>>News cards------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const loadArticles = (categoryId) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/0${categoryId}`
    fetch(url)
    .then(res => res.json())
    .then(status => displayArticle(status.data) );
    
}

// ////----------displayArticle(status.data.news_category)-------------

const displayArticle = article => {
    const articleCard = document.getElementById('articleCard')
    article.forEach(data => {
        console.log(data);
    });
}

loadCategories()