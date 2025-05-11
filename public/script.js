document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, password }),
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      window.location.href = 'dashboard.html';
    } else {
      alert(data.error);
    }
  } catch (error) {
    alert('Erro ao fazer login');
  }
});

document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const login = document.getElementById('login').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, login, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      window.location.href = 'dashboard.html';
    } else {
      alert(data.error);
    }
  } catch (error) {
    alert('Erro ao cadastrar');
  }
});