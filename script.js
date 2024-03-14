function toggleMode() {
    const html  = document.documentElement
//Da pra fazer o toggle assim!
    html.classList.toggle('light')
//Ou assim
//  if(html.classList.contains('light')){
//  html.classList.remove('light')
//  } else {
//  html.classList.add('light')
//    }

//Pegar a tag img
const img = document.querySelector("#profile img")
//substituir a img
if (html.classList.contains("light")){
// se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./avatar.png")
} else {
// se tiver sem light mode, manter a img
    img.setAttribute("src", "./avatar-light.png")
}
}
