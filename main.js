const settingBtn = document.querySelector(".btn-div button");
const sideBar = document.querySelector(".overlay");
const closeBtn = document.querySelector(".side-bar button");
settingBtn.onclick = () => {
    sideBar.classList.remove("d-none");
}

closeBtn.onclick = () => {
    sideBar.classList.add("d-none");
}
