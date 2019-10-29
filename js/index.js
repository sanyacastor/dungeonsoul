ymaps.ready(init);

function init() {

  navigator.geolocation.getCurrentPosition(function(position) {
    drawUserPosition(position.coords.latitude, position.coords.longitude);
  });

  navigator.geolocation.watchPosition(function(position) {
    drawUserPosition(position.coords.latitude, position.coords.longitude);
  });


  function drawUserPosition(lat, lon) {
    console.log('Координаты юзера:'+lat+' '+lon);
        if (user) {
          myMap.geoObjects.remove(user);
        }
       var user = new ymaps.Placemark([lat, lon], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/user.png',
        iconImageSize: [40, 40]
    });

    myMap.geoObjects.add(user); 
  }




// // Асинхронная обработка ответа.
// location.then(
//   function(result) {
//     // Добавление местоположения на карту.
//     myMap.geoObjects.add(result.geoObjects)
//   },
//   function(err) {
//     console.log('Ошибка: ' + err)
//   }
// );

  var myMap = new ymaps.Map("map", {
    center: [55.6891, 37.7882],
    zoom: 14
  }, {
    searchControlProvider: 'yandex#search'
  });
  
  myMap.geoObjects.add(new ymaps.Placemark([55.6876577, 37.7580098], {
    balloonContentHeader: "Старт",
    balloonContentBody: "Замок",
  }, 
    {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_S.gif',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6883118, 37.7633283], {
     balloonContentHeader: "1.Трубы (Водяная мельница)",
     balloonContentBody: "Взберись на мельницу и смотри против течение реки, прям туда где реки изгибается. Там ты найдешь обелиск.",
    }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_1.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6866717, 37.8167412], {
      balloonContentHeader: "2.Дорога за рощей черной ольхи. (Покров тьмы)",
      balloonContentBody: "В самой темной части наших лесов, прямо на границе с землями мертвых под вечным покровом тьмы находится Обелиск. Будь внимателен добрый герой.",
     }, {
      preset: 'islands#icon',
      iconColor: '#735184',
      iconLayout: 'default#image',
      iconImageHref: 'img/H_2.png',
      iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6812839, 37.8051892], {
      balloonContentHeader: "3.Просека (Проклятая земля)",
      balloonContentBody: "Две тысячи зим назад в тех местах проходила великая битва с армией мертвых. Будь осторожней, король Личь проклял те земли. Там же был установлен обелиск, на перекрестке двух дорог у границы леса.",
    }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_3.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6838542, 37.7923428], {
      balloonContentHeader: "4.Дорога в сосновом бору (Поляна единорогов)",
      balloonContentBody: "Отправляйся в королевство Цитадель, в глухом сосновом лесу отыщи поляну единорогов, рядом с ней ты найдешь обелиск. Ориентир - перекресток двух больших дорог. Но помни, это очень темные леса и в них легко потеряться.",
    }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_4.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6879391, 37.7964610], {
    balloonContentHeader: "5.Пристань (Сирены)",
      balloonContentBody: "На берегу большого озера, есть каменная лестница ведущая вниз прямо к воде. Там же стоит обелиск, но остерегайся пенья Сирен."
      }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_5.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6881066, 37.7944272], {
    balloonContentHeader: "6.Между двух мостов (Маяк)",
      balloonContentBody: "На озере есть остров, туда ведут два моста, прям между этих мостов стоит обелиск. Луч маяка укажет тебе путь."
    }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_6.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6920996, 37.7881995], {
    balloonContentHeader: "7.Мост в глуши (Обелиск)",
      balloonContentBody: "В лесу, есть старый канал, через который построен мост, прям на нем стоит обелиск.",
    }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_7.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6893995, 37.7852604], {
    balloonContentHeader: "8.Кони (Конюшня)",
      balloonContentBody: "Между двух могучих единорогов стоит обелиск.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_8.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6952883, 37.7851377], {
    balloonContentHeader: "9.Дальний пруд (Озеро драгоценностей)",
      balloonContentBody: "Отправляйся на север озера, там ты найдешь все ответы.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_9.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6919450, 37.7792546], {
    balloonContentHeader: "10.Дерево знаний (Дерево знаний)",
      balloonContentBody: "Говорят, что дерево знаний это старый спящий дендроид, который охраняет один из обелисков. Возможно, вам придется его разбудить.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_10.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6917376, 37.7734758], {
    balloonContentHeader: "11.Водопад (Фонтан Юности)",
      balloonContentBody: "Посмотри на воду внимательно. Белая вода укажет расположение обелиска.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_11.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6910559, 37.7692838], {
   balloonContentHeader: "12.Хижина ведьмы",
      balloonContentBody: "Рядом с хижиной ведьмы в роще черной ольхи за Таинственным садом, ты найдешь упавший могучий тополь. Взберись на него, обелиск в его корнях.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_12.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6912645, 37.7656759], {
    balloonContentHeader: "13.Заводь (Заколдованный источник)",
      balloonContentBody: "Спустись по тропе ближе к реке, там ты увидишь небольшую, почти пересохшую заводь из которой торчат мощные корни старого дерева. Обелиск там.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_13.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6922591, 37.7724351], {
    balloonContentHeader: "14.Маг",
      balloonContentBody: "Возле озера, растет черное дерево нависая над старой дорогой. Под деревом тебя будет ждать Маг.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_14.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6931439, 37.7629464], {
    balloonContentHeader: "15.Бараки",
      balloonContentBody: "На западной окраине нашего королевства, находится лагерь войнов . Отыщи рыцаря. Скорее всего он находится рядом с медведем.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_15.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6891638, 37.7882802], {
    balloonContentHeader: "16.Тюрьма",
      balloonContentBody: "В тюрьме ты найдешь старого гнома, только он знает где обелиск.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_16.png',
    iconImageSize: [55, 55],
  }));
}
