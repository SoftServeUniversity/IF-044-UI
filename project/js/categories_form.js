var place_for_category = document.getElementById('usersCategories');
console.log(Model.date.Tests_categories);

Categories = Model.date.Tests_categories;
var p; //current category
var list = [];// list of main category
var number;// value of captcha


function result(){

        var a = Math.ceil(Math.random() * 9);
        var b = Math.ceil(Math.random() * 9);
        var c = Math.ceil(Math.random() * 9);
        var d = Math.ceil(Math.random() * 9);
        var e = Math.ceil(Math.random() * 9);
        var code = a * b * c * d * e;
        var cotch = code;
        number = cotch;
        return cotch;
        conlole.log(cotch);
}

function button_delete(id){
  var attribute = id;
  console.log(attribute);
  var current_category = get_category_by_id(attribute);
  console.log(current_category);
  var q = list;
  p = current_category;
  console.log(q);
  document.getElementById('newecategory').innerHTML = current_category.name;
  for (var l = 0; l < q.length; l++){
    if (current_category.parent_id == q[l].id) {
       document.getElementById('main_name_of_category').innerHTML = q[l].name;
       console.log();
    } 
  }
  result();
        document.getElementById("txtCaptcha_delete_category").value = number;
        document.getElementById("txtCaptchaDiv_delete_category").innerHTML = number;
}



function buttondelete(dismiss){
 
 var current_category = p;
 console.log(current_category);
  var str1 = document.getElementById('txtCaptcha_delete_category').value;
  var str2 = document.getElementById('txtInput_delete_category').value;

  if (str1 == str2) {
    for( var i =0; i < Categories.length; i++){
      if(current_category == Categories[i]){
        Categories.splice(i, 1)
      }
    }
    Model.save_localStorage();
    document.getElementById('txtInput_delete_category').value = '';
    dismiss.setAttribute("data-dismiss", "modal");
    document.getElementById("txtInput_delete_category").style.border = '';
    ShowAll();
 }
  else{
    document.getElementById("txtInput_delete_category").style.border = 'solid 1px #FC141B';
    document.getElementById('txtInput_delete_category').value = '';
    dismiss.setAttribute("data-dismiss", "");
    result();
     document.getElementById("txtCaptcha_delete_category").value = number;
     document.getElementById("txtCaptchaDiv_delete_category").innerHTML = number;
  }
}

function ShowAll(){
	var category_table = '';
  var list_categories = [];
  var number_categories = 1;
	for (var i = 0; i < Categories.length; i++) {
	 if (Categories[i].parent_id == 0) {
            list_categories.push({
                name: Categories[i].name,
                id: Categories[i].id

            });
            
       }
       list = list_categories;
   }

   

   for (var j = 0; j < Categories.length; j++) {
    if (Model.date.Tests_categories[j]){
        // console.log(Model.date.Tests_categories[j]);

      category_table += '<div class="row category_table_form"><div class="col-lg-1"><strong>'+ number_categories +++'</strong></div><div class="col-lg-2"><strong>' + Categories[j].name + '</strong></div>';
       for (var l = 0; l < list_categories.length; l++){
         if (Categories[j].parent_id == list_categories[l].id) {
             category_table += '<div class="col-lg-2 middle"><strong>'+list_categories[l].name+'<strong></div>';
          }
          else{
            if (Categories[j].parent_id == 0) {
              category_table += '<div class="col-lg-2 middle"><strong>'+('---')+'<strong></div>';
              break;
              } 
          }

        }
        category_table += " <div class='col-lg-2 pull-right'><a href='#myModal' data-toggle='modal' data-target='#delete_category_current' id='login-button2' onclick='loginModule()'><button class='btn btn-danger btn-xs' onclick=button_delete("+Model.date.Tests_categories[j].id+") id_category='"+Model.date.Tests_categories[j].id+"'>ВИДАЛИТИ</button></a></div><div class='col-lg-1 pull-right'><a href='#myModal' data-toggle='modal' data-target='#myModal3' id='login-button2' onclick='loginModule()'><button class='btn btn-success btn-small btn-xs' onclick=ReEditModul("+Model.date.Tests_categories[j].id+") id_category='"+Model.date.Tests_categories[j].id+"'>РЕДАГУВАТИ</button></a></div></div>";
     
    
     }
   }
    place_for_category.innerHTML = category_table;
}
ShowAll();


function get_category_by_id(category_id){
  var Tests_categories = Model.date.Tests_categories;
  for(var i = 0; i<Tests_categories.length;i++){
    if(Tests_categories[i].id == category_id){
      var catch_category = Tests_categories[i];
      break;
    }
  }
  return catch_category;
}



// edit buttons below

function edditnewcategory(){
  // var a = Math.ceil(Math.random() * 9);
  //       var b = Math.ceil(Math.random() * 9);
  //       var c = Math.ceil(Math.random() * 9);
  //       var d = Math.ceil(Math.random() * 9);
  //       var e = Math.ceil(Math.random() * 9);
  //       var code = a * b * c * d * e;
        result();

        document.getElementById("txtCaptcha_newcategory").value = number;
        document.getElementById("txtCaptchaDiv_newcategory").innerHTML = number;
}

function editbutton(dismiss){

  var str1 = document.getElementById('txtCaptcha_newcategory').value;
  var str2 = document.getElementById('txtInput_newcategory').value;
  var obj = {};
  var length = Model.date.Tests_categories.length;
  var new_category = document.getElementById('input_of_cotegory').value;
  var main_category = document.getElementById('select');
  var new_category_main_category = main_category.options[main_category.selectedIndex].value;
  var parant = main_category.options[main_category.selectedIndex].getAttribute("parant_id");
  var parant_id = parseInt(parant, 10);

      if (str1 == str2 && document.getElementById('input_of_cotegory').value != '') {
          obj.id = length+1;
          obj.name = new_category;
          obj.parent_id = parant_id;
          Model.date.Tests_categories.push(obj);
          console.log(Model.date.Tests_categories.length);
          Model.save_localStorage();
          document.getElementById('input_of_cotegory').value = '';
          document.getElementById('select').options[3].selected = true;
          document.getElementById('input_of_cotegory').style.border = '';
          document.getElementById("txtInput_newcategory").style.border = '';
          document.getElementById('txtInput_newcategory').value="";
          dismiss.setAttribute("data-dismiss", "modal");
          ShowAll();
          }
          else{
                if (document.getElementById('input_of_cotegory').value == '') {
                  document.getElementById('input_of_cotegory').style.border = "solid 1px #FC141B";
                  document.getElementById("txtInput_newcategory").style.border = "";
                  document.getElementById('input_of_cotegory').focus(); 
                  document.getElementById("txtInput_newcategory").value ="";
                  dismiss.setAttribute("data-dismiss", "");
                  edditnewcategory();

                }else
                  {
                  if (str1 != str2) {
                  document.getElementById("txtInput_newcategory").value ="";
                  document.getElementById("txtInput_newcategory").style.border = "solid 1px #FC141B";
                  document.getElementById('input_of_cotegory').style.border = "";
                  dismiss.setAttribute("data-dismiss", "");
                  edditnewcategory();
              }
            }
         }
  

}
 function hideModalBox() {
        loginButton.setAttribute('data-dismiss', 'modal');
    }

  function resetCapcha(){
  if(document.getElementById('input_of_cotegory').value){document.getElementById('input_of_cotegory').value="";}
  if(document.getElementById('txtInput_newcategory').value){document.getElementById('txtInput_newcategory').value="";}
  if(document.getElementById('txtInput_reedit-categoty').value){document.getElementById('txtInput_reedit-categoty').value="";}
  if(document.getElementById('txtInput_delete_category').value){document.getElementById('txtInput_delete_category').value="";}

}  

//--------------------------------------------

function ReEditModul(id){


       // var a = Math.ceil(Math.random() * 9);
       //  var b = Math.ceil(Math.random() * 9);
       //  var c = Math.ceil(Math.random() * 9);
       //  var d = Math.ceil(Math.random() * 9);
       //  var e = Math.ceil(Math.random() * 9);
       //  var code = a * b * c * d * e;

      
        result();
        document.getElementById("txtCaptcha_reedit-categoty").value = number;
        document.getElementById("txtCaptchaDiv_reedit-categoty").innerHTML = number;

  var attribute = id;
  var current_category = get_category_by_id(attribute);
  p = current_category;
  document.getElementById('name_of_cotegory').value = current_category.name;
  var h = current_category.parent_id;
  document.getElementById('select_reedit').options[h].selected = true;
// console.log(h);


}

function ReEditButton(dismiss){


  // console.log(h);

  var str1 = document.getElementById('txtCaptcha_reedit-categoty').value;
  var str2 = document.getElementById('txtInput_reedit-categoty').value;

  var new_change = document.getElementById('name_of_cotegory').value;
  var choose_category = document.getElementById('select_reedit');
  var new_choose_category = choose_category.options[choose_category.selectedIndex].getAttribute("parant_id");
  var current_category = p;
  if (str1 == str2) { 
    for (var i = 0; i < Categories.length; i++) {
        if (current_category == Model.date.Tests_categories[i]) {
          Categories[i].name = new_change;
          Categories[i].parent_id = new_choose_category;
          document.getElementById('txtInput_reedit-categoty').value="";
          document.getElementById('txtInput_reedit-categoty').style.border = '';
          dismiss.setAttribute("data-dismiss", "modal");

        }
    }
    Model.save_localStorage();
    ShowAll();
  }
  else{
    document.getElementById("txtInput_reedit-categoty").value ="";
    document.getElementById("txtInput_reedit-categoty").style.border = "solid 1px #FC141B";
    dismiss.setAttribute("data-dismiss", "");
          result();
          document.getElementById("txtCaptcha_reedit-categoty").value = number;
          document.getElementById("txtCaptchaDiv_reedit-categoty").innerHTML = number;
    
  }
}





