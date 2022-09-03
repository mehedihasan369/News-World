const loadCategories = () =>{
    
    // const url = `https://openapi.programming-hero.com/api/news/categories`
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
         catagoryBtn.innerHTML = `<button onclick="onclickCategory()" type="button"  class="btn btn-light text-secondary">${news_category.category_name}</button>`;
         catagoriesContainer.appendChild(catagoryBtn);
        
    });

    
}

///>>>>>>>>>>>>>News cards------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const loadCategories = () =>{
//     const url = `https://openapi.programming-hero.com/api/news/categories`
//     fetch(url)
//     .then(res => res.json())
//     .then(status => displayCategoies(status.data.news_category));
// }

// ////-----------------------
const onclickCategory =() =>{
    // console.log('abc');বাকি আছে 

}


loadCategories()