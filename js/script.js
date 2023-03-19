var intro__title = document.querySelector('.intro__title');
var hand__1 = document.querySelector('.hand__1');

hand__1.onmouseover = function(e) {
  intro__title.style.transform = 'translate(-125px)';
  hand__1.style.right = '0';
};

hand__1.onmouseout = function(e) {
  intro__title.style.transform = 'translate(0)';
  hand__1.style.right = '-125px';
};
