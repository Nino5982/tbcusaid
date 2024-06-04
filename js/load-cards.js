document.addEventListener("DOMContentLoaded", function () {
  const coursesData = [
    {
      title: "iOS Development",
      date: "გაიხსნება 24 ივნისს",
      imgSrc: "card1.jpg",
    },
    { title: "React", date: "გაიხსნება 24 ივნისს", imgSrc: "card2.jpg" },
    {
      title: "intro to Python",
      date: "გაიხსნება 24 ივნისს",
      imgSrc: "card3.jpg",
    },
    {
      title: "Advanced Python",
      date: "გაიხსნება 24 ივნისს",
      imgSrc: "card4.jpg",
    },
    { title: "Advanced Cybersecurity", date: "10 ივნისს", imgSrc: "card5.jpg" },
    { title: "Blockchain", date: "გაიხსნება 10 ივნისს", imgSrc: "card6.jpg" },
    { title: "DevOps", date: "გაიხსნება 30 ივნისს", imgSrc: "card7.jpg" },
    {
      title: "Information Security Govermance",
      date: "გაიხსნება 10 ივნისს",
      imgSrc: "card8.jpg",
    },
    {
      title: "ToT - Training of Trainers",
      date: "დასრულებულია",
      imgSrc: "card9.jpg",
    },
  ];

  const cardsContainer = document.getElementById("cards-container");

  coursesData.forEach((course) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <div class="card__img">
                <img src="./images/${course.imgSrc}" alt="${course.title}">
            </div>
            
                <div class="card__title">
                    <h3>${course.title}</h3>
                    <span>რეგისტრაცია ${course.date}</span>
                </div>
                <div class="card__btn">
                    <a class="card__link" href="#">კურსის დეტალები</a>
                </div>
            
        `;

    cardsContainer.appendChild(card);
  });
});
