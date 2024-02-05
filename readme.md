# TASK FREE DICTIONARY API SUMMITION..

#### _CREATE A HTML FILE NAME_: `index.html`

#### Codes..

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css" />
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
    />
  </head>
  <body>
    <div class="container-fluid">
      <h1
        class="display-3 heading text-white text-uppercase fst-italic border border-light m-3 rounded-pill"
      >
        Free Dictionary
        <span id="icon" class="material-symbols-outlined"> library_books </span>
      </h1>
      <br /><br />
      <div class="container wrapper">
        <br />
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8">
            <div class="search">
              <input type="text" placeholder="Type the word here" />
              <button type="button">Search</button>
            </div>
          </div>
          <!--end of col-->
        </div>
        <div>
          <p class="info-text col-12 col-md-10 col-lg-8">
            Type a word and press enter to get meaning.example, pronounciacns
            and synonyms of that typed word.
          </p>
          <ul>
            <li class="word col-12 col-md-10 col-lg-8">
              <div class="details">
                <p>_</p>
                <span>_</span>
              </div>
            </li>
            <div class="content col-12 col-md-10 col-lg-8">
              <li class="meaning col-12 col-md-10 col-lg-8">
                <div class="details">
                  <p>Meaning</p>
                  <span>_</span>
                </div>
              </li>
              <li class="example col-12 col-md-10 col-lg-8">
                <div class="details">
                  <p>Example</p>
                  <span>_</span>
                </div>
              </li>
              <li class="synonyms">
                <div class="details col-12 col-md-10 col-lg-8">
                  <p>Synonyms</p>
                  <div class="list"></div>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <script src="./js/script.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
  </body>
</html>


```

##### In head tag add css `style.css` bootstrap link....

#### Codes..

```
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
  background-repeat: no-repeat;
  height: 100vh;
}
/* search box */
.search {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.search input {
  width: 70%;
  padding: 5px;
  outline: none;
  border: none;
  border-bottom: 2px solid rgb(134, 92, 180);
}
.search button {
  padding: 5px 0;
  width: 25%;
  background-color: rgb(26, 129, 26);
  color: white;
  border-radius: 30px;
}
.heading {
  padding: 10px;
  justify-content: center;
  text-align: center;
}
/*  main-container */
.container {
  top: 50%;
  background-color: white;
  border-radius: 30px;
  width: 50vw !important;
  justify-content: center;
  align-items: center;
}

/*  */
.search input:valid ~ span {
  display: block;
}

.wrapper.active ul {
  display: block;
}

.wrapper.active .info-text {
  display: none;
}

.wrapper .info-text {
  margin: 15px;
  font-size: 13px;
  color: #9a9a9a;
  transition: all 0.3s ease;
  text-align: center;
  justify-content: center !important;

  padding-bottom: 20px;
}

.info-text span {
  font-weight: 500;
}

.wrapper ul {
  display: none;
  transition: all 0.3s ease;
}

ul .content {
  max-height: 215px;
  overflow-y: auto;
}

ul .content::-webkit-scrollbar {
  width: 0;
}

.wrapper ul li {
  display: flex;
  margin-bottom: 14px;
  padding-bottom: 17px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}

.wrapper ul li:last-child {
  margin: 0;
  padding: 0;
  border: none;
}

ul .word p {
  font-size: 22px;
  font-weight: 500;
}

ul .word span {
  font-size: 12px;
  color: #989898;
}

ul .word i {
  cursor: pointer;
  font-size: 15px;
  color: #999;
}

.content li .details {
  padding-left: 10px;
  border-radius: 4px 0 0 4px;
  border-left: 3px solid #4d59fb;
}

.content li p {
  font-size: 17px;
  font-weight: 500;
}

.content li span {
  font-size: 15px;
  color: #7e7e7e;
}

.synonyms .details .list {
  display: flex;
  flex-wrap: wrap;
}

.synonyms .details .list span {
  margin-right: 5px;
  text-decoration: underline;
  cursor: pointer;
}


```

#### create a js file `script.js`.

##### codes in file.

```
const wrapper = document.querySelector(".wrapper"),
  searchInput = wrapper.querySelector("input"),
  searchButton = wrapper.querySelector("button"),
  volume = wrapper.querySelector(".word"),
  infoText = wrapper.querySelector(".info-text"),
  synonyms = wrapper.querySelector(".synonyms .list");

function data(result, word) {
  return new Promise((resolve, reject) => {
    if (result.title) {
      reject(
        `Can't find the meaning of "${word}". Please, try to search for another word.`
      );
    } else {
      wrapper.classList.add("active");
      let definitions = result[0].meanings[0].definitions[0],
        phontetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`;
      document.querySelector(".word p").innerText = result[0].word;
      document.querySelector(".word span").innerText = phontetics;
      document.querySelector(".meaning span").innerText =
        definitions.definition;
      document.querySelector(".example span").innerText = definitions.example;

      if (definitions.synonyms[0] == undefined) {
        synonyms.parentElement.style.display = "none";
      } else {
        synonyms.parentElement.style.display = "block";
        synonyms.innerHTML = "";
        for (let i = 0; i < 5; i++) {
          let tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[i]},</span>`;
          tag =
            i == 4
              ? (tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[4]}</span>`)
              : tag;
          synonyms.insertAdjacentHTML("beforeend", tag);
        }
      }
      resolve();
    }
  });
}

function search(word) {
  fetchApi(word)
    .then(() => {
      searchInput.value = word;
    })
    .catch((error) => {
      console.error(error);
    });
}

function fetchApi(word) {
  wrapper.classList.remove("active");
  infoText.style.color = "#000";
  infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => data(result, word))
    .catch(() => {
      infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
    });
}

searchInput.addEventListener("keyup", (e) => {
  let word = e.target.value.replace(/\s+/g, " ");
  if (e.key == "Enter" && word) {
    fetchApi(word);
  }
});
searchButton.addEventListener("click", () => {
  let word = searchInput.value.replace(/\s+/g, " ");
  if (word) {
    fetchApi(word);
  }
});


```
