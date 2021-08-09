// Navigation

const menuBtn = document.querySelector("nav .btn");
const manuLst = document.querySelector("nav .menu");

menuBtn.onclick = () =>
  manuLst.classList.toggle("active")
    ? (menuBtn.innerHTML = "&times;")
    : (menuBtn.innerHTML = "&equiv;");
