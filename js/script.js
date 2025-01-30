document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector(".animate-fade-in-left");
    const nameText = "Lizeth";
    let index = 0;
  
    function typeEffect() {
      if (index < nameText.length) {
        nameElement.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeEffect, 150); // Ajusta la velocidad de escritura aquí
      }
    }
  
    // Borra el contenido inicial antes de empezar la animación
    nameElement.textContent = "";
    typeEffect();
  });

  