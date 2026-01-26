// Convertis la date au format YYYY-MM-DD
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

// met la date de fin à demain
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// convertis la date au format YYYY-MM-DD de demain
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

// Empêche de choisir une date de fin antérieure à la date de début
start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

// Empêche de choisir une date de début postérieure à la date de fin
end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

// Calcule le total en fonction du nombre de nuits
const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value),
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  totalPerNight.textContent = diffDays * nightPrice.textContent;
};

// Écoute les changements sur les dates pour recalculer le total
start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);
bookingCalc();
