const form = document.querySelector("form");
const confirmation = document.querySelector("#confirmation");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const ground = document.querySelector("#ground").value;
  const time = document.querySelector("#time").value;

  if (!name || !email || !phone || !ground || !time) {
    confirmation.innerHTML = "<p class='error'>Please fill out all fields.</p>";
    return;
  }

  confirmation.innerHTML = `
    <p>Your booking is confirmed!</p>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Ground: ${ground}</p>
    <p>Time: ${time}</p>
  `;
});
