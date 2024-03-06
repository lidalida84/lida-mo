$(function() {
  renewalUI.init();   // 초기설정
});

//  ui/ux 관련  script  
var prevFocus;      // 이전 focus element 
var renewalUI = { 
  // 초기 설정
  init: function(_id) {
      this.inpSetting();          // input focus
      this.floatingShadow();      // 하단 floating 영역 shadow
      this.popBottomShadow(_id);  // 팝업(full, floating) 하단 버튼 영역 shadow
      this.setTabRadio();         // tab 형태 radio button
      this.setAccordion();        // accordion setup
      this.setTabContent();       // tab content
      this.setTodayPicker();      // 오늘 날짜 default
      this.gnbMenu();             // gnb menu open/close
      // this.cardListAni();         // card list animation   
      this.dArsAutoFocus();       // 디지털ARS 키패드 동작시 dArsBtns 숨김, 포커스
      this.setAccordionLast();       // accordion last 최소높이 설정
  },

  // input box setting 
  inpSetting: function() {
      var iptObj = $('.form_item .inp_box').find('input.inp_txt, select, button, a');

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

          // input:readonly
          !!ipt.attr('readonly') && ipt.closest('.form_item').addClass('readonly');

          // input:disabled
          !!ipt.attr('disabled') && ipt.closest('.form_item').addClass('disabled');
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

  // input box focus 이동
  // @param: _next('string', focus 이동시킬 object의 id값)
  moveNextFocus: function(_next) {
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

  // 하단 floating 영역 shadow
  floatingShadow: function() {
      var floatingObj = $('.floating_btm').find('.floating_inner'),
          screenH = $(window).height(),
          docuH = $(document).height();

      if (floatingObj.length < 1) return false;

      // 하단 shadow 추가/삭제
      btmShadow(docuH);

      // 화면 요소의 변동(추가/삭제)으로 인한 shadow 적용 여부
      var doc = document.querySelector('#Wrap');
      var observer = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
              btmShadow(entry.contentRect.height);
          });
      });
      observer.observe(doc);

      // 하단 shadow 추가/삭제 함수
      function btmShadow(_height) {
          if (_height > screenH) {  // 화면 크기보다 내용이 길 때
              floatingObj.addClass('shadow');
          } else {
              floatingObj.removeClass('shadow');
          }
      }

      // scroll stop 감지 함수
      // 2023-08-31 scrollStop 함수 삭제
      // function scrollStop(callback) {
      //     var that = this,
      //         $this = $(that);

      //     $this.off('scroll.floatbtm').on('scroll.floatbtm', function(e) {
      //         floatingObj.addClass('scr');

      //         clearTimeout($this.data('scrollTimeout'));
      //         $this.data('scrollTimeout', setTimeout(callback.bind(that), 150, e));
      //     });
      // }

      // scrollStop(function(e) {
      //     floatingObj.removeClass('scr');
      // });
  },

  // 팝업(full, floating) 하단 버튼 영역 shadow
  popBottomShadow: function(_id) {
      var popObj = !!!_id ? $('.popup') : $('#'+ _id).find('.popup'),
          popProp = (!!popObj.hasClass('full') || !!popObj.hasClass('floating')) ? true : false;
          popBtm = popObj.find('.pop_bottom'),
          parentH = popObj.outerHeight(),
          popHeaderH = !!popObj.hasClass('floating') ? popObj.find('.pop_header').outerHeight() : '',
          popBodyH = popObj.find('.pop_body').outerHeight(),
          popFooterH = popObj.find('.pop_bottom').outerHeight();

      if (!!!popObj.hasClass('open')) return false;
      if (!!!popProp) return false;

      // 하단 shadow 추가/삭제
      btmShadow(popHeaderH + popBodyH + popFooterH);

      // �화면 요소의 변동(추가/삭제)으로 인한 shadow 적용 여부
      var popup = !!!_id ? document.querySelector('.popup .pop_body') : document.querySelector('#'+ _id +' .pop_body');
      var observer = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
              btmShadow(entry.borderBoxSize[0].blockSize + popFooterH + popHeaderH);
          });
      });
      observer.observe(popup);

      // 하단 shadow 추가/삭제 함수
      function btmShadow(_height) {
          if (_height > parentH) {
              popBtm.find('.inner').addClass('shadow');
          } else {
              popBtm.find('.inner').removeClass('shadow');
          }
      }

      // bottom-up popup일 때 제외
      if (!!popObj.hasClass('floating')) return false;

      // scroll stop 감지 함수
      // 2023-08-31 scrollStop 함수 삭제
      // function scrollStop(callback) {
      //     popObj.off('scroll.floatbtm').on('scroll.floatbtm', function(e) {
      //         popBtm.find('.inner').addClass('scr');

      //         clearTimeout(popObj.data('scrollTimeout'));
      //         popObj.data('scrollTimeout', setTimeout(callback.bind(popObj), 150, e));
      //     });
      // }

      // scrollStop(function(e) {
      //     popBtm.find('.inner').removeClass('scr');
      // });
  },

  // tab 형태 radio button
  setTabRadio: function() {
      var rdoGrp = $('.radio_group');

      if (!!!rdoGrp) return false;

      $.each(rdoGrp, function(i, group) {
          var radioGroup = $(group); 

          if (!!radioGroup.hasClass('tab_style')) {
              var selBlock = $('<span class="selected"></span>'), 
                  rdo = radioGroup.find('input[type="radio"]');

              // 이미 적용되어 있을 때 막기
              if (radioGroup.find('.selected').length > 0) return false;

              // 선택 표시 block 추가
              selBlock.appendTo(radioGroup); 

              chkMove();

              // radio 선택
              rdo.off('change.tabradio').on('change.tabradio', function() {
                  chkMove();
              });

              // 화면 크기 변경 시(가로 세로)
              $(window).on('resize', function() {
                  chkMove();
              });

              // checked 위치/이동
              function chkMove() {
                  var chkedItem = radioGroup.find('input[type="radio"]:checked').closest('.radio_item'),
                      chkedWidth = chkedItem.outerWidth(),
                      chkedLeft = chkedItem.position().left;

                  selBlock.css({ left: chkedLeft +'px', width: chkedWidth +'px' });
              }
          }
      });
  },

  // accordion setup accBtn > accHeader 클릭 변경 2023-12-29
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
                  accBtns.find('span').html('�닿린');
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

  // accordion setup 수정전
  // setAccordion: function() {
  //     var accordion = $('.accordion'),
  //         accBtn = accordion.find('.acc_btn');

  //     if (accordion.length < 1) return false;

  //     // 웹접근성 대응
  //     $.each(accordion, function(i, acc) {
  //         var accNo = i+1;
  //             accBtn = $(acc).find('.acc_btn');

  //         $.each(accBtn, function(idx, btn) {
  //             var itemNo = idx+1,
  //                 panel = $(btn).closest('.acc_item').find('.acc_panel');

  //             $(btn).attr({ id: 'acc'+ accNo +'_'+ itemNo, 'aria-expended': false, 'aria-controls': 'accpan'+ accNo +'_'+ itemNo });
  //             panel.attr({ id: 'accpan'+ accNo +'_'+ itemNo, 'role': 'region', 'aria-labelledby': 'acc'+ accNo +'_'+ itemNo });

  //             // default: open 일 때
  //             if (!!$(btn).hasClass('open')) {
  //                 $(btn).attr({ 'aria-expended': true });
  //                 $(btn).closest('.acc_item').find('.acc_panel').addClass('active').css({ display: 'block' });
  //             }
  //         });

  //         accBtn.off('click.accordion').on('click.accordion', function() {
  //             var panel = $(this).closest('.acc_item').find('.acc_panel'),
  //                 itemTop = $(this).closest('.acc_item').offset().top,
  //                 parent = (accordion.closest('.popup').length > 0)
  //                         ? $('.popup')
  //                         : $('html'),
  //                 headerH = (accordion.closest('.popup').length > 0)
  //                         ? $('.pop_header').outerHeight()
  //                         : $('#Header').outerHeight();

  //             if (!!$(acc).hasClass('auto_close')) {
  //                 var panels = $(this).closest('.acc_item').siblings('.acc_item').find('.acc_panel'),
  //                     accBtns = $(this).closest('.acc_item').siblings('.acc_item').find('.acc_btn');

  //                 accBtns.removeClass('open').attr({ 'aria-expended': false });
  //                 accBtns.find('span').html('열기');
  //                 panels.removeClass('active').slideUp(300);
  //             }
  
  //             if (!!!$(this).hasClass('open')) {
  //                 $(this).addClass('open').attr({ 'aria-expended': true });
  //                 $(this).find('span').html('닫기');
  //                 panel.addClass('active').slideDown(300);
  //             } else {
  //                 $(this).removeClass('open').attr({ 'aria-expended': false });
  //                 $(this).find('span').html('열기');
  //                 panel.removeClass('active').slideUp(300);
  //             }

  //             // scroll 이동
  //             // parent.animate({scrollTop: (itemTop - headerH - 16) +'px'}, 400);
  //         });
  //     });
  // },

  // combo-box(select box) setup - layer type
  setCombobox: function(opt) {
      var id = opt.id,
          callback = opt.callback,
          selObj = $('#'+ id),
          selBox = $('#'+ id).closest('.ui_select'),
          initVal = selObj.find('option:not([hidden]):selected').val(),
          initTxt = selObj.find('option:not([hidden]):selected').text(),
          placeholder = selObj.find('option[hidden]').text(),
          optList = selObj.find('option:not([hidden])'),
          comboObjs = '';
      
      // custom select box 留뚮뱾湲�
      comboObjs += '<button type="button" id="selBtn_'+ id +'" class="sel_btn combo"><span class="placeholder">'+ placeholder +'</span></button>';
      comboObjs += '<div class="opt_layer">';
      comboObjs += '<ul>';

      $.each(optList, function(i, opt) {
          var optTxt = opt.text,
              optVal = opt.value,
              selProp = (optVal == initVal) ? 'sel' : '';

              comboObjs += '<li><button type="button" class="opt_btn '+ selProp +'" value="'+ optVal +'"><span>'+ optTxt +'</span></button></li>';
      });

      comboObjs += '</ul>';
      comboObjs += '</div>';

      // custom select box 추가
      selBox.append($(comboObjs));

      renewalUI.inpSetting();

      // option layer 위치 설정
      var screenH = $(window).height(),
          btmAreaH = selBox.closest('.popup').length > 0 ? $('.pop_bottom').outerHeight() : selBox.closest('.contents').siblings('.floating_btm').length > 0 ? $('.floating_btm').outerHeight() : '',
          optLyrTop = selBox.closest('div').offset().top + selBox.closest('div').outerHeight(),
          lyrH = selBox.find('.opt_layer').outerHeight();
          
      // option layer가 화면 밖을 벗어날 때
      ((screenH - btmAreaH) < (optLyrTop + lyrH)) && selBox.find('.opt_layer').addClass('top');

      var selBtn = $('#selBtn_'+ id);     // select box button
      !!initVal && selBtn.find('span').removeClass('placeholder').html(initTxt);

      // select box click
      selBtn.off('click.selectbtn').on('click.selectbtn', function() {
          var optLayer = $(this).closest('.ui_select').find('.opt_layer'),
              lyrTop = ($(this).closest('div').offset().top + $(this).closest('div').outerHeight()) - $(document).scrollTop(),
              lyrH = optLayer.outerHeight();

          // 열려있는 option layer 닫기
          $('.opt_layer').removeClass('active');

          // option layer 위치 설정
          ((screenH - btmAreaH) < (lyrTop + lyrH)) ? optLayer.addClass('top') : optLayer.removeClass('top');

          if (!!!$(this).hasClass('open')) {
              $('.sel_btn.combo').removeClass('open');
              $(this).addClass('open');       // select box 화살표 회전
              optLayer.addClass('active');    // option layer 열기
          } else {
              $('.sel_btn.combo').removeClass('open');
              $(this).removeClass('open');       // select box 화살표 회전
              optLayer.removeClass('active');    // option layer 열기
          }
      });

      // option click
      selBox.find('.opt_btn').off('click.optbtn').on('click.optbtn', function() {
          var btn = $(this).closest('.ui_select').find('.combo'),
              select = $(this).closest('.ui_select').find('select'),
              optlyr = $(this).closest('.opt_layer'),
              selVal = $(this).val(),
              selTxt = $(this).text();

          optlyr.find('.opt_btn').removeClass('sel');
          $(this).addClass('sel');

          btn.find('span').removeClass('placeholder').html(selTxt);
          select.val(selVal);
          select.find('option').attr('selected', false);
          select.find('option[value="'+ selVal +'"]').attr('selected', true);

          btn.removeClass('open');
          optlyr.removeClass('active');

          // callback 실행
          !!callback && callback(selVal);

          // 다음 focus 이동
          renewalUI.moveNextFocus();
      });

      // select box 외부영역 클릭 시 option layer 닫기
      $(document).off('click.selectbox').on('click.selectbox', function(e) {
          if (!!$('.opt_layer').hasClass('active')) {
              var target = $(e.target);
  
              if (!!!target.hasClass('combo') && $('.opt_layer').has(e.target).length == 0) {
                  $('.ui_select').find('.combo').removeClass('open');
                  $('.opt_layer').removeClass('active');
              }
          }
      });
  },

  // combo-box(select box) selected - layer type
  selectedCombo: function(opt) {
      var id = opt.id,
          selected = opt.selected,
          selBox = $('#'+ id),
          selOpt = selBox.find('option[value="'+ selected +'"]'),
          selBtn = selBox.closest('.ui_select').find('.sel_btn'),
          optList = selBox.closest('.ui_select').find('.opt_layer'),
          optBtn = optList.find('.opt_btn'),
          selOptBtn = optList.find('.opt_btn[value="'+ selected +'"]');
      
      // <select>..</select> 설정
      selBox.find('option').attr('selected', false);
      selBox.find('option').eq(selOpt.index()).attr('selected', true);

      // combo-box button 설정
      selBtn.find('span').html(selOpt.text());

      // option button list 설정
      optBtn.removeClass('sel');
      selOptBtn.addClass('sel');
  },

  // combo-box(select box) - bottom-up type
  setPopCombobox: function(opt) {
      var id = opt.id,
          title = opt.title,
          subMsg = opt.subMessage,    // 설명 메세지
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
      popup += '<div id="'+ popId +'">';
      popup += '<div class="dimmed_area on">';
      popup += '<div class="popup floating">';
      popup += '<div class="pop_header">';
      popup += '<h1>'+ title +'</h1>';
      popup += '<button type="button" class="pop_close"><span class="hidden">�リ린</span></button>';
      popup += '</div>';
      popup += '<div class="pop_body">';
      popup += !!subMsg ? subMsg : '';
      popup += '<ul class="list_select">';

      $.each(optList, function(i) {
          var label = optList[i].label,
              val = optList[i].value,
              info = optList[i].info,
              activeProp = optList[i].value == initVal ? 'active' : '';
                          
          popup += '<li>';
          popup += '<button type="button" class="opt_btn '+ activeProp +'" value="'+ val +'">';
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
      popup += '</div>';
      popup += '</div>';

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

          dispObj.removeClass('placeholder').html(optList[optIdx].label);
          hiddenInp.val(optList[optIdx].value);

          // 함수 실행
          !!opt.callback && callback(optList[optIdx].value);
          // 함수 실행(value, label 필룡한 경우)
          !!opt.callback2 && callback2(optList[optIdx]);
          // combo-popup 닥기
          selectPopClose();

          // 버튼 화살표 회전
          selBtn.removeClass('open');
      });

      // 팝업 이외의 영역 클릭시 etcCallback option이 있는 경우 etcCallback 함수 호출
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
          renewalUI.allowScroll();

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
              renewalUI.moveNextFocus();
          }
      }
  },

  // combo-box(select box) selected - popup type
  selectedPopCombo: function(opt) {
      var id = opt.id,
          selValue = opt.selValue,
          dispText = opt.dispText,
          selBtn = $('#'+ id),
          btnTxtObj = selBtn.find('span'),
          hiddenInp = selBtn.siblings('input[type="hidden"]');

      btnTxtObj.removeClass('placeholder').html(dispText);
      hiddenInp.val(selValue);
  },

  // 각종 유형 선택하기 - bottom-up 팝업 내
  selectType: function(opt) {
      var id = opt.id,
          callback = opt.callback,
          opt = $('#'+ id).find('.opt_btn');

      // 항목 선택
      opt.off('click.seltype').on('click.seltype', function() {
          var selVal = $(this).val();

          opt.removeClass('active');
          $(this).addClass('active');

          // callback 함수 실행
          !!callback && callback(selVal);
      });
  },

  // tab content
  setTabContent: function() {
      var tabConts = $('.tab_contents');

      if (!!tabConts.length < 1) return false;

      $.each(tabConts, function(key, cont) {
          var tabCont = $(cont),
              tabList = tabCont.find('.tab_list'),
              tabBtn = tabCont.find('.tab_btn'),
              tabPanel = tabCont.find('.tab_panel'),
              keyNo = key + 1;

          // tab list 초기 설정
          tabList.attr('role', 'tablist');

          // tab type일 경우 bar 초기 설정
          if (!!tabList.hasClass('type_tab')) {
              tabList.append('<span class="bar"></span>');
              
              tabBarMove();

              $(window).on('resize', function() {
                  tabBarMove();
              });
          }

          // tab type일 경우 bar 위치/크기 설정
          function tabBarMove() {
              var selTab = tabList.find('.tab_btn.selected'),
                  selTabL = selTab.offset().left,
                  selTabW = selTab.outerWidth();

              tabList.find('.bar').css({ left: selTabL +'px', width: selTabW +'px' });
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
                  if (!!tabList.hasClass('type_tab')) {
                      var tabBar = tabList.find('.bar'),
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

  // 오늘 날짜 default
  setTodayPicker: function() {
      var calendarBtn = $('button.calendar');

      if (calendarBtn.length < 1) return false;

      $.each(calendarBtn, function(i, btn) {
          var dateInp = $(btn).closest('.inp_box').find('.inp_txt'),
              now = new Date(),
              nowYear = now.getFullYear(),
              nowMonth = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1,
              nowDate = now.getDate() < 10 ? '0' + now.getDate() : now.getDate(),
              today = nowYear +''+ nowMonth +''+ nowDate;

          dateInp.val(today);
      });
  },

  // popup 열기
  openPopup: function(param) {
      var popId = typeof(param) == 'string' ? param : typeof(param) == 'object' ? param.id : '',
          okCallback, cancelCallback, etcCallback,
          popObj = $('#'+ popId),
          popup = popObj.find('.popup'),
          dimArea = popObj.find('.dimmed_area'),
          closeBtn = popObj.find('.pop_close'),       // 팝업의 닫기 버튼
          okBtn = popObj.find('.pop_btn_ok'),         // 팝업의 ok 버튼
          etcBtn = popObj.find('.pop_btn_line'),      // 팝업의 line 버튼
          cancelBtn = popObj.find('.pop_btn_gray');   // 팝업의 cancel 버튼

      if (typeof(param) == 'object') {
          okCallback = param.okCallback;          // 팝업의 ok 버튼 실행 callback 함수
          cancelCallback = param.cancelCallback;  // 팝업의 cancel 버튼 실행 callback 함수
          etcCallback = param.etcCallback;        // 팝업의 line 버튼 실행 callback 함수
      }

      // 뒷화면 scroll 막기
      this.notScroll();

      dimArea.addClass('on');

      var timer = setTimeout(function() {
          popup.addClass('open');

          renewalUI.setTabRadio();

          // 전체 팝업일 때만 초기 설정 실행
          if (!!popup.hasClass('full') || !!popup.hasClass('floating')) {
              renewalUI.init(popId);
          }

          // 팝업 이외의 영역 클릭 시 팝업 닫기
          dimArea.find('.dimmed').on('click.popetc', function() {
              // renewalUI.closePopup(popId);
              popup.find('.pop_close').trigger('click');
          });

          // 팝업의 ok 버튼 실행
          if (!!okCallback) {
              okBtn.off('click.popokbtn').on('click.popokbtn', function() {
                  okCallback();
              });
          }

          // 팝업의 ok, cancel 이외의 버튼 실행
          if (!!etcCallback) {
              etcBtn.off('click.popetcbtn').on('click.popetcbtn', function() {
                  etcCallback(); 
              });
          }

          // 팝업의 cancel 버튼 실행
          if (!!cancelCallback) {
              cancelBtn.off('click.popcancelbtn').on('click.popcancelbtn', function() {
                  cancelCallback();

                  // 팝업 닫기
                  renewalUI.closePopup(popId);
              });
          }

          // 팝업의 닫기 버튼
          closeBtn.off('click.popclosebtn').on('click.popclosebtn', function() {
              // 팝업 닫기
              renewalUI.closePopup(popId);
          });

          clearTimeout(timer);
      }, 100);

      // 열기 전 focus 요소 저장
      renewalUI.prevFocusSave();
      $('body').find('input:not([type="hidden"]), button, a, select').attr('tabindex', -1);
      popObj.find('input:not([type="hidden"]), button, a, select').attr('tabindex', 0);
  },

  // alert pop open
  openAlert: function(opt) {
      var id = opt.id,                // alert popup id  
          sort = opt.sort,            // icon 종류
          msg = opt.message,          // 주요 메시지, html 형태임
          subMsg = opt.subMessage,    // 설명 메시지
          btnTxt = opt.btnText,       // 버튼 텍스트
          callback = opt.callback,    // callback
          popContainer = $('#layer_popup_container'),   // popup container
          popId = 'popAlert_'+ id,
          popup = '';

      // alert popup 만들기
      popup += '<div id="'+ popId +'">';
      popup += '<div class="dimmed_area">';
      popup += '<div class="popup alert">';
      popup += '<div class="pop_body">';
      popup += '<p class="info_txt '+ sort +'">';
      popup += msg;
      popup += '</p>';
      popup += !!subMsg ? '<span class="info_sub">'+ subMsg +'</span>' : '';
      popup += '</div>';
      popup += '<div class="pop_bottom">';
      popup += '<div class="inner">';
      popup += '<button type="button" class="pop_btn_ok"><span>'+ btnTxt +'</span></button>';
      popup += '</div>';
      popup += '</div>';
      popup += '</div>';
      popup += '<div class="dimmed"></div>';
      popup += '</div>';
      popup += '</div>';

      // alert popup 추가
      popContainer.append($(popup));

      // alert popup open
      this.openPopup(popId);

      // alert popup 버튼
      var popOkBtn = $('#'+ popId).find('.pop_btn_ok');

      // alert popup 버튼 click
      popOkBtn.off('click.popalert').on('click.popalert', function() {
          // callback 있을 경우 실행
          !!callback && callback();

          // alert popup 닫기
          renewalUI.closePopup(popId);
      });
  },

  // confirm pop open
  openConfirm: function(opt) {
      var id = opt.id,                            // alert popup id
          sort = opt.sort,                        // icon 종류
          msg = opt.message,                      // 주요 메시지, html 형태
          subMsg = opt.subMessage,                // 설명 메시지, html 형태
          btnOkTxt = opt.btnOkText,               // ok 버튼 텍스트
          btnCancelTxt = opt.btnCancelText,       // cancel 버튼 텍스트
          okCallback = opt.okCallback,            // ok 버튼 callback
          cancelCallback = opt.cancelCallback,    // cancel 버튼 callback
          popContainer = $('#layer_popup_container'),   // popup container
          popId = 'popConf_'+ id,
          popCloseBtn = opt.popCloseBtn, //팝업닫기버튼추가 202310
          popup = '';

      // confirm popup 留뚮뱾湲�
      popup += '<div id="'+ popId +'">';
      popup += '<div class="dimmed_area">';
      popup += '<div class="popup confirm">';
      popup += '<div class="pop_body">';
      popup += !!popCloseBtn ? '<a class="pop_close_btn" '+ popCloseBtn +'>팝업닫기</a>' : '';
      popup += '<p class="info_txt '+ sort +'">';
      popup += msg;
      popup += '</p>';
      popup += !!subMsg ? '<span class="info_sub">'+ subMsg +'</span>' : '';
      popup += '</div>';
      popup += '<div class="pop_bottom">';
      popup += '<div class="inner">';
      popup += '<button type="button" class="pop_btn_gray"><span>'+ btnCancelTxt +'</span></button>';
      popup += '<button type="button" class="pop_btn_ok"><span>'+ btnOkTxt +'</span></button>';
      popup += '</div>';
      popup += '</div>';
      popup += '</div>';
      popup += '<div class="dimmed"></div>';
      popup += '</div>';
      popup += '</div>';

      // confirm popup 추가
      popContainer.append($(popup));

      // confirm popup open
      this.openPopup(popId);

      // confirm popup 버튼
      var okBtn = $('#'+ popId).find('.pop_btn_ok'),
          cancelBtn = $('#'+ popId).find('.pop_btn_gray'),
          closeBtn = $('#'+ popId).find('.pop_close_btn');

      // confirm popup ok 버튼
      okBtn.off('click.popconfok').on('click.popconfok', function() {
          // ok callback 있을 경우
          !!okCallback && okCallback();

          // confirm popup 닫기
          renewalUI.closePopup(popId);
      });

      // confirm popup cancel 버튼
      cancelBtn.off('click.popconfcancel').on('click.popconfcancel', function() {
          // cancel callback 있을 경우
          !!cancelCallback && cancelCallback();

          // confirm popup 닫기
          renewalUI.closePopup(popId);
      });
      // confirm popup close 버튼
      closeBtn.off('click.popconfclose').on('click.popconfclose', function() {
          // confirm popup 닥기
          renewalUI.closePopup(popId);
      });
  },

  // popup 닫기
  closePopup: function(_id) {
      var popObj = $('#'+ _id),
          popup = popObj.find('.popup'),
          dimArea = popObj.find('.dimmed_area');

      popup.removeClass('open').removeAttr('style'); /* 1109변경 */

      // 두시화면 scroll 허용
      this.allowScroll();

      // 닫은 후 focus 이동
      if (!!prevFocus) {
          $('.inp_box').removeClass('focus');

          if (!!prevFocus.attr('id')) {
              renewalUI.moveNextFocus(prevFocus.attr('id'));
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
              dimArea.removeClass('on');
          }

          // 웹접근성 관련 tabindex 변경
          if ($('.popup.open').length < 1) {
              $('body').find('input:not([type="hidden"]), button, a, select').attr('tabindex', 0);
          }

          var lastPop = $('.popup.open').eq($('.popup.open').length - 1);
          popObj.find('input:not([type="hidden"]), button, a, select').attr('tabindex', -1);
          lastPop.find('input:not([type="hidden"]), button, a, select').attr('tabindex', 0);

          clearTimeout(timer);
      }, 500);
  },

  // popup open 시 뒷화면 scroll 막기
  notScroll: function() {
      var scrTop = $('html').scrollTop();

      $('html').css({ top: scrTop +'px', overflow: 'hidden' });
  },

  // popup close 시 뒷화면 scroll 허용
  allowScroll: function() {
      // 열려있는 팝업이 있을 경우 제외
      if ($('#layer_popup_container').find('.popup.open').length > 0) return false;

      $('html').removeAttr('style');
  },

  // gnb menu open/close
  gnbMenu: function() {
      var gnbMenu = $('#GnbWrap'),
          openBtn = $('#Header').find('.btn_menu'),
          closeBtn = gnbMenu.find('.btn_menu_close');

      // 초기화
      gnbMenu.find('input, button, a').attr('tabindex', -1);

      // 열기 버튼
      openBtn.off('click.gnbopen').on('click.gnbopen', function() {
          // 열기 전 focus 요소 저장
          renewalUI.prevFocusSave();

          $('body').find('input, button, a, select').attr('tabindex', -1);
          gnbMenu.find('.gnb_body').scrollTop(0);
          gnbMenu.addClass('open');
          gnbMenu.find('input, button, a').attr('tabindex', 0);
          
          // 뒷화면 scroll 막기
          renewalUI.notScroll();
      });

      // 닫기 버튼
      closeBtn.off('click.gnbclose').on('click.gnbclose', function() {
          // 웹접근성 관련 tabindex 변경
          $('body').find('input, button, a, select').attr('tabindex', 0);
          gnbMenu.removeClass('open');
          gnbMenu.find('input, button, a').attr('tabindex', -1);

          // 열기 전 요소에 focus
          prevFocus.focus();
          
          // 뒷화면 scroll 허용
          renewalUI.allowScroll();
      });
  },

  // 이전 focus 요소 지정
  prevFocusSave: function() {
      $(document).on('click', function(e) {
          prevFocus = $(e.target);
      });
  },

  // loading
  loading: function() {
      var blockUI = $('<div class="block-ui-container"><div class="block-ui-overlay"></div></div>'),
          loadObj = '';

      loadObj += '<div class="loading">';
      loadObj += '<div class="logo_meritz"><span class="hidden">濡쒕뵫以묒엯�덈떎.</span></div>';
      loadObj += '</div>';

      blockUI.append(loadObj);
      $('body').append(blockUI).addClass('block-ui-active').addClass('block-ui-visible');
  },

  // 금액 천단위 콤마
  thousandComma: function(_val) { 
      var price = _val.toString().replace(/[^0-9]/g, '').replace(/\,/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
      return price;
  },

  // card list animation
  cardCnt: 0,
  cardListAni: function() {
      var listObj = $('.card_wrap');

      // card list가 없거나, 팝업에 card가 있을 때 제외
      if (listObj.length < 1 || listObj.closest('.popup').length > 0) return false;

      var showContract = setInterval(function() {
          var item = listObj.find('.card_item');

          item.eq(renewalUI.cardCnt).addClass('show');
          
          if (renewalUI.cardCnt < item.length) {
              renewalUI.cardCnt++;
          } else {
              clearInterval(showContract);
              renewalUI.cardCnt = 0;
          }
      }, 100);
  },

  // 원하는 위치로 화면 스크롤
  toScrollScreen: function(_id) {
      var target = $('#'+_id),
          header = target.closest('.popup').length > 0
                  ? target.closest('.popup').find('.pop_header')
                  : $('#Header');
          headerH = header.outerHeight(),
          scrBody = target.closest('.popup').length > 0
                  ? target.closest('.popup')
                  : $('html');
          targetPos = target.offset().top - headerH - 36;

      scrBody.animate({ scrollTop: targetPos +'px' }, 400);
  },

  // disabled UI 적용
  setDisabled: function(opt) {
      var id = opt.id,
          disabled = opt.disabled,
          btn = $('#'+ id);

      if (disabled == true) {
          btn.addClass('disabled');
      } else {
          btn.removeClass('disabled');
      }
  },

  // listToggle 
  listToggle: function() {
      var list = $('.board_list'),
          listItem = list.find('.board_inner'),
          toggleBtn = list.next('.list_toggle'),
          listWrp = list.parent(),
          listCount = listItem.length;
      
      var countTxt = $('.accountLength');

      countTxt.html('외 ' + listCount + '건');

      toggleBtn.on('click',function(){
          var listStatus = list.css('display');
          
          if(listStatus == 'none'){
              toggleBtn.find('span').text('닫기');
              countTxt.hide();
              $(this).addClass('open');
          }else{
              toggleBtn.find('span').text('상세 내역');
              countTxt.show();
              $(this).removeClass('open');
          }
          $('html,body').animate({scrollTop:listWrp.offset().top - 56},300);
          list.slideToggle();
      })
  },

  // voidAccordion 
  voidAccordion: function() {
      const accordion = document.querySelectorAll("[data-accordion=accordion]");
      // toggle
      const toggle = function(val, idx) {
          let num = 0;
          for (const item of val) {
              if (item.classList.contains("acc-lock") === false) {
                  let header = item.querySelector("[data-accordion=header]");
                  let panel = item.querySelector("[data-accordion=panel]");
                  let btn = header.querySelector("[data-accordion=btn]");
                  panel.style.height = "0";
  
                  // 접근성 코드
                  num++;
                  btn.setAttribute("aria-expanded", "false");
                  btn.setAttribute("aria-controls", `ui-acc-${idx}-${num}`);
                  panel.setAttribute("id", `ui-acc-${idx}-${num}`);
  
                  // 자동 닫기 일때
                  let autoClose = btn.closest(".auto_close[data-accordion=accordion]");
  
                  // evt
                  const open = function() {
                      // 자동 닫기 일때
                      if (autoClose) {
                          let stayAcc = autoClose.querySelectorAll("[data-accordion=item]");
                          stayAcc.forEach(item => {
                              let stayBtn = item.querySelector("[data-accordion=btn]");
                              let stayPanel = item.querySelector("[data-accordion=panel]");
                              item.classList.remove("active");
                              stayBtn.classList.remove("open");
                              if(!stayBtn.classList.contains("open")) {
                                  stayPanel.style.height = "0";
                                  stayPanel.style.opacity = "0";
                                  // 접근성 코드
                                  stayBtn.querySelector("span").innerText = "열기";
                                  stayBtn.setAttribute("aria-expanded", "false");
                              }
                          });
                      }
  
                      // 패널 펼쳐짐
                      panel.style.height = "auto";
                      let ph = panel.clientHeight;
                      panel.style.height = "0";
                      setTimeout(() => {
                          panel.style.height = `${ph}px`;
                          item.classList.add("active");
                          btn.classList.add("open");
                          panel.style.opacity = "1";
                      }, 0);
  
                      // 접근성 코드
                      btn.querySelector("span").innerText = "닫기";
                      btn.setAttribute("aria-expanded", "true");
                  }
                  const close = function() {
                      btn.classList.remove("open");
                      panel.style.height = "0";
                      panel.style.opacity = "0";
  
                      // 접근성 코드
                      btn.querySelector("span").innerText = "열기";
                      btn.setAttribute("aria-expanded", "false");
                  }
  
                  // open class
                  if (btn.classList.contains("open")) {
                      item.classList.add("active");
                      setTimeout(() => {
                          panel.style.height = "auto";
                          item.classList.add("active");
                          btn.classList.add("open");
                          panel.style.opacity = "1";
                          
                          // 접근성 코드
                          btn.querySelector("span").innerText = "닫기";
                          btn.setAttribute("aria-expanded", "true");
                      }, 0);
                  }
  
                  header.addEventListener("click", function(){
                      item.classList.toggle("active");
                      if (item.classList.contains("active")) {
                          open();
                      } else {
                          close();
                      }
                  })
              } else {
                  let panel = item.querySelector("[data-accordion=panel]");
                  let btn = item.querySelector("[data-accordion=btn]");
                  btn.classList.add("hide");
                  panel.classList.add("hide");
              }
          }
      }
      
      if (accordion.length >= 1) {
          let idx = 0;
          for (const item of accordion) {
              let accItem = item.querySelectorAll("[data-accordion=item]");
              idx++;
              if(accItem.length >= 1) {
                  toggle(accItem, idx);
              }
          }
      }
  },

  // 디지털ARS 키패드 동작시 dArsBtns 숨김, 포커스 이동
  dArsAutoFocus: function() {
      const dArsBtns = document.querySelector(".dArs_btns:not(.ng-hide)");
      const floatingBtm = document.querySelector(".floating_btm.custom_ars");
      // runFocus 이벤트
      const runFocus = () => {
          const formItems = document.querySelectorAll(".contents .form_item .inp_txt");
          // height
          const defaultSpace = 40;
          let headerH = 0;
          let darsbarH = 0;
          let header = document.querySelector("#Header");
          let darsbar = document.querySelector(".dARS_bar");
          if (header) {
              headerH = header.clientHeight;
          }
          if (darsbar) {
              darsbarH = darsbar.clientHeight;
          }
          if (formItems.length > 0) {
              for (const item of formItems) {
                  item.addEventListener("focusin", () => {
                      let top = (window.scrollY + item.getBoundingClientRect().top) - defaultSpace - darsbarH - headerH;
                      window.scrollTo({ left: 0, top: top, behavior: "smooth" });
                      // console.log(top);
                      // console.log("focusin");
                      // dArsBtns 동작
                      dArsBtns.classList.add("ng-hide");
                      if(floatingBtm) {
                          floatingBtm.classList.remove("custom_ars");
                      }
                  })
                  item.addEventListener("focusout", () => {
                      // console.log("focusout");
                      // dArsBtns 동작
                      dArsBtns.classList.remove("ng-hide");
                      if(floatingBtm) {
                          floatingBtm.classList.add("custom_ars");
                      }
                  })
              }
          }
      }
      // dArsevent : .dArs_btns이 있고 .ng-hide가 아닐때 동작
      if (dArsBtns) {
          runFocus();
      }
  },

  // accordion last 최소높이 설정
  setAccordionLast: function() { 
      // target
      const accLast = document.querySelectorAll(".renew .accordion.last");
      const renew = document.querySelector("body.renew");
      // setMinheight
      const setMinheight = () => {
          for (const item of accLast) {
              // 바닥의 accordian last
              if (item.closest(".renew #Container") && !item.closest(".renew #layer_popup_container")) {
                  const wrap = item.closest(".renew #Wrap").clientHeight;
                  let container = item.closest(".renew #Container").clientHeight;
                  let hv;
                  hv = wrap - container
                  if (hv > 0) {
                      item.style.minHeight = `${item.clientHeight + hv}px`;
                  } else if (hv < 0) {
                      item.style.minHeight = "auto";
                  }
              // 팝업의 accordian last 
              } else if (item.closest(".renew #layer_popup_container .popup.full")) {
                  const layer = item.closest(".renew #layer_popup_container .popup.full").clientHeight;
                  const popup = item.closest(".renew #layer_popup_container .popup.full .pop_body").clientHeight;
                  const hv = layer - popup
                  if (hv > 0) {
                      // console.log(hv);
                      // console.log(item);
                      // console.log(layer);
                      // console.log(popup);
                      item.style.minHeight = `${item.clientHeight + hv}px`;
                  } else if (hv < 0) {
                      item.style.minHeight = "auto";
                  }
              }
          }    
      }
      // observer
      let observer = new MutationObserver(() => {
          setMinheight();
      });
      let option = {
          attributes: true,
          childList: true,
          CharacterData: true,
          subtree: true,
      }
      // run
      if (accLast.length > 0) {
          observer.observe(renew, option);
          setMinheight();
      }
  }
};