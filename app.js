const accessKey = 'NLNY6s3Zbno2otADOpVPib_vxhBMZA6KxQBmQ1q3euw';

const form = document.getElementById('Search-form');
const searchBox = document.getElementById('Search-box');
const searchResults = document.getElementById('search-result');
const showMore = document.getElementById('show-more-btn');


let keyword = "";
let page = 3;

const searchImage = async () => {
//    async function searchImage (){
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
    console.log(data);
    if(page === 3){
        searchResults.innerHTML="";
    }

  const results = data.results;
  results.map((result) => {
    const image = document.createElement('img');
    image.src = result.urls.small;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target= '_blank';
    imageLink.appendChild(image);
    searchResults.appendChild(imageLink);
  })
  showMore.style.display = "block";
}

form.addEventListener('submit' , (e)=> {
    e.preventDefault();
    page= 3;
    searchImage();
})

showMore.addEventListener('click', () =>{
    page++;
    searchImage();
})
