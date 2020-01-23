"use strict";

window.onload = function () {
  //эти цены не зависят от города
  var fix_prices = {
    0: [500, 3000],
    //8м3
    1: [1000, 7000],
    //20м3
    2: [1000, 7000],
    //27м3
    3: [0, 3000] //gazel9м3 нет продления

  };
  var prices = {
    1: [5000, 15000, 17000, 3500, 'Средняя цена Москва'],
    //Средняя цена Москва
    2: [6000, 16000, 18000, 3600, 'Центр'],
    //Центр
    3: [7000, 17000, 19000, 3700, 'Юго-Восточный округ ЮВАО'],
    //Юго-Восточный округ ЮВАО
    4: [8000, 18000, 20000, 3500, 'Южный округ ЮАО'],
    //Южный округ ЮАО
    5: [5000, 15000, 16000, 3600, 'Юго-Западный округ ЮЗАО'],
    //Юго-Западный округ ЮЗАО
    6: [6000, 16000, 17000, 3700, 'Северный округ САО'],
    //Северный округ САО
    7: [7000, 17000, 18000, 3500, 'Северо-Восточный округ СВАО'],
    //Северо-Восточный округ СВАО
    8: [8000, 17000, 19000, 3600, 'Восточный округ ВАО'],
    //Восточный округ ВАО
    9: [9000, 19000, 20000, 3700, 'Западный округ ЗАО'],
    //Западный округ ЗАО
    10: [5800, 16300, 18300, 3800, 'Северо-Западный округ СЗАО'],
    //Северо-Западный округ СЗАО
    11: [6500, 17500, 19500, 3600, 'Апрелевка'],
    //Апрелевка
    12: [6000, 17000, 19000, 3400, 'Балашиха'],
    //Балашиха
    13: [6500, 17500, 19500, 3400, 'Бронницы'],
    //Бронницы
    14: [8000, 19500, 21500, 3300, 'Чехов'],
    //Чехов
    15: [7000, 19500, 21500, 3300, 'Дмитров'],
    //Дмитров
    16: [6000, 17000, 19000, 3300, 'Долгопрудный'],
    //Долгопрудный
    17: [7000, 19500, 21500, 3300, 'Домодедово'],
    //Домодедово
    18: [7000, 19500, 21500, 3600, 'Электросталь'],
    //Электросталь
    19: [7000, 17500, 19500, 3600, 'Фрязино'],
    //Фрязино
    20: [6500, 17500, 19500, 3300, 'Голицыно'],
    //Голицыно
    21: [6500, 17500, 19500, 3700, 'Химки'],
    //Химки
    22: [8000, 19500, 21500, 3300, 'Истра'],
    //Истра
    23: [6500, 17500, 19500, 3600, 'Климосвк'],
    //Климосвк
    24: [7000, 19500, 21500, 3700, 'Клин'],
    //Клин
    25: [7000, 19500, 21500, 3800, 'Коломна'],
    //Коломна
    26: [6500, 17500, 19500, 3400, 'Королев'],
    //Королев
    27: [6000, 17000, 19000, 3600, 'Красногорск'],
    //Красногорск
    28: [6500, 17500, 19500, 3700, 'Кубинка'],
    //Кубинка
    29: [6500, 17500, 19500, 3700, 'Лобня'],
    //Лобня
    30: [6000, 17000, 19000, 3700, 'Люберцы'],
    //Люберцы
    31: [7000, 19500, 20500, 3300, 'Можайск'],
    //Можайск
    32: [6500, 17500, 19500, 3400, 'Мытищи'],
    //Мытищи
    33: [6500, 17500, 19500, 3300, 'Нахабино'],
    //Нахабино
    34: [7000, 19500, 21500, 3300, 'Наро-Фоминск'],
    //Наро-Фоминск
    35: [8000, 19500, 21500, 3600, 'Ногинск'],
    //Ногинск
    36: [6500, 17500, 19500, 3600, 'Одинцово'],
    //Одинцово
    37: [7000, 19500, 21500, 3700, 'Орехово-Зуево'],
    //Орехово-Зуево
    38: [6500, 17500, 19500, 3400, 'Подольск'],
    //Подольск
    39: [7000, 19500, 21500, 3700, 'Пушкино'],
    //Пушкино
    40: [7000, 19500, 21500, 3600, 'Раменское'],
    //Раменское
    41: [6000, 17000, 19000, 3300, 'Щелково'],
    //Щелково
    42: [6500, 17500, 19500, 3400, 'Щербинка'],
    //Щербинка
    43: [7000, 19500, 21500, 3700, 'Сергиев Посад'],
    //Сергиев Посад
    44: [7000, 19500, 21500, 3700, 'Серпухов'],
    //Серпухов
    45: [8000, 19500, 21500, 3400, 'Солнечногорск'],
    //Солнечногорск
    46: [7000, 19500, 21500, 3700, 'Ступино'],
    //Ступино
    47: [6500, 17500, 19500, 3600, 'Троицк'],
    //Троицк
    48: [6500, 17500, 19500, 3600, 'Видное'],
    //Видное
    49: [6500, 17500, 19500, 3400, 'Зеленоград'],
    //Зеленоград
    50: [6500, 17500, 19500, 3700, 'Железнодорожный'],
    //Железнодорожный
    51: [6000, 17000, 19000, 3400, 'Жуковский'],
    //Жуковский
    52: [6500, 19500, 20500, 3700, 'Звенигород'],
    //Звенигород
    53: [6500, 17500, 19500, 3500, 'Средняя цена область'],
    //Средняя цена область
    54: [1, 1, 1, 1],
    //Запас
    55: [1, 1, 1, 1],
    //Запас
    56: [1, 1, 1, 1] //Запас

  };
  var container = document.querySelector('#count-price');

  if (container) {
    var cityId = container.getAttribute('city-id');
    var addField = container.getAttribute('add-field');
    var contentName = container.getAttribute('content-name');
    var cityRange = container.getAttribute('city-id-range');

    if (cityRange) {
      var cityRangeLength = cityRange.split(',').length;

      switch (cityRangeLength) {
        case 1:
          var selectCity = prices[cityRange];
          var formHtml = "<div class=\"row\">\n                            <div class=\"col-lg-5 col-md-6 col-10 m-auto bg-green\">\n                                <div class=\"row header pb-2 pt-2\">\n                                    <div class=\"col text-center \">\n                                        <div class=\"header-text\"> \u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 </div>\n                                    </div>\n                                </div>\n                                <div class=\"count-price-info\">\n                                    <div class=\"row mb-2\">\n                                        <div class=\"col text-center\">\n                                            <p class=\"bold subheader\">".concat(contentName, "</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-3\">\n                                        <div class=\"col text-left\">\n                                            <p class=\"bold fs-sm\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043C\u0443\u0441\u043E\u0440\u0430</p>\n                                            <select name=\"trash-type\" class=\"w-100 form-control\">\n                                                <option value=\"1\">\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439</option>\n                                                <option value=\"1.1\">\u041A\u0440\u0443\u043F\u043D\u043E\u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0439</option>\n                                                <option value=\"0.9\">\u0422\u0432\u0435\u0440\u0434\u044B\u0439 \u0431\u044B\u0442\u043E\u0432\u043E\u0439</option>\n                                                <option value=\"1.1\">\u0421\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0439</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-3\">\n                                        <div class=\"col text-left\">\n                                            <p class=\"bold fs-sm\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C</p>\n                                            <select name=\"volume\" class=\"w-100 form-control\">\n                                                <option value=\"0\">8 \u043C3</option>\n                                                <option value=\"1\">20 \u043C3</option>\n                                                <option value=\"2\">27 \u043C3</option>\n                                                <option value=\"3\">\u0413\u0430\u0437\u0435\u043B\u044C</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-4\">\n                                        <div class=\"col text-left\">\n                                            <p class=\"bold fs-sm\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E</p>\n                                            <select name=\"qty\" id=\"\" class=\"w-100 form-control\">\n                                                <option value=\"1\">1</option>\n                                                <option value=\"2\">2</option>\n                                                <option value=\"3\">3</option>\n                                                <option value=\"4\">4</option>\n                                                <option value=\"5\">5</option>\n                                                <option value=\"6\">6</option>\n                                                <option value=\"7\">7</option>\n                                                <option value=\"8\">8</option>\n                                                <option value=\"9\">9</option>\n                                                <option value=\"10\">10</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"row \">\n                                        <div class=\"col\">\n                                            <label class=\"reg fs-m\">\n                                                <input type=\"checkbox\" name=\"loading\"> \u041F\u043E\u0433\u0440\u0443\u0437\u043A\u0430</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-3\">\n                                        <div class=\"col\">\n                                            <label class=\"reg fs-m\">\n                                                <input type=\"checkbox\" name=\"leave\"> \u041F\u0440\u043E\u0434\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0443\u0442\u043A\u0438</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-3\">\n                                        <div class=\"col\">\n                                            <a href=\"javascript:void(0)\" class=\"btn bold w-100 calc-price\">\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0446\u0435\u043D\u0443</a>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row text-center\">\n                                    <div id=\"final-price\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>");
          container.innerHTML = formHtml;
          document.querySelector('select[name="volume"]').addEventListener('change', function () {
            if (Number(document.querySelector('select[name="volume"]').value) === 3) {
              document.querySelector('input[name="leave"]').checked = false;
              document.querySelector('input[name="leave"]').disabled = true;
            } else {
              document.querySelector('input[name="leave"]').disabled = false;
            }
          });
          var calcPrice1 = document.querySelector('.calc-price');
          calcPrice1.addEventListener('click', function () {
            countPrice(selectCity);
          });
          break;

        case 2:
          var citiesList = [];
          cityRange = cityRange.split(',');
          Object.keys(prices).map(function (key) {
            if (Number(key) >= cityRange[0] && Number(key) <= cityRange[1]) {
              citiesList[key] = prices[key];
            }
          });
          var citiesHtml = '';
          citiesList.forEach(function (el, index) {
            citiesHtml += "<option value=\"".concat(index, "\">").concat(el[4], "</option>");
          });
          var form2 = "<div class=\"row\">\n                            <div class=\"col-lg-5 col-md-6 col-10 m-auto bg-green\">\n                                <div class=\"row header pb-2 pt-2\">\n                                    <div class=\"col text-center \">\n                                        <div class=\"header-text\"> \u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 </div>\n                                    </div>\n                                </div>\n                                <div class=\"count-price-info\">\n                                    <div class=\"row mb-2\">\n                                        <div class=\"col text-center\">\n                                            <p class=\"bold subheader\">\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-3\">\n                                        <div class=\"col text-left\">\n                                            <p class=\"bold fs-sm\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043C\u0443\u0441\u043E\u0440\u0430</p>\n                                            <select name=\"trash-type\" class=\"w-100 form-control\">\n                                                <option value=\"1\">\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439</option>\n                                                <option value=\"1.1\">\u041A\u0440\u0443\u043F\u043D\u043E\u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0439</option>\n                                                <option value=\"0.9\">\u0422\u0432\u0435\u0440\u0434\u044B\u0439 \u0431\u044B\u0442\u043E\u0432\u043E\u0439</option>\n                                                <option value=\"1.1\">\u0421\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0439</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-3\">\n                                        <div class=\"col text-left parent-select\">\n                                            <p class=\"bold fs-sm\">".concat(addField, "</p>\n                                            <select name=\"city-id\" class=\"w-100 form-control\">\n                                                ").concat(citiesHtml, "\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-3\">\n                                        <div class=\"col text-left\">\n                                            <p class=\"bold fs-sm\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C</p>\n                                            <select name=\"volume\" class=\"w-100 form-control\">\n                                                <option value=\"0\">8 \u043C3</option>\n                                                <option value=\"1\">20 \u043C3</option>\n                                                <option value=\"2\">27 \u043C3</option>\n                                                <option value=\"3\">\u0413\u0430\u0437\u0435\u043B\u044C</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-4\">\n                                        <div class=\"col text-left\">\n                                            <p class=\"bold fs-sm\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E</p>\n                                            <select name=\"qty\" id=\"\" class=\"w-100 form-control\">\n                                                <option value=\"1\">1</option>\n                                                <option value=\"2\">2</option>\n                                                <option value=\"3\">3</option>\n                                                <option value=\"4\">4</option>\n                                                <option value=\"5\">5</option>\n                                                <option value=\"6\">6</option>\n                                                <option value=\"7\">7</option>\n                                                <option value=\"8\">8</option>\n                                                <option value=\"9\">9</option>\n                                                <option value=\"10\">10</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"row \">\n                                        <div class=\"col\">\n                                            <label class=\"reg fs-m\">\n                                                <input type=\"checkbox\" name=\"loading\"> \u041F\u043E\u0433\u0440\u0443\u0437\u043A\u0430</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-3\">\n                                        <div class=\"col\">\n                                            <label class=\"reg fs-m\">\n                                                <input type=\"checkbox\" name=\"leave\"> \u041F\u0440\u043E\u0434\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0443\u0442\u043A\u0438</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-3\">\n                                        <div class=\"col\">\n                                            <a href=\"javascript:void(0)\" class=\"btn bold w-100 calc-price\">\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0446\u0435\u043D\u0443</a>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row text-center\">\n                                    <div id=\"final-price\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>");
          container.innerHTML = form2;
          document.querySelector('select[name="volume"]').addEventListener('change', function () {
            if (Number(document.querySelector('select[name="volume"]').value) === 3) {
              document.querySelector('input[name="leave"]').checked = false;
              document.querySelector('input[name="leave"]').disabled = true;
            } else {
              document.querySelector('input[name="leave"]').disabled = false;
            }
          });
          var parentSelect = document.querySelector('.parent-select');
          document.querySelector('.calc-price').addEventListener('click', function () {
            var cityIndex = Number(parentSelect.children[1].value);
            countPrice(prices[cityIndex]);
          });
          break;

        default:
          console.log('Не указан либо не верно введен атрибут city-id-range');
      }
    }
  }

  var countPrice = function countPrice(selectCity) {
    var trashType = document.querySelector('select[name="trash-type"]').value;
    var volume = document.querySelector('select[name="volume"]').value;
    var qty = document.querySelector('select[name="qty"]').value;
    var loading = document.querySelector('input[name="loading"]').checked;
    var leave = document.querySelector('input[name="leave"]').checked;
    var price = Number(trashType) * Number(selectCity[volume]) * Number(qty);

    if (loading) {
      price = price + Number(fix_prices[volume][1]) * Number(qty);
    }

    if (leave) {
      price = price + Number(fix_prices[volume][0]) * Number(qty);
    }

    price = Math.round(Number(price));
    document.querySelector('#final-price').innerHTML = "\n                <div class=\"price\">".concat(price, " <span>\u0440\u0443\u0431.</span></div>\n                <div class=\"row pb-1\">\n                    <div class=\"col text-center bold fs-l text-uppercase pt-3 pb-1\">\u0437\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u0432\u044B\u0437\u043E\u0432 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443</div>\n                </div>\n                <div class=\"row pb-2\">\n                    <div class=\"col text-center\">\n                        <a href=\"tel:+74994905436\" class=\"bold red fs-xxl\">8 (499) 490-54-36</a>\n                    </div>\n                </div>\n        ");
    document.querySelector('#final-price').scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  };
};