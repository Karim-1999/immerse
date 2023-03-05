    let menuButton = document.getElementById('logo');
    let menuTooltip = document.getElementById('nav1__navList');
    let exitButton = document.getElementById('exitButton');
    const hr = document.querySelector('.nav1__checkbox__hr');
    const nav1 = document.querySelector('.nav1');
    const liElements = document.querySelectorAll('.menu-element');
    liElements.forEach(li => { li.style.opacity = 0; li.style.top = '50px' });
    let timeInterval = 0;

    let iteration = 1;

    const time = () => {
        if (timeInterval !== 100) {
            let interval = window.setInterval(() => {
                timeInterval += 5;
                hr.style.width = timeInterval + '%';
                if (Math.floor(timeInterval) === 100) { clearInterval(interval); iteration = 1; };
            }, 30 * iteration)
        }
    }

    const goUp = () => {
        if (timeInterval !== 0) {
            let interval = window.setInterval(() => {
                timeInterval -= 5;
                iteration++;
                hr.style.width = timeInterval + '%';
                if (Math.floor(timeInterval) === 0) { clearInterval(interval); iteration = 1; };
            }, iteration * 30)
        }
    }
    // addEventListener('scroll', (event) => {
    //     if (window.scrollY > 200) {
    //         time();
    //     } else {
    //         goUp();
    //     }
    // });

    export function handleOpenMenu () {
        nav1.style.backgroundColor = "#03011a";
        menuTooltip.classList.remove('nascondi')
        this.classList.add('nascondi')
        exitButton.classList.remove('nascondi')
        time();


        let delay = 1000;

        for (let li of liElements) {
            let opacity = 0;
            delay -= 150;
            let top = 50;
            window.setTimeout(() => {
                let opacityInterval = window.setInterval(() => {
                    opacity += 0.05;
                    li.style.opacity = Math.floor(opacity) === 1 ? 1 : opacity;
                    if (Math.floor(opacity) === 1) clearInterval(opacityInterval);
                }, 50)

                let positionInterval = window.setInterval(() => {
                    top -= 5;
                    li.style.top = top + 'px';
                    if (Math.floor(top) === 0) clearInterval(positionInterval);
                }, 18);
            }, delay);
        }
    }

    export function handleExit() {
        nav1.style.backgroundColor = "rgba(18, 13, 87, 0.4)"
        this.classList.add('nascondi')
        menuTooltip.classList.add('nascondi')
        menuButton.classList.remove('nascondi')
        goUp();
        const liElements = document.querySelectorAll('.hidden');
        let delay = 0;
        for (let li of liElements) {
            li.style.opacity = 0;
        }
    }
