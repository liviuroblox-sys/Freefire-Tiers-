const players = [
  {
    name: "ExamplePlayer",
    uid: "123456789",
    region: "EU",
    rank: "Heroic",
    tiers: ["HT1", "LT1", "HT2", "HT2", "HT3"]
  },
  {
    name: "ProPlayer",
    uid: "987654321",
    region: "EU",
    rank: "Grandmaster",
    tiers: ["LT1", "HT1", "HT2", "HT3", "HT3"]
  }
];

const playersContainer = document.getElementById("players");
const addButton = document.getElementById("addButton");
const addForm = document.getElementById("addForm");
const savePlayer = document.getElementById("savePlayer");

function renderPlayers() {
  playersContainer.innerHTML = "";

  players.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "player-card";

    card.innerHTML = `
      <div class="player-info">
        <div class="position">#${index + 1}</div>

        <div class="avatar">👤</div>

        <div>
          <div class="player-name">${player.name}</div>
          <div class="uid">UID: ${player.uid}</div>
          <div class="region">${player.region} • ${player.rank}</div>
        </div>
      </div>

      <div class="tiers">
        ${player.tiers.map(tier => `
          <div class="tier">${tier}</div>
        `).join("")}
      </div>
    `;

    playersContainer.appendChild(card);
  });
}

addButton.addEventListener("click", () => {
  addForm.classList.toggle("hidden");
});

savePlayer.addEventListener("click", () => {
  const name = document.getElementById("playerName").value;
  const uid = document.getElementById("playerUID").value;
  const region = document.getElementById("playerRegion").value;
  const rank = document.getElementById("playerRank").value;

  if (!name || !uid) {
    alert("Bitte Name und UID eingeben.");
    return;
  }

  players.push({
    name: name,
    uid: uid,
    region: region,
    rank: rank,
    tiers: ["HT1", "LT1", "HT2", "HT3"]
  });

  document.getElementById("playerName").value = "";
  document.getElementById("playerUID").value = "";

  addForm.classList.add("hidden");

  renderPlayers();
});

renderPlayers();
