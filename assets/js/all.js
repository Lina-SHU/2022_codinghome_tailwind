"use strict";

var slider = document.querySelector('.skillList');
var isDown = false;
var startX;
var scrollLeft;
slider.addEventListener('mousedown', function (e) {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', function () {
  isDown = false;
});
slider.addEventListener('mouseup', function () {
  isDown = false;
});
slider.addEventListener('mousemove', function (e) {
  if (!isDown) return;
  e.preventDefault();
  var x = e.pageX - slider.offsetLeft;
  var walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
$(document).ready(function () {
  $('.login').click(function (e) {
    e.preventDefault();
    $('.loginModal').toggleClass('hidden');
  });
  $('.LoginClose').click(function (e) {
    e.preventDefault();
    $('.loginModal').toggleClass('hidden');
  });
});
//# sourceMappingURL=all.js.map