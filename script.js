document.getElementById('greetBtn').addEventListener('click', function() {
    alert('أهلاً وسهلاً بك في صفحتي!');
});


document.getElementById('greetBtn').addEventListener('click', function() {
    alert('أهلاً وسهلاً بك في صفحتي!');
});

const darkModeBtn = document.getElementById('darkModeBtn');
const profileCard = document.querySelector('.profile-card');

darkModeBtn.addEventListener('click', function() {
    profileCard.classList.toggle('dark-mode');
    
    if (profileCard.classList.contains('dark-mode')) {
        darkModeBtn.textContent = '☀️ الوضع العادي';
    } else {
        darkModeBtn.textContent = '🌙 الوضع الليلي';
    }
});
