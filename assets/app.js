(function() {
  'use strict';
;/**
*@modelLogoArr
*/
var logoObj = {
  0:  { url: 'agilityjs',        name :'Agility.js'                         , hit: false }, 
  1:  { url: 'ajax',             name :'Ajax'                               , hit: false }, 
  2:  { url: 'alfred',           name :'Alfred'                             , hit: false }, 
  3:  { url: 'ameba',            name :'Ameba'                              , hit: false }, 
  4:  { url: 'android',          name :'Android'                            , hit: false }, 
  5:  { url: 'angular',          name :'AngularJS'                          , hit: false }, 
  6:  { url: 'backbone',         name :'Backbone.js'                        , hit: false }, 
  7:  { url: 'batman',           name :'BATMAN.JS'                          , hit: false }, 
  8:  { url: 'bower',            name :'Bower'                              , hit: false }, 
  9:  { url: 'cappuccino',       name :'Cappuccino'                         , hit: false }, 
  10: { url: 'casper',           name :'CasperJS'                           , hit: false }, 
  11: { url: 'charles',          name :'Charles'                            , hit: false }, 
  12: { url: 'chrome',           name :'Google Chrome'                      , hit: false }, 
  13: { url: 'coffeescript',     name :'CoffeeScript'                       , hit: false }, 
  14: { url: 'compass-avatar',   name :'compass-avatar'                     , hit: false }, 
  15: { url: 'createjs',         name :'createjs'                           , hit: false }, 
  16: { url: 'css3',             name :'CSS3'                               , hit: false }, 
  17: { url: 'dart',             name :'Dart'                               , hit: false }, 
  18: { url: 'dash',             name :'Dash'                               , hit: false }, 
  19: { url: 'emacs',            name :'Emacs'                              , hit: false }, 
  20: { url: 'ember',            name :'Ember.js'                           , hit: false }, 
  21: { url: 'emmet',            name :'Emmet'                              , hit: false }, 
  22: { url: 'enchant',          name :'enchant.js'                         , hit: false }, 
  23: { url: 'finder',           name :'Finder'                             , hit: false }, 
  24: { url: 'firefox',          name :'Firefox'                            , hit: false }, 
  25: { url: 'git',              name :'Git'                                , hit: false }, 
  26: { url: 'google_developer', name :'Google Developers'                  , hit: false }, 
  27: { url: 'growl',            name :'Growl'                              , hit: false }, 
  28: { url: 'grunt',            name :'Grunt'                              , hit: false }, 
  29: { url: 'gwt',              name :'Google Webkit Toolkit'              , hit: false }, 
  30: { url: 'haml',             name :'Haml.'                              , hit: false }, 
  31: { url: 'handlebars',       name :'Handlebars'                         , hit: false }, 
  32: { url: 'html5',            name :'HTML5'                              , hit: false }, 
  33: { url: 'ie9',              name :'Internet Explorer 9'                , hit: false }, 
  34: { url: 'image_alpha',      name :'ImageAlpha'                         , hit: false }, 
  35: { url: 'image_optim',      name :'ImageOptim'                         , hit: false }, 
  36: { url: 'ios7',             name :'iOS 7'                              , hit: false }, 
  37: { url: 'jasmine',          name :'Jasmine'                            , hit: false }, 
  38: { url: 'jenkins',          name :'Jenkins'                            , hit: false }, 
  39: { url: 'jquery',           name :'jQuery'                             , hit: false }, 
  40: { url: 'js',               name :'JavaScript'                         , hit: false }, 
  41: { url: 'json',             name :'JSON'                               , hit: false }, 
  42: { url: 'knockout',         name :'Knockout.js'                        , hit: false }, 
  43: { url: 'less',             name :'LESS'                               , hit: false }, 
  44: { url: 'mocha',            name :'Mocha'                              , hit: false }, 
  45: { url: 'nodejs',           name :'node.js'                            , hit: false }, 
  46: { url: 'octocat',          name :'Octocat'                            , hit: false }, 
  47: { url: 'phantom',          name :'PhantomJS'                          , hit: false }, 
  48: { url: 'prototype',        name :'Prototype.js'                       , hit: false }, 
  49: { url: 'qunit',            name :'QUnit'                              , hit: false }, 
  50: { url: 'redmine',          name :'Redmine'                            , hit: false }, 
  51: { url: 'require',          name :'RequireJS'                          , hit: false }, 
  52: { url: 'safari',           name :'Safari'                             , hit: false }, 
  53: { url: 'sammyjs',          name :'Sammy.js'                           , hit: false }, 
  54: { url: 'sass',             name :'Sass'                               , hit: false }, 
  55: { url: 'sencha',           name :'Sencha'                             , hit: false }, 
  56: { url: 'sourcetree',       name :'SourceTree'                         , hit: false }, 
  57: { url: 'sprout_core',      name :'SproutCore'                         , hit: false }, 
  58: { url: 'stackoverflow',    name :'Stack Overflow'                     , hit: false }, 
  59: { url: 'stylus',           name :'Stylus'                             , hit: false }, 
  60: { url: 'sublime',          name :'Sublime Text'                       , hit: false }, 
  61: { url: 'titanium',         name :'Titanium'                           , hit: false }, 
  62: { url: 'tower',            name :'Tower'                              , hit: false }, 
  63: { url: 'typescript',       name :'TypeScript'                         , hit: false }, 
  64: { url: 'underscore',       name :'Underscore.js'                      , hit: false }, 
  65: { url: 'vagrant',          name :'Vagrant'                            , hit: false }, 
  66: { url: 'vim',              name :'Vim'                                , hit: false }, 
  67: { url: 'virtualbox',       name :'VirtualBox'                         , hit: false }, 
  68: { url: 'webstorm',         name :'WebStorm'                           , hit: false }, 
  69: { url: 'windows8',         name :'Windows 8'                          , hit: false }, 
  70: { url: 'wink_toolkit',     name :'Wink Toolkit'                       , hit: false }, 
  71: { url: 'wordpress',        name :'WordPress'                          , hit: false }, 
  72: { url: 'yeoman',           name :'Yeoman'                             , hit: false }, 
  73: { url: 'yui3',             name :'Yahoo! User Interface Library Ver.3', hit: false }, 
  74: { url: 'zepto',            name :'Zepto.js'                           , hit: false }
}

;/**
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
;/**
 * @class MainView
 * ルーレット処理部分
 */
var MainView = BaseView.extend({

  /**
   * @param
   */
  timer: null,
  hitId: null,
  cnt: 0,
  //isProcessing: false,  // 通信用
  msg: {
    start: '',
    end: 'null<br>٩( \'ω\' )و'
  },

  /**
   * @method initialize
   */
  initialize: function() {
    console.log('set MainView');
    //$.get('/clear');  // 通信用、初期化
  },

  /**
   * @method startRoulette
   * ルーレットするかを判定し、開始
   */
  startRoulette: function() {
    console.log('start roulette', this.cnt);
    var msgEl = $('#x-disp-msg');
    if(!this.hasData()) {
      msgEl.html(this.msg.end);
      return;
    }
    $('#x-disp-msg').html(this.msg.start);
    this.roulette();
  },

  /**
   * @method roulette
   */
  roulette: function() {
    var rd = this.getRandomNum();
    console.log('roulette');
    $('#x-disp-logo').attr('class', 'logo-sprite logo-' + logoObj[rd].url);
    console.log(rd, logoObj[rd]);
    this.hitId = rd;
    this.timer = setTimeout(_.bind(this.roulette, this), 200);
  },

  /**
   * @method getRandomNum
   * @return {Number} rd Random Number not Hit.
   */
  getRandomNum: function() {
    var rd = null;
    do {
      rd = Math.floor(Math.random() * 75);
    } while (logoObj[rd].hit);
    return rd;
  },

  /**
   * @method stopRoulette
   */
  stopRoulette: function() {
    console.log('stop roulette');
    clearTimeout(this.timer);
    if(!this.hasData()) {
      return;
    }
    //this.onSubmit(this.hitId);  // 通信用、ヒットした番号を発信
    this.renderHitLogo(logoObj[this.hitId]);
    logoObj[this.hitId].hit = true;
    this.cnt ++;
  },

  /**
   * @method renderHitLogo
   * ヒットしたロゴの描画
   */
  renderHitLogo: function(logo) {
    console.log(logo);
    var li = '<li class="logo-sprite logo-s-' + logo.url + '"></li>';
    $('.x-show-list').prepend(li);
    $('#x-disp-msg').text(logo.name);
    return;
  },

  /**
   * @method hasData
   * 続けるロゴ数があるか
   * return {Boolean}
   */
  hasData: function() {
    return ( 75 - this.cnt ) > 1;
  },
  
  /**
   * @method onSubmit
   * サーバに番号を送信 結果で何かしたいとき使う
   * @param {Number} no Hit Number.
   */
  onSubmit: function(no) {

    console.log('onSubmit', no);
    if (this.isProcessing) { return; }

    $.ajax({
      type: 'POST',
      url: '/bingo/' + no,
      success: this.onSuccess,
      error: this.onFailure,
      complete: this.onComplete
    });

    this.isProcessing = true;
  },

  /**
   * @method onSuccess
   */
  onSuccess: function() {
    console.log('onSuccess');
  },

  /**
   * @method onFailure
   */
  onFailure: function() {
    console.log('onFailure');
  },

  /**
   * @method onComplete
   */
  onComplete: function() {
    console.log('onComplete');
    this.isProcessing = false;
  }

});

var mainView = new MainView();
;})();
