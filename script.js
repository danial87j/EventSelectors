let main = document.querySelector("#mainDiv"),
  savedColor = "",
  currentLeft = 0,
  currentTop = 0,
  audio = document.querySelector("#audio"),
  play = true;

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 49) {
    savedColor = "red";
    main.style.backgroundColor = savedColor;
  }
  if (e.keyCode == 50) {
    savedColor = "green";
    main.style.backgroundColor = savedColor;
  }
  if (e.keyCode == 51) {
    savedColor = "blue";
    main.style.backgroundColor = savedColor;
  }
  if (e.keyCode == 32) {
    if (play) {
      audio.pause();
      play = false;
    } else {
      audio.play();
      play = true;
    }
  }
});

main.addEventListener("mouseover", function () {
  main.style.backgroundColor = "black";
});

main.addEventListener("mouseout", function () {
  main.style.backgroundColor = savedColor;
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 37) {
    currentLeft -= 10;
  } else if (event.keyCode == 38) {
    currentTop -= 10;
  } else if (event.keyCode == 39) {
    currentLeft += 10;
  } else if (event.keyCode == 40) {
    currentTop += 10;
  }

  main.style.left = currentLeft + "px";
  main.style.top = currentTop + "px";
});

// تنظیمات CSS برای موقعیت مطلق
main.style.position = "relative";
