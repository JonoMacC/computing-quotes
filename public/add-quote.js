const submitButton = document.getElementById("submit-quote");
const newQuoteContainer = document.getElementById("new-quote");

const renderError = (response) => {
  newQuoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
};

submitButton.addEventListener("click", () => {
  const quote = document.getElementById("quote").value;
  const person = document.getElementById("person-choice").value;
  const year = document.getElementById("year").value;

  console.log(quote, person, year);

  fetch(`/api/quotes?quote=${quote}&person=${person}&year=${year}`, {
    method: "POST",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        renderError(response);
      }
    })
    .then((response) => {
      console.log(response);
      const newQuote = document.createElement("div");
      newQuote.innerHTML = `
      <h3>Congrats, your quote was added!</h3>
      <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
      `;
      newQuoteContainer.appendChild(newQuote);
    });
});
