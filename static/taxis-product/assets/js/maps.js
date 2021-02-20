map = document.querySelector('.map');
maps = document.querySelectorAll('.map');
for (let index = 0; index < maps.length; index++) {
    const element = maps[index];
    ymaps.ready(init);

    function init() {
        let myMap = new ymaps.Map(element, {
            center: [55.8, 37.8],
            controls: ['fullscreenControl'],
            zoom: 12
        });
        let myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [55.8, 37.8] // координаты точки

            }
        });

        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myGeoObject);

    }
}