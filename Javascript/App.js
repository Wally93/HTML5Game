var
canvas,
ctx,
width,
height,
frames = 0,
score = 0,
best = 0,

currentstate,
states = {
    Splash: 0, Game: 1, Score: 2
},
bird = {},
pipes = {};

function main() {
        canvas = document.createElement("canvas");

        width = window.innerWidth;
        heigth = window.innerHeigth;
            if (width >= 500) {
                  width = 320;
                  heigth = 480;
                  canvas.style.border = "1xp solid #000";
            }
        canvas.width = width;
        canvas.heigth = heigth;
        ctx = canvas.getContext("2d");
        document.body.appendChild(canvas);
      }

        function run() {

        }
        function update() {

        }
        function render() {

        }
main();
