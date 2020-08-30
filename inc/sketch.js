const player = new Tone.Player({
			url: "https://tonejs.github.io/audio/loop/FWDL.mp3",
			loop: true,
			loopStart: 0.5,
			loopEnd: 0.7,
		}).toDestination();

		ui({
			tone: player,
			parent: document.querySelector("#content")
		});

		// bind the interface
		document.querySelector("tone-play-toggle").addEventListener("start", () => player.start());
		document.querySelector("tone-play-toggle").addEventListener("stop", () => player.stop());





