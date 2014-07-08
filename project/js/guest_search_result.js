//window.onload = function(){
 Tests = Model.date.Tests;
 Categories =  Model.date.Tests_categories;
 var simpleSearch = {
    row_results: document.querySelectorAll(".row-search-result")[0],
    search_input: document.getElementById('search_input'),
    linkToAdvancedSearch: document.getElementById('linkToAdvancedSearch'),
     place_for_pagination: document.getElementById('place_for_pagination'),
    cat: false,
    subCat: false,
	showEmpty: function (nothing) {
		if(nothing){
//			this.row_results.innerHTML = '<div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 search-result well"><p>нічого не знайдено...</p></div>'; /*old version	    */
			this.row_results.innerHTML = '<div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 alert alert-warning">нічого не знайдено...</div>';              
             this.place_for_pagination.innerHTML = "";
		}else{
			this.row_results.innerHTML = '';
            this.place_for_pagination.innerHTML = "";
		}
    },
    showAllcontaining: function (value,start,step) {
                            start = (start)?start:0;
                            step = (step)?step:4;
							var result_array = [];
							var array_filter_categories = document.querySelectorAll('.curent-filter');
							if (array_filter_categories.length) {
								this.cat = [];
								this.subCat = [];
								for (var i = 0; i < array_filter_categories.length; i++) {
									if (this.cat.indexOf(array_filter_categories[i].getAttribute("categ")) == -1) {
										this.cat.push(array_filter_categories[i].getAttribute("categ"));
									}
									this.subCat.push(array_filter_categories[i].getAttribute("sub_categ"));
								}
							}else{
								this.cat = false;
								this.subCat = false;
							}							
							if(this.cat && this.subCat){
								for (index in Tests) {
									for (inner_index in Tests[index]) {
											if (Tests[index].tags.toString().toLowerCase().indexOf(value.toLowerCase()) + 1 && this.subCat.indexOf(Tests[index]['subcategory'].toString()) + 1 && this.cat.indexOf(Tests[index]['category'].toString()) + 1 && Tests[index]['status'] == 3) {
												result_array.push(index);
												break;
											}
									}
								}							
							}
							else{
								for (index in Tests) {
									for (inner_index in Tests[index]) {
										if (Tests[index].tags.toString().toLowerCase().indexOf(value.toLowerCase()) + 1 && Tests[index]['status'] == 3) {
											result_array.push(index);
											break;

										}
									}
								}
							}
							if (result_array.length) {
                                console.log(result_array);
                                this.showEmpty();
                                var lengthArray;
                                // if(start+step<result_array.length){
                                    // //lengthArray = result_array.length;
                                    // lengthArray = start+step;
                                // }else{
                                    // lengthArray = (start+1)*step;
                                // }
                                lengthArray = (start)?start*step:step;
                                var i;
								for (var k = (start-1)*step; k<lengthArray;k++) {
									//console.log("i=>"+result_array[k]);
                                    i = result_array[k];
									var tags = '';
                                    if(Tests[i]){
									for (var j = 0; j < Tests[i].tags.length; j++) {
										if (j != Tests[i].tags.length - 1) {
											tags += '<li><a href="">' + Tests[i].tags[j] + '&nbsp|</a></li> ';
										} else {
											tags += '<li><a href="">' + Tests[i].tags[j] + '</a></li>';
										}
									}
									this.row_results.innerHTML += '<div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 search-result well"><h3 class="title-post-name"><a style="text-decoration: none;" href="Test.html?id='+Tests[i].id+'">' + Tests[i].name + '</a></h3><p class="text-justify ">' + Tests[i].description + '</p><div class="col-xs-12"><ul class="search-teg">' + tags + ' </ul></div></div>';
									}
									else{
                                    //break;
									}
								}  

                                this.searchTags();
                                this.createLinksPagination(result_array.length,step,start);
							} 
							else {
								this.showEmpty(true);
							}
        //console.log(result_array.length);
    },

    EventKeyUp: this.search_input.addEventListener('keyup', function () {
																simpleSearch.showEmpty();
																var value = simpleSearch.search_input.value;
																if (value.replace(/^\s+|\s+$/g, '') === '') {
																	simpleSearch.showEmpty();
																} else {
																	simpleSearch.showAllcontaining(value);
																}
															}),
     searchTags: function(){
        var tags = document.querySelectorAll('.search-teg li');    
         for(var i = 0;i<tags.length;i++){
            tags[i].addEventListener('click',function(e){
                e.preventDefault();
                var searchQuery;
                if(this.innerText.indexOf('|')+1){
                    searchQuery = this.innerText.substring(0,this.innerText.length-2);
                }
                else{
                    searchQuery = this.innerText;
                }
                simpleSearch.search_input.value = searchQuery;
                simpleSearch.showEmpty();
                simpleSearch.showAllcontaining(searchQuery);
                return false;
            })
         }
                                           
     },
     clickLinkToAdvancedSearch: function(){
        if(this.linkToAdvancedSearch){
            this.linkToAdvancedSearch.addEventListener('click',function(e){
                //e.preventDefault();
                console.log(document.getElementById('linkToAdvancedSearch'))
                this.href = this.href + '?searchQuery=' +  simpleSearch.search_input.value;
            })
        }
     },
     parseUrlForSearch: function(){
        if(window.location.search){
            var searchQuery = this.getUrlParams().searchQuery;
             this.search_input.value = searchQuery;
             this.showAllcontaining(searchQuery,this.getUrlParams().currentpage,4);
        }    
          
     },
     createLinksPagination: function(quantity, step, currentpage){
        var countLinks  = Math.ceil(quantity/step);
        var linkOnPage = 4;
        currentpage = (currentpage)?currentpage: 1;
        console.log("countLinks=>"+countLinks);
        if(countLinks>1 && currentpage<=countLinks){ 
            var htmlLinks = '<ul class="pagination">';
            var beginLink,endLink;
                     if(currentpage>1){
                         if(currentpage-2>1){
                             htmlLinks += "<li><a href='"+window.location.pathname + "?searchQuery="+this.search_input.value+"&currentpage=1'>перша</a></li>";                             
                         }
                         htmlLinks += "<li><a href='"+window.location.pathname + "?searchQuery="+this.search_input.value+"&currentpage="+(currentpage-1)+"'>&laquo;</a></li>";
                     }            
             for(var i=currentpage-2;i<=parseInt(currentpage)+2;i++){
                 if(i>0 && i <=countLinks)
				 if(currentpage == i){
					htmlLinks += "<li class='active'><a href='"+window.location.pathname + "?searchQuery="+this.search_input.value+"&currentpage="+i+"'>"+i+"</a></li>";
				 }
				 else{
					htmlLinks += "<li><a href='"+window.location.pathname + "?searchQuery="+this.search_input.value+"&currentpage="+i+"'>"+i+"</a></li>";
				 }
             }
            if(currentpage<countLinks){
                htmlLinks += "<li><a href='"+window.location.pathname + "?searchQuery="+this.search_input.value+"&currentpage="+(parseInt(currentpage)+1)+"'>&raquo;</a></li>";
                if(parseInt(currentpage)+2<countLinks){
                    htmlLinks += "<li><a href='"+window.location.pathname + "?searchQuery="+this.search_input.value+"&currentpage="+countLinks+"'>остання</a></li>";                    
                }
            }
             htmlLinks +="</ul>";
             this.place_for_pagination.innerHTML = htmlLinks;
        }

     },
     getUrlParams: function(){
        var urlForParse = decodeURIComponent(window.location.search);
        var objectParams = {},key,value;
        if(urlForParse.length){
             var arrayUrlForParse = urlForParse.split('&');
             for(var i = 0;i<arrayUrlForParse.length;i++){
                key = arrayUrlForParse[i].split('=')[0];
                value = arrayUrlForParse[i].split('=')[1];
                if(i == 0){
                    objectParams[key.substring(1)] = value;
                }
                 else{
                      objectParams[key] = value;
                }

             }
        }
         return objectParams; 
     },
														
    init: function(){
        this.EventKeyUp;
        this.clickLinkToAdvancedSearch();
        this.parseUrlForSearch();
    }

}

simpleSearch.init();

