$(function() {

  // .. EVENT ACTION
  $(document).on('click', '.js-add', function() {

    var _this = this;

    if ($(this).hasClass('__remove')) {

      $.ajax({
        url: '/',
        data: {},
        success: function(response) {
          $(_this).addClass('form_el __block').removeClass('__remove').html('Добавить в календарь');

          alert('Обработчик AJAX запроса для удаления события');
        },
        error: function() {
          alert('Error');
        }
      });

    } else {

      $.ajax({
        url: '/',
        data: {},
        success: function(response) {
          $(_this).removeClass('form_el __block').addClass('__remove').html(
            $('<i/>').addClass('ico __16 __close')
          );

          alert('Обработчик AJAX запроса для добавления события');
        },
        error: function() {
          alert('Error');
        }
      });

    }

    return false;
  });

});