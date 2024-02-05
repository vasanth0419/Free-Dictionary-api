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
