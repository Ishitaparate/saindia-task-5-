const audio = document.getElementById("audio");
let currentSongIndex = 0;

// 🎵 Song List
  const songs = [
  { name: "Beat", artist: "Pixabay Artist", file: "songs/no-copyright-music-2-398304 (1).mp3" },
  { name: "Healing", artist: "Pixabay Artist", file: "songs/no-copyright-music-385474.mp3" },
  { name: "Soothing", artist: "Pixabay Artist", file: "songs/no-copyright-music-391988.mp3" },
  { name: "DJ", artist: "Pixabay Artist", file: "songs/no-copyright-music-travel-398305.mp3" }
];


// Load and play song
function loadSong(index) {
  audio.src = songs[index].file;
  audio.play().catch(() => {
    console.log("Click a card to start playback.");
  });
  highlightCurrentCard(index);
}

// Highlight currently playing card
function highlightCurrentCard(index) {
  document.querySelectorAll(".card").forEach(card => card.classList.remove("playing"));
  document.querySelector(`.card[data-index='${index}']`).classList.add("playing");
}

// Click on card to play
document.querySelectorAll(".card").forEach((card, index) => {
  card.addEventListener("click", () => {
    currentSongIndex = index;
    loadSong(currentSongIndex);
  });
});

// Search filter
const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", function () {
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll(".card").forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const artist = card.querySelector("p").textContent.toLowerCase();
    card.style.display = (title.includes(query) || artist.includes(query)) ? "block" : "none";
  });
});

// Initialize without autoplay
highlightCurrentCard(currentSongIndex);
