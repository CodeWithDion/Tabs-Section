const tabsEl = document.querySelector(".tabs");
const buttonEl = document.querySelectorAll(".button");
const contentEl = document.querySelectorAll(".content");

tabsEl.addEventListener("click", (event) => {
    const id = event.target.dataset.id;

    if (id) {
        buttonEl.forEach((btn) => {
            btn.classList.remove("live");
        });
        event.target.classList.add("live");

        contentEl.forEach((content) => {
            content.classList.remove("live");
        });
        const element = document.getElementById(id);
        element.classList.add("live");
    }
})