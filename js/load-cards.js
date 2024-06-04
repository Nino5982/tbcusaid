document.addEventListener("DOMContentLoaded", function () {
  const coursesData = [
    { title: "iOS Development", date: "24 ივნისს", imgSrc: "card1.jpg" },
    { title: "Android Development", date: "25 ივნისს", imgSrc: "card2.jpg" },
    { title: "Web Development", date: "26 ივნისს", imgSrc: "card3.jpg" },
    { title: "Data Science", date: "27 ივნისს", imgSrc: "card4.jpg" },
    { title: "Machine Learning", date: "28 ივნისს", imgSrc: "card5.jpg" },
    { title: "Cyber Security", date: "29 ივნისს", imgSrc: "card6.jpg" },
    { title: "Cloud Computing", date: "30 ივნისს", imgSrc: "card7.jpg" },
    { title: "UI/UX Design", date: "1 ივლისს", imgSrc: "card8.jpg" },
    { title: "Blockchain", date: "2 ივლისს", imgSrc: "card9.jpg" },
  ];

  const cardsContainer = document.getElementById("cards-container");

  coursesData.forEach((course) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <div class="card__img">
                <img src="./images/${course.imgSrc}" alt="${course.title}">
            </div>
            <div class="card__content">
                <div class="card__title">
                    <h3>${course.title}</h3>
                    <span>რეგისტრაცია გაიხსნება ${course.date}</span>
                </div>
                <div class="card__btn">
                    <a class="card__link" href="#">კურსის დეტალები</a>
                </div>
            </div>
        `;

    cardsContainer.appendChild(card);
  });
});
