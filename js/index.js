let backtotopBtn = document.querySelector(".back-to-top");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      backtotopBtn.classList.add('active');
    } else {
      backtotopBtn.classList.remove('active');
    }
  }

  backtotopBtn.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
