$(function() {
  
  $('#navigation').stickyHeader();
  $('#footer').stickyFooter();



  //****************************************************************************************************
  //
  // .. MENU TOGGLE
  //
  //****************************************************************************************************
  $('.menu-toggle').click(function() {
    $('.menu_dropdown.__location').hide();
    $(this).toggleClass('__active');
    $(this).closest('#navigation').find('.menu').slideToggle();
    return false;
  });



  //****************************************************************************************************
  //
  // .. SEARCH TOGGLE ON PHONE
  //
  //****************************************************************************************************
  $('.search_toggle').click(function() {
    var $el = $(this).parent().find('.search_input');
    if ($el.is(':visible')) {
      $el.hide();
      $('.menu-toggle').css({opacity: 1});
      $(this).find('.ico').removeClass('__close').addClass('__search');
    } else {
      $el.show().focus();
      $('.menu-toggle').css({opacity: 0});
      $(this).find('.ico').removeClass('__search').addClass('__close');
    }
  });



  //****************************************************************************************************
  //
  // .. DROPDOWN MENU TOGGLE
  //
  //****************************************************************************************************
  $('.js-toggle-location-menu').click(function() {
    var $el = $('#navigation').find('.menu_dropdown.__location');
    $el.is(':hidden') ? $el.fadeIn() : $el.fadeOut();
    $('.menu-toggle').removeClass('__active');
    $('#navigation').find('.menu').hide();
    $('.menu_dropdown.__user').hide();
    return false;
  });

  $('.js-toggle-user-menu') .click(function() {
    var $el = $('.user-block').find('.menu_dropdown.__user');
    $el.is(':hidden') ? $el.fadeIn() : $el.fadeOut();
    $('.menu_dropdown.__location').hide();
    return false;
  });



  //****************************************************************************************************
  //
  // .. MATERIALS ICON ROTATE ANIMATION
  //
  //****************************************************************************************************
  $(document).on('mouseenter', '.material', function() {
    $(this).find('.material_icon').toggleClass('__rotate1 __rotate2');
  });



  //****************************************************************************************************
  //
  // .. Image caption
  //
  //****************************************************************************************************
  $('.article_body').find('img').each(function() {
    var alt = $(this).attr('alt');
    if (alt.length > 0) {
      $(this).wrap(
        $('<figure/>')
      ).wrap(
        $('<div/>').addClass('cnt_img')
      ).closest('.cnt_img').append(
        $('<p/>').addClass('cnt_img_alt').text(alt)
      );
    }
  });



  //****************************************************************************************************
  //
  // .. DOUBLE HOVER
  //
  //****************************************************************************************************
  doubleHover('.material .double-hover', 'hover');



  //****************************************************************************************************
  //
  // .. FORMS
  //
  //****************************************************************************************************
  $('.form').customForm(); // $('#checkbox').customForm() to init single element; $('body').customForm() to init all elements



  //****************************************************************************************************
  //
  // .. SCROLL TO
  //
  //****************************************************************************************************
  $('a[data-scroll="true"]').on('click touchend', function() {
    var       $this = $(this),
             anchor = $this.attr('href'),
        destination = $(anchor).offset().top;
    $('html, body').animate({scrollTop: destination}, 500);
    return false;
  });
  


  //****************************************************************************************************
  //
  // .. SLIDERS
  //
  //****************************************************************************************************
  $('.slider.__news').find('.slides').cycle({
    fx: 'scrollHorz',
    centerHorz: true,
    log: false,
    speed: 300,
    swipe: true,
    timeout: 3000,
    slides: '.slides_i',
    pager: '.slider_pager',
    pagerTemplate: '<a href="#" class="slider_pager_i"></a>',
    autoHeight: 1
  });

  $('.slider.__join').find('.slides').cycle({
    fx: 'scrollHorz',
    centerHorz: true,
    log: false,
    speed: 300,
    swipe: true,
    timeout: 0,
    slides: '.slides_i',
    autoHeight: 1
  });

  $('.slider.__show').find('.slides').cycle({
    centerHorz: true,
    log: false,
    speed: 300,
    swipe: true,
    timeout: 0,
    slides: '.slides_i',
    pager: '.slider_pager',
    pagerTemplate: '<a href="#" class="slider_pager_i"></a>',
    prev: '.slider_nav_i.__prev',
    next: '.slider_nav_i.__next',
    autoHeight: 1
  });



  //****************************************************************************************************
  //
  // .. DIALOGS
  //
  //****************************************************************************************************
  //
  // .. Open dialog
  //
  $(document).on('click touchend', '[data-dialog="true"]', function() {
    var $this = $(this),
          url = $this.data('url');
    $.arcticmodal({
      type: 'ajax',
      url: url
    });
    return false;
  });

  //
  // .. Close dialog
  //
  $(document).on('click touchend', '.js-dialog_close', function() {
    $.arcticmodal('close');
  });



  //****************************************************************************************************
  //
  // .. ACCOUNTING
  //
  //****************************************************************************************************
  //
  // .. Number
  //
  $('.format-number').each(function() {
    var
      number = parseInt($(this).text()),
      formatNumber = accounting.formatNumber(number);

    $(this).text(formatNumber);
  });

  //
  // .. Money
  //
  $('.format-money').each(function() {
    var c = accounting.settings.currency;

    if ($(this).hasClass('__rub')) {
      c.format = '%v';
    } else if ($(this).hasClass('__usd')) {
      c.symbol = '$';
      c.format = '%s%v';
    } else if ($(this).hasClass('__eur')) {
      c.symbol = '€';
      c.format = '%s%v';
    }

    var
      number = parseFloat($(this).text()),
      formatMoney = accounting.formatMoney(number);
    
    if ($(this).hasClass('__rub')) {
      $(this).text(formatMoney).append('&nbsp;<i class="fa fa-ruble"></i>');
    } else {
      $(this).text(formatMoney);
    }
  });



  //****************************************************************************************************
  //
  // .. LOAD
  //
  //****************************************************************************************************
  $(window).load(function() {
//    var slideH = $('.slider.__news').find('.slides').find('.slides_i').maxHeight();
//    alert(slideH);
//    $('.slider.__news').find('.slides').css({height: slideH + 'px'});
  });



  //****************************************************************************************************
  //
  // .. SCROLL
  //
  //****************************************************************************************************
  $(window).scroll(function() {});



  //****************************************************************************************************
  //
  // .. RESIZE
  //
  //****************************************************************************************************
  $(window).smartresize(function() {

    $('#navigation').stickyHeader();
    $('#footer').stickyFooter();

  });
  
});