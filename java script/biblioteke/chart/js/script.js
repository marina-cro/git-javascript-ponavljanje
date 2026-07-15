const ctx = document.getElementById("graf");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Nedovoljan", "Dovoljan", "Dobar", "Vrlo dobar", "Odličan"],
    datasets: [
      {
        label: "Broj učenika",
        data: [2, 5, 8, 10, 4]
      }
    ]
  }
});