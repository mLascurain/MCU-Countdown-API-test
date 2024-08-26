const url = "https://www.whenisthenextmcufilm.com/api";

fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then((result) => {
    const title = result.title;
    const releaseDate = result.release_date;
    const poster = result.poster_url;
    const daysUntil = result.days_until;
    const dataArray = { title, releaseDate, poster, daysUntil };
    addItemsToDOM(dataArray);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
    // display  error message to user
    const container = document.getElementById("container");
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Failed to load data. Please try again later.";
    container.appendChild(errorMessage);
  });

function addItemsToDOM(items) {
  const container = document.getElementById("container");

  // create elements for each item
  const titleElement = document.createElement("h2");
  titleElement.textContent = items.title;

  const releaseDateElement = document.createElement("p");
  releaseDateElement.textContent = `Release Date: ${items.releaseDate}`;

  const posterElement = document.createElement("img");
  posterElement.src = items.poster;
  posterElement.alt = `${items.title} Poster`;

  const daysUntilElement = document.createElement("p");
  daysUntilElement.textContent = `Days Until Release: ${items.daysUntil}`;

  // append elements to the container
  container.appendChild(titleElement);
  container.appendChild(releaseDateElement);
  container.appendChild(posterElement);
  container.appendChild(daysUntilElement);
}
