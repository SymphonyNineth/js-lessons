const postsContainer = document.getElementById("posts");
const fetchButton = document.getElementById("fetchButton");

const url = "https://jsonplaceholder.typicode.com/posts";

function createPostElement(title, body) {
  const container = document.createElement("div");
  const titleElement = document.createElement("h3");
  const bodyElement = document.createElement("p");
  titleElement.innerText = title;
  bodyElement.innerText = body;
  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  return container;
}

fetchButton.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const postsElements = data.map((post) =>
        createPostElement(post.title, post.body)
      );
      // for (let i = 0; i < postsElements.length; i++) {
      //   postsContainer.appendChild(postsElements[i]);
      // }
      postsElements.forEach((element) => {
        postsContainer.appendChild(element);
      });
    });
});

// {
//   "userId": 1,
//   "id": 4,
//   "title": "eum et est occaecati",
//   "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
// },
