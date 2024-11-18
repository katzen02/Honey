// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Show me how you care", time: 25 },
  { text: "Tell me how you loved before", time: 35 },
  { text: "Show me how you smile", time: 46 },
  { text: "Tell me why your hands are cold", time: 58 },
  { text: "Show me how", time: 68 },
  { text: "I'm turning around", time: 70 },
  { text: "I'm having visions of you", time: 72 },
  { text: "But then I understand", time: 77 },
  { text: "The friend I'm dreaming of is far away", time: 81 },
  { text: "But I'm here", time: 87 },
  { text: "I'm here", time: 88 },
  { text: "Show me how you're proud", time: 105 },
  { text: "Tell me how you reach the moon", time: 116 },
  { text: "My thoughts err away tonight", time: 126 },
  { text: "My heart fell to love again", time: 138 },
  { text: "Show me how", time: 148 },
  { text: "I'm turning around", time: 150 },
  { text: "I'm having visions of you", time: 152 },
  { text: "But then I understand", time: 157 },
  { text: "The friend I'm dreaming of is far away", time: 162 },
  { text: "And doesn't feel my love", time: 169 },
  { text: "But I do", time: 177 },
  { text: "I do", time: 183 },

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