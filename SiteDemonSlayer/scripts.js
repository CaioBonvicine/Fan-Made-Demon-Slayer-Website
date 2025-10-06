document.addEventListener("DOMContentLoaded", () => {
  const characterStats = {
    "Muzan Kibutsuji": { "Força": 100, "Velocidade": 100, "Durabilidade": 100, "Stamina": 100, "QI": 100 },
    "Akaza": { "Força": 94, "Velocidade": 85, "Durabilidade": 87, "Stamina": 92, "QI": 93 },
    "Kokushibu": { "Força": 91, "Velocidade": 92, "Durabilidade": 89, "Stamina": 93, "QI": 96 },
    "Douma": { "Força": 90, "Velocidade": 89, "Durabilidade": 88, "Stamina": 89, "QI": 82 },
    "Hantengu": { "Força": 84, "Velocidade": 80, "Durabilidade": 82, "Stamina": 85, "QI": 78 },
    "Gyokko": { "Força": 73, "Velocidade": 77, "Durabilidade": 75, "Stamina": 68, "QI": 57 },
    "Gyutaro": { "Força": 67, "Velocidade": 73, "Durabilidade": 68, "Stamina": 79, "QI": 53 }
  };

  const characterName = document.querySelector("h1")?.textContent?.trim();
  if (!characterName || !characterStats[characterName]) return;

  const stats = characterStats[characterName];

  document.querySelectorAll(".stat").forEach(statEl => {
    const label = statEl.querySelector("span").textContent.trim();
    const fill = statEl.querySelector(".fill");
    const percentageText = statEl.querySelector(".percentage");
    const target = stats[label] ?? 0;

    fill.style.width = "0%";
    let current = 0;
    const incriment = 0.7;

    const step = () => {
      if (current < target) {
        current += 1;
        fill.style.width = current + "%";
        percentageText.textContent = current + "%";
        requestAnimationFrame(step);
      } else {
        fill.style.width = target + "%";
        percentageText.style.display = "block";
        percentageText.textContent = target + "%";
      }
    };

    requestAnimationFrame(step);
  });
});
