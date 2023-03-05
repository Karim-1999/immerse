window.addEventListener('scroll', (e) => {
    let scrollLcoation = document.documentElement.scrollTop
    let navbar = document.querySelector(".nav2")
    let navbg = document.querySelector(".navbg")

    if (scrollLcoation === 0) {
        navbg.style.backgroundColor = "rgba(18, 13, 87, 0)";
        navbg.style.backdropFilter = "";
        navbg.style.width = "0px";

        navbg.style.marginTop = "0px";
        navbar.style.marginTop = "0px";
    } else {
        //navbar bg
        navbg.style.backgroundColor = "rgba(18, 13, 87, 0.4)";
        navbg.style.backdropFilter = "blur(10px)";
        navbg.style.width = "85%";
        //both
        navbg.style.marginTop = "24px";
        navbg.style.position = "fixed";
        navbar.style.marginTop = "24px";
        navbar.style.position = "fixed";
    }
})