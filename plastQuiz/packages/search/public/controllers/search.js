'use strict';

angular.module('mean.search').directive('mySharedScope', function ($timeout) {
     return {
         template: '<div class="row filter-search"><div class="col-xs-8 col-xs-offset-2 text-left div-reset-active"><span class="reset"><img src="pic/reset.png" height="10" width="10"> шукати скрізь</span></div>                  
                        <div ng-repeat="cats in testsCategories" class="col-xs-12"><div class=" col-xs-8 col-xs-offset-2 text-left name-category"><b>{{cats.cat_name}}</b></div>
                            <div class="row" ng-repeat="cat in cats.sub_cat">
                                <div class="col-xs-8 col-xs-offset-1 text-center" sub_categ="{{cat.id}}" categ="{{cats.cat_id}}">{{cat.name}}</div>
                            </div>
                        </div>
                        </div>
                        <br>
                        <button class="ablock btn btn-default btn-sm" ng-click="changeQuerySearch()">Застосувати фільтр</button>'
                                
                                        
     };
 });




angular.module('mean.search').controller('SearchController', ['$scope', '$http', '$stateParams', '$location', '$state', '$timeout',
    function($scope, $http, $stateParams, $location, $state, $timeout) {
        console.log($location.path());
        console.log($state);
        $scope.nothingFind = true;
        $scope.searchQuery;
        $scope.package = {
            name: 'search'
        };     
		//console.log($state);
        $scope.searchResult;
            var tempFilterText = '',
        filterTextTimeout;
        $scope.searchQuery = $stateParams.searchQuery;
        $scope.search = function(val){
            
                            var cat = false;
                            var subCat = false;
							var array_filter_categories = document.querySelectorAll('.curent-filter');
							if (array_filter_categories.length) {
								cat = [];
								subCat = [];
								for (var i = 0; i < array_filter_categories.length; i++) {
                                    //cat.push(array_filter_categories[i].getAttribute("categ"));
									if (cat.indexOf(parseInt(array_filter_categories[i].getAttribute("categ"))) == -1) {
										cat.push(parseInt(array_filter_categories[i].getAttribute("categ")));
									}
									subCat.push({subcategory:parseInt(array_filter_categories[i].getAttribute("sub_categ"))});
								}
                                
							}        
            
            if (filterTextTimeout) $timeout.cancel(filterTextTimeout);

            tempFilterText = val;
            filterTextTimeout = $timeout(function() {  
            if(val === '' || !val){
                $scope.searchResult = false;
                return false;
            }                 
                $http.post('/search/example/anyone',{
                    searchQuery: val,
                    subCategories: subCat,
                    categories: cat
                })
                    .success(function(response){      
                       // console.log("count " + response.length);
                        if(!response.length){
                            $scope.nothingFind = false;
                        }else{
                            $scope.nothingFind = true;
                        }
                            $scope.searchResult = response;
//                        if(response.length){
//                           // $location.path( "/search/"+$scope.searchQuery+'/');
//                        }
                    })
            }, 250); // delay          
        }
        $scope.$watch('searchQuery',function(val){
                      $scope.search(val);
        })
        $scope.changeQuerySearch = function(val){
        if(val){
            $scope.searchQuery =val;
        }else{
            $scope.search($scope.searchQuery);
        }    
        }; 
	    $http.get('http://localhost:3000/indexdata').success(function(result) {
            $scope.testsCategories = result;
	    });  
       
        if($location.path().indexOf('advanced_search')+1){
       setTimeout(function () {
           function hasClass(target, className) {
               return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
           }
           var filter_category = document.querySelectorAll('.name-category');




           //console.log(filter_category);
           for (var i = 0; i < filter_category.length; i++) {

               var sub_siblings = Array.prototype.filter.call(filter_category[i].parentNode.children, function (child) {
                   return child !== this;
               });
               for (var j = 1; j < sub_siblings.length; j++) {

                   sub_siblings[j].querySelectorAll('div')[0].addEventListener('click', function () {
                       if (document.querySelectorAll('.div-reset-active').length) {
                           document.querySelectorAll('.div-reset-active')[0].classList.remove('div-reset-active');
                       }
                       if (hasClass(this, "curent-filter")) {
                           //console.log('true');
                           this.classList.remove("curent-filter");
                       } else {
                           this.classList.add("curent-filter");
                       }
                   });
               }



               filter_category[i].addEventListener('click', function () {
                   var check_siblings = false;
                   if (document.querySelectorAll('.div-reset-active').length) {
                       document.querySelectorAll('.div-reset-active')[0].classList.remove('div-reset-active');
                   }
                   var siblings = Array.prototype.filter.call(this.parentNode.children, function (child) {
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
                   //console.log(siblings[i]);
                   if (check_siblings) {
                       for (var i = 1; i < siblings.length; i++) {
                           siblings[i].querySelectorAll('div')[0].classList.remove("curent-filter");
                       }
                   }


               });


           }
           var reset = document.querySelectorAll('.reset')[0];
           reset.addEventListener('click', function () {
               //  console.log(this.parentNode);
               this.parentNode.classList.add('div-reset-active');
               var curent_filter = document.querySelectorAll('.curent-filter');
               for (var i = 0; i < curent_filter.length; i++) {
                   curent_filter[i].classList.remove("curent-filter");
               }
           });
       }, 3000);
       }       
       
    }
]);
