const initscreen = document.querySelector('.initscreen');
const coverscreen = document.querySelector('.coverscreen');
const sidemenu1 = document.querySelector('.sidemenu1');

initscreen.addEventListener('animationend', () => {
    initscreen.style.display = 'none';
    document.body.style.backgroundColor = '#000';
    document.body.style.display = 'block';
    coverscreen.style.display = 'block';
    coverscreen.style.opacity = '1';
    sidemenu1.style.display = 'block';
});

$(() => {
    $('.slidebtn1').on('click', () => {
        $('#slideon1').slideToggle("slow");
    });
});

const myname1 = document.querySelector('.myname1');
const myname2 = document.querySelector('.myname2');

myname1.classList.add('move1');
myname2.classList.add('move2');

window.addEventListener('scroll', function() {
    console.log(window.scrollY)

    const myname1 = document.querySelector('.myname1');
    const myname2 = document.querySelector('.myname2');

    if (this.window.scrollY >= 0 && this.window.scrollY <= 200) {
        myname1.classList.add('move1');
        myname1.classList.remove('reversemove1');
        myname2.classList.add('move2');
        myname2.classList.remove('reversemove2');
    }

    else {
        myname1.classList.remove('move1');
        myname1.classList.add('reversemove1');
        myname2.classList.remove('move2');
        myname2.classList.add('reversemove2');
    }

    const sea1 = document.querySelector('.sea1');
    const sea1text1 = document.querySelector('.sea1text1');
    const sea1text2 = document.querySelector('.sea1text2');
    const sea1text3 = document.querySelector('.sea1text3');
    const sea2text1 = document.querySelector('.sea2text1');
    const sea2text2 = document.querySelector('.sea2text2');
    const sea2text3 = document.querySelector('.sea2text3');
    
    if (this.window.scrollY >= 200 && this.window.scrollY <= 900) {
        $('.sea1').css('backgroundColor', '#000');
        $('.sea1').css('color', '#fff');
        sea1text1.classList.add('move3');
        sea1text1.classList.remove('reversemove3');
        sea2text1.classList.add('move4');
        sea2text1.classList.remove('reversemove4');
    }

    else {
        $('.sea1').css('backgroundColor', '#fff');
        $('.sea1').css('color', '#000');
        sea1text1.classList.add('reversemove3');
        sea1text1.classList.remove('move3');
        sea2text1.classList.add('reversemove4');
        sea2text1.classList.remove('move4');
    }

    if (this.window.scrollY >= 400 && this.window.scrollY <= 1100) {
        sea1text2.classList.add('move3');
        sea1text2.classList.remove('reversemove3');
        sea2text2.classList.add('move4');
        sea2text2.classList.remove('reversemove4');
    }

    else {
        sea1text2.classList.add('reversemove3');
        sea1text2.classList.remove('move3');
        sea2text2.classList.add('reversemove4');
        sea2text2.classList.remove('move4');
    }

    if (this.window.scrollY >= 600 && this.window.scrollY <= 1300) {
        sea1text3.classList.add('move3');
        sea1text3.classList.remove('reversemove3');
        sea2text3.classList.add('move4');
        sea2text3.classList.remove('reversemove4');
    }

    else {
        sea1text3.classList.add('reversemove3');
        sea1text3.classList.remove('move3');
        sea2text3.classList.add('reversemove4');
        sea2text3.classList.remove('move4');
    }

    if (this.window.scrollY >= 900 && this.window.scrollY <= 1700) {
        $('.about1').addClass('about1move');
        $('.about1').removeClass('about1Rmove');
    }

    else {
        $('.about1').removeClass('about1move');
        $('.about1').addClass('about1Rmove');
    }

    if (this.window.scrollY >= 2300 && this.window.scrollY <= 3100) {
        $('.skill1').addClass('skill1move');
        $('.skill1').removeClass('skill1Rmove');
    }

    else {
        $('.skill1').removeClass('skill1move');
        $('.skill1').addClass('skill1Rmove');
    }

    if (this.window.scrollY >= 3300 && this.window.scrollY <= 4100) {
        $('.archive1').addClass('archive1move');
        $('.archive1').removeClass('archive1Rmove');
    }

    else {
        $('.archive1').removeClass('archive1move');
        $('.archive1').addClass('archive1Rmove');
    }

    if (this.window.scrollY >= 4300) {
        $('.projectlink').addClass('projectlinkmove');
        $('.projectlink').removeClass('projectlinkRmove');
    }

    else {
        $('.projectlink').addClass('projectlinkRmove');
        $('.projectlink').removeClass('projectlinkmove');
    }
});

function projectlink() {
    location = "http://127.0.0.1:5500/portfolio2.html"
}
