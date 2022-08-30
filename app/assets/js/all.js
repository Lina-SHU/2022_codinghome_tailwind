const slider = document.querySelector('.skillList');
let isDown = false;
let startX;
let scrollLeft;

if (slider) {
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });
}

/* login modal */

$(document).ready(() => {
  $('.login').click(function (e) {
    e.preventDefault();
    $('.loginModal').toggleClass('hidden');
  })
  $('.LoginClose').click(function(e){
    e.preventDefault();
    $('.loginModal').toggleClass('hidden');
  })
  $('.menuBtn').click(function(e) {
    e.preventDefault();
    $('.navList').slideToggle().toggleClass('hidden');
  })
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
  }
})();

const elem = document.querySelector('input[name="datepicker"]');
if (elem) {
  const datepicker = new Datepicker(elem, {
    autohide: true,
    language: 'zh-CN'
  });
}

/* Datepicker end */

