import "./styles.css";

const modalOpen = document.getElementById("open");
const modalClose = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

modalOpen.onclick = () => {
  modal.style.display = "flex";
};

modalClose.onclick = () => {
  modal.style.display = "none";
};
