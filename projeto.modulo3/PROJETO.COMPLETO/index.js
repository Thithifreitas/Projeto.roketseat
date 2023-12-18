function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light")

    /*pegar a tag img*/
    const img = document.querySelector("#profile img")

    /*subistituir imagem*/
   
    if (html.classList.contains("light"))  {
        
        img.setAttribute("src", "https://github.com/thithifreitas.png")

    } else {

        img.setAttribute("src", "https://github.com/thithifreitas.png")
    }
}