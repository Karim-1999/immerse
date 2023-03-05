const profileMobile = document.querySelector(".team-members-profile-mobile")
const profileDesktop = document.querySelector(".team-members-profile-desktop")

function addProfileMobile([img, name, role]) {
   let code = `
    <div class="profile">
    <div class="profile-img">
        <img src="${img}"
            alt="picture of ${name}">
    </div>
    <div class="profile-text">
        <p class="profile-text-name">${name}</p>
        <p class="profile-text-role">${role}</p>
    </div>
</div>`;
   profileMobile.innerHTML += code;
}

function addProfileDesktop([img, name, role]) {
   let code = `
    <div class="profile">
    <div class="profile-img">
        <img src="${img}"
            alt="picture of ${name}">
    </div>
    <div class="profile-text">
        <p class="profile-text-name">${name}</p>
        <p class="profile-text-role">${role}</p>
    </div>
</div>`;
   profileDesktop.innerHTML += code;
}

let profile1 = [
   "../../media/our history/Chris-Guess.jpg",
   "Chris Guess",
   "Lead 3D Artist"
];
addProfileMobile(profile1);
let profile2 = [
   "../../media/our history/Christian-Rowe.png",
   "Christian Rowe",
   "Co-Founder, Chief Growth Officer"
]
addProfileMobile(profile2);

let profile3 = [
  "../../media/our history/Dan-Lee.png",
   "Dan Lee",
   "Product Designer"
]
addProfileMobile(profile3);

let profile4 = [
  "../../media/our history/Daniel-Decker.jpeg",
   "Daniel Decker",
   "Customer Success Manager"
]
addProfileMobile(profile4)

let profile5 = [
  "../../media/our history/Dylan-Walch.jpeg",
   "Dylan Walch",
   "Co-Founder, Lead VR Developer"
]

let profile6 = [
  "../../media/our history/Estefanía-(Stefy)-Padilla.jpeg",
   "Estefanía (Stefy) Padilla",
   "Spanish Guide"
]

let profile7 = [
  "../../media/our history/Jacob-Furnari.png",
   "Jacob Furnari",
   "Co-Founder, Chief Product Officer"
]

let profile8 = [
  "../../media/our history/Jung-Woo-Lee.png",
   "Jung Woo Lee",
   "Lead Software Engineer"
]

let profile9 = [
  "../../media/our history/Kazunobu-Sawada.png",
   "Kazunobu Sawada",
   "Japan Director"
]

let profile10 = [
  "../../media/our history/Manuel-Meza.jpg",
   "Manuel Meza",
   "Spanish Guide"
]

let profile11 = [
  "../../media/our history/Miranda-Novash.jpeg",
   "Miranda Novash",
   "Research Writer"
]

let profile12 = [
  "../../media/our history/Misty-Wilson.png",
   "Misty Wilson",
   "Head of Education"
]

let profile13 = [
  "../../media/our history/Morgan-Hays.jpg",
   "Morgan Hays",
   "Spanish Guide"
]

let profile14 = [
  "../../media/our history/Nergiz-Kern.jpeg",
   "Nergiz Kern",
   "Head of Research"
]

let profile15 = [
  "../../media/our history/Nicholas-Zehl.jpeg",
   "Nicholas Zehl",
   "VR Developer"
]

let profile16 = [
  "../../media/our history/Quinn-Taber.png",
   "Quinn Taber",
   "Founder & CEO"
]

let profile17 = [
  "../../media/our history/Stella-Cox.jpeg",
   "Stella Cox",
   "Chief of Staff"
]

let profile18 = [
  "../../media/our history/Tricia-Thrasher.png",
   "Tricia Thrasher",
   "Research Manager"
]

let profile19 = [
   "../../media/our history/Xavier-Apostol.png",
   "Xavier Apostol",
   "VR Developer"
]

let profile20 = [
   "../../media/our history/Giacomo.jpg",
   "Giacomo Granducci",
   "Italian Guide"
]
let profile21 = [
   "../../media/our history/Karim.jpg",
   "Zouhir Karim",
   "Arabic Guide"
]
let profile22 = [
   "../../media/our history/Giada-Stracqualursi.jpeg",
   "Giada Stracqualursi",
   "Italian Guide"
]
let profile23 = [
   "../../media/our history/Salvatore-Mura.jpg",
   "Salvatore Mura",
   "Product Designer"
]
let profile24 = [
   "../../media/our history/Davide.jpg",
   "Davide Puziello",
   "Head of Education"
]
let profile25 = [
   "../../media/our history/Janmanpreet-Singh.jpg",
   "Janmanpreet Singh",
   "Chief of Staff"
]

addProfileDesktop(profile1);
addProfileDesktop(profile2);
addProfileDesktop(profile3);
addProfileDesktop(profile4);
addProfileDesktop(profile5);
addProfileDesktop(profile6);
addProfileDesktop(profile7);
addProfileDesktop(profile8);
addProfileDesktop(profile9);
addProfileDesktop(profile10);
addProfileDesktop(profile11);
addProfileDesktop(profile12);
addProfileDesktop(profile13);
addProfileDesktop(profile14);
addProfileDesktop(profile15);
addProfileDesktop(profile16);
addProfileDesktop(profile17);
addProfileDesktop(profile18);
addProfileDesktop(profile19);
addProfileDesktop(profile20); // 1
addProfileDesktop(profile21); // 2
addProfileDesktop(profile22); // 3
addProfileDesktop(profile23); // 4
addProfileDesktop(profile24); // 5
addProfileDesktop(profile25); // 6
let clickCounter = 0;
let button = document.getElementById("btn")


button.onclick = function () {
   clickCounter++;
   if (clickCounter == 1) {
      addProfileMobile(profile5);
      addProfileMobile(profile6);
      addProfileMobile(profile7);
      addProfileMobile(profile8);
   }
   if (clickCounter == 2) {
      addProfileMobile(profile9);
      addProfileMobile(profile10);
      addProfileMobile(profile11);
      addProfileMobile(profile12);
   }
   if (clickCounter == 3) {
      addProfileMobile(profile13);
      addProfileMobile(profile14);
      addProfileMobile(profile15);
      addProfileMobile(profile16);
   }
   if (clickCounter == 4) {
      addProfileMobile(profile17);
      addProfileMobile(profile18);
      addProfileMobile(profile19);

      addProfileMobile(profile20); // 1
   }
   if (clickCounter == 5) {
      addProfileMobile(profile21); // 2
      addProfileMobile(profile22); // 3
      addProfileMobile(profile23); // 4
      addProfileMobile(profile24); // 5
      addProfileMobile(profile25); // 6
      button.style.display = "none";
   }
}

