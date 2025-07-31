const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");

openButton.addEventListener("click", () => {
    envelope.classList.add("open");
    openButton.style.display = "none";
    closeButton.style.display = "inline-block";
});

closeButton.addEventListener("click", () => {
    envelope.classList.remove("open");
    closeButton.style.display = "none";
    openButton.style.display = "inline-block";
});
