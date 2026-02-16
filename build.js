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

// Generate student cards or empty message
const realisations =
  students.length > 0
    ? `<div class="grid">\n${students
        .map(
          (s) =>
            `        <a href="${s.url}" class="card-link">
          <div class="card student-card">
            <span class="student-emoji">👤</span>
            <span class="student-name">${s.name}</span>
          </div>
        </a>`,
        )
        .join("\n")}\n      </div>`
    : '<p class="empty-msg">Aucune réalisation pour le moment.</p>';

// Read template, inject realisations, write index.html
const template = fs.readFileSync(path.join(__dirname, "template.html"), "utf-8");
const html = template.replace("{{REALISATIONS}}", realisations);

fs.writeFileSync(path.join(__dirname, "index.html"), html);
console.log(
  `index.html generated with ${students.length} student(s): ${students.map((s) => s.name).join(", ") || "(none)"}`,
);
