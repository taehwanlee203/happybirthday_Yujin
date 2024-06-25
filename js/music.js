document.addEventListener('DOMContentLoaded', function () {
    // DOM elements
    const playSongBtn = document.getElementById('play-song-btn');
    const prevLyric = document.getElementById('prev-lyric');
    const currentLyric = document.getElementById('current-lyric');
    const nextLyric = document.getElementById('next-lyric');
    const audioPlayer = document.getElementById('birthday-song');
    const lyricsContainer = document.getElementById('lyrics');

    // Song lyrics with timestamps
    const songLyrics = [
        { time: 9, text: "이슬비가 내리는 오늘은" },
        { time: 14, text: "사랑하는 그대의 생일날" },
        { time: 19, text: "온종일 난 그대를 생각하면서" },
        { time: 23, text: "무엇을 할까 고민했죠" },
        { time: 28, text: "난 가까운 책방에 들러서" },
        { time: 32, text: "예쁜 시집에 내 맘 담았죠" },
        { time: 37, text: "그 다음엔 근처 꽃집으로 가서" },
        { time: 42, text: "빨간 장미 한 송일 샀죠" },
        { time: 46, text: "내려오는 비를 맞으며" },
        { time: 50, text: "그대에게 가는 길 너무 상쾌해" },
        { time: 55, text: "품 속에는 장미 한 송이" },
        { time: 59, text: "책 한 권과 그댈 위한 깊은 내 사랑" },
        { time: 65, text: "아름다운 그대를 만난 건" },
        { time: 70, text: "하느님께 감사드릴 우연" },
        { time: 74, text: "작은 내 맘 알아주는 그대가 있기에" },
        { time: 79, text: "이 세상이 난 행복해" },
        { time: 83, text: "Lalalala lala" },
        { time: 89, text: "Durudu dururu dudu" },
        { time: 103, text: "난 가까운 책방에 들러서" },
        { time: 106, text: "예쁜 시집에 내 맘 담았죠" },
        { time: 112, text: "그 다음엔 근처 꽃집으로 가서" },
        { time: 116, text: "빨간 장미 한 송일 샀죠" },
        { time: 120, text: "내려오는 비를 맞으며" },
        { time: 125, text: "그대에게 가는 길 너무 상쾌해" },
        { time: 129, text: "품 속에는 장미 한 송이" },
        { time: 133, text: "책 한 권과 그댈 위한 깊은 내 사랑" },
        { time: 140, text: "아름다운 그대를 만난 건" },
        { time: 144, text: "하느님께 감사드릴 우연" },
        { time: 149, text: "작은 내 맘 알아주는 그대가 있기에" },
        { time: 153, text: "이 세상이 난 행복해" },
        { time: 158, text: "너무너무나 행복해" },
        { time: 165, text: "Happy birthday to you!" }
    ];

    let isPlaying = false;
    let currentLyricIndex = 0;
    let prevLyricTimeout;

    // Function to toggle play/pause
    playSongBtn.addEventListener('click', function () {
        if (!isPlaying) {
            audioPlayer.play();
            isPlaying = true;
            playSongBtn.textContent = '노래 멈추기';
            lyricsContainer.classList.remove('hidden');
        } else {
            audioPlayer.pause();
            isPlaying = false;
            playSongBtn.textContent = '노래 듣기';
            lyricsContainer.classList.add('hidden');
        }
    });

    // Function to display lyrics while playing
    audioPlayer.addEventListener('timeupdate', function () {
        const currentTime = audioPlayer.currentTime;

        // Check if we need to update the lyrics
        if (currentLyricIndex < songLyrics.length && currentTime >= songLyrics[currentLyricIndex].time) {
            // Set previous lyric and clear it after a short delay
            prevLyric.textContent = currentLyric.textContent;
            clearTimeout(prevLyricTimeout);
            prevLyricTimeout = setTimeout(() => {
                prevLyric.textContent = '';
            });

            // Update current and next lyrics
            currentLyric.textContent = songLyrics[currentLyricIndex].text;
            const nextIndex = currentLyricIndex + 1;
            nextLyric.textContent = nextIndex < songLyrics.length ? songLyrics[nextIndex].text : '';

            currentLyricIndex++;
        }
    });

    // Reset the lyrics and index when the song ends
    audioPlayer.addEventListener('ended', function () {
        currentLyricIndex = 0;
        prevLyric.textContent = "";
        currentLyric.textContent = "";
        nextLyric.textContent = "";
        playSongBtn.textContent = '노래 듣기';
        isPlaying = false;
        lyricsContainer.classList.add('hidden');
    });

    // Reset the lyrics and index when the song is paused and restarted
    audioPlayer.addEventListener('pause', function () {
        currentLyricIndex = 0;
        prevLyric.textContent = "";
        currentLyric.textContent = "";
        nextLyric.textContent = "";
    });

    // Background image change functionality
    const images = [
        'images/KakaoTalk_20240625_000416480_01.jpg',
        'images/KakaoTalk_20240625_000416480_02.jpg',
        'images/KakaoTalk_20240625_000416480_03.jpg',
        'images/KakaoTalk_20240625_000416480_04.jpg',
        'images/KakaoTalk_20240625_000416480_05.jpg',
        'images/KakaoTalk_20240625_000416480_06.jpg',
        'images/KakaoTalk_20240625_000416480_07.jpg',
        'images/KakaoTalk_20240625_000416480_08.jpg',
        'images/KakaoTalk_20240625_000416480_09.jpg',
        'images/KakaoTalk_20240625_000416480_10.jpg',
        'images/KakaoTalk_20240625_000416480_11.jpg',
        'images/KakaoTalk_20240625_000416480_12.jpg',
        'images/KakaoTalk_20240625_000416480_13.jpg',
        'images/KakaoTalk_20240625_000416480_14.jpg',
        'images/KakaoTalk_20240625_000416480_15.jpg',
        'images/KakaoTalk_20240625_000416480_16.jpg',
        'images/KakaoTalk_20240625_000416480_17.jpg',
        'images/KakaoTalk_20240625_000416480_18.jpg',
        'images/KakaoTalk_20240625_000416480_19.jpg',
        'images/KakaoTalk_20240625_000416480_20.jpg',
        'images/KakaoTalk_20240625_000416480_21.jpg',
        'images/KakaoTalk_20240625_000416480_22.jpg',
        'images/KakaoTalk_20240625_000416480_23.jpg',
        'images/KakaoTalk_20240625_000416480_24.jpg',
        'images/KakaoTalk_20240625_000416480_25.jpg',
        'images/KakaoTalk_20240625_000416480_26.jpg',
        'images/KakaoTalk_20240625_000416480_27.jpg',
        'images/KakaoTalk_20240625_000416480_28.jpg',
        'images/KakaoTalk_20240625_000416480_29.jpg',
        'images/KakaoTalk_20240625_000416480.jpg',
        'images/KakaoTalk_20240625_001259046_31.jpg',
        'images/KakaoTalk_20240625_001259046_32.jpg',
        'images/KakaoTalk_20240625_001259046_33.jpg',
        'images/KakaoTalk_20240625_001259046_34.jpg',
        'images/KakaoTalk_20240625_001259046_35.jpg',
        'images/KakaoTalk_20240625_001259046_36.jpg',
        'images/KakaoTalk_20240625_001259046_37.jpg',
        'images/KakaoTalk_20240625_001259046_38.jpg',
        'images/KakaoTalk_20240625_001259046_39.jpg',
        'images/KakaoTalk_20240625_001259046_40.jpg',
        'images/KakaoTalk_20240625_001259046_41.jpg',
        'images/KakaoTalk_20240625_001259046_42.jpg',
        'images/KakaoTalk_20240625_001259046_43.jpg',
        'images/KakaoTalk_20240625_001259046_44.jpg',
        'images/KakaoTalk_20240625_001259046_45.jpg',
        'images/KakaoTalk_20240625_001259046_46.jpg',
        'images/KakaoTalk_20240625_001259046_47.jpg',
        'images/KakaoTalk_20240625_001259046_48.jpg',
        'images/KakaoTalk_20240625_001259046_49.jpg',
        'images/KakaoTalk_20240625_001259046_50.jpg',
        'images/KakaoTalk_20240625_001259046_51.jpg',
        'images/KakaoTalk_20240625_001259046_52.jpg',
        'images/KakaoTalk_20240625_001259046_53.jpg',
        'images/KakaoTalk_20240625_001259046_54.jpg',
        'images/KakaoTalk_20240625_001259046_55.jpg',
        'images/KakaoTalk_20240625_001259046_56.jpg',
        'images/KakaoTalk_20240625_001259046_57.jpg',
        'images/KakaoTalk_20240625_001259046_58.jpg',
        'images/KakaoTalk_20240625_001259046_59.jpg',
        'images/KakaoTalk_20240625_001259046_60.jpg',
        'images/KakaoTalk_20240625_130109906_61.jpg',
        'images/KakaoTalk_20240625_130109906_62.jpg',
        'images/KakaoTalk_20240625_130109906_63.jpg',
        'images/KakaoTalk_20240625_130109906_64.jpg',
        'images/KakaoTalk_20240625_130109906_65.jpg',
        'images/KakaoTalk_20240625_130109906_66.jpg',
        'images/KakaoTalk_20240625_130109906_67.jpg',
        'images/KakaoTalk_20240625_130109906_68.jpg',
        'images/KakaoTalk_20240625_130109906_69.jpg',
        'images/KakaoTalk_20240625_130109906_70.jpg',
        'images/KakaoTalk_20240625_130109906_71.jpg',
        'images/KakaoTalk_20240625_130109906_72.jpg',
        'images/KakaoTalk_20240625_130109906_73.jpg',
        'images/KakaoTalk_20240625_130109906_74.jpg',
        'images/KakaoTalk_20240625_130109906_75.jpg',
        'images/KakaoTalk_20240625_130109906_76.jpg',
        'images/KakaoTalk_20240625_130109906_77.jpg',
        'images/KakaoTalk_20240625_130109906_78.jpg',
        'images/KakaoTalk_20240625_130109906_79.jpg',
        'images/KakaoTalk_20240625_130109906_80.jpg',
        'images/KakaoTalk_20240625_130109906_81.jpg',
        'images/KakaoTalk_20240625_130109906_82.jpg',
        'images/KakaoTalk_20240625_130109906_83.jpg',
        'images/KakaoTalk_20240625_130109906_84.jpg',
        'images/KakaoTalk_20240625_130109906_85.jpg',
        'images/KakaoTalk_20240625_130109906_86.jpg',
        'images/KakaoTalk_20240625_130109906_87.jpg'
        // 필요한 만큼 이미지 경로를 추가하세요.
    ];

    //     function changeBackgroundImage() {
    //         const randomImage = images[Math.floor(Math.random() * images.length)];

    //         const img = new Image();
    //         img.src = randomImage;
    //         img.onload = () => {
    //         document.body.style.backgroundImage = `url(${randomImage})`;
    //         document.body.style.opacity = '0.6'; // 약간 불투명하게 설정
    //         document.body.style.height = '100%'; // 약간 불투명하게 설정
    //     }
    // }
    //     // 처음 로드 시 배경 이미지를 변경합니다.
    //     changeBackgroundImage();

    //     // 일정 시간마다 배경 이미지를 변경합니다.
    //     setInterval(changeBackgroundImage, 3000); // 3초마다 배경 이미지 변경
    let currentImageIndex = 0;

    function preloadImages(urls) {
        urls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const nextImage = images[currentImageIndex];

        const img = new Image();
        img.src = nextImage;
        img.onload = () => {
            document.body.style.backgroundImage = `url(${nextImage})`;
            document.body.style.opacity = '0.6'; // 약간 불투명하게 설정
            document.body.style.height = '100%'; // 약간 불투명하게 설정
        }
    }

    // 처음 로드 시 모든 이미지를 미리 로드합니다.
    preloadImages(images);

    // 처음 로드 시 배경 이미지를 변경합니다.
    changeBackgroundImage();

    // 일정 시간마다 배경 이미지를 변경합니다.
    setInterval(changeBackgroundImage, 5000); // 5초마다 배경 이미지 변경

});

