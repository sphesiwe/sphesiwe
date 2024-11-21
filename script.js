const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Add event listeners for toggling the 'activate' class
registerBtn.addEventListener('click', () => {
    container.classList.add('activate'); // Use 'activate' as per CSS
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('activate'); // Use 'activate' as per CSS
});
