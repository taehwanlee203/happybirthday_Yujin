const gifts = [
    {
        name: 'AirPods Pro(2세대)',
        image: 'images/airpods.png'
    },
    {
        name: '가방',
        image: 'images/bag.jpg'
    },
    {
        name: '명품 옷',
        image: 'images/cardigan.jpg'
    }
];

document.querySelectorAll('.gift-box').forEach(box => {
    box.addEventListener('click', function() {
        if (this.classList.contains('opened')) return;

        const randomGift = gifts[Math.floor(Math.random() * gifts.length)];

        this.src = 'images/open_gift.png'; // 열려있는 선물 상자 이미지
        this.classList.add('opened');

        document.getElementById('gift-text').textContent = randomGift.name;
        document.getElementById('gift-image').src = randomGift.image;
        document.getElementById('gift-message').classList.remove('hidden');
        document.getElementById('reset-btn').classList.remove('hidden');
    });
});

document.getElementById('reset-btn').addEventListener('click', function() {
    document.querySelectorAll('.gift-box').forEach(box => {
        box.src = 'images/gift.png'; // 닫혀있는 선물 상자 이미지
        box.classList.remove('opened');
    });

    document.getElementById('gift-text').textContent = '';
    document.getElementById('gift-image').src = '';
    document.getElementById('gift-message').classList.add('hidden');
    document.getElementById('reset-btn').classList.add('hidden');
});
