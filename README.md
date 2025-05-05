# Music-player
A simple music player built using JS that allows users to play, pause, skip, and control the volume of songs in a playlist.

1. replaceChild vs appendChild
2. textContent(no HTML parsing hence XSS safe, renders text as it is) vs innerHTML(parses HTML)
3. Addind controls attribute to audio tag handles the basic controls(setting volume, play/pause, seek, download, playback speed) for us:

<!-- <audio id="audio" controls></audio> -->
![in-built-controls](in-built-controls.png)
