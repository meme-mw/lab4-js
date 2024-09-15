

  const img=document.querySelector("img");
  function displayImg(){
  fetch('https://coffee.alexflipnote.dev/random.json')
  .then((response) => response.json())
  .then((json) => img.src=json.file);}

  setInterval(displayImg, 2000);