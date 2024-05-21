const initscreen = document.querySelector('.initscreen');
const project = document.querySelector('.project');
const sidemenu2 = document.querySelector('.sidemenu2');

initscreen.addEventListener('animationend', () => {
    initscreen.style.display = 'none';
    document.body.style.backgroundColor = '#000';
    document.body.style.display = 'block';
    project.style.display = 'flex';
    project.style.opacity = '1';
    sidemenu2.style.display = 'block';
});

$(() => {
    $('.slidebtn2').on('click', () => {
        $('#slideon2').slideToggle("slow");
    });
});

let currentbox1 = 0;

function showbox1(index) {
    const imgbox1 = document.querySelector('.imgbox1');
    const totalbox = imgbox1.children.length;
    const intext1 = document.querySelector('.imgindex1');

    if (index >= totalbox) {
    currentbox1 = 0;
    } else if (index < 0) {
    currentbox1 = totalbox - 1;
    } else {
    currentbox1 = index;
    }

    const offset = -currentbox1 * 100;
    imgbox1.style.transform = `translateX(${offset}%)`;
    intext1.innerText = `${index + 1} / ${totalbox}`;

    if (index >= totalbox) {
        intext1.innerText = `1 / ${totalbox}`;
    }
}

function changebox1(direction) {
    showbox1(currentbox1 + direction);
}

// 자동 슬라이드 기능
setInterval(() => {
    changebox1(1);
}, 3000);

// 초기 슬라이드 설정
showbox1(currentbox1);

function Link1() {
    location = "https://www.behance.net/gallery/198140861/HTML-Javascript-";
}

let currentbox2 = 0;

function showbox2(index) {
    const imgbox2 = document.querySelector('.imgbox2');
    const totalbox = imgbox2.children.length;
    const intext2 = document.querySelector('.imgindex2');

    if (index >= totalbox) {
    currentbox2 = 0;
    } else if (index < 0) {
    currentbox2 = totalbox - 1;
    } else {
    currentbox2 = index;
    }

    const offset = -currentbox2 * 100;
    imgbox2.style.transform = `translateX(${offset}%)`;
    intext2.innerText = `${index + 1} / ${totalbox}`;

    if (index >= totalbox) {
        intext2.innerText = `1 / ${totalbox}`;
    }
}

function changebox2(direction) {
    showbox2(currentbox2 + direction);
}

// 자동 슬라이드 기능
setInterval(() => {
    changebox2(1);
}, 3000);

// 초기 슬라이드 설정
showbox2(currentbox2);

let currentbox3 = 0;

function showbox3(index) {
    const imgbox3 = document.querySelector('.imgbox3');
    const totalbox = imgbox3.children.length;
    const intext3 = document.querySelector('.imgindex3');

    if (index >= totalbox) {
    currentbox3 = 0;
    } else if (index < 0) {
    currentbox3 = totalbox - 1;
    } else {
    currentbox3 = index;
    }

    const offset = -currentbox3 * 100;
    imgbox3.style.transform = `translateX(${offset}%)`;
    intext3.innerText = `${index + 1} / ${totalbox}`;

    if (index >= totalbox) {
        intext3.innerText = `1 / ${totalbox}`;
    }
}

function changebox3(direction) {
    showbox3(currentbox3 + direction);
}

// 자동 슬라이드 기능
setInterval(() => {
    changebox3(1);
}, 3000);

// 초기 슬라이드 설정
showbox3(currentbox3);

let currentbox4 = 0;

function showbox4(index) {
    const imgbox4 = document.querySelector('.imgbox4');
    const totalbox = imgbox4.children.length;
    const intext4 = document.querySelector('.imgindex4');

    if (index >= totalbox) {
    currentbox4 = 0;
    } else if (index < 0) {
    currentbox4 = totalbox - 1;
    } else {
    currentbox4 = index;
    }

    const offset = -currentbox4 * 100;
    imgbox4.style.transform = `translateX(${offset}%)`;
    intext4.innerText = `${index + 1} / ${totalbox}`;

    if (index >= totalbox) {
        intext4.innerText = `1 / ${totalbox}`;
    }
}

function changebox4(direction) {
    showbox4(currentbox4 + direction);
}

// 자동 슬라이드 기능
setInterval(() => {
    changebox4(1);
}, 3000);

// 초기 슬라이드 설정
showbox4(currentbox4);

let currentbox5 = 0;

function showbox5(index) {
    const imgbox5 = document.querySelector('.imgbox5');
    const totalbox = imgbox5.children.length;
    const intext5 = document.querySelector('.imgindex5');

    if (index >= totalbox) {
    currentbox5 = 0;
    } else if (index < 0) {
    currentbox5 = totalbox - 1;
    } else {
    currentbox5 = index;
    }

    const offset = -currentbox5 * 100;
    imgbox5.style.transform = `translateX(${offset}%)`;
    intext5.innerText = `${index + 1} / ${totalbox}`;

    if (index >= totalbox) {
        intext5.innerText = `1 / ${totalbox}`;
    }
}

function changebox5(direction) {
    showbox5(currentbox5 + direction);
}

// 자동 슬라이드 기능
setInterval(() => {
    changebox5(1);
}, 3000);

// 초기 슬라이드 설정
showbox5(currentbox5);

window.addEventListener('scroll', () => {
    if (this.window.scrollY >= 5000) {
        $('.prevhtml').addClass('prevmove');
        $('.prevhtml').removeClass('prevRmove');
    }

    else {
        $('.prevhtml').removeClass('prevmove');
        $('.prevhtml').addClass('prevRmove');
    }
});

function backlink() {
    location = "http://127.0.0.1:5500/portfolio.html";
}