const options ={
    dragging: false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

//valores do lat e lng pela html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid',options).setView([lat, lng], 13);

/*Mapa*/
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
)
    .addTo(map);

/*Icone do Marcador */
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


/*Popup/Marcador*/
L.marker([lat,lng],{icon})
    .addTo(map)

//Galeria de imagem//

function selectImage(event){
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button)=>{
        button.classList.remove("active")
    })


    //selecionar a imagem clicada

    const image= button.children[0] // O Pai button esta selecionando o dado do filho, que e a img, ou seja, na posiçao 0 do html 
    const imageContainer = document.querySelector(".orphanage-details > img") // Ta pegando o dado da imagem que fica no container, ta buscando pelo querySelector, que é busca pelo css



    //atualizar o container da imagem
    imageContainer.src = image.src //O Vai trocar o source da Imagem pelo src da Imagem Clicada

    // adicionar a classe .active para este botao
    button.classList.add('active')
}