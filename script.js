document.getElementById("redButton").addEventListener("click", function (e){
    e.preventDefault();

    const songs = [
        "songs/multo.mp3",
        "songs/autumn.mp3",
        "songs/backto.mp3",
        "songs/breakeven.mp3",
        "songs/burnout.mp3"
    ];

    function playRandomSong(){
        const randomSong = songs[Math.floor(Math.random() * songs.length)];

        const audio = document.createElement("audio");
        audio.src = randomSong;
        audio.autoplay = true;
        audio.style.display = "none";
        document.body.appendChild(audio);

        audio.addEventListener("ended", function (){
            document.body.removeChild(audio);
            playRandomSong();
        });
    }

    document.body.innerHTML = "";
    document.body.style.backgroundColor = "red";

    playRandomSong();

    let isRed = true;
    setInterval(() =>{
        if (isRed){
            document.body.style.backgroundColor = "#ff6666";
        } else{
            document.body.style.backgroundColor = "red";
        }
        isRed = !isRed;
    }, 500); 
});

document.getElementById("yellowButton").addEventListener("click", function (e){
    e.preventDefault();
    
    const songs = [
        "songs/aboutyou.mp3",
        "songs/sino.mp3",
        "songs/kodaline.mp3",
        "songs/lany.mp3",
        "songs/needyou.mp3"
    ];

    function playRandomSong(){
        const randomSong = songs[Math.floor(Math.random() * songs.length)];

        const audio = document.createElement("audio");
        audio.src = randomSong;
        audio.autoplay = true;
        audio.style.display = "none";
        document.body.appendChild(audio);

        audio.addEventListener("ended", function (){
            document.body.removeChild(audio);
            playRandomSong();
        });
    }

    document.body.innerHTML = "";
    document.body.style.backgroundColor = "yellow";

    playRandomSong();

    let isYellow = true;
    setInterval(() =>{
        if (isYellow){
            document.body.style.backgroundColor = "#FFD700";
        } else{
            document.body.style.backgroundColor = "yellow";
        }
        isYellow = !isYellow;
    }, 500); 
});

document.getElementById("greenButton").addEventListener("click", function (e){
    e.preventDefault();
    
    const songs = [
        "songs/bbdb.mp3",
        "songs/paraluman.mp3",
        "songs/123.mp3",
        "songs/blue.mp3",
        "songs/pahintulot.mp3"
    ];

    function playRandomSong(){
        const randomSong = songs[Math.floor(Math.random() * songs.length)];

        const audio = document.createElement("audio");
        audio.src = randomSong;
        audio.autoplay = true;
        audio.style.display = "none";
        document.body.appendChild(audio);

        audio.addEventListener("ended", function (){
            document.body.removeChild(audio);
            playRandomSong();
        });
    }

    document.body.innerHTML = "";
    document.body.style.backgroundColor = "Green";

    playRandomSong();

    let isGreen = true;
    setInterval(() => {
        if (isGreen){
            document.body.style.backgroundColor = "#90EE90";
        } else{
            document.body.style.backgroundColor = "Green";
        }
        isGreen = !isGreen;
    }, 500); 
});


