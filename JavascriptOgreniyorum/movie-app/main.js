const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.getElementById("main");
const form = document.getElementById("form");
const seac = document.getElementById("search");


async function getMovie(url) {
    const repo = await fetch(url);
    const repoData = await repo.json();

    getmovieList(repoData.results);


}
getMovie(APIURL);


function getmovieList(getmovie) {
    main.innerHTML = "";
    getmovie.forEach((movies) => {
        const {
            poster_path,
            title,
            vote_average,
            overview,
            original_language,
            release_date
        } = movies;
        if (IMGPATH != "") {
            const movieLis = document.createElement("div");
            movieLis.classList.add("movie");

            movieLis.innerHTML = `

    <img src="${IMGPATH + poster_path}" alt="" >
        <h2> ${title} <span class="${getclassByrate(vote_average)}">${vote_average}</span></h2>
<div class="overview">
<h2>${title}</h2>
${overview}
<br><br>
<h5 style="text-transform:uppercase;"> Orjinal Dil: ${original_language}</h5>
<h5>Yayınlama zamanı: ${release_date} </h5>
</div>
`;
            main.appendChild(movieLis);
        }





    });

}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searcform = seac.value;

    if (searcform) {
        getMovie(SEARCHAPI + searcform);

        searcform.value = "";
    }

})




function getclassByrate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orenge";

    } else {
        return "red";
    }
}