$(function(){
  lidaUI.prevFocusSave();

  
  
});

var prevFocus; //prevFocus 글로벌 변수 지정

var lidaUI = {
  // form요소(input, select, button, a)들 클릭시 focus 클래스 부여, 
  // form요소 이외의 영역 클릭시 focus제거
  // form요소 중 readoinly, disabled 


  // 바닥화면 scroll 막기(팝업오픈시)
  notScroll: function() {
    var scrTop = $('html').scrollTop();

    $('html').css({top:scrTop+'px', overflow:'hidden'});
  },

  // 바닥화면 scroll 허용(팝업닫을시)
  allowScroll: function(){
    //팝업이 열려있을 시 제외
    if($('#layer_popup_container').contains('.open').length > 0) {
      return false
    }
    $('html').removeAttr('style');
  },

  // 이전 focus 요소 저장
  prevFocusSave:function() {
    $(document).on('click', function(e) {
      prevFocus = $(e.target);
    })
  },


  // 팝업열기
  openPopup: function(param) {
    var popContainer = $('#layer_popup_container');
    var dimmedArea = $('<div class="dimmed"></div>');
    var dimmed =  document.querySelectorAll('.dimmed');
    var popId = typeof(param) == 'string' ? param : typeof(param) == 'object' ? param.id : '',
        popup = $('#'+ popId),
        closeBtn = popup.find('.pop_close'),
        okBtn = popup.find('.pop_btn_ok'),
        cancelBtn = popup.find('.pop_btn_gray'),
        etcBtn = popup.find('.pop_btn_line');

    var okCallback, cancelCallback, etcCallback;
        if(typeof(param) == 'object') {
          okCallback = param.okCallback;
          cancelCallback = param.cancelCallback;
          etcCallback = param.etcCallback;
        }


    //열기 전 focuse 요소 저장
    // lidaUI.prevFocusSave();

    //접근성
    $('body').find('input:not([type="hidden"]), button, a, select').attr('tabindex', -1);
    popup.find('input:not([type="hidden"]), button, a, select').attr('tabindex', 0);

    //바닥화면 scroll막기
    this.notScroll();

    // dimmed 생성
    if(!(dimmed.length > 0)) {
      popContainer.append(dimmedArea);
    }
   
    var timer = setTimeout(function(){
      popContainer.addClass('open');
      
      popContainer.find('.dimmed').on('click', function(){
        console.log('dimmed 클릭')
      });
      
    }, 100);
  },


  setTabRadio: function(){
    var rdoGrp = $('.radio_group.type_tab');
    var selBlock = $('<span class="selected_bar"></span>');
    var rdo = rdoGrp.find('input[type="radio"]');

    // 자바스크립트로 찾는 겨우
    // var rdoGrp2 = document.getElementsByClassName('.radio_group.type_tab');
    // console.log(rdoGrp2); //HTMLCollection 으로 나옴

    // 1. rdoGrp이 없는 경우 
    if(!!!rdoGrp) return false;

    // 2. 기존에 selected_bar가 있는경우 막고, 없다면 selected_bar를 넣고, selected_bar의 left값과 width값을 넣어줌
    if(rdoGrp.find('.selected_bar').length > 0) return false;
    selBlock.appendTo(rdoGrp);
    chkMove();

    // 1, 2까지 init
    // 3. 라디오의 값에 따라서 selected_bar의 left값과 width값이 달라짐
    rdo.off('change').on('change', function(){
      chkMove();
    })
    // 화면 resize될때 selected_bar의 left 과 width값이 달라져야하길 때문에
    $(window).on('resize', function(){
      chkMove();
    })

    // selected_bar 위치 이동 
    function chkMove() {
      var chkedItem = rdoGrp.find('input[type="radio"]:checked').closest('.radio_item'),
          chkedItemWidth = chkedItem.outerWidth(),
          chkedItemLeft = chkedItem.position().left;
      
      selBlock.css({left:`${chkedItemLeft}px`, width: chkedItemWidth+'px'});
    }
  }

}

