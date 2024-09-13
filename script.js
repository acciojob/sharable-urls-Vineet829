let change = document.querySelector("#urlForm").addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.querySelector("#name").value.trim();
    let year = document.querySelector("#year").value;
    let queryString = "https://localhost:8080/";
    
    if (name) {
        queryString += `?name=${encodeURIComponent(name)}`;
    }
    
    if (year) {
        queryString += (name ? "&" : "?") + `year=${encodeURIComponent(year)}`;
    }
    
    document.querySelector("#url").innerText = queryString;
});

