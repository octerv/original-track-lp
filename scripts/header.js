document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });

  document.addEventListener("click", function (e) {
    // メニューまたはバーガーアイコン以外がクリックされた場合にメニューを閉じる
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      if (navLinks.classList.contains("nav-active")) {
        navLinks.classList.remove("nav-active");
        burger.classList.remove("toggle");
      }
    }
  });
});
