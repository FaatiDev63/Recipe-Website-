
document.addEventListener("DOMContentLoaded", function () {
  // Chocolate Cake
  let savedPage = document.getElementById("savedChocCake");
  let savedChoc = localStorage.getItem("chocolateCake");

  if (savedPage && savedChoc) {
    savedPage.innerHTML = savedChoc;
  }

  let saveButton = document.getElementById("saveButton");

  if (saveButton) {
    saveButton.addEventListener("click", function () {
      let chocCake = document.getElementById("mainChocCakeDiv").innerHTML;
      localStorage.setItem("chocolateCake", chocCake);

      alert(`You have ${localStorage.length} saved recipe!`);
    });
  }

  //Carrot Cake
  let savedPage2 = document.getElementById("savedCarrotCake");
  let savedCarrot = localStorage.getItem("carrotCake");

  if (savedPage2 && savedCarrot) {
    savedPage2.innerHTML = savedCarrot;
  }

  let saveButton02 = document.getElementById("saveButton2");

  if (saveButton02) {
    saveButton02.addEventListener("click", function () {
      let carrCake = document.getElementById("mainCarrotCake").innerHTML;
      localStorage.setItem("carrotCake", carrCake);

      alert(`You have ${localStorage.length} saved recipes!`);
    });
  }
  //Eclairs
  let savedEclairsPg = document.getElementById("savedEclairs");
  let eclairsLocalSt = localStorage.getItem("Eclairs")

  if (savedEclairsPg && eclairsLocalSt) {
    savedEclairsPg.innerHTML = eclairsLocalSt;
  }
  let saveButtonEclairs = document.getElementById("saveButtonEclairs");

  if (saveButtonEclairs) {
    saveButtonEclairs.addEventListener("click", function () {
      let eclairsPast = document.getElementById("mainEclairsDiv").innerHTML;
      localStorage.setItem("Eclairs", eclairsPast);

      alert(`You have ${localStorage.length} saved recipes!`);
    });
  }
//cheesecake
  let savedCheesecake = document.getElementById("savedCheesecake");
  let getCheesecake = localStorage.getItem("cheesecake")
  
  if (savedCheesecake && getCheesecake) {
    savedCheesecake.innerHTML = getCheesecake;
  }
  let saveButtonCheesecake = document.getElementById("saveButtonCheesecake");
  
  if (saveButtonCheesecake) {
    saveButtonCheesecake.addEventListener("click", function () {
      let cheesecakeDess = document.getElementById("mainCheesecake").innerHTML;
      localStorage.setItem("cheesecake", cheesecakeDess);
  
      alert(`You have ${localStorage.length} saved recipes!`);
    });
  }

});




