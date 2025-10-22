{ // Navbar
    const sidebar = document.getElementById(`sidebar`);
    const openBtn = document.getElementById(`open-sidebar-button`);
    const closeBtn = document.getElementById(`close-sidebar-button`);
    const overlay = document.getElementById(`overlay`);
    const maxMedia = window.matchMedia("(width <= 991px)");

    function openSidebar() {
        sidebar.classList.add('active');
        overlay.style.display = "block";
        openBtn.setAttribute('aria-expanded', 'true');
        sidebar.removeAttribute('inert');
    }
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.style.display = "none";
        openBtn.setAttribute('aria-expanded', 'false');
        sidebar.setAttribute('inert', '');
    }
    openBtn.addEventListener(`click`, openSidebar);
    closeBtn.addEventListener(`click`, closeSidebar);
    overlay.addEventListener(`click`, closeSidebar);

    maxMedia.addEventListener('change', (e) => updateSidebar(e));
    function updateSidebar(e) {
        const isMobile = e.matches;
        if (isMobile) {
            sidebar.setAttribute('inert', '');
        }
        else {
            // desktop device
            sidebar.removeAttribute('inert');
        }
    }
    updateSidebar(maxMedia);
}

{ // Check Number
    let check = document.querySelector(`.card1 #check`);
    let number = document.querySelector(`.card1 #number`);
    check.addEventListener(`click`, function () {
        check.innerText = `Result`;
        number.value = Number(number.value);
        if (number.value > 0 && number.value % 2 === 0) {
            document.querySelector(`.card1 #result`).innerHTML = `${number.value} is a Positive and<br>an Evan Number`;
        } else if (number.value < 0 && number.value % 2 === 0) {
            document.querySelector(`.card1 #result`).innerHTML = `${number.value} is a Negative and<br>an Evan Number`;
        } else if (number.value > 0 && number.value % 2 !== 0) {
            document.querySelector(`.card1 #result`).innerHTML = `${number.value} is a Positive and<br>an Odd Number`;
        } else if (number.value < 0 && number.value % 2 !== 0) {
            document.querySelector(`.card1 #result`).innerHTML = `${number.value} is a Negative and<br>an Odd Number`;
        } else {
            document.querySelector(`.card1 #result`).innerHTML = `${number.value} is a Neutral and<br>an Evan Number`;
        }
    });
}

{ // Turn On/Off Bulb
    let img = document.querySelector(`.card2 img`);
    document.querySelector(`.card2 img`).addEventListener(`click`, function () {
        if (img.src.match(`./assets/img/pic_bulbon.gif`)) {
            img.src = `./assets/img/pic_bulboff.gif`;
        } else {
            img.src = `./assets/img/pic_bulbon.gif`;
        }
    });
}

{ // Add to Cart
    let stock = Number(15);
    let num = document.querySelector(`.card3 #num`);
    num.addEventListener(`keyup`, function () {
        if (num.value <= 0) {
            num.value = 1;
        } else if (num.value >= stock) {
            num.value = stock;
        }
    });
    document.querySelector(`.card3 .minus`).addEventListener(`click`, function () {
        if (num.value > 1) {
            num.value = Number(num.value) - 1;
        }
    });
    document.querySelector(`.card3 .plus`).addEventListener(`click`, function () {
        if (num.value < stock) {
            num.value = Number(num.value) + 1;
        } else if (num.value >= stock) {
            num.value = stock;
        }
    });
}