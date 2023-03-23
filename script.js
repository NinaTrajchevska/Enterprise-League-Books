
import myJson from "./listofbooks.json" assert { type: "json" };

// console.log(myJson);

// let tbody = document.getElementById("tbody");
// let btnSearch = document.getElementById("btnSearch");
// let span = document.getElementById("span");
// let sortAuthor = document.getElementById("sortAuthor");
// let sortGenre = document.getElementById("sortGenre");
// let sortTitle = document.getElementById("sortTitle");
// let sortedHeading=document.getElementById("sortedHeading");

// let sortedJson = myJson.sort((book1, book2) =>
//   book1.author.localeCompare(book2.author)
// );
// sortedJson.forEach(
//   (book) =>
//     (tbody.innerHTML += `<tr><td>${book.author}</td><td>${book.title}</td><td>${book.genre}</td></tr>`)
// );

// btnSearch.addEventListener("click", function () {
//   let input = document.getElementById("searchInput").value.toLowerCase();

//   let results = myJson.filter(function (item) {
//     if (
//       item.author.toLowerCase().includes(input) ||
//       item.title.toLowerCase().includes(input) ||
//       item.genre.toLowerCase().includes(input)
//     ) {
//       return true;
//     }
//   });

//   tbody.innerHTML = "";
//   console.log(results);

//   let sortedJsonSearch = results.sort((book1, book2) =>
//     book1.title.localeCompare(book2.title)
//   );
//   sortedJsonSearch.forEach(
//     (book) =>
//       (  tbody.innerHTML += `<tr><td>${book.author}</td><td>${book.title}</td><td>${book.genre}</td></tr>`)
//   );

//   sortTitle.addEventListener("click", function () {
//     let sortedJsonSearchTitle = results.sort((book1, book2) =>
//       book1.title.localeCompare(book2.title)
//     );
//     tbody.innerHTML = "";
//     sortedJsonSearchTitle.forEach(
//       (book) =>
//         (tbody.innerHTML += `<tr><td>${book.author}</td><td>${book.title}</td><td>${book.genre}</td></tr>`)
//     );
//   });

//     sortAuthor.addEventListener("click", function () {
//       let sortedJsonSearchAuthor = results.sort((book1, book2) =>
//         book1.author.localeCompare(book2.author)
//       );
//       tbody.innerHTML = "";
//       sortedJsonSearchAuthor.forEach(
//         (book) =>
//           (tbody.innerHTML += `<tr><td>${book.author}</td><td>${book.title}</td><td>${book.genre}</td></tr>`)
//       )
//     });

//       sortGenre.addEventListener("click", function () {
//         let sortedJsonSearchGenre = results.sort((book1, book2) =>
//           book1.genre.localeCompare(book2.genre)
//         );
//         tbody.innerHTML = "";
//         sortedJsonSearchGenre.forEach(
//           (book) =>
//             (tbody.innerHTML += `<tr><td>${book.author}</td><td>${book.title}</td><td>${book.genre}</td></tr>`)
//         );
//       });
  
//     })




let tbody = document.getElementById("tbody");
let btnSearch = document.getElementById("btnSearch");
let span = document.getElementById("span");
let sortAuthor = document.getElementById("sortAuthor");
let sortGenre = document.getElementById("sortGenre");
let sortTitle = document.getElementById("sortTitle");
let sortedHeading=document.getElementById("sortedHeading");

// selected sort property. this can be used when filtering the elements, to keep the same sort type
let selectedSortProperty;

// selected elements if there is a filtering
let activeElements = myJson;

// Initial sort by author
sortBy("author", myJson);

btnSearch.addEventListener("click", function () {
  let input = document.getElementById("searchInput").value.toLowerCase().trim();

  let results = myJson.filter(function (item) {
    if (
      item.author.toLowerCase().includes(input) ||
      item.title.toLowerCase().includes(input) ||
      item.genre.toLowerCase().includes(input)
    ) {
      return true;
    }
  });

 

  tbody.innerHTML = "";
  console.log(results);

  activeElements = results
  sortBy(selectedSortProperty, results);
})

sortTitle.addEventListener("click", function () {
  sortedHeading.innerText = 'Books sorted by Title'
  selectedSortProperty = "title";
  sortBy("title", activeElements);
});

sortAuthor.addEventListener("click", function () {
  selectedSortProperty = "author"
  sortedHeading.innerText = 'Books sorted by Author'
  sortBy("author", activeElements);
});

sortGenre.addEventListener("click", function () {
  selectedSortProperty = "genre"
  sortedHeading.innerText = 'Books sorted by Genre'
  sortBy("genre", activeElements);
});

// After writing the same logic for sorting in all event listener, I figured out I could extract the code in a function and just pass the property as an argument to the function
// This way I could reuse the same piece of code and my code looks really simple
function sortBy(property, array) {
  let sorted = array.sort((book1, book2) =>
    // this will be book1['author'] or book.author. Revise the object properties
    book1[property].localeCompare(book2[property])
  );
  tbody.innerHTML = "";
  sorted.forEach(
    (book) =>
      (tbody.innerHTML += `<tr><td>${book.author}</td><td>${book.title}</td><td>${book.genre}</td></tr>`)
  );
}