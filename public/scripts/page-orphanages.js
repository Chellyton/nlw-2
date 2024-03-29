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
    popupAnchor: [170, 2]
})


function addMarker({id,name,lat,lng}){ //<= Desestruturando o Objeto e pegando direto o seus valores
                                       // Desde pega orphanages.id, ja desestrutura e pega direto o id
    //Criando o PopUp
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWindth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}" ><img src="/images/arrow-white.svg"></a>`)


    /*Popup/Marcador*/
    L.marker([lat, lng],{icon})
        .addTo(map)
        .bindPopup(popup);

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(span=>{
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})

