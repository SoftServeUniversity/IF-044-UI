window.onload = function(){
if(localStorage.Tests == "undefined" || !localStorage.Tests){
    console.log('tests storage false');
    localStorage.Tests = JSON.stringify(Tests);
}
if(localStorage.Categories == "undefined" || !localStorage.Categories){
    console.log('categs storage false');
    localStorage.Categories = JSON.stringify(Categories); 
}     

 Tests = JSON.parse(localStorage.Tests);
 Categories = JSON.parse(localStorage.Categories);
    
var place_for_filter = document.querySelectorAll('.filter-search')[0];
var content = '';
var list_categories = [];
for(var i = 0;i<Categories.length;i++){
if(Categories[i].parent_id == 0){
    list_categories.push({name:Categories[i].name,id: Categories[i].id}); 
}
}
for(var i = 0;i<list_categories.length;i++){
    content +='<div class="col-xs-12"><div class=" col-xs-8 col-xs-offset-2 text-left name-category">'+list_categories[i].name+'</div>';
    for(var j = 0;j<Categories.length;j++){
    if(Categories[j].parent_id == list_categories[i].id){
       content +='<div class="row"><div class="col-xs-8 col-xs-offset-1 text-center" sub_categ ="'+Categories[j].id+'"  categ ="'+Categories[j].parent_id+'">                                        '+Categories[j].name+'</div></div>';        
    }
    }
     content += '</div>';
}
     place_for_filter.innerHTML += content;








/////////////////////////////////////////////////////////////////////////////////////////
var row_results = document.querySelectorAll(".row-search-result")[0];
showEmpty = function(){
    row_results.innerHTML = '';
}
showAllcontaining = function(value, category, sub_category){
        var filter = false;                
        if(sub_category && category){
            filter = true;
        }
        console.log(Tests);      
        var result_array = [];
        for(index in Tests){
            for(inner_index in Tests[index]){
                if(filter){
                    if(Tests[index].tags.toString().toLowerCase().indexOf(value.toLowerCase()) + 1 && sub_category.indexOf(Tests[index]['subcategory'].toString())+1 && category.indexOf(Tests[index]['category'].toString())+1){
                        result_array.push(index);
                        break;
                    }
                }else{
                    if(Tests[index].tags.toString().toLowerCase().indexOf(value.toLowerCase()) + 1){
                        result_array.push(index);
                        break;
                    }                
                }
            }
        }
      console.log(result_array);
      if(result_array.length){
      for(ind in result_array){
        var i = result_array[ind];
        var tags = '';
        for(var j = 0;j<Tests[i].tags.length;j++){
            if(j!=Tests[i].tags.length-1 ){
                tags += '<li><a href="">' + Tests[i].tags[j] + '&nbsp|</a></li> ';
            }else{
               tags += '<li><a href="">' + Tests[i].tags[j] + '</a></li>'; 
            }
        }
        row_results.innerHTML += '                            <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 search-result well">                                <h3 class="title-post-name">          <a style="text-decoration: none;" href="#">'+Tests[i].name+'</a>                              </h3>                                <p class="text-justify ">'+Tests[i].descr+'</p><div class="col-xs-12"><ul class="search-teg">'+tags+' </ul>                                </div></div>';          
      }  
        } else{
           showEmpty(); 
        }     				
}								


var search_input = document.getElementById('search_input');
				search_input.addEventListener('keyup',function(){
					showEmpty(); 
					var value = search_input.value;
					var cat = false;
					var subcat = false;
					var array_filter_categories = document.querySelectorAll('.curent-filter');
					if(array_filter_categories.length){
					    cat = [];
					    subcat = [];
					    for(var i =0;i<array_filter_categories.length;i++){
					         if(cat.indexOf(array_filter_categories[i].getAttribute("categ")) == -1){
					             cat.push(array_filter_categories[i].getAttribute("categ"));
					         }
					         subcat.push(array_filter_categories[i].getAttribute("sub_categ"));
					    }
					}else{
						 cat = false;
					     subcat = false;
					}
					console.clear();
					console.log(cat);
					console.log(subcat);
					if(value.replace(/^\s+|\s+$/g, '') === ''){
                        showEmpty();
					} else {
						showAllcontaining(value,cat,subcat);
					}
				});
function hasClass( target, className ) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}    
var filter_category = document.querySelectorAll('.name-category');
  
    
    

console.log(filter_category);
    for(var i = 0;i<filter_category.length;i++){
        
            var sub_siblings = Array.prototype.filter.call(filter_category[i].parentNode.children, function(child){
                return child !== this;
            }); 
                for(var j = 1; j<sub_siblings.length;j++){
                    
                    sub_siblings[j].querySelectorAll('div')[0].addEventListener('click', function(){
                        console.log(this);
                    if(hasClass(this, "curent-filter")){
                          console.log('true');
                        this.classList.remove("curent-filter");
                    }else{
                        this.classList.add("curent-filter");
                    }        
                });
                }    
        
        
        
        filter_category[i].addEventListener('click',function(){
            var check_siblings = false;             
            var siblings = Array.prototype.filter.call(this.parentNode.children, function(child){
                return child !== this;
            });  
            for(var i=1;i<siblings.length;i++){
    
                if(hasClass(siblings[i].querySelectorAll('div')[0], "curent-filter")){
                     // console.log('true');
                    check_siblings+=1;
                    siblings[i].querySelectorAll('div')[0].classList.remove("curent-filter");
                }else{
                    siblings[i].querySelectorAll('div')[0].classList.add("curent-filter");
                }
            }
            console.log(siblings[i]);
            if(check_siblings){
                for(var i=1;i<siblings.length;i++){
                    siblings[i].querySelectorAll('div')[0].classList.remove("curent-filter");
                }
            }
                                            
            
        });
        
    
    }
var reset = document.querySelectorAll('.reset')[0];
    reset.addEventListener('click', function(){
       var curent_filter = document.querySelectorAll('.curent-filter');
       for(var i = 0;i<curent_filter.length;i++){
                curent_filter[i].classList.remove("curent-filter");
       }
    });
}   