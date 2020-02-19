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
  const item = document.getElementById(item_id);
  item.style.background = "#dfdfdf";
}

function get_cost(){
  const cost = document.getElementById('cost').value;
  retur
}