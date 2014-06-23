﻿//window.onload = function(){
 Tests = Model.date.Tests;
 Categories =  Model.date.Tests_categories;
 var simpleSearch = {
    row_results: document.querySelectorAll(".row-search-result")[0],
    search_input: document.getElementById('search_input'),
    linkToAdvancedSearch: document.getElementById('linkToAdvancedSearch'),
    cat: false,
    subCat: false,
	showEmpty: function (nothing) {
		if(nothing){
			this.row_results.innerHTML = '<div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 search-result well"><p>нічого не знайдено...</p></div>';			
		}else{
			this.row_results.innerHTML = '';
		}
    },
    showAllcontaining: function (value) {
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
											if (Tests[index].tags.toString().toLowerCase().indexOf(value.toLowerCase()) + 1 && this.subCat.indexOf(Tests[index]['subcategory'].toString()) + 1 && this.cat.indexOf(Tests[index]['category'].toString()) + 1 && Tests[index]['status']['id'] == 3) {
												result_array.push(index);
												break;
											}
									}
								}							
							}
							else{
								for (index in Tests) {
									for (inner_index in Tests[index]) {
										if (Tests[index].tags.toString().toLowerCase().indexOf(value.toLowerCase()) + 1 && Tests[index]['status']['id'] == 3) {
											result_array.push(index);
											break;

										}
									}
								}
							}
							if (result_array.length) {
								for (ind in result_array) {
									var i = result_array[ind];
									var tags = '';
									for (var j = 0; j < Tests[i].tags.length; j++) {
										if (j != Tests[i].tags.length - 1) {
											tags += '<li><a href="">' + Tests[i].tags[j] + '&nbsp|</a></li> ';
										} else {
											tags += '<li><a href="">' + Tests[i].tags[j] + '</a></li>';
										}
									}
									this.row_results.innerHTML += '<div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 search-result well"><h3 class="title-post-name"><a style="text-decoration: none;" href="Test.html?id='+Tests[i].id+'">' + Tests[i].name + '</a></h3><p class="text-justify ">' + Tests[i].description + '</p><div class="col-xs-12"><ul class="search-teg">' + tags + ' </ul></div></div>';
								}
                                this.searchTags();
							} else {
								this.showEmpty(true);
        }
    },

    EventKeyUp: this.search_input.addEventListener('keyup', function () {
																simpleSearch.showEmpty();
																var value = simpleSearch.search_input.value;
																if (value.replace(/^\s+|\s+$/g, '') === '') {
																	simpleSearch.showEmpty();
																} else {
																	simpleSearch.showAllcontaining(value);
                                                                    //simpleSearch.searchTags();
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
            var searchQuery=decodeURIComponent(window.location.search.substring(13,window.location.search.length));
            //console.log(decodeURIComponent(escape(searchQuery)));
             this.search_input.value = searchQuery;
                 this.showAllcontaining(searchQuery);
        }    
          
     },
														
    init: this.EventKeyUp

}

simpleSearch.init;
simpleSearch.clickLinkToAdvancedSearch();
simpleSearch.parseUrlForSearch();
//simpleSearch.init2;
//}   