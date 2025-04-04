const cardContainer = document.getElementById("cardContainer");
const initialCards = [
    { title: "Card 1", description: "This is the first card." },
    { title: "Card 2", description: "This is the second card." },
    { title: "Card 3", description: "This is the third card." },
    { title: "Card 4", description: "This is the fourth card." },
    { title: "Card 5", description: "This is the fifth card." },
    { title: "Card 6", description: "This is the sixth card." },
    { title: "Card 7", description: "This is the seventh card." }
];

function createCard(title, description) {
    return `<div class="card text-center">
        <div class="stars text-3xl justify-center">
            ★★★★★
        </div>
        <h2 class="text-xl font-bold">${title}</h2>
        <p class="text-lg text-gray-600">${description}</p>
    </div>`;
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