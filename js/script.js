document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.first_screen button').addEventListener('click', () => {
    const state = document.querySelector('.modal').style.display == '' ? 'flex' : 'none';
    document.querySelector('.modal').style.display = state;
  });

  //mobile menu
  window.addEventListener('resize', () => {
    buildMenu();
  });

  buildMenu();

  document.querySelector('.header-menu__icon').addEventListener('click', () => {
    if (
      document.querySelector('.header-menu__icon').classList.contains('active') &&
      document.querySelector('.header-menu').classList.contains('active')
    ) {
      document.querySelector('.header-menu__icon').classList.remove('active');
      document.querySelector('.header-menu').classList.remove('active');
    } else {
      buildMenu();
      document.querySelector('.header-menu__icon').classList.add('active');
      document.querySelector('.header-menu').classList.add('active');
    }
  });

  $(document).ready(function () {
    $('form').submit(function () {
      // Получение ID формы
      var formID = $(this).attr('id');
      // Добавление решётки к имени ID
      var formNm = $('#' + formID);
      $.ajax({
        type: 'POST',
        url: '/send.php',
        data: formNm.serialize(),
        beforeSend: function () {
          // Вывод текста в процессе отправки
          $(formNm).html('<p style="text-align:center">Отправка...</p>');
        },
        success: function (data) {
          // Вывод текста результата отправки
          $(formNm).html('<p style="text-align:center">' + data + '</p>');
        },
        error: function (_jqXHR, _text, error) {
          // Вывод текста ошибки отправки
          $(formNm).html(error);
        },
      });
      return false;
    });
  });
});

function buildMenu() {
  if (window.innerWidth < 767) {
    document
      .querySelector('.header-menu')
      .append(
        document.querySelector('nav'),
        document.querySelector('.call'),
        document.querySelector('.social_links'),
      );
  } else if (window.innerWidth > 767) {
    document
      .querySelector('header')
      .append(document.querySelector('nav'), document.querySelector('.call'));
    document.querySelector('.actions').append(document.querySelector('.social_links'));

    document.querySelector('.header-menu__icon').classList.remove('active');
    document.querySelector('.header-menu').classList.remove('active');
  }
}

// slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
