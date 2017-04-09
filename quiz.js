(function() {
  var data = [
    {
      title: 'Как в Екатеринбурге называют трамвай №1?',
      options: [
        {text: 'Единица', feedback: 'Нет, «Однёрка»! Между прочим, это один из самых длинных маршрутов в черте города, от ВИЗ до Вторчермета — почти 16 км.', is_right:false},
        {text: 'Первак', feedback: 'Нет, «Однёрка»! Между прочим, это один из самых длинных маршрутов в черте города, от ВИЗ до Вторчермета — почти 16 км', is_right:false},
        {text: 'Однёрка', feedback: 'Конечно! Между прочим, это один из самых длинных маршрутов в черте города, от ВИЗ до Вторчермета — почти 16 км', is_right:true}
      ]
    },
    {
      title: 'Кстати, что значит аббревиатура ВИЗ?',
      options: [
        {text: 'Восточный институт земледелия', feedback: 'На самом деле — завод. Он был основан почти три века назад и история у него славная. В XIX произведённое здесь кровельное железо с соболем на клейме славилось в Европе.', is_right:false},
        {text: 'Верх-Исетский завод', feedback: 'Вы правы! А знаете ли вы, что в XIX веке железо, произведённое на заводе славилось в Европе? В Англии до сих пор стоят дома, крытые железом местного производства.', is_right:true},
        {text: 'Просто местные любят, чтобы название района было написано большими буквами', feedback: 'На самом деле — завод. Он был основан почти три века назад и история у него славная. В XIX произведённое здесь кровельное железо с соболем на клейме славилось в Европе.', is_right:false}
      ]
    },
    {
      title: 'Какой городской маршрут почти не меняется уже больше 80 лет?',
      options: [
        {text: 'Автобус №1', feedback: 'Нет, это трамвай №11. С 1935 года его маршрут стал немного длиннее, но по сути не изменился. Большая часть линии — единственная в городе! — до сих пор остаётся одноклейной.', is_right:false},
        {text: 'Троллейбус №2', feedback: 'Нет, это трамвай №11. С 1935 года его маршрут стал немного длиннее, но по сути не изменился. Большая часть линии — единственная в городе! — до сих пор остаётся одноклейной.', is_right:false},
        {text: 'Трамвай 11', feedback: 'Верно. С 1935 года маршрут трамвая №11 стал немного длиннее, но в основном не изменился. Большая часть линии — единственная в городе! — до сих пор остаётся одноклейной.', is_right:true}
      ]
    },
      {
      title: 'Через какую остановку проходит больше всего маршрутов?',
      options: [
        {text: 'Театр юного зрителя', feedback: 'От ТЮЗа можно уехать почти куда угодно: целых 23 маршрута, если считать маршрутки.', is_right:true},
        {text: 'Проспект Ленина', feedback: 'Нет, это остановка у ТЮЗа. Через неё проходят целых 23 маршрута, если считать маршрутки.', is_right:false},
        {text: 'Железнодорожный вокзал', feedback: 'Нет, это остановка у ТЮЗа. Через неё проходят целых 23 маршрута, если считать маршрутки.', is_right:false}
      ]
    },

    {
      title: 'Что из этого пришло в Екатеринбург из Москвы?',
      options: [
        {text: 'Первые трамваи', feedback: 'Первые 10 вагонов для Екатеринбурга и правда произвели в подмосковном Метровагонмаше. Вот только про жетоны вы забыли — они тоже из Москвы.', is_right:false},
        {text: 'Жетоны метро', feedback: 'Да, но первые трамваи тоже. Их для Екатеринбурга произвели в подмосковном Метровагонмаше.', is_right:false},
        {text: 'И то, и другое', feedback: 'Первые десять трамваев для Екатеринбурга произвели на московском Метровагонмаше, а жетоны в город привезли после того, как их вывели из обращения в столице.', is_right:true}
      ]
    },
    {
      title: 'Два из этих маршрутов кольцевые, а один нет — какой?',
      options: [
        {text: 'Троллейбус №19', feedback: 'Почему же? На троллейбус №19 можно сесть на Академической улице, рядом с Дендрологическим парком, и вернуться на ту же остановку примерно через ХХ минут.', is_right:false},
        {text: 'Автобус К', feedback: 'Правильно! Такого маршрута в городе вообще нет.', is_right:true},
        {text: 'Трамвай №3', feedback: 'Ну что вы, он же ходит по кольцу почти через весь город. Например, на нём можно доехать от Парка Маяковского и до Успенского собора, и до «Ельцин Центра», и до вокзала.', is_right:false}
      ]
    },
    {
      title: 'Что за поезд ходит по Парку Маяковского?',
      options: [
        {text: 'Исторический, на нём ещё сам Маяковский катался', feedback: 'А вот и нет, это детский поезд. Его обслуживают школьники, будущие железнодорожники, но пассажиров он возит по-настоящему. Работает поезд с мая по сентябрь.', is_right:false},
        {text: 'Да не поезд там, а трамвай', feedback: 'А вот и нет, это детский поезд. Его обслуживают школьники, будущие железнодорожники, но пассажиров он возит по-настоящему. Работает поезд с мая по сентябрь.', is_right:false},
        {text: 'Детский, учебный', feedback: 'Правильно. Детский поезд ходит с мая по сентябрь. Его обслуживают школьники, будущие железнодорожники, но пассажиров он возит по-настоящему.', is_right:true}
      ]
    }
  ];

  var answers = [];
  var current_quest_id = -1;


  var renderOption = function(option, i) {
    var result = '<li class="option" data-option-id="' + i + '">';
    result += '<a class="option-link" href="#">';
    result += option.text;
    result += '</a>';
    result += '<div class="feedback hidden ' + (option.is_right ? 'right': '') + '">';
    result += option.feedback;
    result += '</div>';
    result += '</li>';
    return result;
  };

  var renderQuest = function(quest, i) {
    var result = '<div class="panel panel-default quest" data-quest-id="' + i + '">';
    result += '<div class="panel-heading">' + quest.title + '</div><div class="panel-body"><ul>';
    result += quest.options.map(renderOption).join('');
    result += '</ul></div>';
    result += '</div>';
    return result;
  };

  var renderEnd = function() {
    var right_answers = 0;
    answers.forEach(function(answer, i) {
      if(data[i].options[answer].is_right) {
        right_answers++;
      }
    });

    var result = '<div class="end">';
    result = '<h3>Конец</h3>';
    result += 'Результат: ' + right_answers + ' из '+ data.length;
    result += '</div>';
    return result;
  };

  var resetQuiz = function() {
    answers = [];
    current_quest_id = -1;
  };

  var container = document.getElementById('container');
  var hiddenButton = document.getElementById('next-button');

  var renderNextQuest = function() {
    current_quest_id += 1;
    if(current_quest_id < data.length) {
      container.innerHTML = renderQuest(data[current_quest_id], current_quest_id);
      hiddenButton.classList.add('hidden');
    } else {
      container.innerHTML = renderEnd();
      resetQuiz();
    }
  };

  var onOptionClick = function (elem) {
    var optionElem = elem.parentElement;
    var questElem = optionElem.parentElement.parentElement.parentElement;
    if(questElem.classList.contains('answered')) {
      return
    }
    questElem.classList.add('answered');
    var answer_id = parseInt(optionElem.attributes['data-option-id'].nodeValue, 10);
    optionElem.querySelector('.feedback').classList.remove('hidden');
    hiddenButton.classList.remove('hidden');
    answers.push(answer_id);
  };

  var onNextClick = function(elem) {
    renderNextQuest();
  };


  renderNextQuest();
  document.addEventListener('click', function(event) {
    if(event.target.classList.contains('option-link')) {
      onOptionClick(event.target);
      event.preventDefault();
    } else if(event.target.id === 'next-button') {
      onNextClick(event.target);
    }
  });

})();
