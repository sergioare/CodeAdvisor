function createStarDisplay(score) {
    const starValues = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
    const closestValue = starValues.reduce((prev, curr) => {
      return Math.abs(curr - score) < Math.abs(prev - score) ? curr : prev;
    });
  
    let starsHTML = "";
    for (let i = 0; i < 5; i++) {
      if (i + 0.5 === closestValue) {
        starsHTML += '<span style="color: yellow;">&#8902;</span>';
      } else if (i < closestValue) {
        starsHTML += '<span style="color: yellow;">&#9733;</span>';
      } else {
        starsHTML += '<span style="color: white;">&#9733;</span>';
      }
    }
  
    return starsHTML;
  }

  const score = 3.7;
  const starDisplay = createStarDisplay(score);
  
  const starContainer = document.createElement("div");
  starContainer.classList.add("star-display");
  starContainer.innerHTML = starDisplay;
  
  document.body.appendChild(starContainer);
  
  export default starDisplay