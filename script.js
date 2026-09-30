// ============================
// MENU MOBILE
// ============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});


// ============================
// SEARCH LIVE
// ============================

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const closeSearch = document.getElementById("closeSearch");

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");


// Data sementara
const articles = [

  {
    title: "Update terbaru Mobile Legends membawa berbagai perubahan",
    category: "Mobile Legends"
  },

  {
    title: "PUBG Mobile menghadirkan update dan event terbaru",
    category: "PUBG Mobile"
  },

  {
    title: "Karakter dan konten baru Genshin Impact",
    category: "Genshin Impact"
  },

  {
    title: "Turnamen esports terbaru mulai digelar",
    category: "Esports"
  },

  {
    title: "Game baru yang sedang populer",
    category: "Games"
  }

];


// Buka search

searchBtn.addEventListener("click", () => {

  searchBox.classList.add("show");

  searchInput.focus();

});


// Tutup search

closeSearch.addEventListener("click", () => {

  searchBox.classList.remove("show");

  searchInput.value = "";

  searchResults.innerHTML = "";

});


// Search Live

searchInput.addEventListener("input", () => {

  const keyword = searchInput.value
    .toLowerCase()
    .trim();


  if (!keyword) {

    searchResults.innerHTML = "";

    return;

  }


  const results = articles.filter(article =>

    article.title.toLowerCase().includes(keyword) ||

    article.category.toLowerCase().includes(keyword)

  );


  if (results.length === 0) {

    searchResults.innerHTML = `
      <div class="search-result">
        Tidak ada berita ditemukan.
      </div>
    `;

    return;

  }


  searchResults.innerHTML = results
    .map(article => `

      <div class="search-result">

        <strong>
          ${article.title}
        </strong>

        <br>

        <small>
          ${article.category}
        </small>

      </div>

    `)
    .join("");

});
