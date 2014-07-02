function AboutPageController() {};

AboutPageController.data = Model.date.GeneralInformation.about_page;
AboutPageController.content_id = "#" + "about-us-content";
AboutPageController.save_button_id = "#" + "about-page-edit-confirm";
AboutPageController.calcel_button_id = "#" + "about-page-edit-cancel";

AboutPageController.save_data = function() {
  var data = $(AboutPageController.content_id).elrte('val');
  console.log(data);
  Model.date.GeneralInformation.about_page = data;
  Model.save_localStorage();
}

AboutPageController.init = function() {
  var opts = {
      lang         : 'ua',
      styleWithCSS : false,
      height       : 400,
      toolbar      : 'normal'
  };

  // Creation and initialization of the elTRE
  console.log("jq=>"+$);
  $(AboutPageController.content_id).elrte(opts);
  $(AboutPageController.content_id).elrte('val', AboutPageController.data);
  
  // Setting of button actions
  $(AboutPageController.save_button_id).click(function() {
    console.log("in here!");
    AboutPageController.save_data();
  });
};

$(function() {
    if( $(AboutPageController.content_id).length != 0 ) {
      AboutPageController.init();
    } else {
      $("#about-page-content").html(AboutPageController.data);
    }
});