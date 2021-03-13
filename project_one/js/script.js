var box      = document.querySelector(".box"),
    sentence = document.querySelector('.sentence'),
    y        = 1,
    gravity  = 1;


setInterval(function(){
  if(y > 420) gravity = -gravity;
  if (y>435) { y=1; gravity=1;}
  console.log(y);
  gravity +=1;
  y+=gravity;
  box.style.top= (y) + 'px';
}
,100);
