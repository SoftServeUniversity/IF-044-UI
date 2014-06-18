function AboutPageController() {};

// TODO this must to be changed!
AboutPageController.data = Model.date.GeneralInformation.about_page;

AboutPageController.content_id = "#" + "about-us-content";
AboutPageController.save_button_id = "#" + "about-page-edit-confirm";
AboutPageController.calcel_button_id = "#" + "about-page-edit-cancel";

AboutPageController.save_data = function() {
  var data = $(AboutPageController.content_id).elrte('val');
  console.log(data);
  AboutPageController.data = data;
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
  $(AboutPageController.content_id).elrte(opts);
  $(AboutPageController.content_id).elrte('val', AboutPageController.data);
  
  // Setting of button actions
  $(AboutPageController.save_button_id).click(AboutPageController.save_data);
};



$(function() {
    AboutPageController.init();
});