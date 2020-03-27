/*When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  function dropdownFunctionDogWalking() {
      document.getElementById("dropdownContentDogWalking").classList.toggle("show");
      document.getElementById("petSittingDropdown").classList.toggle("moveDropdown");
  }

  function dropdownFunctionPetSitting() {
    document.getElementById("dropdownContentPetSitting").classList.toggle("show");
    document.getElementById("otherCrittersDropdown").classList.toggle("moveDropdown");
  }

  function dropdownFunctionOtherCritters() {
    document.getElementById("dropdownContentOtherCritters").classList.toggle("show");
    document.getElementById("contactSection").classList.toggle("moveContact");
  }