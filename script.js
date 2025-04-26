function checkCode() {
  const input = document.getElementById('codeInput').value;
  const correctCode = "310723"; // Your chosen code

  if (input === correctCode) {
    window.location.href = "home.html";
  } else {
    document.getElementById('error').style.display = 'block';
  }
}