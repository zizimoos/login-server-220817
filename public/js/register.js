const id = document.getElementById("id");
const pw = document.getElementById("pw");
const confirmPassword = document.getElementById("confirm-pw");
const userName = document.getElementById("user-name");
const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!id.value) {
    alert("아이디를 입력해주세요.");
  }
  if (pw.value !== confirmPassword.value) {
    alert("비밀번호가 일치하지 않습니다.");
  }
  const req = {
    id: id.value,
    pw: pw.value,
    userName: userName.value,
  };
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.result === "success") {
        window.location.href = "/login";
      } else {
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
      }
    })
    .catch((error) => console.error(new Error(error)));
});
