const sign_up = document.getElementById("sign_up");

sign_up.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm_password").value;
  const code = document.getElementById("code").value;

  if (password !== confirm_password) return alert("Passwords do not match");
  const res = await fetch(
    "https://datacrawler-production.up.railway.app//users/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, code }),
    }
  );

  if (res.status === 200) {
    // Signup successful, redirect to chat page
    window.location.href = "https://datacrawler-production.up.railway.app/chat";
  } else {
    window.location.href =
      "https://datacrawler-production.up.railway.app/sign_up";
  }

  alert(`Email: ${email}\nPassword: ${password}`);
});
