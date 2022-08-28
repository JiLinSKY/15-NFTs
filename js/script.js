const prevIcon = '<img src="./images/right-arrow.png">'
const nextIcon = '<img src="./images/left-arrow.png">'

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}
const button = document.querySelector(".sliding-button");
const galleries = document.querySelector("#galleries");

button.addEventListener("click", () => {
  scrollTo(galleries);
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
    margin: 36,
    loop: true,
    nav: true,
    navText: [
      nextIcon,
      prevIcon
    ]
  });
});


//______________________________________Date
function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

/* функция получения текущей даты и времени */
function date_time()
{
    let current_datetime = new Date();
    let day = zero_first_format(current_datetime.getDate());
    let month = zero_first_format(current_datetime.getMonth()+1);
    let year = current_datetime.getFullYear();

    return day+"."+month+"."+year+" ";
}

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
document.getElementById('current_date_time_block').innerHTML = date_time();
document.getElementById('current_date_time_block2').innerHTML = date_time();
document.getElementById('current_date_time_block3').innerHTML = date_time();

//______________________login

let modalBtn = document.getElementById("login")

modalBtn.addEventListener('click', () => {
  document.querySelector('.modal-login').style.display = 'block'
})

//_______________________close

let modalClose = document.getElementById("close-btn")

modalClose.addEventListener('click', () => {
  document.querySelector('.modal-login').style.display = 'none'
})



//______________________singUp

let singUp = document.getElementById("singup")

singUp.addEventListener('click', () => {
  document.querySelector('.modal-singup').style.display = 'block'
})

//_______________________closeSingUp

let closeSingUp = document.getElementById("close-singup")

closeSingUp.addEventListener('click', () => {
  document.querySelector('.modal-singup').style.display = 'none'
})