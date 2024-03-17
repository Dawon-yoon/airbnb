document.querySelectorAll(".category-bar__btn").forEach(button => { 
    button.addEventListener("click", event => { 
        document.querySelector("#active-categoryBtn").removeAttribute("id");
        button.setAttribute("id", "active-categoryBtn");
    })
})
