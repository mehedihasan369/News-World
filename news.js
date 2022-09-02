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
        
         const catagoryBtn = document.createElement('button');
         catagoryBtn.classList.add('categoryBtn');
         catagoryBtn.innerHTML = `${news_category.category_name}`;
         catagoriesContainer.appendChild(catagoryBtn);
    });
}


loadCategories()