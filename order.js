let select = "item1";
function switch_page(div_id){
  display_page(div_id);
}

function display_page(div_id){
  const divs = document.getElementsByClassName("info");
  for(i = 0; i < divs.length; i++){
    if(divs[i].id == div_id){
      divs[i].style.display = 'grid';
      continue;
    }
  divs[i].style.display = 'none';
  }
}

function error_clear(){
  document.getElementById("error").innerHTML = "";
}

function item_choose(item_id){
  item_clear_selection();
  const item = document.getElementById(item_id);
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
