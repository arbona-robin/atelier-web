const fs = require("fs");
const path = require("path");

// Scan realisation/ for .html files
const realisationDir = path.join(__dirname, "realisation");
const files = fs.readdirSync(realisationDir).filter((f) => f.endsWith(".html"));

// Extract first name from filename (robin.html → "Robin")
const students = files.map((f) => {
  const name = path.basename(f, ".html");
  return {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    url: `realisation/${f}`,
  };
});

// Generate student cards
const studentCards = students
  .map(
    (s) => `
        <a href="${s.url}" class="card-link">
          <div class="card student-card">
            <span class="student-emoji">👤</span>
            <span class="student-name">${s.name}</span>
          </div>
        </a>`
  )
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Atelier Web — Mon premier site</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>

    <!-- Hero -->
    <section class="hero">
      <span class="hero-tag">&lt;h1&gt;</span>
      <span class="hero-tag">&lt;div&gt;</span>
      <span class="hero-tag">&lt;style&gt;</span>
      <span class="hero-tag">&lt;/body&gt;</span>
      <span class="hero-tag">&lt;img /&gt;</span>
      <span class="hero-tag">&lt;a&gt;</span>
      <div class="hero-glow"></div>
      <div class="hero-content">
        <h1>Atelier découverte programmation Web</h1>
        <div class="hero-title">Mon premier site</div>
        <p class="subtitle">2h de live-coding pour créer ta première page web de A à Z</p>
      </div>
    </section>

    <div class="container">

      <!-- Fiche triche -->
      <h2><span>📋</span> Fiche triche</h2>
      <a href="fiche-triche.html" class="cheat-sheet-link">
        <span class="cheat-sheet-btn">📋 Ouvrir la fiche triche HTML & CSS</span>
      </a>

      <!-- Ressources -->
      <h2><span>🧰</span> Ressources pour l'atelier</h2>
      <div class="grid">
        <a href="https://fonts.google.com" target="_blank" class="card-link">
          <div class="card">
            <span class="card-icon">🔤</span>
            <div class="card-title">Google Fonts ↗</div>
            <div class="card-desc">Choisir une police</div>
          </div>
        </a>
        <a href="https://htmlcolorcodes.com/color-picker/" target="_blank" class="card-link">
          <div class="card">
            <span class="card-icon">🎨</span>
            <div class="card-title">Color Picker ↗</div>
            <div class="card-desc">Choisir une couleur</div>
          </div>
        </a>
        <a href="https://coolors.co" target="_blank" class="card-link">
          <div class="card">
            <span class="card-icon">🎭</span>
            <div class="card-title">Coolors ↗</div>
            <div class="card-desc">Générateur de palettes</div>
          </div>
        </a>
        <a href="https://unsplash.com" target="_blank" class="card-link">
          <div class="card">
            <span class="card-icon">📷</span>
            <div class="card-title">Unsplash ↗</div>
            <div class="card-desc">Images libres de droit</div>
          </div>
        </a>
        <a href="https://emojipedia.org" target="_blank" class="card-link">
          <div class="card">
            <span class="card-icon">😎</span>
            <div class="card-title">Emojipedia ↗</div>
            <div class="card-desc">Copier des emojis</div>
          </div>
        </a>
      </div>

      <!-- Réalisations -->
      <h2><span>🚀</span> Réalisations</h2>
      ${students.length > 0 ? `<div class="grid">${studentCards}\n      </div>` : '<p class="empty-msg">Aucune réalisation pour le moment.</p>'}

      <!-- Aller plus loin -->
      <h2><span>📚</span> Aller plus loin</h2>
      <div class="grid">
        <a href="https://codepen.io" target="_blank" class="card-link">
          <div class="card">
            <span class="card-icon">✏️</span>
            <div class="card-title">CodePen ↗</div>
            <div class="card-desc">Éditeur en ligne pour continuer à coder</div>
          </div>
        </a>
        <a href="https://developer.mozilla.org/fr/" target="_blank" class="card-link">
          <div class="card">
            <span class="card-icon">📖</span>
            <div class="card-title">MDN Web Docs ↗</div>
            <div class="card-desc">Documentation de référence</div>
          </div>
        </a>
        <a href="https://www.freecodecamp.org" target="_blank" class="card-link">
          <div class="card">
            <span class="card-icon">🎓</span>
            <div class="card-title">freeCodeCamp ↗</div>
            <div class="card-desc">Cours gratuits pour apprendre</div>
          </div>
        </a>
      </div>

      <p class="footer">
        Bon atelier ! Le meilleur moyen d'apprendre, c'est d'essayer des trucs 🚀
      </p>

    </div>
  </body>
</html>`;

fs.writeFileSync(path.join(__dirname, "index.html"), html);
console.log(
  `index.html generated with ${students.length} student(s): ${students.map((s) => s.name).join(", ") || "(none)"}`
);
