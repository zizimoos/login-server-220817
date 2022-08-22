const id = document.getElementById("id");
const pw = document.getElementById("pw");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const req = {
    id: id.value,
    pw: pw.value,
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.result === "success") {
        window.location.href = "/";
      } else {
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
      }
    });
});
