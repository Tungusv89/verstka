document.addEventListener('DOMContentLoaded', () => {
  // modal
  const modal = document.querySelector('.modal');

  document.querySelector('.first_screen button').addEventListener('click', () => {
    const state = modal.style.display == '' ? 'flex' : 'none';
    modal.style.display = state;
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.style.display == 'flex') {
      modal.style.display = '';
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = '';
    }
  });

  // mobile menu
  window.addEventListener('resize', () => {
    buildMenu();
  });

  buildMenu();

  document.querySelector('.header-menu__icon').addEventListener('click', () => {
    if (
      document.querySelector('.header-menu__icon').classList.contains('active') &&
      document.querySelector('.header-menu').classList.contains('active')
    ) {
      hideMenu();
    } else {
      buildMenu();
      document.querySelector('.header-menu__icon').classList.add('active');
      document.querySelector('.header-menu').classList.add('active');
    }
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

      hideMenu();
    }
  }

  function hideMenu() {
    document.querySelector('.header-menu__icon').classList.remove('active');
    document.querySelector('.header-menu').classList.remove('active');
  }

  // send ajax
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

  // slider install
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
