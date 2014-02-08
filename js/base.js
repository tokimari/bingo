/**
 * @class BaseView
 * Viewの土台、タップ時の見た目など
 */
var BaseView = Backbone.View.extend({
  el: '#roulette',

  events: {
    'touchstart .x-btn': 'onTouchStart',
    'touchend .x-btn': 'onTouchEnd',
    'click .x-start-btn': 'onStart',
    'click .x-stop-btn': 'onStop',
  },

  /**
   * @method onStart
   */
  onStart: function(e) {
    this.toggleBtn();
    this.startRoulette();
  },

  /**
   * @method onStop
   */
  onStop: function(e) {
    this.toggleBtn();
    this.stopRoulette();
  },

  /**
   * @method toggleBtn
   * Change Button. (Start | Stop)
   */
  toggleBtn: function(e) {
    $('.x-start-btn').toggleClass('is-hidden');
    $('.x-stop-btn').toggleClass('is-hidden');
  },

  /**
   * @method onTouchStart
   * Change Style on Touch start.
   */
  onTouchStart: function(e) {
    $(e.currentTarget).addClass('is-pressed');
  },

  /**
   * @method onTouchEnd
   * Change Style on Touch end.
   */
  onTouchEnd: function(e) {
    $(e.currentTarget).removeClass('is-pressed');
  },

});
