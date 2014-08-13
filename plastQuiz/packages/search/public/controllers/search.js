'use strict';

angular.module('mean.search').directive('myForFilter', function($timeout) {
    return {
        template: '<div class="row filter-search"><div class="col-xs-8 col-xs-offset-2 text-left div-reset-active"><span class="reset"><img src="/search/assets/img/reset.png" height="10" width="10"> шукати скрізь</span></div>                  
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
        $scope.searchQuery = $stateParams.searchQuery;
        $scope.tryClick = function(param, currentPage) {
            var adress = $(param.target).attr('href');
            if ($state.current.name == 'advanced_search_with_params') {
                adress = adress.replace("#!/advanced_search/", "");
            } else {
                adress = adress.replace("#!/search/", "");
            }
            adress = adress.replace("#!/search/", "");
            $stateParams.searchQuery = $scope.searchQuery;
            $http.post('/search/example/anyone', {
                    searchQuery: $scope.searchQuery,
                    subCategories: filterForSearch().subCat,
                    categories: filterForSearch().cat,
                    page: currentPage
                })
                .success(function(response) {
                    if (!response.tests.length) {
                        $scope.nothingFind = false;
                    } else {
                        $scope.nothingFind = true;
                    }
                    $scope.searchResult = response.tests;
                    //	$scope.createLinksPagination(response.totalCount,4,1);
                    $scope.links = [];
                    $scope.createLinksPagination(response.totalCount, 4, currentPage);
                })
            if ($state.current.name == 'advanced_search_with_params') {
                $location.path("/advanced_search/" + adress);
            } else {
                $location.path("/search/" + adress);
            }

        }
        $scope.createLinksPagination = function(quantity, step, currentpage) {
            var countLinks = Math.ceil(quantity / step);
            var linkOnPage = 4;
            currentpage = (currentpage) ? currentpage : 1;
            $scope.links = [];
            if (countLinks > 1 && currentpage <= countLinks) {
                var beginLink, endLink;
                if (currentpage > 1) {
                    if (currentpage - 2 > 1) {
                        $scope.links.push({
                            href: 1,
                            content: "перша"
                        });
                    }
                    $scope.links.push({
                        href: (currentpage - 1),
                        content: "«"
                    });
                }
                for (var i = currentpage - 2; i <= parseInt(currentpage) + 2; i++) {
                    if (i > 0 && i <= countLinks)
                        if (currentpage == i) {
                            $scope.links.push({
                                href: i,
                                content: i,
                                active: true
                            });
                        } else {
                            $scope.links.push({
                                href: i,
                                content: i
                            });
                        }
                }
                if (currentpage < countLinks) {
                    $scope.links.push({
                        href: +(currentpage) + 1,
                        content: "»"
                    });
                    if (parseInt(currentpage) + 2 < countLinks) {
                        $scope.links.push({
                            href: countLinks,
                            content: "остання"
                        });
                    }
                }
            }

        }
        $scope.nothingFind = true;
        $scope.stateName = $state.current.name;
        $scope.package = {
            name: 'search'
        };
        $scope.searchResult;
        var tempFilterText = '',
            filterTextTimeout;
        $scope.searchQuery = $stateParams.searchQuery;


        function filterForSearch() {
            var cat = false;
            var subCat = false;
            var array_filter_categories = document.querySelectorAll('.curent-filter');
            if (array_filter_categories.length) {
                cat = [];
                subCat = [];
                for (var i = 0; i < array_filter_categories.length; i++) {
                    if (cat.indexOf(parseInt(array_filter_categories[i].getAttribute("categ"))) == -1) {
                        cat.push(parseInt(array_filter_categories[i].getAttribute("categ")));
                    }
                    subCat.push({
                        subcategory: parseInt(array_filter_categories[i].getAttribute("sub_categ"))
                    });
                }
            }
            return {
                cat: cat,
                subCat: subCat
            }
        }




        $scope.newSearch = function(val, page) {

            if (filterTextTimeout) $timeout.cancel(filterTextTimeout);

            tempFilterText = val;
            filterTextTimeout = $timeout(function() {
                if (val === '' || !val) {
                    $scope.searchResult = false;
                    $scope.links = false;
                    return false;
                }
                var page = (page) ? page : 1;
                //var page = (keyUp) ? 1 : $stateParams.currentPage;
                $http.post('/search/example/anyone', {
                        searchQuery: val,
                        subCategories: filterForSearch().subCat,
                        categories: filterForSearch().cat,
                        page: 1
                    })
                    .success(function(response) {
                        if (!response.tests.length) {
                            $scope.nothingFind = false;
                        } else {
                            $scope.nothingFind = true;
                        }
                        $scope.searchResult = response.tests;
                        $scope.createLinksPagination(response.totalCount, 4, 1);
                        if (response.tests.length) {
                            if ($state.current.name == 'advanced_search_with_params') {
                                $location.path("/advanced_search/" + $scope.searchQuery + '/');
                            } else {
                                $location.path("/search/" + $scope.searchQuery + '/');
                            }

                        }
                    })
            }, 250); // delay     			
        }


        $scope.newSearch($scope.searchQuery);

        $scope.changeQuerySearch = function(val) {
            $scope.searchQuery = (val) ? val : $scope.searchQuery;
            $scope.newSearch($scope.searchQuery);
        };
        $http.get('http://localhost:3000/indexdata').success(function(result) {
            $scope.testsCategories = result;
        });

        if ($location.path().indexOf('advanced_search') + 1) {
            setTimeout(function() {
                function hasClass(target, className) {
                    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
                }
                var filter_category = document.querySelectorAll('.name-category');

                for (var i = 0; i < filter_category.length; i++) {

                    var sub_siblings = Array.prototype.filter.call(filter_category[i].parentNode.children, function(child) {
                        return child !== this;
                    });
                    for (var j = 1; j < sub_siblings.length; j++) {

                        sub_siblings[j].querySelectorAll('div')[0].addEventListener('click', function() {
                            if (document.querySelectorAll('.div-reset-active').length) {
                                document.querySelectorAll('.div-reset-active')[0].classList.remove('div-reset-active');
                            }
                            if (hasClass(this, "curent-filter")) {
                                this.classList.remove("curent-filter");
                            } else {
                                this.classList.add("curent-filter");
                            }
                        });
                    }



                    filter_category[i].addEventListener('click', function() {
                        var check_siblings = false;
                        if (document.querySelectorAll('.div-reset-active').length) {
                            document.querySelectorAll('.div-reset-active')[0].classList.remove('div-reset-active');
                        }
                        var siblings = Array.prototype.filter.call(this.parentNode.children, function(child) {
                            return child !== this;
                        });
                        for (var i = 1; i < siblings.length; i++) {

                            if (hasClass(siblings[i].querySelectorAll('div')[0], "curent-filter")) {
                                check_siblings += 1;
                                siblings[i].querySelectorAll('div')[0].classList.remove("curent-filter");
                            } else {
                                siblings[i].querySelectorAll('div')[0].classList.add("curent-filter");
                            }
                        }
                        if (check_siblings) {
                            for (var i = 1; i < siblings.length; i++) {
                                siblings[i].querySelectorAll('div')[0].classList.remove("curent-filter");
                            }
                        }


                    });


                }
                var reset = document.querySelectorAll('.reset')[0];
                reset.addEventListener('click', function() {
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