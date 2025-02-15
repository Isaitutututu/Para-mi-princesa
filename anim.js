// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I want you to stay", time: 2 },
  { text: "Till I'm in the grave", time: 3 },
  { text: "Till I rot away, dead and buried", time: 11 },
  { text: "Till I'm in the casket you carry", time: 15 },
  { text: "If you go, I'm going too, uh", time: 18 },
  { text: "Cause it was always you, alright", time: 25 },
  { text: "And if I'm turning blue, please, don't save me", time: 26 },
  { text: "Nothing left to lose without my baby", time: 34 },
  { text: "Birds of a feather, we should stick together I know", time: 40 },
  { text: "I said I'd never think I wasn't better alone", time: 45 },
  { text: "Can't change the weather, might not be forever. ", time: 46 },
  { text: "But if it's forever, it's even better", time: 47 },
  { text: "And I don't know what I'm crying for", time: 58 },
  { text: "I don't think I could love you more", time: 62 },
  { text: "It might not be long, but, baby, I", time: 64 },
  { text: "I'll love you till the day that I die", time: 74 },
  { text: "Till the day that I die", time: 78 },
  { text: "Till the light leaves my eyes", time: 80 },
  { text: "Till the day that I die", time: 88 },
  { text: "I want you to see, mmm", time: 92 },
  { text: "How you look to me, huh", time: 95 },
  { text: "You wouldn't believe if I told ya", time: 102 },
  { text: "You would keep the compliments I throw ya", time: 107 },
  { text: "But you're so full of shit, hmm", time: 111 },
  { text: "Tell me it's a bit, oh", time: 113 },
  { text: "Say you don't see it, your mind's polluted", time: 120 },
  { text: "Say you wanna quit, don't be stupid", time: 122 },
  { text: "And I don't know what I'm crying for", time: 132 },
  { text: "I don't think I could love you more", time: 135 },
  { text: "It might not be long, but, baby, I", time: 138 },
  { text: "Don't wanna say goodbye", time: 141 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);