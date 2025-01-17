const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// SELEZIONO GLI ELEMENTI NEL DOM
const teamContainer = document.getElementById("team-container");

// ITERO SU OGNI ELEMENTO DELL'ARRAY (MEMBRI DEL TEAM) E GENERO DELL'HTML
teamMembers.forEach(function (member) {
  const cardHTML = `
  <div class="col-12 col-md-6 col-lg-4 p-2">
    <div class="bg-black d-flex align-items-center">
      <img src="${member.img}" style="width: 100px; height: 100px; object-fit: cover;" class="me-3">
      <div>
        <h5 class="text-white fw-bold mb-0">${member.name.toUpperCase()}</h5>
        <p class="text-white mb-0">${member.role}</p>
        <a href="mailto:${member.email}" class="text-decoration-none">${member.email}</a>
      </div>
    </div>
  </div>
`;

  teamContainer.innerHTML += cardHTML;
});