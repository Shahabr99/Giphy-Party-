//User searches for a giph
$("form").on("submit", function (e) {
  e.preventDefault();
  const input = $("#search").val();
  getGiphy(input);
});

//axios gets the data for rendering
async function getGiphy(searchTerm) {
  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });
  const num = res.data.data.length;
  const randomIndex = Math.floor(Math.random() * num);
  const giph = res.data.data[randomIndex];

  renderGiphy(giph);
}

function renderGiphy(el) {
  $("<img/>")
    .css({ width: "200px", height: "200px" })
    .attr("src", `${el.images.original.url}`)
    .appendTo(".giph-holder");
}

//Removing images
$(".remove-imgs").on("click", function () {
  $(".giph-holder").empty();
});
