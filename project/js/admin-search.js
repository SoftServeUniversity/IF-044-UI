window.onload = function(){
if(localStorage.Users == "undefined" || !localStorage.Tests){
    localStorage.Tests = JSON.stringify(Tests);
}
	Users = JSON.parse(localStorage.Users);	


/*----------------------------- */

var firstname = Users.firstname;
var seach-result = document.querySelectorAll(".row-search-result")[0];

content = function(value, firstname){
        var filter = false;                
        if(firstname){
            filter = true;
        }
        console.log(Tests);      
        var result_array = [];
        for(index in Users){
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