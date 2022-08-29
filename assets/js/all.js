"use strict";

var slider = document.querySelector('.skillList');
var isDown = false;
var startX;
var scrollLeft;

if (slider) {
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
}
/* login modal */


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
/* login modal end */

/* Datepicker */

(function () {
  Datepicker.locales['zh-CN'] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["日", "一", "二", "三", "四", "五", "六"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六"],
    months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    monthsShort: ["一月", "二月", "三月", "四月", "五月", "六", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    today: "Today",
    clear: "Clear",
    titleFormat: "y年MM月",
    format: "yyyy/mm/dd",
    weekStart: 0
  };
})();

var elem = document.querySelector('input[name="datepicker"]');

if (elem) {
  var datepicker = new Datepicker(elem, {
    autohide: true,
    language: 'zh-CN'
  });
}
/* Datepicker end */
//# sourceMappingURL=all.js.map
