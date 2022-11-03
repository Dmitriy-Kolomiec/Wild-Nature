const center = [52.724895571578706,41.445625999999976];
function unit() {
    let map = new ymaps.Map('yandex_map_js', { /* подгружаем карту */
        center: center,
        zoom: 16
    });
let placemark = new ymaps.Placemark(center, {}, { /* Приваеваем метку*/
});
map.controls.remove('searchControl');
map.controls.remove('trafficControl');
map.geoObjects.add(placemark);
};
ymaps.ready(unit);