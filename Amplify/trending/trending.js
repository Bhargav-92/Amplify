const audio = new Audio('./treding_link/1.mp3');
//audio.play();

//array
const songs = [

    {
        id:'1',
        songName:`Arabic Kuthu <br> <div class="subtitle">Jonita Gandhi, Anirudh</div>`,
        poster:"./trending_img/1.jpg"
    },
    {
        id:'2',
        songName:` Backbone <br> <div class="subtitle">Harrdy Sandhu</div>`,
        poster:"./trending_img/2.jpg"
    },
    {
        id:'3',
        songName:`Brown-munde <br> <div class="subtitle">AP Dhillon</div>`,
        poster:"./trending_img/3.jpg"
    },
    {
        id:'4',
        songName:`Maiya menu<br> <div class="subtitle">Sachet-Parampara</div>`,
        poster:"./trending_img/4.jpg"
    },
    {
        id:'5',
        songName:`bhool bhulaiyaa 2<br> <div class="subtitle">Neeraj Shridhar, Mellow D, Bob</div>`,
        poster:"./trending_img/5.jpg"
    },
    {
        id:'6',
        songName:`Stereo Hearts <br> <div class="subtitle">Adam Levine</div>`,
        poster:"./trending_img/6.jpg"
    },
    {
        id:'7',
        songName:`La-La-Love <br> <div class="subtitle">Honey-singh</div>`,
        poster:"./trending_img/7.jpg"
    },
    {
        id:'8',
        songName:`Kesariyo rang <br> <div class="subtitle"> Parthiv Gohil</div>`,
        poster:"./trending_img/8.jpg"
    },
    {
        id:'9',
        songName:`Summer_of_Love <br> <div class="subtitle">Shawn Mendes , Tainy</div>`,
        poster:"./trending_img/9.jpg"
    },
    
    {
        id:'10',
        songName:`Gur-naal <br> <div class="subtitle">Honey-singh</div>`,
        poster:"./trending_img/10.jpg"
    },
    {
        id:'11',
        songName:`Stay <br> <div class="subtitle">The Kid LAROI, Justin Bieber </div>`,
        poster:"./trending_img/11.jpg"
    },
    {
        id:'12',
        songName:`Industry-baby <br> <div class="subtitle">Lil Nas X</div>`,
        poster:"./trending_img/12.jpg"
    },
    {
        id:'13',
        songName:`Bad boy X Bad Girl <br> <div class="subtitle">Yo Yo Honey Singh, Shashwat Singh</div>`,
        poster:"./trending_img/13.jpg"
    },
    {
        id:'14',
        songName:` De tali<br> <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster:"./trending_img/14.jpg"
    },
    {
        id:'15',
        songName:` Blinding Lights<br> <div class="subtitle">The Weeknd</div>`,
        poster:"./trending_img/15.jpg"
    },
    {
        id:'16',
        songName:` Pasoori <br> <div class="subtitle"> Ali Sethi and Shae Gill</div>`,
        poster:"./trending_img/16.jpg"
    },
    {
        id:'17',
        songName:` Meri jaan  <br> <div class="subtitle">B Praak</div>`,
        poster:"./trending_img/17.jpg"
    },
  
    {
        id:'18',
        songName:` Love-Nwantiti  <br> <div class="subtitle">Dan , Justin bieber</div>`,
        poster:"./trending_img/18.jpg"
    },
  
    {
        id:'19',
        songName:` Excuses  <br> <div class="subtitle">AP Dhillon</div>`,
        poster:"./trending_img/19.jpg"
    },
  
    {
        id:'20',
        songName:` Boom padi  <br> <div class="subtitle">Osman Mir and Shreya Ghoshal</div>`,
        poster:"./trending_img/20.jpg"
    }
  
]

// poster and name change


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    
});

// main play button


let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', ()=>{
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        wave.classList.add('active2');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        audio.pause();
        wave.classList.remove('active2');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }

});
const makeAllplays = () =>  {
    Array.from(document.getElementsByClassName('playListplay')).forEach((el)=>{
        el.classList.remove('bi-pause-circle-fill');
        el.classList.add('bi-play-circle-fill');
    })
}

//search data start

let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    
    const {id , songName , poster} = element;
    // console.log(id, songName, poster , masterPlay , makeAllplays);

    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;

    card.innerHTML= `
            <img src="${poster}" alt="">
            <div class="content">
            ${songName}
            </div>
    `;
    
    search_results.appendChild(card);
    
});

// validations

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');
    
    for (let index = 0; index < items.length; index++) {
        
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        // for display cards 

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        }
        else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
    }
});


//search data end

//img and name change and download

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');


Array.from(document.getElementsByClassName('playListplay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        // console.log(index);
        audio.src = `./treding_link/${index}.mp3`;
        // poster_master_play.src= `/assets/songs/${index}.jpg`;
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `./treding_link/${index}.mp3`
        audio.play();

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName , poster} = elss;
            title.innerHTML =  songName;
            poster_master_play.src =  poster;
            //for download music with name
            download_music.setAttribute('download',songName);
        });

        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active2');

    })
})


// song track slider


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

audio.addEventListener('timeupdate',()=>{
    let audio_curr = audio.currentTime;
    let audio_dur = audio.duration;

    let min1 = Math.floor(audio_dur / 60);
    let sec1 = Math.floor(audio_dur % 60);
   

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerHTML = `${min1}:${sec1}`;
    
    let min2 = Math.floor(audio_curr / 60);
    let sec2 = Math.floor(audio_curr % 60);
    
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerHTML = `${min2}:${sec2}`;

    let progressBar = parseInt((audio_curr / audio_dur)*100);
    seek.value = progressBar;

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change',()=>{
    audio.currentTime = seek.value * audio.duration / 100 ;
});


// ended event

audio.addEventListener('ended', () => {
   
    index ++;
    audio.src = `./treding_link/${index}.mp3`;
    poster_master_play.src= `./trending_img/${index}.jpg`;
    audio.play();
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName , poster} = elss;
        title.innerHTML =  songName;
        poster_master_play.src =  poster;
        //for download music with name
        download_music.setAttribute('download',songName);
    });

    makeAllplays();
    document.getElementsByClassName('playListplay')[index - 1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListplay')[index - 1].classList.add('bi-pause-circle-fill');

});

//play button on songs


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementsByClassName('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');

    } 
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');

    } 
    
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');

    } 

   let vol_a = vol.value;

   audio.volume = vol_a/100;

});

let back = document.getElementById('back');
let next = document.getElementById('next');

// previous button

back.addEventListener('click' , ()=>{
     index -= 1; 
     if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
     }
     audio.src = `./treding_link/${index}.mp3`;
     masterPlay.classList.remove('bi-play-fill');
     masterPlay.classList.add('bi-pause-fill');
     wave.classList.add('active2');
     audio.play();

     let songTitles = songs.filter((els) => {
         return els.id == index;
     });

     songTitles.forEach(elss => {
         let { songName , poster} = elss;
         title.innerHTML =  songName;
         poster_master_play.src =  poster;
     });

     makeAllplays();
     el.target.classList.remove('bi-play-circle-fill');
     el.target.classList.add('bi-pause-circle-fill');
});

// next button

next.addEventListener('click', ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
     }
    audio.src = `./treding_link/${index}.mp3`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    audio.play();

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName , poster} = elss;
        title.innerHTML =  songName;
        poster_master_play.src =  poster;
    });

    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
});

// volume
const rangeInputs = document.querySelectorAll('input[type="range"]');
const numberInput = document.querySelector('input[type="number"]');
const numberThumb = document.querySelector('input[type="thumb"]');

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range');
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange);
numberThumb.addEventListener('input', handleInputChange);


// auto music play


audio.addEventListener('ended', ()=>{
    
    //index ++;
    if (index == songs.length) {
        index = 1;
    } else {
        index ++;
    }
    audio.src = `./treding_link/${index}.mp3`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `./treding_link/${index}.mp3`
    audio.play();

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName , poster} = elss;
        title.innerHTML =  songName;
        poster_master_play.src =  poster;
        download_music.setAttribute('download',songName);
    });

    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active2');

})