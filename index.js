document.getElementById("searchInput").addEventListener("input", performSearch);

function performSearch() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(input)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
}

