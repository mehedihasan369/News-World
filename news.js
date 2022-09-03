const loadCategories = () =>{
  const url = `https://openapi.programming-hero.com/api/news/categories`
  fetch(url)
  .then(res => res.json())
  .then(status => displayCategoies(status.data.news_category));
  try {
  }
  catch(err) {
    document.getElementById("sortResult").innerHTML = err.message;
  }
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
   
  loadArticles(category_id);
  toggleSpinner(true);
}


//////---------spinner-----------------
const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('loader');
  if(isLoading){
      loaderSection.classList.remove('d-none')
  }
  else{
      loaderSection.classList.add('d-none');
  }
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
  
  const articleCard2 = document.getElementById('articleCard');
  articleCard2.textContent = '';
  if (article == '') {
    articleCard2.textContent = 'No News';
    toggleSpinner(false);
  }
  
  article.forEach(data => {
      const newsCard = document.createElement('div');

          newsCard.innerHTML = `
      <div class="card  m-3" style=" height:300px ;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${data.thumbnail_url ? data.thumbnail_url : 'No image availeable.'}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data.title ? data.title : 'No title available.'}</h5>
            <p class="card-text">${data.details.slice(0,350)}...</p>
              <div class="d-flex justify-content-between">
                        <div class="d-flex">
                           <img src="${data.author.img ? data.author.img : 'No image availeable.'}" class="img-fluid rounded-5 m-1"        style="height: 3rem; width: 3rem;">
                           <p class="card-text"><small class="fw-semibold">${data.author.name ? data.author.name : 'No data available.'}</small><br> <small class="text-muted">${data.author.published_date ? data.author.published_date : 'No data available'}</small></p>
                         </div>

                      <div class="text-muted d-flex">
                        <i class="fa-regular fa-eye fs-2"></i>
                         <p class="fw-bold fs-5">${data.total_view ? data.total_view : 'No data available.'}</p>
                      </div>

                       <div>
                       <button onclick="loadNewsDetails('${data._id ? data._id :'No Data availeable'}')" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#newsModal">
                       <i class="fa-solid fa-arrow-right text-primary fs-2"></i>
                     </button>
                       </div>

              </div>
             
          </div>
        </div>
      </div>
    </div>
      `
      // const dbs = data._id;
      // console.log(dbs);
  
      articleCard2.appendChild(newsCard);
      // console.log()
   
      toggleSpinner(false);
  
     
      
  });
}
/////////---modal-------------

const loadNewsDetails = async id =>{
  const url =`https://openapi.programming-hero.com/api/news/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayNewsDetails(data.data);
  // toggleSpinner(true);
}

const displayNewsDetails = loadData =>{
  const appendNewsDetails = document.getElementById('newsModal');
  appendNewsDetails.textContent = '';
  loadData.forEach(data => {
    const newsDetails = document.createElement('div');
    newsDetails.innerHTML =`
    <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="newsModalLabel">${data.title ? data.title : 'No data available'}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <img src="${data.thumbnail_url ? data.thumbnail_url : 'No image available'}" class="w-100 h-50">
        <div>
            ${data.details ? data.details : 'No data available'}
        </div>
        
    </div>
    <!--------------->
    <div class="d-flex justify-content-between">
        <div class="d-flex">
        <img src="${data.author.img ? data.author.img : 'No image available.'}" class="img-fluid rounded-5 m-1" style="height: 3rem; width: 3rem;">
        <p class="card-text"><small class="fw-semibold">${data.author.name ? data.author.name : 'No data available'}</small><br> <small class="text-muted">${data.author.published_date ? data.author.published_date : 'No information available.'}</small></p>
    </div>

     <div class="text-muted d-flex">
       <i class="fa-regular fa-eye fs-2"></i>
         <p class="fw-bold fs-5">${data.total_view ? data.total_view : 'No data available'}</p>
    </div>
   </div>


    <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             </div>
      </div>
    `
    appendNewsDetails.appendChild(newsDetails);
    console.log(data.author.name);
  })
  
}


loadCategories()
loadArticles(1)