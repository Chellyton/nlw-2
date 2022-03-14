const map = L.map('mapid').setView([-15.7801, -47.9292], 13);

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
})

let marker

//Criando Marcador
map.on('click',(event)=>{
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    //Botar o valor da lat e lng no value que vai botar o valor na url
    document.querySelector('[name=lat]').value=lat
    document.querySelector('[name=lng]').value=lng

    //Remover o Icone Anterior
    marker && map.removeLayer(marker)
    
    //Adicionar o Icone
    marker = L.marker([lat,lng], {icon}).addTo(map)
})

//Adicionar campo de fotos

const addPhotoField = function(){
    //Pegar o container de fotos #images
    const container = document.querySelector('#images')

    //Pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //Verificar se o campo está vazio, se sim, nao adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    if(fieldsContainer.length > 5){
        return
    }

    //Limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)

}

const deleteField = function (event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value=""
        return
    }

    //deletar o campo
    span.parentNode.remove()
}

//troca do sim e nao
const toggleSelect= function(event){

    //retirar a class .active dos botoes
    document.querySelectorAll('.button-select button').forEach(button=>button.classList.remove('active'))

    //colocar a class. active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado

    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar se sim ou nao

    input.value = button.dataset.value

}

/*function validate(event){

    //Validar se lat e lng estao preenchidos
    const needsLatAndLng = true
    if(){
        event.preventDefault()
        alert("Selecione um campo no mapa")
    }
    else{

    }
}*/