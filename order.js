(function() {
  let size = null;
  let size_comment = "";
  let stage = null;
  let colorline = null;
  let step = 0;
  let is_checked = false;

  let size_price = 0;
  let stage_price = 0;
  let colorline_price = 0;
  let cost = 0;


//При загрузке страницы
  window.onload = function() {
    changeForm();
    buttonClick();
  };

//Для изменения формы
  function changeForm() {
    clickChooseSize();
    clickSizeComment();
    clickChooseStage();
    clickChooseColorLine();
  }
//Обработка кнопок
  function buttonClick(){
    button_ok();
    button_back();
  }

//Присваивание значений
  function get_cost(){
    switch(size){
      case 'small':
        size_price = 350;
        break;
      case 'middle':
        size_price = 500;
        break;
      case 'big':
        size_price = 750;
        break;
      default:
        size_price = 0;
    }

    switch(stage){
      case 'sketch':
        stage_price = 50;
        break;
      case 'line':
        stage_price = 200;
        break;
      case 'monochrome':
        stage_price = 400;
        break;
      case 'color':
        stage_price = 500;
        break;
      case 'shading':
        stage_price = 700;
        break;
      default:
        stage_price = 0;
    }

    if(colorline == null){
      colorline_price = 0;
    }
    else {
      colorline_price = 50;
    }
  }

//Рассчет стоимости арта
  function count(){
    get_cost();
    cost = size_price + stage_price + colorline_price;
    console.log(size_price);
    console.log(stage_price);
    console.log(colorline_price);
    console.log(cost);
    print_cost();
  }

// для отображения цены в блоке
  function print_cost(){
    let cost_div = document.getElementById('cost');
    console.log('цена в принте');
    console.log(cost);
    cost_div.innerHTML = cost;
  }

//Выбор пункта размера изображения, данные записаны в переменную size
  function clickChooseSize() {
    let el = document.getElementsByName('size');
    [].forEach.call(el, (value) => {
      value.addEventListener('change', () => {
        error_clear();
        item_clear_selection('item-size');
        let id = value.id;
        size = value.value;
        let item = document.querySelector(`[data-for="${id}"]`);
        item.style.background = '#dfdfdf';
        is_checked = true;
      });
    });
  }

//Запись данных из текстового поля в переменную size_comment
  function clickSizeComment() {
    let comment = document.getElementById('comment');
      comment.addEventListener('change', () => {
        error_clear();
        size_comment = comment.value;
      });

  }

//Выбор пункта этапа изображения, данные записаны в переменную stage
  function clickChooseStage() {
    let el = document.getElementsByName('stage');
    [].forEach.call(el, (value) => {
      value.addEventListener('change', () => {
        error_clear();
        item_clear_selection('item-stage');
        document.getElementById('selectcolorline').checked = false;
        let id = value.id;
          if(id == "selectstage1"){
            hide_colorline();
            colorline = 'none';
            document.getElementById('selectcolorline').checked = false;
          }
          else{
            display_colorline();
          }
        stage = value.value;
        is_checked = true;
        document.querySelector(`[data-for="${id}"]`).style.background = '#dfdfdf';
        document.querySelector(`[data-for="${id}"]`).style.zIndex = 1;
      });
    });
  }

//Выбор чекбокса для цветного лайна colorline none - нет, OK - есть
  function clickChooseColorLine() {
    let chbox = document.getElementById('selectcolorline');
    chbox.addEventListener('change', () => {
      if(chbox.checked){
        colorline = chbox.value;
        document.getElementById('colorline').style.background = '#dfdfdf';
        document.getElementById('colorline').style.zIndex = 1;
      }
      else{
        colorline = 'none';
        document.getElementById('colorline').style.background = '#ffffff';
        document.getElementById('colorline').style.zIndex = 0;
      }
    });
  }

//Отобразить пункт для выбора цветного лайна
  function display_colorline(){
    document.getElementById('colorline').style.display = 'block';
  }

//Скрыть пункт для выбора цветного лайна
  function hide_colorline(){
    document.getElementById('colorline').style.display = 'none';
  }

//Для отображения пункта для выбора цветного лайна
  function item_clear_selection(item){
    const items = document.getElementsByClassName(item);
    for(i = 0; i < items.length; i++){
      items[i].style.background = "#FFFFFF";
      items[i].style.zIndex = 0;
    }
  }

//Переход на следующий вопрос
  function button_ok(){
    let button = document.getElementById('button-ok');
    button.addEventListener('click', () => {
      if(is_checked == false){
        error_print();
      }
      else{
        console.log(size);
        console.log(size_comment);
        console.log(stage);
        console.log(colorline);
        count(); //считает стоимость
        let page = document.getElementsByClassName("page");
        page[step].style.display = 'none';
        step++;
        page[step].style.display = 'grid';
        is_checked = false;
      }
    });
  }

//Переход на предыдущий вопрос
  function button_back(){
    let button = document.getElementById('button-back');
    button.addEventListener('click', () => {
      let page = document.getElementsByClassName("page");
      if(step == 0){
        window.location = 'index.html';
      }
      else{
        count(); //считает стоимость
        is_checked = true;
        page[step].style.display = 'none';
        step--;
        page[step].style.display = 'grid';
      }
    });
  }

//Отобразить ошибку
  function error_print(){
    document.getElementById("error").innerHTML = "Ошибка: Выберите пункт";
  }

//Скрыть ошибку
  function error_clear(){
    document.getElementById("error").innerHTML = "";
  }

}());
