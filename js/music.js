document.addEventListener('DOMContentLoaded', function() {
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
    playSongBtn.addEventListener('click', function() {
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
    audioPlayer.addEventListener('timeupdate', function() {
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
    audioPlayer.addEventListener('ended', function() {
        currentLyricIndex = 0;
        prevLyric.textContent = "";
        currentLyric.textContent = "";
        nextLyric.textContent = "";
        playSongBtn.textContent = '노래 듣기';
        isPlaying = false;
        lyricsContainer.classList.add('hidden');
    });

    // Reset the lyrics and index when the song is paused and restarted
    audioPlayer.addEventListener('pause', function() {
        currentLyricIndex = 0;
        prevLyric.textContent = "";
        currentLyric.textContent = "";
        nextLyric.textContent = "";
    });
});
