const $infoContainer = document.querySelector(".info__container");
const url = "https://www.whenisthenextmcufilm.com/api";
fetch(url)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    const title = document.createElement("h2");
    title.innerHTML = res.title;
    $infoContainer.appendChild(title);
    const rlsDate = document.createElement("p");
    rlsDate.innerHTML = res.release_date;
    $infoContainer.appendChild(rlsDate);
    const img = document.createElement("img");
    img.src = res.poster_url;
    $infoContainer.appendChild(img);
    const daysUntil = document.createElement("h3");
    daysUntil.innerHTML = `Days Until Realise: ${res.days_until}`;
    $infoContainer.appendChild(daysUntil);
  })
  .catch((err) => console.log(err));
