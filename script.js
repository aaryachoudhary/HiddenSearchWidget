const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});

input.addEventListener("keypress", function(event) {
    if(event.key === 'Enter'){
        const query = input.value.trim();
        if( query !== "") {
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
        }
    }
});