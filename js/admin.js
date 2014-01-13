/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.addthis = {
    attach: function(context, settings) {
      console.log(context, settings);
      var $this;

      $(document).ready(function() {

        $('#edit-addthis-settings-use-layers').change(function() {
          $this = $(this);
          if ($this.is(':checked')) {
            $('#edit-addthis-settings-layers').css('display', 'block');
          } else {
            $('#edit-addthis-settings-layers').css('display', 'none');
          }
        });
        $('#edit-addthis-settings-layers-use-social').change(function() {
          $this = $(this);
          if ($this.is(':checked')) {
            $('#edit-addthis-settings-layers-social').css('display', 'block');
          } else {
            $('#edit-addthis-settings-layers-social').css('display', 'none');
          }
        });
        $('#edit-addthis-settings-use-layers, #edit-addthis-settings-layers-use-social').change();

      });
    }
  };
})(jQuery, Drupal, this, this.document);
