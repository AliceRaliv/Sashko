let is_selected = false;
let is_checkbox_selected = false;

function switch_page(div_id){
  if (is_selected == false){
    error_print();
  }
  else{
    display_page(div_id);
  }
}

function back_page(div_id){
  display_page(div_id);
}

function display_page(div_id){
  const divs = document.getElementsByClassName("info");
  error_clear();
  for(i = 0; i < divs.length; i++){
    if(divs[i].id == div_id){
      divs[i].style.display = 'grid';
      is_selected = false;
      continue;
    }
    divs[i].style.display = 'none';
  }

}

function error_print(){
  document.getElementById("error").innerHTML = "Ошибка: Выберите пункт";
}

function error_clear(){
  document.getElementById("error").innerHTML = "";
}

function item_choose(item_id){
  const item = document.getElementById(item_id);

  if(item_id == "stage6" && is_checkbox_selected == true){
    item.style.background = "#FFFFFF";
    is_checkbox_selected = false;
    return "ok";
  }

  if(item_id == "stage1"){
    document.getElementById("selectstage6").checked = false;
  }

  display_colorline(item_id);
  error_clear();
  if (item_id != "stage6"){
    is_checkbox_selected = false;
  }
  else{
    is_checkbox_selected = true;
  }
  if (is_checkbox_selected == false){
    item_clear_selection();
  }
  is_selected = true;
  item.style.background = "#dfdfdf";
}

function item_clear_selection(){
  const items = document.getElementsByClassName("item");
  for(i = 0; i < items.length; i++){
    items[i].style.background="#FFFFFF";
  }
}

function get_cost(){
  const cost = document.getElementById('cost').value;
  return cost;
}

function is_line(id){
  if(id == "stage2" || id == "stage3" || id == "stage4" || id == "stage5" || id == "stage6"){
    return true;
  }

  else{
    return false;
  }
}

function display_colorline(id){
  const isline = is_line(id);
  if (isline == true){
    document.getElementById('stage6').style.display = 'block';
  }
  else{
    document.getElementById('stage6').style.display = 'none';
  }

}