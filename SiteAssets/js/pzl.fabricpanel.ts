/**
 * Panel Plugin
 *
 * Adds basic demonstration functionality to .ms-Panel components.
 *
 * @param  {jQuery Object}  One or more .ms-Panel components
 * @return {jQuery Object}  The same components (allows for chaining)
 */
(function () {
  jQuery.fn.Panel = function () {

    /** Go through each panel we've been given. */
    return this.each(function () {

      var $panel = jQuery(this);
      var $panelMain = $panel.find(".ms-Panel-main");

      /** Hook to open the panel. */
      jQuery(".js-togglePanel").on("click", function() {
        // Panel must be set to display "block" in order for animations to render
        $panelMain.css({display: "block"});
        $panel.toggleClass("is-open");
      });

      $panelMain.on("animationend webkitAnimationEnd MSAnimationEnd", function(event) {
        if (event.originalEvent.animationName === "fadeOut") {
          // Hide and Prevent ms-Panel-main from being interactive
          jQuery(this).css({display: "none"});
        }
      });

    });

  };
});