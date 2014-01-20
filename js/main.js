/**
 * @class MainView
 * ルーレット部分
 */
var MainView = BaseView.extend({

  /**
   * @param
   */
  targetArr: logoArr,
  logoTimer: null,
  nameTimer: null,
  hit: null,
  msg: {
    start: 'Let\'s Bingo ٩( \'ω\' )و',
    end: 'もうないよ ٩( \'ω\' )و<br>13 developperからチョコをあげるよ'
  },

  /**
   * @method setElement
   */
  setElement: function() {
    this.$el = $(this.el);
    console.log('set MainView');
  },

  /**
   * @method startRoulette
   * ルーレットするかを判定し、開始
   */
  startRoulette: function() {
    var msgEl = $('#x-disp-msg');
    clearTimeout(this.nameTimer);
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
    $('#x-disp-logo').attr('class', 'logo-' + arr[rd].url);
    this.logoTimer = setTimeout(_.bind(this.roulette, this), 100);
  },

  /**
   * @method endRoulette
   */
  stopRoulette: function() {
    console.log('end roulette');
    clearTimeout(this.logoTimer);
    if(!this.yetVal()) { return; }
    this.renderHitLogo(this.targetArr[this.hit]);
    this.targetArr.splice(this.hit, 1);
  },

  /**
   * @method renderHitLogo
   * ヒットしたロゴの描画
   */
  renderHitLogo: function(logo) {
    var li = '<li class="logo-' + logo.url + '"></li>';
    $('.x-show-list').append(li);
    this.nameTimer = setTimeout(function() {
      $('#x-disp-msg').text(logo.name);
    }, 5000);
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
   * @method onReset
   * ビンゴ初期化
   */
  onReset: function() {
    console.log('やりなおします', logoArr);
    this.targetArr = logoArr;
    clearTimeout(this.logoTimer);
    clearTimeout(this.nameTimer);
    $('#x-disp-msg').text(this.msg.start);
    $('#x-disp-logo').html('');
    $('.x-show-list').html('');
    this.toggleBtn();
  }

});

var mainView = new MainView();
