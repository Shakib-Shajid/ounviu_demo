const cardContainer = document.getElementById("cardContainer");
const initialCards = [
    { title: " James M.", description: "\"Ounviu helped me establish a daily routine for better mental and physical health. It’s simple, quick, and really motivates me!\"" },
    { title: " Laura Davies", description: "\"I love how easy it is to find healthy meal ideas and quick exercise tips. Ounviu keeps me on track every day.\"" },
    { title: " Robert Taylor", description: "\"The community and expert insights on Ounviu are fantastic. I’ve learned practical ways to reduce stress and stay active!\"" },
    { title: " James M.", description: "\"Ounviu helped me establish a daily routine for better mental and physical health. It’s simple, quick, and really motivates me!\"" },
    { title: " Laura Davies", description: "\"I love how easy it is to find healthy meal ideas and quick exercise tips. Ounviu keeps me on track every day.\"" },
    { title: " Robert Taylor", description: "\"The community and expert insights on Ounviu are fantastic. I’ve learned practical ways to reduce stress and stay active!\"" },
    { title: " James M.", description: "\"Ounviu helped me establish a daily routine for better mental and physical health. It’s simple, quick, and really motivates me!\"" }
];

function createCard(title, description) {
    return `
    <div class="card text-center h-68 p-4 flex flex-col justify-start overflow-hidden">
        <div class="stars text-4xl mb-2 justify-center">★★★★★</div>
        <h2 class="text-xl font-bold mb-2">${title}</h2>
        <p class="text-lg text-gray-600 overflow-auto flex-grow">${description}</p>
    </div>
    `;
}

function loadMoreCards() {
    initialCards.forEach(card => {
        cardContainer.innerHTML += createCard(card.title, card.description);
    });
}

function scrollCards(direction) {
    const cardWidth = cardContainer.querySelector(".card").offsetWidth + 16; // card width + gap
    cardContainer.scrollBy({
        left: direction * cardWidth,
        behavior: "smooth"
    });
}

// Load the initial set of cards
loadMoreCards();

// Infinite scroll functionality when reaching the end
cardContainer.addEventListener("scroll", () => {
    if (cardContainer.scrollLeft + cardContainer.clientWidth >= cardContainer.scrollWidth) {
        loadMoreCards();
    }
});