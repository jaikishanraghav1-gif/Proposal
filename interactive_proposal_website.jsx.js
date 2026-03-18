<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>For Ayushi ❤️</title>
<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #ffc0cb, #d8b4fe);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  max-width: 350px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
button {
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
}
.yes { background: #ff4d6d; color: white; }
.no { background: gray; color: white; }
</style>
</head>
<body>

<audio id="music" loop>
  <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mp3">
</audio>

<div class="card" id="content">
  <h2>Hi Ayushi ❤️</h2>
  <p>Tap to begin something special...</p>
  <button onclick="nextStep()">Start</button>
</div>

<script>
let step = 0;

function nextStep() {
  const music = document.getElementById("music");
  music.play();

  const content = document.getElementById("content");

  step++;

  if(step === 1){
    content.innerHTML = "<h2>We haven’t met yet…</h2><p>But something about you feels right.</p><button onclick='nextStep()'>Next</button>";
  }
  else if(step === 2){
    content.innerHTML = "<h2>Strange, right?</h2><p>Still… I feel connected to you.</p><button onclick='nextStep()'>Next</button>";
  }
  else if(step === 3){
    content.innerHTML = "<h2>I believe…</h2><p>Some connections are written before we meet.</p><button onclick='nextStep()'>Next</button>";
  }
  else if(step === 4){
    content.innerHTML = "<h1 style='color:#ff4d6d'>Will you marry me? 💍</h1><button class='yes' onclick='alert("I knew it ❤️")'>Yes</button><button class='no' onclick='alert("Think again 😜")'>No</button>";
  }
}
</script>

</body>
</html>            <h2 className="text-xl font-semibold mb-4">Every moment with you...</h2>
            <p className="mb-6">Feels like a beautiful dream I never want to wake up from.</p>
            <Button onClick={nextStep}>Next</Button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-semibold mb-4">I found my happiness in you 💖</h2>
            <Button onClick={nextStep}>Next</Button>
          </>
        )}

        {step === 4 && (
          <>
            <h1 className="text-3xl font-bold mb-6 text-pink-600">
              Will you marry me? 💍
            </h1>
            <div className="flex justify-center gap-4">
              <Button onClick={() => alert("I knew it! ❤️")}>Yes</Button>
              <Button
                onClick={() => alert("Think again 😜")}
                className="bg-gray-400"
              >
                No
              </Button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
