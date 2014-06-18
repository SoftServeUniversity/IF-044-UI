function AboutPageController() {};

AboutPageController.data = Application.GeneralInformation.about_page;

AboutPageController.init = function() {

  var opts = {
      lang         : 'ua',
      styleWithCSS : false,
      height       : 400,
      toolbar      : 'maxi'
  };
  // create editor
  $('#about-us-content').elrte(opts);
  // or this way
  // var editor = new elRTE(document.getElementById('our-element'), opts);

  $("#about-us-content").html(AboutPageController.data);
  
};

$(function() {
    AboutPageController.init();
});