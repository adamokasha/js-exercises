document.addEventListener("DOMContentLoaded", () => {
  // Changed color of button to green
  // Changed text of button to 'Clicked'
  document.addEventListener("click", () => {
    const btn = document.getElementsByClassName("button")[0]
    btn.textContent = "Clicked"
    btn.style.backgroundColor = "green"
  })
});
