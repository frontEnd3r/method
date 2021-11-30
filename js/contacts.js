if(document.querySelector('#contacts-map')){
    ymaps.ready(initContactsMap);
}
function initContactsMap() {
    var inputContactsMark = document.querySelectorAll('input[name="contacts-map-mark"]');
    var addresses = [];
    inputContactsMark.forEach((element,id) => {
        addresses[id] = {
            x: Number(element.dataset.x),
            y: Number(element.dataset.y),
            address: element.dataset.address,
            marker: element.dataset.marker,
            moveX: Number(element.dataset.moveX),
            moveY: Number(element.dataset.moveY),
            title: element.dataset.title,
            link: element.dataset.link,
            name: element.dataset.name,
        };
    });
    var myMap = new ymaps.Map("contacts-map", {
        center: [addresses[0].x, addresses[0].y],
        zoom: 5,
        controls: []
    });
    var myPlacemark = [];
    addresses.forEach(metka => {
        MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="custom-ballon">' +
                '<h2>$[properties.balloonContentHeader]</h2>' +
                '{% if properties.balloonContent != "" %}' +
                    '<h3>$[properties.balloonContent]</h3>' +
                '{% endif %}' +
                '<p><img src="../wp-content/themes/proinvest/img/mark-map/map-address-icon.svg">$[properties.balloonContentBody]</p>' + 
                '{% if properties.balloonContentFooter != "" %}' +
                    '<a href="$[properties.balloonContentFooter]">Перейти к советнику</a>' +
                '{% endif %}' +
            '</div>'
        ),
        myPlacemark = new ymaps.Placemark([metka.x,metka.y],{
            balloonContent: metka.name,
            balloonContentBody: metka.address,
            balloonContentHeader: metka.title,
            balloonContentFooter: metka.link,
        },{
            iconLayout: 'default#image',
            iconImageHref: metka.marker,
            iconImageSize: [68, 68],
            iconImageOffset: [metka.moveX, metka.moveY],
            balloonShadow: false,
            balloonContentLayout: MyBalloonContentLayout,
            balloonPanelMaxMapArea: 0,
            hideIconOnBalloonOpen: false,
            balloonOffset: [metka.moveX+68, metka.moveY+8],
            balloonMaxWidth: 250,
            balloonMinWidth: 195,
            balloonCloseButton: false,
            balloonAutoPanMargin: 0,
            balloonShadow: false,
        });	
        myMap.geoObjects.add(myPlacemark);			
    });
    //myMap.behaviors.disable('scrollZoom');
    //myMap.setBounds(myMap.geoObjects.getBounds(),{checkZoomRange:true, zoomMargin:25});
    if(addresses.length>1){
        myMap.setBounds(myMap.geoObjects.getBounds());
        myMap.setZoom(myMap.getZoom()-0.5);
    }
}