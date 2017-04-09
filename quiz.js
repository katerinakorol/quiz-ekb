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
      title: 'question 2',
      options: [
        {text: 'd', feedback: 'd!', is_right:false},
        {text: 'e', feedback: 'e!', is_right:true},
        {text: 'f', feedback: 'f!', is_right:false}
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
