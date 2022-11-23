const sorteio = parseInt(Math.random() * 89);

function sortear() {
  setTimeout(function () {
    document.getElementById("loader").style.display = "block";
    document.getElementById("p-gerar").style.display = "block";
    document.querySelector("h1").style.left = "185px";
    document.querySelector("h1").style.bottom = "100px";
  }, 1000);

  setTimeout(function () {
    document.getElementById(
      "sorteio"
    ).innerHTML = `<p class="p">Número: ${String(sorteio)}</p>`;
    document.getElementById("loader").style.display = "none";
    document.getElementById("p-gerar").style.display = "none";
    document.querySelector("h1").style.left = "0";
    document.querySelector("h1").style.bottom = "100px";
  }, 5000);
  setTimeout(function () {
    window.location.reload();
  }, 6000);
}
