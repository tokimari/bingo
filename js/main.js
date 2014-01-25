/**
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
    $.get('/clear');
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
      url: '/bingo/' + no,
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
