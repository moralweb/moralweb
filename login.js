const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation (replace with your actual logic)
    if (username === 'Video' && password === 'vdo') {
        
        window.location.href = "https://sites.google.com/view/sadik-docs/home?authuser=0";
    } 
    if (username === 'Photo' && password === 'pic') {
        
        window.location.href ="https://drive.google.com/drive/folders/1uLPvKBihsDUuErU_b8B9GziKIy9t7Q-9?usp=drive_link";
    } if (username === 'Document' && password === 'doc') {
        
        window.location.href = "https://sites.google.com/view/sadik-docs/documents?authuser=0";
    } else {
        message.textContent = 'churi korte aiso beda ?';
    }
});
