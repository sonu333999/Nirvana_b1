function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  // Simple check (for demo purposes)
  if (username === 'admin' && password === '1234') {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
  } else {
    alert('Invalid credentials! Try username: admin and password: 1234');
  }
}

function logout() {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('login-box').style.display = 'block';
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}
