(function() {
  'use strict';
;/**
*@modelLogoArr
*/
var logoArr=[
{ url: 'agilityjs',        name :'Agility.js'                          }, 
{ url: 'ajax',             name :'Ajax'                                }, 
{ url: 'alfred',           name :'Alfred'                              }, 
{ url: 'ameba',            name :'Ameba'                               }, 
{ url: 'android',          name :'Android'                             }, 
{ url: 'angular',          name :'AngularJS'                           }, 
{ url: 'backbone',         name :'Backbone.js'                         }, 
{ url: 'batman',           name :'BATMAN.JS'                           }, 
{ url: 'bower',            name :'Bower'                               }, 
{ url: 'cappuccino',       name :'Cappuccino'                          }, 
{ url: 'casper',           name :'CasperJS'                            }, 
{ url: 'charles',          name :'Charles'                             }, 
{ url: 'chrome',           name :'Google Chrome'                       }, 
{ url: 'coffeescript',     name :'CoffeeScript'                        }, 
{ url: 'compass-avatar',   name :'compass-avatar'                      }, 
{ url: 'createjs',         name :'createjs'                            }, 
{ url: 'css3',             name :'CSS3'                                }, 
{ url: 'dart',             name :'Dart'                                }, 
{ url: 'dash',             name :'Dash'                                }, 
{ url: 'emacs',            name :'Emacs'                               }, 
{ url: 'ember',            name :'Ember.js'                            }, 
{ url: 'emmet',            name :'Emmet'                               }, 
{ url: 'enchant',          name :'enchant.js'                          }, 
{ url: 'finder',           name :'Finder'                              }, 
{ url: 'firefox',          name :'Direfox'                             }, 
{ url: 'git',              name :'Git'                                 }, 
{ url: 'google_developer', name :'Google Developers'                   }, 
{ url: 'growl',            name :'Growl'                               }, 
{ url: 'grunt',            name :'Grunt'                               }, 
{ url: 'gwt',              name :'Google Webkit Toolkit'               }, 
{ url: 'haml',             name :'Haml.'                               }, 
{ url: 'handlebars',       name :'Handlebars'                          }, 
{ url: 'html5',            name :'HTML5'                               }, 
{ url: 'ie9',              name :'Internet Explorer 9'                 }, 
{ url: 'image_alpha',      name :'ImageAlpha'                          }, 
{ url: 'image_optim',      name :'ImageOptim'                          }, 
{ url: 'ios7',             name :'iOS 7'                               }, 
{ url: 'jasmine',          name :'Jasmine'                             }, 
{ url: 'jenkins',          name :'Jenkins'                             }, 
{ url: 'jquery',           name :'jQuery'                              }, 
{ url: 'js',               name :'JavaScript'                          }, 
{ url: 'json',             name :'JSON'                                }, 
{ url: 'knockout',         name :'Knockout.js'                         }, 
{ url: 'less',             name :'LESS'                                }, 
{ url: 'mocha',            name :'Mocha'                               }, 
{ url: 'nodejs',           name :'node.js'                             }, 
{ url: 'octocat',          name :'Octocat'                             }, 
{ url: 'phantom',          name :'PhantomJS'                           }, 
{ url: 'prototype',        name :'Prototype.js'                        }, 
{ url: 'qunit',            name :'QUnit'                               }, 
{ url: 'redmine',          name :'Redmine'                             }, 
{ url: 'require',          name :'RequireJS'                           }, 
{ url: 'safari',           name :'Safari'                              }, 
{ url: 'sammyjs',          name :'Sammy.js'                            }, 
{ url: 'sass',             name :'Sass'                                }, 
{ url: 'sencha',           name :'Sencha'                              }, 
{ url: 'sourcetree',       name :'SourceTree'                          }, 
{ url: 'sprout_core',      name :'SproutCore'                          }, 
{ url: 'stackoverflow',    name :'Stack Overflow'                      }, 
{ url: 'stylus',           name :'Stylus'                              }, 
{ url: 'sublime',          name :'Sublime Text'                        }, 
{ url: 'titanium',         name :'Titanium'                            }, 
{ url: 'tower',            name :'Tower'                               }, 
{ url: 'typescript',       name :'TypeScript'                          }, 
{ url: 'underscore',       name :'Underscore.js'                       }, 
{ url: 'vagrant',          name :'Vagrant'                             }, 
{ url: 'vim',              name :'Vim'                                 }, 
{ url: 'virtualbox',       name :'VirtualBox'                          }, 
{ url: 'webstorm',         name :'WebStorm'                            }, 
{ url: 'windows8',         name :'Windows 8'                           }, 
{ url: 'wink_toolkit',     name :'Wink Toolkit'                        }, 
{ url: 'wordpress',        name :'WordPress'                           }, 
{ url: 'yeoman',           name :'Yeoman'                              }, 
{ url: 'yui3',             name :'Yahoo! User Interface Library Ver.3' }, 
{ url: 'zepto',            name :'Zepto.js'                            }
];

;/**
 * @class BaseView
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
;/**
 * @class MainView
 * ルーレット部分
 */
var MainView = BaseView.extend({

  /**
   * @param
   */
  targetArr: logoArr,
  timer: null,
  hit: null,
  isProcessing: false,
  msg: {
    start: 'Let\'s Bingo ٩( \'ω\' )و',
    end: 'もうないよ ٩( \'ω\' )و<br>13 developperからチョコをあげるよ'
  },

  /**
   * @method setElement
   */
  onSetElement: function() {
    console.log('set MainView', this);
  },

  /**
   * @method startRoulette
   * ルーレットするかを判定し、開始
   */
  startRoulette: function() {
    var msgEl = $('#x-disp-msg');
    if(!this.yetVal()) {
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
    console.log('start roulette');
    var arr = this.targetArr,
        rd = Math.floor(Math.random() * arr.length);
    this.hit = rd;
    $('#x-disp-logo').attr('class', 'logo-sprite logo-' + arr[rd].url);
    this.timer = setTimeout(_.bind(this.roulette, this), 200);
  },

  /**
   * @method endRoulette
   */
  stopRoulette: function() {
    console.log('end roulette');
    clearTimeout(this.timer);
    if(!this.yetVal()) { return; }
    this.onSubmit(this.hit);
    this.renderHitLogo(this.targetArr[this.hit]);
    this.targetArr.splice(this.hit, 1);
  },

  /**
   * @method renderHitLogo
   * ヒットしたロゴの描画
   */
  renderHitLogo: function(logo) {
    var li = '<li class="logo-sprite logo-s-' + logo.url + '"></li>';
    $('.x-show-list').prepend(li);
    $('#x-disp-msg').text(logo.name);
    return;
  },

  /**
   * @method yetVal
   * 続けるロゴ数があるか
   * return {Boolean}
   */
  yetVal: function() {
    console.log('ビンゴをつづける：', this.targetArr.length !== 1);
    return this.targetArr.length !== 1;
  },
  
  /**
   * @method onSubmit
   * サーバに番号を送信
   * @param {Number} no Hit Number.
   */
  onSubmit: function(no) {

    console.log('onSubmit', no);
    if (this.isProcessing) { return; }

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/bingo/' + no,
      success: _.bind(this.onSuccess, this),
      error: _.bind(this.onFailure, this),
      complete: _.bind(this.onComplete, this)
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
