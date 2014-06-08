window.onload = function(){
 Tests = Model.date.Tests;
 Categories =  Model.date.Tests_categories;

 var simpleSearch = {
    row_results: document.querySelectorAll(".row-search-result")[0],
    search_input: document.getElementById('search_input'),
    showEmpty: function () {
        this.row_results.innerHTML = '';
    },
    showAllcontaining: function (value) {
							var result_array = [];
							for (index in Tests) {
								for (inner_index in Tests[index]) {
									if (Tests[index].tags.toString().toLowerCase().indexOf(value.toLowerCase()) + 1) {
										result_array.push(index);
										break;

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
									this.row_results.innerHTML += '                            <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 search-result well">                                <h3 class="title-post-name">          <a style="text-decoration: none;" href="#">' + Tests[i].name + '</a>                              </h3>                                <p class="text-justify ">' + Tests[i].description + '</p><div class="col-xs-12"><ul class="search-teg">' + tags + ' </ul>                                </div></div>';
								}
							} else {
								this.showEmpty();
        }
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
														
    init: this.EventKeyUp

}

simpleSearch.init;
}   