    $(document).ready(function() {
      
      $('#content').hide();

      
      const text = 'Happy Rakshabandhan';
      const $txt = $('#rakhi-text');
      let i = 0;
      $txt.text('');
      setTimeout(() => {
        $txt.addClass('typing');
        const interval = setInterval(() => {
          if (i < text.length) {
            $txt.append(text.charAt(i));
            i++;
          } else {
            clearInterval(interval);
            $txt.removeClass('typing');
            setTimeout(() => {
              $txt.addClass('smoke');
              setTimeout(() => {
                $('#overlay').fadeOut(800, function() {
                  $('#content').show().addClass('visible');
                });
              }, 1000);
            }, 500);
          }
        }, 100);
      }, 300);

      
      confetti({ particleCount: 120, spread: 100, origin: { y: 0.1 }, colors: ['#ff6f61', '#ffd54f', '#ffcccb'] });
      const heartSrc = 'https://emojiapi.dev/api/v1/2764/64.png';
      const container = document.querySelector('.hearts-container');
      for (let j = 0; j < 10; j++) {
        const img = document.createElement('img');
        img.src = heartSrc;
        const dur = Math.random() * 4 + 5;
        img.style.setProperty('--duration', dur + 's');
        img.style.left = Math.random() * 100 + 'vw';
        img.style.animationDelay = Math.random() * 0 + 's';
        container.appendChild(img);
      }
    });