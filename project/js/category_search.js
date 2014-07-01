var moderator_search_caterogies = [];
var test_status_result = [];

for (var i = 0; i <= Model.date.Tests_categories.length; i++) {
    moderator_search_caterogies[i] = 0;
}

function CategoriesController() {

    var Categories = Model.date.Tests_categories;
    var place_for_filter = document.getElementById('categoriesContainer');
    var content = '';
    var list_categories = [];
    for (var i = 0; i < Categories.length; i++) {
        if (Categories[i].parent_id == 0) {
            list_categories.push({
                name: Categories[i].name,
                id: Categories[i].id
            });
        }
    }
    for (var i = 0; i < list_categories.length; i++) {
        content += '<div class="col-xs-12"><div class=" col-xs-8 col-xs-offset-2 text-left name-category">' + list_categories[i].name + '</div>';
        for (var j = 0; j < Categories.length; j++) {
            if (Categories[j].parent_id == list_categories[i].id) {
                content += '<div class="row"><div class="col-xs-8 col-xs-offset-1 text-center" sub_categ ="' + Categories[j].id + '"  categ ="' + Categories[j].parent_id + '">    ' + Categories[j].name + '</div></div>';
            }
        }
        content += '</div>';
    }
    place_for_filter.innerHTML += content;

    function hasClass(target, className) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
    }
    var filter_category = document.querySelectorAll('.name-category');

    console.log(filter_category);
    for (var i = 0; i < filter_category.length; i++) {

        var sub_siblings = Array.prototype.filter.call(filter_category[i].parentNode.children, function(child) {
            return child !== this;
        });
        for (var j = 1; j < sub_siblings.length; j++) {

            sub_siblings[j].querySelectorAll('div')[0].addEventListener('click', function() {
                console.log(this);
                if (hasClass(this, "curent-filter")) {
                    console.log('true');
                    this.classList.remove("curent-filter");
                } else {
                    this.classList.add("curent-filter");
                }
            });
        }

        filter_category[i].addEventListener('click', function() {
            var check_siblings = false;
            var siblings = Array.prototype.filter.call(this.parentNode.children, function(child) {
                return child !== this;
            });
            for (var i = 1; i < siblings.length; i++) {

                if (hasClass(siblings[i].querySelectorAll('div')[0], "curent-filter")) {
                    // console.log('true');
                    check_siblings += 1;
                    siblings[i].querySelectorAll('div')[0].classList.remove("curent-filter");
                } else {
                    siblings[i].querySelectorAll('div')[0].classList.add("curent-filter");
                }
            }
            console.log(siblings[i]);
            if (check_siblings) {
                for (var i = 1; i < siblings.length; i++) {
                    siblings[i].querySelectorAll('div')[0].classList.remove("curent-filter");
                }
            }


        });
        var reset = document.querySelectorAll('.reset')[0];
    		reset.addEventListener('click', function() {
        var curent_filter = document.querySelectorAll('.curent-filter');
        for (var i = 0; i < curent_filter.length; i++) {
            curent_filter[i].classList.remove("curent-filter");
        }
    });


    }
    //test_status_result
    for (i=0; i<Model.date.Tests.length; i++ ) {
         if (Model.date.Tests[i].status.id == 2) {
            test_status_result.push(Model.date.Tests[i]) }
    }

    if (test_status_result.length < 5) {
    var table = document.getElementById("table_result");
    
    for (i = 0; i < test_status_result.length; i++) {
       	 var row = table.insertRow(table.rows.length);
       	 var cell = row.insertCell(-1);
       	 cell.innerHTML = test_status_result[i].name;
         var cell = row.insertCell(-1);
         cell.innerHTML = test_status_result[i].author;
       	 var cell = row.insertCell(-1);
         cell.innerHTML = '<a href="#" data-testid="' + test_status_result[i].id + '" onclick="toGo(this)">Перевірити</a>';
}
    } else {
    	
       var table = document.getElementById("table_result");
        for (i = 0; i < 5; i++) {
        var row = table.insertRow(table.rows.length);
        
        var cell = row.insertCell(-1);
        cell.innerHTML = test_status_result[i].name;
        var cell = row.insertCell(-1);
        cell.innerHTML = test_status_result[i].author;
        var cell = row.insertCell(-1);
        cell.innerHTML = '<a href="#" data-testid="' + test_status_result[i].id + '" onclick="toGo(this)">Перевірити</a>';
}
    
    pagination();
}
}


function pagination() {

	var n_test = Math.round(test_status_result.length / 5);
    // remove
    var x2 = document.getElementById("myList");
    var hasChilds = x2.hasChildNodes(0);
        if (hasChilds) {
             document.getElementById("myList").removeChild(link);
        }
    //creat
	for (i=0; i<n_test; i++) {
		var link = document.createElement('a');
		link.setAttribute('href', '#currentpage='+(i+1));
		var textnode=document.createTextNode(1+i);
		link.appendChild(textnode);
		//document.getElementById("myList").childNodes[1].appendChild(link);
       // if (document.getElementById(myList.hasChildNodes()) {
       // document.getElementById("myList").removeChild(link);
//}

        document.getElementById("myList").appendChild(link);
	}
}

document.getElementById("myList").onclick = function (e) {
    var target = e.target;
    var value = parseInt(target.innerHTML);
    console.log(value);
		var table = document.getElementById("table_result");
		var i = (value * 5);
		var k = (i-5);
		console.log(i,k)

        for (k; k < i; k++) {
		table.deleteRow(0);
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(-1);
        
        cell.innerHTML = test_status_result[k].name;
        var cell = row.insertCell(-1);
        cell.innerHTML = test_status_result[k].author;
        var cell = row.insertCell(-1);
        cell.innerHTML = '<a href="#" data-testid="' + test_status_result[k].id + '" onclick="toGo(this)">Перевірити</a>';
}
}

function change_moder_search_selected(i) {
    var category_id = i;
    // 1 means category is selected
    if (moderator_search_caterogies[i] == 1) {
        moderator_search_caterogies[i] = 0;
    } else {
        moderator_search_caterogies[i] = 1;
    }
    console.log(moderator_search_caterogies)
}

 function get_results() {
   	document.getElementById("table_result").innerHTML = "";
        var filter = false;
        var cat = false;
        var subcat = false;
        var array_filter_categories = document.querySelectorAll('.curent-filter');
        if (array_filter_categories.length) {
            cat = [];
            subcat = [];
            for (var i = 0; i < array_filter_categories.length; i++) {
                if (cat.indexOf(array_filter_categories[i].getAttribute("categ")) == -1) {
                    cat.push(array_filter_categories[i].getAttribute("categ"));
                }
                subcat.push(array_filter_categories[i].getAttribute("sub_categ"));
            }
        } else {
            cat = false;
            subcat = false;
        }
        console.log(cat);
        console.log(subcat);

    var table = document.getElementById("table_result");
    if(cat && subcat){
	    for (i = 0; i < test_status_result.length; i++) {
	    	console.log(test_status_result[i].subcategory);
	    	console.log(test_status_result[i].category);
	    	if(subcat.indexOf(test_status_result[i].subcategory.toString())+1  && cat.indexOf(test_status_result[i].category.toString())+1){
	    		console.log('true');
	        var row = table.insertRow(table.rows.length);
	        var cell = row.insertCell(-1);
	        cell.innerHTML = test_status_result[i].name;
	        var cell = row.insertCell(-1);
	        cell.innerHTML = test_status_result[i].author;
	        var cell = row.insertCell(-1);
	        cell.innerHTML = '<a href="#" data-testid="' + test_status_result[i].id + '" onclick="toGo(this)">Перевірити</a>';
	        }
	}
	  }else{
	  //   var table = document.getElementById("table_result");
	  //   for (i = 0; i < Model.date.Tests.length; i++) {
	  //       var row = table.insertRow(table.rows.length);
	  //       var cell = row.insertCell(-1);
	  //       cell.innerHTML = Model.date.Tests[i].name;
	  //       var cell = row.insertCell(-1);
	  //       cell.innerHTML = Model.date.Tests[i].author;
	  //       var cell = row.insertCell(-1);
	  //       cell.innerHTML = '<a href="#" data-testid="' + Model.date.Tests[i].id + '" onclick="toGo(this)">Перевірити</a>';  	
	  // }   
             var table = document.getElementById("table_result");
        for (i = 0; i < 5; i++) {
        var row = table.insertRow(table.rows.length);
        
        var cell = row.insertCell(-1);
        cell.innerHTML = test_status_result[i].name;
        var cell = row.insertCell(-1);
        cell.innerHTML = test_status_result[i].author;
        var cell = row.insertCell(-1);
        cell.innerHTML = '<a href="#" data-testid="' + test_status_result[i].id + '" onclick="toGo(this)">Перевірити</a>';
}
    
    pagination();
      }

    }
    function toGo(element) {
    var test_id = element
    console.log(test_id);
    var t_id = test_id.dataset.testid;
    console.log(Model.date);
    console.log(typeof Model.date);
    Model.date.Moderator_test_id=t_id;
    Model.save_localStorage();
    console.log(t_id);
    window.location = "moderatrPage.html";
} 