// You can add some interactivity here if needed
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded!");
  });
  
// Terminal Typing Animation
const terminal = document.getElementById('terminal');
const lines = [
  { type: "cmd", text: "whoami" },
  { type: "output", text: "I'm Hemanth — a Java Developer and Tech Learner." },
  { type: "cmd", text: "skills" },
  { type: "output", text: "Java, Spring Boot, MySQL, HTML, CSS, JS,Github" },
  { type: "cmd", text: "projects" },
  { type: "output", text: "[1] Todo App | [2] ML Model | [3] Portfolio Website" },
  { type: "cmd", text: "contact" },
  { type: "output", text: "📧 keepudihemanth6329@example.com | 🔗 linkedin.com/in/hemanth-keepudi" }
];

let i = 0;

function typeLine(line, delay = 10) {
  return new Promise(resolve => {
    const el = document.createElement('div');
    el.classList.add('line');
    if (line.type === "cmd") el.classList.add('prompt');
    terminal.appendChild(el);

    let j = 0;
    const interval = setInterval(() => {
      el.textContent += line.text[j];
      j++;
      if (j >= line.text.length) {
        clearInterval(interval);
        resolve();
      }
    }, delay);
  });
}

async function runTerminal() {
  for (const line of lines) {
    await typeLine(line);
    await new Promise(r => setTimeout(r, 500));
  }
  const cursor = document.createElement('span');
  cursor.classList.add('blinking-cursor');
  terminal.appendChild(cursor);
}

runTerminal();
