async function getData(){
  const url = "https://jsonplaceholder.typicode.com/posts"
try{
  const response = await fetch(url,{
    method: "GET",
  });
  const result = await response.json();
  const titleElement = document.getElementById('titleId');
  const titles = result.map(post =>{
    return post.title;
  });
  titles.forEach(element => {
    let titlesDiv = document.createElement('div')
    titlesDiv.innerText = element;
    titleElement.appendChild(titlesDiv)
  });
  
  console.log(titles);
} catch(err){
  console.error(err);
}
}
getData();

