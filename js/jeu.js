let scoreJoueur = 0;
let scoreOrdi = 0;

function jouer(choixJoueur) {
  if (scoreJoueur >= 3 || scoreOrdi >= 3) return;

  const options = ["pierre", "feuille", "ciseaux"];
  const emojis = { pierre: "🪨", feuille: "📄", ciseaux: "✂️" };
  const choixOrdi = options[Math.floor(Math.random() * 3)];

  document.getElementById("choix").textContent =
    `Tu as choisi ${emojis[choixJoueur]} | Ordi : ${emojis[choixOrdi]}`;

  let resultat = "";
  if (choixJoueur === choixOrdi) {
    resultat = "🤝 Égalité !";
  } else if (
    (choixJoueur === "pierre" && choixOrdi === "ciseaux") ||
    (choixJoueur === "feuille" && choixOrdi === "pierre") ||
    (choixJoueur === "ciseaux" && choixOrdi === "feuille")
  ) {
    scoreJoueur++;
    resultat = "✅ Tu gagnes ce tour !";
  } else {
    scoreOrdi++;
    resultat = "❌ L'ordinateur gagne ce tour.";
  }

  document.getElementById("resultat").textContent = resultat;
  document.getElementById("score").textContent =
    `Score – Toi: ${scoreJoueur} | Ordi: ${scoreOrdi}`;

  if (scoreJoueur === 3 || scoreOrdi === 3) {
    const final =
      scoreJoueur === 3 ? "🏆 Tu as gagné la partie !" : "💻 L'ordinateur a gagné...";
    document.getElementById("resultat").textContent = final;
    document.getElementById("rejouer").style.display = "inline-block";
  }
}

function rejouer() {
  scoreJoueur = 0;
  scoreOrdi = 0;
  document.getElementById("choix").textContent = "";
  document.getElementById("resultat").textContent = "";
  document.getElementById("score").textContent = "Score – Toi: 0 | Ordi: 0";
  document.getElementById("rejouer").style.display = "none";
}
