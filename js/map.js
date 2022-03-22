ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [55.765 ,37.6],
        zoom: 14
    });

        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.76 ,37.6]
            }
        });

        var myPlacemark = new ymaps.Placemark([55.76 ,37.6], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/contacts/12.png',
            iconImageSize: [20, 20],
            iconImageOffset: [-3, -42]
        });

        myMap.geoObjects.add(myPlacemark);
        // myMap.controls.remove('geolocationControl'); // удаляем геолокацию
        myMap.controls.remove('searchControl'); // удаляем поиск
        myMap.controls.remove('trafficControl'); // удаляем контроль трафика
        myMap.controls.remove('typeSelector'); // удаляем тип
        myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        // myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
        myMap.controls.remove('rulerControl'); // удаляем контрол правил
        myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}