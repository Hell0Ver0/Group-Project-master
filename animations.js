$(document).ready(
	function(){
		"use strict";
		$("jump").mouseenter(
			function(){
				$("figcaption", this).stop().animate({"top":"0%",}, 200, 'swing');
			}
		);
		$("jump").mouseleave(
			function(){
				$("figcaption", this).stop().animate({"top":"100%",}, 400, 'swing');
			}
		);
	}
);

<script>
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
</script>
