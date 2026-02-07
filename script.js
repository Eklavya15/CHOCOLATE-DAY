const themes = {
    romantic: {
        primary: '#FF1493',
        secondary: '#FF69B4',
        accent: '#FFB6C1'
    },
    magical: {
        primary: '#9400D3',
        secondary: '#8A2BE2',
        accent: '#9370DB'
    },
    sunset: {
        primary: '#FF4500',
        secondary: '#FF6347',
        accent: '#FFA07A'
    }
};

const box = document.querySelector('.chocolate-box');
const message = document.querySelector('.message');
const banner = document.querySelector('.banner');

box.addEventListener('click', () => {
    box.classList.add('open');
    banner.classList.add('hidden');

    setTimeout(() => {
        message.classList.add('show');
        startFallingSequence();
    }, 900);
});

function changeTheme(name) {
    const t = themes[name];
    document.documentElement.style.setProperty('--primary-color', t.primary);
    document.documentElement.style.setProperty('--secondary-color', t.secondary);
    document.documentElement.style.setProperty('--accent-color', t.accent);
}

function createFallingItem() {
    const item = document.createElement('div');
    item.className = 'falling-item';
    const icons = ['🍫','❤️','✨','💝','💖'];
    item.textContent = icons[Math.floor(Math.random() * icons.length)];
    item.style.left = Math.random() * 100 + 'vw';
    item.style.fontSize = Math.random() * 20 + 15 + 'px';
    item.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(item);
    item.addEventListener('animationend', () => item.remove());
}

function startFallingSequence() {
    let count = 0;
    const interval = setInterval(() => {
        createFallingItem();
        count++;
        if (count > 40) clearInterval(interval);
    }, 120);
}
