const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation (replace with your actual logic)
    if (username === 'Video' && password === 'vdo') {
        
        window.location.href = "https://moralweb.github.io/moralweb/secret.html";
    } 
    if (username === 'Photo' && password === 'pic') {
        
        window.location.href ="https://moralweb.github.io/moralweb/secret.html";
    } if (username === 'Document' && password === 'doc') {
        
        window.location.href = "https://moralweb.github.io/moralweb/secret.html";
    } else {
        message.textContent = 'churi korte aiso beda ?';
    }
});
