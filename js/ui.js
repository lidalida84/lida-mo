$(function(){
  lidaUI.prevFocusSave();
  lidaUI.init();   // 초기설정 
  
  
});

var prevFocus; //prevFocus 글로벌 변수 지정

var lidaUI = {
  init: function(_id) {
    this.inpSetting();          // input focus
  },
  // form요소(input, select, button, a)들 클릭시 focus 클래스 부여, 
  // form요소 이외의 영역 클릭시 focus제거
  // form요소 중 readoinly, disabled 
  // input box setting 
  inpSetting: function() {
    var iptObj = $('.form_item .inp_box').find('input.inp_text, select, button, a');

    if (iptObj.length < 1) return false;

    $.each(iptObj, function(i, ipt) {
        var ipt = $(ipt);

        ipt.on('focus.inputfocus', function() {
            var selfBox = $(this).closest('.inp_box');
                // iptParent = $(this).closest('.form_item'),
                // iptTop = iptParent.offset().top - 80,
                // doc = (iptParent.closest('.popup').length > 0) ?
                // iptParent.closest('.popup') : $('html');

            $('.inp_box').removeClass('focus');
            selfBox.addClass('focus');

            // input 위치로 scroll
            // if (!!!$(this).hasClass('sel_btn')) {
            // doc.animate({ scrollTop: iptTop +'px' }, 400);
            // };

            // 이외의 영역 클릭 시 focus 제거
            $(document).off('click.iptetc').on('click.iptetc', function(e) {
                var target = e.target;
                
                if (selfBox.has(target).length < 1) {
                    ipt.closest('.inp_box').removeClass('focus');
                }
            });
        });

        if(ipt.parents('.form_item').hasClass('date_time') || ipt.parents('.form_item').hasClass('col2')) {
            var iptParent = $(this).parents('.form_item').find('.inp_box');
            iptParent.each(function(){
                var iptItem = $(this).find('input.inp_txt, select, button');

                // input:readonly
                !!iptItem.attr('readonly') && $(this).addClass('readonly');

                // input:disabled
                !!iptItem.attr('disabled') && $(this).addClass('disabled');
            })
        }else {
            // input:readonly
            !!ipt.attr('readonly') && ipt.closest('.form_item').addClass('readonly');

            // input:disabled
            !!ipt.attr('disabled') && ipt.closest('.form_item').addClass('disabled');
        }
    });
    
    // [type=number]의 maxlength
    $(document).off('input.maxlength').on('input.maxlength', 'input[type=number]', function() {
        var inpLen = $(this).val().length,
            limitLen = Number($(this).attr('maxLength')),
            maxVal = $(this).val().slice(0, limitLen);

        if (limitLen > 0) {
            (inpLen > limitLen) && $(this).val(maxVal);
        }
    });

    // 영문만 입력
    $(document).off('input.enonly').on('input.enonly', 'input.en_only', function() {
        var inpTxt = $(this).val(),
            engVal = inpTxt.replace(/[^A-Za-z, ]/ig, '');
            
        $(this).val(engVal.toUpperCase());
      });
  },


  // 바닥화면 scroll 막기(팝업오픈시)
  notScroll: function() {
    var scrTop = $('html').scrollTop();

    $('html').css({top:scrTop+'px', overflow:'hidden'});
  },

  // 바닥화면 scroll 허용(팝업닫을시)
  allowScroll: function(){
    //팝업이 열려있을 시 제외
    if($('#layer_popup_container').hasClass('open').length > 0) {
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
        console.log('dimmed 클릭');
        popup.find('.pop_close').trigger('click');
      });

      // 팝업의 닫기 버튼
      closeBtn.off('click.popclosebtn').on('click.popclosebtn', function() {
        // 팝업 닫기
          lidaUI.closePopup(popId);
      });
      


    }, 100);
  },

  closePopup: function(_id) {
    var popObj = $('#'+ _id),
        popContainer = $('#layer_popup_container'),
        dimmed =  document.querySelectorAll('.dimmed');

      popContainer.removeClass('open').removeAttr('style'); 

    // 뒷화면 scroll 허용
    this.allowScroll();

    // 닫은 후 focus 이동
    if (!!prevFocus) {
        $('.inp_box').removeClass('focus');

        if (!!prevFocus.attr('id')) {
            lidaUI.moveNextFocus(prevFocus.attr('id'));
        } else {
            prevFocus.focus();
            prevFocus.closest('.inp_box').addClass('focus');
        }
    }
    
    var timer = setTimeout(function() {
        // select box popup일 경우
        if (_id.indexOf('popSelect') > -1 || _id.indexOf('popAlert') > -1 || _id.indexOf('popConf') > -1) {
            popObj.remove();
        } else {
            popContainer.removeClass('open');
        }

        // 웹접근성 관련 tabindex 변경
        if ($('.popContainer.open').length < 1) {
            $('body').find('input:not([type="hidden"]), button, a, select').attr('tabindex', 0);
        }

        var lastPop = $('.popContainer.open').eq($('.popContainer.open').length - 1);
        popObj.find('input:not([type="hidden"]), button, a, select').attr('tabindex', -1);
        lastPop.find('input:not([type="hidden"]), button, a, select').attr('tabindex', 0);

        clearTimeout(timer);
    }, 500);
  },

  // alert pop open
  openAlert: function(opt) {
    var id = opt.id,                // alert popup id  
        sort = opt.sort,            // icon 종류
        msg = opt.message,          // 주요 메시지, html형태
        subMsg = opt.subMessage,    // 설명 메시지
        btnTxt = opt.btnText,       // 버튼 텍스트
        callback = opt.callback,    // callback
        popContainer = $('#layer_popup_container'),   // popup container
        popId = 'popAlert_'+ id,
        popup = '';

    // alert popup 만들기
    popup += '<div class="layer_popup type_alert" id="'+ popId +'">';
    popup += '<div class="popup_body">';
    popup += '<p class="info_txt '+ sort +'">';
    popup += msg;
    popup += '</p>';
    popup += !!subMsg ? '<span class="info_sub">'+ subMsg +'</span>' : '';
    popup += '</div>';
    popup += '<div class="popup_foot">';
    popup += '<div class="inner_foot">';
    popup += '<button type="button" class="btn_strong">'+ btnTxt +'</button>';
    popup += '</div>';
    popup += '</div>';
    popup += '</div>';
    popup += '<div class="dimmed"></div>';
    popup += '</div>';

    // alert popup 추가
    popContainer.append($(popup));

    // alert popup open
    this.openPopup(popId);

    // alert popup 버튼
    var popOkBtn = $('#'+ popId).find('.btn_strong');

    // alert popup 버튼 click
    popOkBtn.off('click.popalert').on('click.popalert', function() {
        // callback 있을 경우 실행
        !!callback && callback();

        // alert popup 닫기
        lidaUI.closePopup(popId);
    });
  },

  // confirm pop open
  openConfirm: function(opt) {
    var id = opt.id,                            // alert popup id
        sort = opt.sort,                        // icon 종류
        msg = opt.message,                      // 주요 메시지, html형태
        subMsg = opt.subMessage,                // 설명 메시지, html 형태
        btnOkTxt = opt.btnOkText,               // ok 버튼 텍스트
        btnCancelTxt = opt.btnCancelText,       // cancel 버튼 텍스트
        okCallback = opt.okCallback,            // ok 버튼 callback
        cancelCallback = opt.cancelCallback,    // cancel 버튼 callback
        popContainer = $('#layer_popup_container'),   // popup container
        popId = 'popConf_'+ id,
        popCloseBtn = opt.popCloseBtn, //팝업닫기버튼추가 202310
        popup = '';

    // confirm popup 만들기
    popup += '<div class="layer_popup type_confirm" id="'+ popId +'">';
    popup += '<div class="popup_body">';
    popup += !!popCloseBtn ? '<a class="btn_close" '+ popCloseBtn +'>팝업닫기</a>' : '';
    popup += '<p class="info_txt '+ sort +'">';
    popup += msg;
    popup += '</p>';
    popup += !!subMsg ? '<span class="info_sub">'+ subMsg +'</span>' : '';
    popup += '</div>';
    popup += '<div class="popup_foot">';
    popup += '<div class="inner_foot">';
    popup += '<button type="button" class="btn_normal"><span>'+ btnCancelTxt +'</span></button>';
    popup += '<button type="button" class="btn_strong"><span>'+ btnOkTxt +'</span></button>';
    popup += '</div>';
    popup += '</div>';
    popup += '</div>';
    popup += '<div class="dimmed"></div>';

    // confirm popup 추가
    popContainer.append($(popup));

    // confirm popup open
    this.openPopup(popId);

    // confirm popup 버튼
    var okBtn = $('#'+ popId).find('.btn_strong'),
        cancelBtn = $('#'+ popId).find('.btn_normal'),
        closeBtn = $('#'+ popId).find('.btn_close');

    // confirm popup ok 버튼
    okBtn.off('click.popconfok').on('click.popconfok', function() {
        // ok callback 있을 경우
        !!okCallback && okCallback();

        // confirm popup 닫기
        lidaUI.closePopup(popId);
    });

    // confirm popup cancel 버튼
    cancelBtn.off('click.popconfcancel').on('click.popconfcancel', function() {
        // cancel callback 있을 경우
        !!cancelCallback && cancelCallback();

        // confirm popup 닫기
        lidaUI.closePopup(popId);
    });
    // confirm popup close 버튼
    closeBtn.off('click.popconfclose').on('click.popconfclose', function() {
        // confirm popup 닫기
        lidaUI.closePopup(popId);
    });
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
  },

  setDropdown: function(opt){
    var id = opt.id,
        callback = opt.callback,
        selObj = $('#' + id),
        selBox = selObj.closest('.ui_select'),
        initVal = selObj.find('option:not([hidden]):selected').val(),
        initTxt = selObj.find('option:not([hidden]):selected').text(),
        placeholder = selObj.find('option[hidden]').text(),
        optItems = selObj.find('option:not([hidden])'),
        optionLayer = '';

        // selectbox의 값을 가져와서 button + option layer만들기
        // 1. button 만들기
        optionLayer += `<button type="button" id="selBtn_${id}" class="sel_btn">
                          <span class="placeholder">${placeholder}</span>
                        </button>`;
        optionLayer += `<div class="opt_layer">
                        </div>
                        `;

        selBox.append($(optionLayer));

        console.log(optionLayer);
  },

  setTab: function() {
    var tabGroups = $('.tab_group');

    if (!!tabGroups.length < 1) return false;

    $.each(tabGroups, function(key, cont) {
        var tabGroup = $(cont),
            tabBtns = tabGroup.find('.tab_btns'),
            tabBtn = tabGroup.find('.tab_btn'),
            tabPanel = tabGroup.find('.tab_panel'),
            keyNo = key + 1;

        // tab list 초기 설정
        tabBtns.attr('role', 'tabBtns');

        // tab type일 경우 bar 초기 설정
        if (!!tabBtns.hasClass('type_tab')) {
            tabBtns.append('<span class="bar"></span>');
            
            tabBarMove();

            $(window).on('resize', function() {
                tabBarMove();
            });
        }

        // tab type일 경우 bar 위치/크기 설정
        function tabBarMove() {
            var selTab = tabBtns.find('.tab_btn.selected'),
                selTabL = selTab.offset().left,
                selTabW = selTab.outerWidth();

            tabBtns.find('.bar').css({ left: selTabL +'px', width: selTabW +'px' });
        }

        $.each(tabBtn, function(i, tab) {
            var tab = $(tab),
                idxNo = i + 1,
                tabId = 'tab'+ keyNo +'_'+ idxNo,
                panelId = 'tabPanel'+ keyNo +'_'+ idxNo,
                tabSelected = !!tab.hasClass('selected') ? true : false,
                panSelected = !!tabPanel.eq(i).hasClass('active') ? false : true;

            // tab 초기 설정
            tab.attr({ 'id': tabId, 'role': 'tab', 'aria-controls': panelId, 'aria-selected': tabSelected });

            // tab panel 초기 설정
            tabPanel.eq(i).attr({ 'id': panelId, 'role': 'tabpanel', 'aria-labelledby': tabId, 'aria-hidden': panSelected });

            // tab click
            tab.off('click.tabclick').on('click.tabclick', function() {
                tabBtn.removeClass('selected').attr({ 'aria-selected': false });
                tabPanel.removeClass('active').attr({ 'aria-hidden': true });

                $(this).addClass('selected').attr({ 'aria-selected': true });
                tabPanel.eq(i).addClass('active').attr({ 'aria-hidden': false });

                // tab type일 경우, bar 이동
                if (!!tabBtns.hasClass('type_tab')) {
                    var tabBar = tabBtns.find('.bar'),
                        tabL = $(this).offset().left,
                        tabW = $(this).outerWidth();
                    
                    tabBar.css({ left: tabL +'px', width: tabW +'px' });
                }

                // tab 안에 accordion이 있을 경우, accordion close
                if (!!tabPanel.eq(i).find('.accordion')) {
                    var accBtn = tabPanel.eq(i).find('.acc_btn'),
                        accPan = tabPanel.eq(i).find('.acc_panel');
                    
                    accBtn.removeClass('open').attr({'aria-expended': false});
                    accPan.css({ display: 'none' });
                }
            });
        });
    });
  },

  moveNextFocus: function(_next){
    var nowFormbox = !!!_next && $('.form_item').find('.focus'),
        nextObj = !!_next ? $('#'+ _next) : nowFormbox.closest('.form_item').nextAll('.form_item').eq(0).find('input.inp_txt, button, select, a'),
        nextFormbox = nextObj.closest('.inp_box');

    if (nextFormbox.length < 1) return false;

    var timer = setTimeout(function() {
        !!!_next && nowFormbox.removeClass('focus');

        // if (!!nextObj.hasClass('sel_btn')) {
        // nextFormbox.find('.sel_btn').trigger('click');
        // } else {
        // nextObj.focus();
        // }
        nextObj.focus();

        nextFormbox.addClass('focus');

        clearTimeout(timer);
    }, 150);
  },

  setAccordion: function() {
    var accordion = $('.accordion'),
        accBtn = accordion.find('.acc_btn');

    if (accordion.length < 1) return false;

    // 웹접근성 대응
    $.each(accordion, function(i, acc) {
        var accNo = i+1;
            accBtn = $(acc).find('.acc_btn');
            accHeader = $(acc).find('.acc_header');

        $.each(accBtn, function(idx, btn) {
            var itemNo = idx+1,
                panel = $(btn).closest('.acc_item').find('.acc_panel');

            $(btn).attr({ id: 'acc'+ accNo +'_'+ itemNo, 'aria-expended': false, 'aria-controls': 'accpan'+ accNo +'_'+ itemNo });
            panel.attr({ id: 'accpan'+ accNo +'_'+ itemNo, 'role': 'region', 'aria-labelledby': 'acc'+ accNo +'_'+ itemNo });

            // default: open 일 때
            if (!!$(btn).hasClass('open')) {
                $(btn).attr({ 'aria-expended': true });
                $(btn).closest('.acc_item').find('.acc_panel').addClass('active').css({ display: 'block' });
            }
        });
        
        // 태그이벤트 추가
        const btnTag = document.querySelectorAll(".accordion button.tag");
        if (btnTag.length >= 1) {
            for (const item of btnTag) {
                item.addEventListener("click", (e) => {
                    e.stopPropagation();
                })
            }
        }

        // card_wrap 일때 분리
        let trigger;
        let cardWrap;
        if (acc.classList.contains("card_wrap") === true) {
            trigger = accBtn;
            cardWrap = true;
        } else {
            trigger = accHeader;
            cardWrap = false;
        }

        trigger.off('click.accordion').on('click.accordion', function() {
            var panel = $(this).closest('.acc_item').find('.acc_panel');

            if (!!$(acc).hasClass('auto_close')) {
                var panels = $(this).closest('.acc_item').siblings('.acc_item').find('.acc_panel'),
                    accBtns = $(this).closest('.acc_item').siblings('.acc_item').find('.acc_btn');

                accBtns.removeClass('open').attr({ 'aria-expended': false });
                accBtns.find('span').html('열기');
                panels.removeClass('active').slideUp(300);
            }

            // card_wrap 일때 분리
            const cntBtn = cardWrap === true ? $(this) : $(this).find('.acc_btn');
            if (!cntBtn.hasClass('open')) {
                cntBtn.addClass('open').attr({ 'aria-expended': true });
                cntBtn.find('span').html('닫기');
                panel.stop().addClass('active').slideDown(300);
            } else {
                cntBtn.removeClass('open').attr({ 'aria-expended': false });
                cntBtn.find('span').html('열기');
                panel.stop().removeClass('active').slideUp(300);
            }
        });
    });
  },


  // combo-box(select box) - bottom-up type
  setPopCombobox: function(opt) {
    var id = opt.id,
        title = opt.title,
        subMsg = opt.subMessage,    // 설명 메시지
        optList = opt.optlist,
        callback = opt.callback,
        callback2 = opt.callback2,
        etcCallback = opt.etcCallback,
        cancelCallback = opt.cancelCallback,
        nextFocus = opt.nextfocus,
        selBtn = $('#'+ id),
        initVal = selBtn.closest('div').find('input[type="hidden"]').val(),
        popContainer = $('#layer_popup_container'),
        popId = 'popSelect_'+ id,
        popup = '';
     
    // 팝업 만들기
    popup += '<div class="layer_popup type_floating" id="'+ popId +'">';
    popup += '<div class="popup_header">';
    popup += '<h1>'+ title +'</h1>';
    popup += '<button type="button" class="btn_close"><span class="hidden">닫기</span></button>';
    popup += '</div>';
    popup += '<div class="popup_body">';
    popup += !!subMsg ? subMsg : '';
    popup += '<ul class="list_select">';

    $.each(optList, function(i) {
        var label = optList[i].label,
            val = optList[i].value,
            info = optList[i].info,
            disabled = optList[i].disabled,
            activeProp = optList[i].value == initVal ? 'active' : '';
                        
        popup += '<li>';
        if (!!disabled) {
            popup += '<button type="button" class="opt_btn '+ activeProp +'" value="'+ val +'" disabled="disabled">';
        }else {
            popup += '<button type="button" class="opt_btn '+ activeProp +'" value="'+ val +'">';
        }

        popup += '<span>'+ label +'</span>';
        
        if (!!info) {
            popup += '<span class="info">'+ info +'</span>';
        }

        popup += '</button>'
        popup += '</li>';
    });

    popup += '</ul>';
    popup += '</div>';
    popup += '</div>';
    popup += '<div class="dimmed"></div>';

    // 팝업 추가
    popContainer.append($(popup));

    // 버튼 화살표 회전
    selBtn.addClass('open');

    var popObj = $('#'+ popId);     // 팝업

    // popup 열기
    this.openPopup(popId);
    
    var optBtn = popObj.find('.opt_btn');

    // option list 선택
    optBtn.off('click.selectopt').on('click.selectopt', function() {
        var optIdx = $(this).closest('li').index(),
            dispObj = selBtn.find('span'),
            hiddenInp = selBtn.closest('div').find('input[type="hidden"]');

        optBtn.removeClass('active');
        $(this).addClass('active');  

        
        hiddenInp.val(optList[optIdx].value);

        // 함수 실행
        !!opt.callback && callback(optList[optIdx].value);
        // 함수 실행(value, label 필요한 경우)
        !!opt.callback2 && callback2(optList[optIdx]);
        // combo-popup 닫기
        selectPopClose();

        // 버튼 화살표 회전
        selBtn.removeClass('open');
    });

    // 팝업 이외의 영억 클릭 시 etcCallback option이 있는 경우 etcCallback 함수 호출
    if (!!etcCallback) {
      $('#'+ popId).find('.dimmed').off('click.combodim').on('click.combodim', function() {
            etcCallback(); 
        });
    }else{
      // 팝업 이외의 영역 클릭 시
      $('#'+ popId).find('.dimmed').off('click.combodim').on('click.combodim', function() {
        // 버튼 화살표 회전
        selBtn.removeClass('open');
      });
      
    }
    
    if(!!cancelCallback){
      popObj.find('.pop_close').on('click', function() {
        // 버튼 화살표 회전
        selBtn.removeClass('open');
        cancelCallback();
      });
    }else{
      // 팝업 닫기 버튼 클릭 시
      popObj.find('.pop_close').on('click', function() {
        // 버튼 화살표 회전
        selBtn.removeClass('open');
      });
    }

    // combo-popup 닫기
    function selectPopClose() {
        // 버튼 화살표 회전
        selBtn.removeClass('open');

        // popup 닫기
        popObj.find('.popup').removeClass('open');
        lidaUI.allowScroll();

        var timer = setTimeout(function() {
            popObj.find('.dimmed_area').removeClass('on');
            popObj.remove();

            // 웹접근성 관련 tabindex 변경
            if ($('.popup.open').length < 1) {
                $('body').find('input:not([type="hidden"]), button, a, select').attr('tabindex', 0);
            }

            var lastPop = $('.popup.open').eq($('.popup.open').length - 1);
            popObj.find('input:not([type="hidden"]), button, a, select').attr('tabindex', -1);
            lastPop.find('input:not([type="hidden"]), button, a, select').attr('tabindex', 0);

            clearTimeout(timer);
        }, 300);
        
        // 다음 focus 이동
        if (nextFocus == true || nextFocus == 'undefined') {
          lidaUI.moveNextFocus();
        }
    }
},
}

