(function() {
  let size = null;
  let stage = null;
  let colorline = null;
  let step = 0;

  window.onload = function() {
    changeForm();
  };

  function changeForm() {
    clickChooseSize();
    clickChooseStage();
    clickChooseColorLine();
    button_ok();
    button_back();
  }

  function clickChooseSize() {
    let el = document.getElementsByName('size');
    [].forEach.call(el, (value) => {
      value.addEventListener('change', () => {
        item_clear_selection('item-size');
        let id = value.id;
        size = value.value;
        let item = document.querySelector(`[data-for="${id}"]`);
        item.style.background = '#dfdfdf';
      });
    });
  }

  function clickChooseStage() {
    let el = document.getElementsByName('stage');
    [].forEach.call(el, (value) => {
      value.addEventListener('change', () => {
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
        document.querySelector(`[data-for="${id}"]`).style.background = '#dfdfdf';
        document.querySelector(`[data-for="${id}"]`).style.zIndex = 1;
      });
    });
  }

  function clickChooseColorLine() {
    let chbox = document.getElementById('selectcolorline');
    chbox.addEventListener('change', () => {
      if(chbox.checked){
        colorline = chbox.value;
        document.getElementById('colorline').style.background = '#dfdfdf';
      }
      else{
        colorline = 'none';
        document.getElementById('colorline').style.background = '#ffffff';
      }
    });
  }

  function display_colorline(){
    document.getElementById('colorline').style.display = 'block';
  }  

  function hide_colorline(){
    document.getElementById('colorline').style.display = 'none';
  }   

  function item_clear_selection(item){
    const items = document.getElementsByClassName(item);
    for(i = 0; i < items.length; i++){
      items[i].style.background = "#FFFFFF";
      items[i].style.zIndex = 0;
    }
  }  

  function button_ok(){
    let button = document.getElementById('button-ok');
    button.addEventListener('click', () => {
      console.log(size);
      console.log(stage);
      console.log(colorline);
      let page = document.getElementsByClassName("page");
      page[step].style.display = 'none';
      step++;
      page[step].style.display = 'grid';
    });
  }

  function button_back(){
    let button = document.getElementById('button-back');
    button.addEventListener('click', () => {
      let page = document.getElementsByClassName("page");
      if(step == 0){
        window.location = 'index.html';
      }
      else{
        page[step].style.display = 'none';
        step--;
        page[step].style.display = 'grid';
      }
    });
  }  

}());