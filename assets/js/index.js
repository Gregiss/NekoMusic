new Vue({
      el: '#app',
      vuetify: new Vuetify(),
      data: () => ({
        drawer: false,
        links: [
          {"name" : "Ínicio", "icon" : "mdi-home"},
          {"name" : "Músicas", "icon" : "mdi-music"},
          {"name" : "Minhas músicas favoritas", "icon" : "mdi-star"}
        ],
        logo: "NekoMusic",
        music: [],
        favorit_music: [],
        tab: null,
        type_music: [
          {"type" : "Lançamento"},
          {"type" : "Favoritos"}
        ],
        playing: false,
        musicPlay: {},
        audioElement: false,
        progressBar: 0,
        where: 0
      }),
      mounted(){
        this.addMusic()
      },
      methods:{
        newMusic(banner, nome, album, time, banda, mp3){
          var newMusic = {banner: banner, nome: nome, album: album, time: time, banda: banda, mp3: mp3};
          this.music.push(newMusic);
          this.favorit_music = localStorage.favorit_music ? JSON.parse(localStorage.favorit_music) : []
        },
        addMusic(){
          this.newMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "01. Iron Lion Zion", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/01.%20Iron%20Lion%20Zion.mp3?raw=true");
          this.newMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "02. Could You Be Loved", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/02.%20Could%20You%20Be%20Loved.mp3?raw=true");
          this.newMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "03. Is This Love", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/03.%20Is%20This%20Love.mp3?raw=true");
          this.newMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "04. I Shot The Sheriff", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/04.%20I%20Shot%20The%20Sheriff.mp3?raw=true");
          this.newMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "05. Jamming", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/05.%20Jamming.mp3?raw=true");
          this.newMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "06. One Love", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/06.%20One%20Love.mp3?raw=true");
          this.newMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "07. No Woman", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/07.%20No%20Woman,%20No%20Cry.mp3?raw=true");
          this.newMusic("https://static.fnac-static.com/multimedia/Images/PT/NR/2b/51/05/348459/1540-6/tsp20160817182810/Acoustica.jpg", "Alien Nation", "Scorpions", 0, "Scorpions", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/04-scorpions-alien_nation.mp3?raw=true");
          this.newMusic("https://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._SL1500_.jpg", "Somebody to love", "Bohemian Rhapsody", 0, "Queen", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/02.%20Somebody%20To%20Love.mp3?raw=true");
          this.newMusic("https://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._SL1500_.jpg", "Another One Bites The Dust", "Bohemian Rhapsody", 0, "Queen", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/12.%20Another%20One%20Bites%20The%20Dust.mp3?raw=true");
          this.newMusic("https://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._SL1500_.jpg", "Love Of My Life", "Bohemian Rhapsody", 0, "Queen", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/10.%20Love%20Of%20My%20Life%20(Live%20At%20Rock%20In%20Rio).mp3?raw=true");
          this.newMusic("https://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._SL1500_.jpg", "I Want To Break Free", "Bohemian Rhapsody", 0, "Queen", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/13.%20I%20Want%20To%20Break%20Free.mp3?raw=true");
          this.newMusic("https://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._SL1500_.jpg", "Radio Ga Ga (Live Aid)", "Bohemian Rhapsody", 0, "Queen", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/17.%20Radio%20Ga%20Ga%20(Live%20Aid).mp3?raw=true");
          this.newMusic("https://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._SL1500_.jpg", "Bohemian Rhapsody", "Bohemian Rhapsody", 0, "Queen", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/07.%20Bohemian%20Rhapsody.mp3?raw=true");
          this.musicPlay = {"nome" : "N/A", "album" : "", "mp3": ""}
        },
        play(music){
        this.musicPlay = music
        var audio = $("#player");  
        $("#player").attr("src", music.mp3);
        /****************/
        audio[0].pause()
        audio[0].load()//suspends and restores all audio element
        audio[0].play()
        this.playing = true
        setInterval(() => {
          this.progressBar = Math.floor((100 / audio[0].duration) * audio[0].currentTime)
          console.log(this.progressBar)
        }, 1000);
        /****************/
        },
        playM(){
          if(this.musicPlay.mp3 == ""){
            var musicRandom = this.music[Math.floor(Math.random() * this.music.length)]
            this.musicPlay = musicRandom
            var audio = $("#player");  
            $("#player").attr("src", musicRandom.mp3);
            /****************/
            audio[0].pause()
            audio[0].load()//suspends and restores all audio element
            audio[0].play()
            this.playing = true
            setInterval(() => {
              this.progressBar = Math.floor((100 / audio[0].duration) * audio[0].currentTime)
            }, 1000);
          } else{
          var audio = $("#player");  
          audio[0].play()
          this.playing = true
          }
        },
        pauseM(){
          var audio = $("#player");  
          audio[0].pause()
          this.playing = false
        },
        favorite(musica){
          var encontrou = false
          for(var i = 0; i < this.favorit_music.length; i++){
            if(this.favorit_music[i] == musica){
              encontrou = true
            }
          }
          if(!encontrou){
          this.favorit_music.push(musica)
          this.tab = 1
          } else{
            var index = this.favorit_music.indexOf(musica)
            if (index !== -1) this.favorit_music.splice(index, 1);
          }
          localStorage.favorit_music = JSON.stringify(this.favorit_music)
        },
        change(link){
          var index = this.links.indexOf(link)
          this.where = index
        }
      },
      props: {
        source: String,
      },
})