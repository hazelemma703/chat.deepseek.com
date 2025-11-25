const sendMailListener = document.getElementById("sendMail");
const alertBox = document.getElementById("send_code_feed");

const sendVerifyCode = async () => {
  const email = document.getElementById("email").value;
  if (!email) {
    alertBox.innerText = "Please enter your email first.";
    return;
  }

  await fetch(`http://localhost:8080/users/sendVerifyCode?to=${email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

sendMailListener.addEventListener("click", sendVerifyCode);
