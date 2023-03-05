const positionWrapper = document.querySelector(".position-wrapper");

const creatJob = ([title,country,remote,time,desc]) => {
    let code = `
    <div class="position-job">
        <div class="job-title">
            <h2>${title}</h2>
        </div>
    <ul class="job-info">
        <li class="location"><i class="fa-solid fa-location-dot"></i> ${country} - <i class="fa-solid fa-wifi"></i>${remote}</li>
        <li class="fulltime"><i class="fa-solid fa-building"></i>${time}</li>
        <li class="job-desc"><i class="fa-solid fa-building"></i>${desc}</li>
    </ul>
    <button class="apply-job">
        apply
    </button>
    </div>
    `
    positionWrapper.innerHTML += code
}
// let job1 = [
//     "Front End Engineer (Mid or Senior)",
//     "United States",
//     "Ok Remote",
//     "Full time",
//     "Product & Engineering"
// ]

// creatJob(job1)

let job1 = [
        "Front End Engineer (Mid or Senior)",
        "United States",
        "Ok Remote",
        "Full time",
        "Product & Engineering"
]
creatJob(job1)

// localStorage.setItem("jobs",JSON.stringify(job1))

    let storage = JSON.parse(localStorage.getItem("jobs"))    
    let strLenght = (Object.keys(storage).length)
    for(let i = 0; i <= strLenght; i++){
        creatJob(storage[i])
    };
