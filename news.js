const loadMeals = (search) =>{
    /// ডাইনামিক করতে ডলার সাইন দিয়ে করা যায় 
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
    .then(res => res.json())
    .then(status => console.log(status));
}

loadMeals()