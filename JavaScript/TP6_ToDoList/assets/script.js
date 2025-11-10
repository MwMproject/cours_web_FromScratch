const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = []; // tableau pour stocker les tâches

// Enregistre les tâches dans le localStorage
function saveTodos() {
  localStorage.setItem("maboite", JSON.stringify(todos));
}

// Charge les tâches depuis le localStorage
function loadTodos() {
  const data = localStorage.getItem("maboite");
  if (data) {
    todos = JSON.parse(data);
    todos.forEach((todo) => renderTodo(todo));
  }
}

// Affiche la tâche dans le DOM, crée une <li> et ajoute le texte
function renderTodo(todo) {
  const li = document.createElement("li");
  li.textContent = todo.text;

  // Ajoute la classe si déjà cochée
  if (todo.done) li.classList.add("checked");

  let clickCount = 0; // pour détecter si clic simple ou double (double = supprimer)

  // L'événement au clic sur chaque tâche
  li.addEventListener("click", () => {
    clickCount++; // Incrémente à chaque clic
    if (clickCount === 1) {
      setTimeout(() => {
        // Attente pour différencier simple et double clic
        if (clickCount === 1) {
          // Si un clic = coche/décoche
          todo.done = !todo.done;
          li.classList.toggle("checked"); // Met à jour l'apparence
          saveTodos();
        } else if (clickCount === 2) {
          // Si 2 clics = supprimer la tâche
          todos = todos.filter((t) => t !== todo); // Enlève la tâche du tableau...
          li.remove(); // ...et du DOM
          saveTodos();
        }
        clickCount = 0; // Remise du compteur à 0
      }, 250);
    }
  });

  list.appendChild(li);
}

// L'événement du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Empêche la page de recharger
  const text = input.value.trim(); // Enlève les espaces inutiles
  if (text === "") return; // Si le champ est vide, ne rien faire

  const newTodo = { text, done: false }; // Création de l'objet tâche...
  todos.push(newTodo); // ... l'ajoute au tableau...
  renderTodo(newTodo); // ... et l'affiche
  saveTodos();
  input.value = ""; // Vide le champ
});

// Au chargement de la page, on charge les tâches
window.addEventListener("load", loadTodos);
