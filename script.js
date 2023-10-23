function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  /* selecionar a imagem */
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/myavatar-light.png")
  } else {
    img.setAttribute("src", "./assets/myavatar.png")
  }
}
