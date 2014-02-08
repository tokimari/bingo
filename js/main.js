/**
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
