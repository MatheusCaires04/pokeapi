const btn = document.querySelector("form");
let datas = document.querySelector(".data");

btn.addEventListener("submit", (e) => {
  e.preventDefault();

  let namePoke = document.querySelector(".poke").value;
  let urlPoke = `https://pokeapi.co/api/v2/pokemon/${namePoke}`;

  datas.classList.add("active");

  fetch(urlPoke)
    .then((resp) => resp.json())
    .then((data) => {
      datas.innerHTML = `
        <div class="btn__close">X</div>
        <span class="poke__name">Nome: <strong>${data.name}</strong></span>
        <span class="poke__id">Nº pokémon: <strong>${data.id}</strong></span>
        <img class="poke__image" src=${data.sprites.front_default} />
      `;

      const btnClose = document.querySelector(".btn__close");

      btnClose.addEventListener("click", () => {
        datas.classList.remove("active");
        const inputReset = document.querySelector(".poke");
        inputReset.value = "";
      });
    })
    .catch((err) => console.log(err));
});
