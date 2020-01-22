window.onload = function () {
    //эти цены не зависят от города
    let fix_prices = {
        0: [500, 3000],     //8м3
        1: [1000, 7000],    //20м3
        2: [1000, 7000],    //27м3
        3: [0, 3000]        //gazel9м3 нет продления
    };

    let prices = {
        1: [5000, 15000, 17000, 3500, 'Средняя цена Москва'],  //Средняя цена Москва
        2: [6000, 16000, 18000, 3600, 'Центр'],  //Центр
        3: [7000, 17000, 19000, 3700, 'Юго-Восточный округ ЮВАО'],  //Юго-Восточный округ ЮВАО
        4: [8000, 18000, 20000, 3500, 'Южный округ ЮАО'],  //Южный округ ЮАО
        5: [5000, 15000, 16000, 3600, 'Юго-Западный округ ЮЗАО'],  //Юго-Западный округ ЮЗАО
        6: [6000, 16000, 17000, 3700, 'Северный округ САО'],  //Северный округ САО
        7: [7000, 17000, 18000, 3500, 'Северо-Восточный округ СВАО'],  //Северо-Восточный округ СВАО
        8: [8000, 17000, 19000, 3600, 'Восточный округ ВАО'],  //Восточный округ ВАО
        9: [9000, 19000, 20000, 3700, 'Западный округ ЗАО'],  //Западный округ ЗАО
        10: [5800, 16300, 18300, 3800, 'Северо-Западный округ СЗАО'],  //Северо-Западный округ СЗАО
        11: [6500, 17500, 19500, 3600, 'Апрелевка'],  //Апрелевка
        12: [6000, 17000, 19000, 3400, 'Балашиха'],  //Балашиха
        13: [6500, 17500, 19500, 3400, 'Бронницы'],  //Бронницы
        14: [8000, 19500, 21500, 3300, 'Чехов'],  //Чехов
        15: [7000, 19500, 21500, 3300, 'Дмитров'],  //Дмитров
        16: [6000, 17000, 19000, 3300, 'Долгопрудный'],  //Долгопрудный
        17: [7000, 19500, 21500, 3300, 'Домодедово'],  //Домодедово
        18: [7000, 19500, 21500, 3600, 'Электросталь'],  //Электросталь
        19: [7000, 17500, 19500, 3600, 'Фрязино'],  //Фрязино
        20: [6500, 17500, 19500, 3300, 'Голицыно'],  //Голицыно
        21: [6500, 17500, 19500, 3700, 'Химки'],  //Химки
        22: [8000, 19500, 21500, 3300, 'Истра'],  //Истра
        23: [6500, 17500, 19500, 3600, 'Климосвк'],  //Климосвк
        24: [7000, 19500, 21500, 3700, 'Клин'],  //Клин
        25: [7000, 19500, 21500, 3800, 'Коломна'],  //Коломна
        26: [6500, 17500, 19500, 3400, 'Королев'],  //Королев
        27: [6000, 17000, 19000, 3600, 'Красногорск'],  //Красногорск
        28: [6500, 17500, 19500, 3700, 'Кубинка'],  //Кубинка
        29: [6500, 17500, 19500, 3700, 'Лобня'],  //Лобня
        30: [6000, 17000, 19000, 3700, 'Люберцы'],  //Люберцы
        31: [7000, 19500, 20500, 3300, 'Можайск'],  //Можайск
        32: [6500, 17500, 19500, 3400, 'Мытищи'],  //Мытищи
        33: [6500, 17500, 19500, 3300, 'Нахабино'],  //Нахабино
        34: [7000, 19500, 21500, 3300, 'Наро-Фоминск'],  //Наро-Фоминск
        35: [8000, 19500, 21500, 3600, 'Ногинск'],  //Ногинск
        36: [6500, 17500, 19500, 3600, 'Одинцово'],  //Одинцово
        37: [7000, 19500, 21500, 3700, 'Орехово-Зуево'],  //Орехово-Зуево
        38: [6500, 17500, 19500, 3400, 'Подольск'],  //Подольск
        39: [7000, 19500, 21500, 3700, 'Пушкино'],  //Пушкино
        40: [7000, 19500, 21500, 3600, 'Раменское'],  //Раменское
        41: [6000, 17000, 19000, 3300, 'Щелково'],  //Щелково
        42: [6500, 17500, 19500, 3400, 'Щербинка'],  //Щербинка
        43: [7000, 19500, 21500, 3700, 'Сергиев Посад'],  //Сергиев Посад
        44: [7000, 19500, 21500, 3700, 'Серпухов'],  //Серпухов
        45: [8000, 19500, 21500, 3400, 'Солнечногорск'],  //Солнечногорск
        46: [7000, 19500, 21500, 3700, 'Ступино'],  //Ступино
        47: [6500, 17500, 19500, 3600, 'Троицк'],  //Троицк
        48: [6500, 17500, 19500, 3600, 'Видное'],  //Видное
        49: [6500, 17500, 19500, 3400, 'Зеленоград'],  //Зеленоград
        50: [6500, 17500, 19500, 3700, 'Железнодорожный'],  //Железнодорожный
        51: [6000, 17000, 19000, 3400, 'Жуковский'],  //Жуковский
        52: [6500, 19500, 20500, 3700, 'Звенигород'],  //Звенигород
        53: [6500, 17500, 19500, 3500, 'Средняя цена область'],  //Средняя цена область
        54: [1, 1, 1, 1],  //Запас
        55: [1, 1, 1, 1],  //Запас
        56: [1, 1, 1, 1],  //Запас
    };

    let container = document.querySelector('#count-price');


    if (container) {
        let cityId = container.getAttribute('city-id');
        let addField = container.getAttribute('add-field');
        let contentName = container.getAttribute('content-name');
        let cityRange = container.getAttribute('city-id-range');
        if (cityRange) {
            let cityRangeLength = cityRange.split(',').length;

            switch (cityRangeLength) {
                case 1:

                    let selectCity = prices[cityRange];

                    let formHtml = `<div class="row">
                            <div class="col-lg-5 col-md-6 col-10 m-auto bg-green">
                                <div class="row header pb-2 pt-2">
                                    <div class="col text-center ">
                                        <div class="header-text"> Расчет стоимости </div>
                                    </div>
                                </div>
                                <div class="count-price-info">
                                    <div class="row mb-2">
                                        <div class="col text-center">
                                            <p class="bold subheader">${contentName}</p>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col text-left">
                                            <p class="bold fs-sm">Выберите тип мусора</p>
                                            <select name="trash-type" class="w-100 form-control">
                                                <option value="1">Строительный</option>
                                                <option value="1.1">Крупногабаритный</option>
                                                <option value="0.9">Твердый бытовой</option>
                                                <option value="1.1">Смешанный</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col text-left">
                                            <p class="bold fs-sm">Выберите объем</p>
                                            <select name="volume" class="w-100 form-control">
                                                <option value="0">8 м3</option>
                                                <option value="1">20 м3</option>
                                                <option value="2">27 м3</option>
                                                <option value="3">Газель</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <div class="col text-left">
                                            <p class="bold fs-sm">Выберите количество</p>
                                            <select name="qty" id="" class="w-100 form-control">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="col">
                                            <label class="reg fs-m">
                                                <input type="checkbox" name="loading"> Погрузка</label>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col">
                                            <label class="reg fs-m">
                                                <input type="checkbox" name="leave"> Продление на сутки</label>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col">
                                            <a href="javascript:void(0)" class="btn bold w-100 calc-price">Рассчитать цену</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div id="final-price">
                                        <div class="price">6500 <span>руб.</span></div>
                                        <div class="row pb-1">
                                            <div class="col text-center bold fs-l text-uppercase pt-3 pb-1">закажите вызов по телефону</div>
                                        </div>
                                        <div class="row pb-2">
                                            <div class="col text-center">
                                                <a href="tel:+74994905436" class="bold red fs-xxl"><img src="img/call.png" class="mr-1" alt="">8 (499) 490-54-36</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;

                    container.innerHTML = formHtml;

                    let calcPrice = document.querySelector('.calc-price');
                    calcPrice.addEventListener('click', function (e) {
                        countPrice();
                    });

                    break;

                case 2:
                    let form2 = `<div class="row">
                            <div class="col-lg-5 col-md-6 col-10 m-auto bg-green">
                                <div class="row header pb-2 pt-2">
                                    <div class="col text-center ">
                                        <div class="header-text"> Расчет стоимости </div>
                                    </div>
                                </div>
                                <div class="count-price-info">
                                    <div class="row mb-2">
                                        <div class="col text-center">
                                            <p class="bold subheader">Заголовок 1</p>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col text-left">
                                            <p class="bold fs-sm">Выберите тип мусора</p>
                                            <select name="trash-type" class="w-100 form-control">
                                                <option value="1">Строительный</option>
                                                <option value="1.1">Крупногабаритный</option>
                                                <option value="0.9">Твердый бытовой</option>
                                                <option value="1.1">Смешанный</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col text-left">
                                            <p class="bold fs-sm">Выберите Заголовок 2</p>
                                            <select name="city-id" class="w-100 form-control">
                                                <option value="14">Чехов</option>
                                                <option value="15">Дмитров</option>
                                                <option value="16">Долгопрудный</option>
                                                <option value="17">Домодедово</option>
                                                <option value="18">Электросталь</option>
                                                <option value="19">Фрязино</option>
                                                <option value="30">Люберцы</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col text-left">
                                            <p class="bold fs-sm">Выберите объем</p>
                                            <select name="volume" class="w-100 form-control">
                                                <option value="0">8 м3</option>
                                                <option value="1">20 м3</option>
                                                <option value="2">27 м3</option>
                                                <option value="3">Газель</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <div class="col text-left">
                                            <p class="bold fs-sm">Выберите количество</p>
                                            <select name="qty" id="" class="w-100 form-control">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="col">
                                            <label class="reg fs-m">
                                                <input type="checkbox" name="loading"> Погрузка</label>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col">
                                            <label class="reg fs-m">
                                                <input type="checkbox" name="leave"> Продление на сутки</label>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col">
                                            <a href="javascript:void(0)" class="btn bold w-100">Рассчитать цену</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div id="final-price">
                                        <div class="price">6500 <span>руб.</span></div>
                                        <div class="row pb-1">
                                            <div class="col text-center bold fs-l text-uppercase pt-3 pb-1">закажите вызов по телефону</div>
                                        </div>
                                        <div class="row pb-2">
                                            <div class="col text-center">
                                                <a href="tel:+74994905436" class="bold red fs-xxl"><img src="img/call.png" class="mr-1" alt="">8 (499) 490-54-36</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    container.innerHTML = form2;
                    break;
                default:
                    console.log('Не указан либо не верно введен атрибут city-id-range');
            }
        }
    }

    const countPrice = () => {
        let trashType = document.querySelector('select[name="trash-type"]').value;
        let volume = document.querySelector('select[name="volume"]').value;
        let qty = document.querySelector('select[name="qty"]').value;
        let loading = document.querySelector('input[name="loading"]').checked;
        let leave = document.querySelector('input[name="leave"]').checked;

    };
};