const btn = document.querySelector(".btn");
const btnSatu = document.querySelector(".btnSatu");
const btnDua = document.querySelector(".btnDua");
const btnTiga = document.querySelector(".btnTiga");
const btnEmpat = document.querySelector(".btnEmpat");
const main = document.querySelector(".main");
const mainSatu = document.querySelector(".main-satu");
const mainDua = document.querySelector(".main-dua");
const mainTiga = document.querySelector(".main-tiga");
const mainEmpat = document.querySelector(".main-empat");
const mainLima = document.querySelector(".main-lima");
const nama = document.querySelector(".name");
const spanName = document.querySelector(".spanName");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const names = nama.value;

  console.log(names);
  main.style.display = "none";
  mainSatu.style.display = "block";
  spanName.innerHTML = `Hallo ${names}`;
});

btnSatu.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("oke");

  mainDua.style.display = "block";
  mainSatu.style.display = "none";
});
btnDua.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("oke");

  mainTiga.style.display = "block";
  mainDua.style.display = "none";
});
btnTiga.addEventListener("click", function (e) {
  e.preventDefault();

  mainEmpat.style.display = "block";
  mainTiga.style.display = "none";
});
btnEmpat.addEventListener("click", function (e) {
  e.preventDefault();

  mainLima.style.display = "block";
  mainEmpat.style.display = "none";
});
