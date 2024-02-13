function changeHeight() {
    let valorHeight = window.innerHeight
    let array = []
    array = document.getElementsByClassName('modal-body')
    for (let index = 0; index < array.length; index++) {
        let elemento = array[index]
        elemento.style.height = (valorHeight - 180) + "px"
        console.log(elemento)
    }
    /* elementos.forEach(elemento => {
        elemento.style.maxHeight = "calc(" + valorHeight + " - 180px) !important"
    }) */
}

window.addEventListener("resize", changeHeight);
changeHeight()