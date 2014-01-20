/**
 * @class BaseView
 */
var BaseView = Backbone.View.extend({
  el: '#roulette',

  events: {
    'touchstart .x-btn': 'onTouchStart',
    'touchend .x-btn': 'onTouchEnd',
    'click .x-start-btn': 'onStart',
    'click .x-stop-btn': 'onStop',
    'click .x-reset-btn': 'onReset'
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
   * onTouchStart & onTouchEnd
   * Change Style.
   */
  onTouchStart: function(e) {
    $(e.currentTarget).addClass('is-pressed');
  },
  onTouchEnd: function(e) {
    $(e.currentTarget).removeClass('is-pressed');
  },

});
