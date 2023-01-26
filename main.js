class App {
    runApplication() {
      let canvas = document.getElementById("canvas");
      let g = canvas.getContext("2d");
  
      var window_height = window.innerHeight;
      var window_width = window.innerWidth;
  
      canvas.width = window_width;
      canvas.height = window_height;
  
      canvas.style.background = "violet";
  
      g.fillStyle = "orange";
      g.beginPath();
      g.moveTo(820, 220);
      g.lineTo(800, 240);
      g.lineTo(800, 270);
      g.lineTo(840, 270);
      g.lineTo(840, 240);
      g.closePath();
      g.stroke();
      g.fill();
  
      g.fillStyle = "purple";
      g.beginPath();
      g.moveTo(720, 220);
      g.lineTo(700, 240);
      g.lineTo(700, 270);
      g.lineTo(740, 270);
      g.lineTo(740, 240);
      g.closePath();
      g.stroke();
      g.fill();
  
      g.fillStyle = "purple";
      g.beginPath();
      g.moveTo(520, 220);
      g.lineTo(500, 240);
      g.lineTo(500, 270);
      g.lineTo(540, 270);
      g.lineTo(540, 240);
      g.closePath();
      g.stroke();
      g.fill();
  
      g.fillStyle = "orange";
      g.beginPath();
      g.moveTo(620, 220);
      g.lineTo(600, 240);
      g.lineTo(600, 270);
      g.lineTo(640, 270);
      g.lineTo(640, 240);
      g.closePath();
      g.stroke();
      g.fill();

      g.fillStyle = "purple";
      g.beginPath();
      g.moveTo(920, 220);
      g.lineTo(900, 240);
      g.lineTo(900, 270);
      g.lineTo(940, 270);
      g.lineTo(940, 240);
      g.closePath();
      g.stroke();
      g.fill();
  
      g.fillStyle = "grey";
      g.beginPath();
      g.rect(0, 270, 10000, 50);
      g.closePath();
      g.fill();
  
      g.fillStyle = "white";
      g.beginPath();
      g.rect(0, 290, 10000, 10);
      g.closePath();
      g.fill();
  
  
      g.fillStyle = "purple";
      g.font = "30px Arial";
      g.fillText("Happy Xmas", 650, 400);
  
      g.fillStyle = "brown";
      g.beginPath();
      g.rect(250, 220, 40, 50);
      g.closePath();
      g.fill();
  
      g.fillStyle = "darkgreen";
      g.beginPath();
      g.moveTo(270, 20);
      g.lineTo(170, 220);
      g.lineTo(370, 220);
      g.closePath();
      g.fill();
  
      g.fillStyle = "brown";
      g.beginPath();
      g.rect(1200, 220, 40, 50);
      g.closePath();
      g.fill();
  
      g.fillStyle = "darkgreen";
      g.beginPath();
      g.moveTo(1220, 20);
      g.lineTo(1150, 220);
      g.lineTo(1290, 220);
      g.closePath();
      g.fill();
  
    
      g.fillStyle = "white";
      g.beginPath();
      g.arc(1030, 235, 35, 0, 2 * Math.PI);
      g.fill();
      g.stroke();
  
      g.fillStyle = "white";
      g.beginPath();
      g.arc(1030, 200, 35, 0, 2 * Math.PI);
      g.fill();
      g.stroke();
  
      g.fillStyle = "white";
      g.beginPath();
      g.arc(1030, 160, 35, 0, 2 * Math.PI);
      g.fill();
      g.stroke();
  
      g.fillStyle = "black";
      g.beginPath();
      g.arc(1015, 150, 5, 0, 2 * Math.PI);
      g.fill();
      g.stroke();
  
      g.fillStyle = "black";
      g.beginPath();
      g.arc(1045, 150, 5, 0, 2 * Math.PI);
      g.fill();
      g.stroke();
  
      g.fillStyle = "orange";
      g.beginPath();
      g.arc(1030, 160, 6, 0, 2 * Math.PI);
      g.fill();
      g.stroke();
  
      g.fillStyle = "orange";
      g.beginPath();
      g.arc(1030, 180, 2, 0, 2 * Math.PI);
      g.fill();
      g.stroke();
    }
  }
  
  let app = new App();
  app.runApplication();
  