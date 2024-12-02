
document.getElementById('navigate-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior

    // Start fading out the current section
    var hideSection = document.getElementById('index');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

        // Reveal the target section
        var targetSection = document.getElementById('graduate');
        targetSection.classList.remove('hidden-section');
        targetSection.classList.add('visible-section');

        // Hide the old section
        hideSection.classList.remove('visible-section');
        hideSection.classList.add('hidden-section');

        // Scroll to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true }); // Ensures the event listener is only invoked once
});

document.getElementById('navigate-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior

    // Start fading out the current section
    var hideSection = document.getElementById('graduate');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

        // Reveal the target section
        var targetSection = document.getElementById('parttime');
        targetSection.classList.remove('hidden-section');
        targetSection.classList.add('visible-section');

        // Hide the old section
        hideSection.classList.remove('visible-section');
        hideSection.classList.add('hidden-section');

        // Scroll to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true }); // Ensures the event listener is only invoked once
});

document.getElementById('parttime-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior

    // Start fading out the current section
    var hideSection = document.getElementById('parttime');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

        // Reveal the target section
        var targetSection = document.getElementById('parttime1');
        targetSection.classList.remove('hidden-section');
        targetSection.classList.add('visible-section');

        // Hide the old section
        hideSection.classList.remove('visible-section');
        hideSection.classList.add('hidden-section');

        // Scroll to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true }); // Ensures the event listener is only invoked once
});

  document.getElementById('narrative-parttime1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('parttime1');
    hideSection.classList.add('fade-out');
 
    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

   // Reveal the section
   var targetSection = document.getElementById('parttime-narative');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');

   
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');  
  
 
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });

  document.getElementById('narrative-parttime2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  

    var hideSection = document.getElementById('parttime1');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);


   // Reveal the section
   var targetSection = document.getElementById('parttime-narative');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
 
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');   

  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  
  });

  document.getElementById('narrative-parttime3').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('parttime1');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);


   // Reveal the section
   var targetSection = document.getElementById('parttime-narative');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
 
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section'); 
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });

  });

  document.getElementById('narrative-parttime4').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('parttime1');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);


   // Reveal the section
   var targetSection = document.getElementById('parttime-narative');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
 
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section'); 
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });

  document.getElementById('notify-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('parttime-narative');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

   // Reveal the section
   var targetSection = document.getElementById('parttime-narative1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
 
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });

document.getElementById('navigate-link2').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior

  var hideSection = document.getElementById('graduate');
  hideSection.classList.add('fade-out');

  // Once the fade-out transition is complete, proceed to reveal the target section
  hideSection.addEventListener('transitionend', function onTransitionEnd() {
      // Remove event listener to avoid multiple triggers
      hideSection.removeEventListener('transitionend', onTransitionEnd);

  // Reveal the section
  var targetSection = document.getElementById('family');
  targetSection.classList.remove('hidden-section');
  targetSection.classList.add('visible-section');

  hideSection.classList.remove('visible-section');
  hideSection.classList.add('hidden-section');

 
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
   }, { once: true });
});

document.getElementById('family-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
    
    var hideSection = document.getElementById('family');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

   // Reveal the section
   var targetSection = document.getElementById('family1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');

   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });

  document.getElementById('narrative-fam').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior  

    var hideSection = document.getElementById('family1');
    hideSection.classList.add('fade-out');

   // Once the fade-out transition is complete, proceed to reveal the target section
   hideSection.addEventListener('transitionend', function onTransitionEnd() {
       // Remove event listener to avoid multiple triggers
       hideSection.removeEventListener('transitionend', onTransitionEnd);
   // Reveal the section
   var targetSection = document.getElementById('family-narative');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');

   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
 
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });


  document.getElementById('notify-link2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
   
    var hideSection = document.getElementById('saving');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);
   // Reveal the section
   var targetSection = document.getElementById('family-narrative1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');

  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });


  document.getElementById('notify-link3').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
    
    var hideSection = document.getElementById('hold');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);
   // Reveal the section
   var targetSection = document.getElementById('family-narrative1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');

   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });


  document.getElementById('game-linkfam').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('family-narative');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);
   // Reveal the section
   var targetSection = document.getElementById('family-game');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
 
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });


  document.getElementById('loading-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('family-game');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);
   // Reveal the section
   var targetSection = document.getElementById('loading-family-game');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');

     // Set a timeout to make the button fade in after 5 seconds, while the loader stays visible
  setTimeout(function() {
    // Fade in the button by changing its opacity to 1
    const button = document.querySelector('.animated-button2');
    button.style.opacity = '1';
  }, 3000); // 3000 milliseconds = 3 seconds
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
 
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });



  document.getElementById('title-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('loading-family-game');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);
   // Reveal the section
   var targetSection = document.getElementById('game-title1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
 
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });

  
  const dragSound = document.getElementById('drag-sound'); // Select the drag sound effect
  const dropSound = document.getElementById('drop-sound'); // Select the drop sound effect

  
  function allowDrop(ev) {
    ev.preventDefault(); // Allow the drop action


  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id); // Store the dragged item's ID

      // Play the drag sound
  dragSound.currentTime = 0; // Reset the sound to the beginning
  dragSound.play(); // Play the drag sound effect

  }
  
  function drop(ev) {
    
    dropSound.currentTime = 0; // Reset the sound to the beginning
    dropSound.play(); // Play the drop sound effect

    ev.preventDefault(); // Prevent default drop behavior
    const data = ev.dataTransfer.getData("text"); // Get the ID of the dragged item
    const draggedItem = document.getElementById(data); // Reference the dragged item
    const targetContainer = ev.target.closest("div"); // Get the drop target container
  
    // Check if the item matches the target container
    if (
      (draggedItem.classList.contains("yes") && targetContainer.id === "container1") ||
      (draggedItem.classList.contains("no") && targetContainer.id === "container2")
    ) {
      targetContainer.appendChild(draggedItem); // Move the item to the correct container
      draggedItem.style.display = "none"; // Hide the item after it's placed
    } else {
      // Incorrect drop, do nothing
      return;
    }
  
    checkCompletion(); // Check if the game is complete
  }
  
  
  function checkCompletion() {
    const totalItems = 16; // Total number of draggable items
    const itemsInOriginalContainers = document.querySelectorAll(
      '#drag-items img:not([style*="display: none"])');
  
    // Check if all items are removed from their original containers
    if (itemsInOriginalContainers.length === 0) {
      const backgroundMusic = document.getElementById("game-music");
      fadeOutMusic(backgroundMusic, 2000); // Fade out over 2 seconds
      showModal(); // Show the completion modal
    }
  }
  
  
  function fadeOutMusic(audio, duration) {
    const fadeOutInterval = 50;
    const fadeOutSteps = duration / fadeOutInterval;
    let currentVolume = audio.volume;
    const volumeDecrement = currentVolume / fadeOutSteps;
  
    const fadeOut = setInterval(() => {
      if (currentVolume > 0) {
        currentVolume -= volumeDecrement;
        audio.volume = Math.max(0, currentVolume);
      } else {
        clearInterval(fadeOut);
        audio.pause();
        audio.currentTime = 0;
      }
    }, fadeOutInterval);
  }
  
  function reset() {
    const dragItems = document.getElementById("drag-items");
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");

    // Move only draggable items back to their original groups
    [...container1.children].forEach((child) => {
        if (child.classList.contains("yes")) {
            child.style.display = "block"; // Ensure it's visible again
            dragItems.appendChild(child);
        }
    });

    [...container2.children].forEach((child) => {
        if (child.classList.contains("no")) {
            child.style.display = "block"; // Ensure it's visible again
            dragItems.appendChild(child);
        }
    });

    // Close the modal if it's open
    closeModal();

    // Restart the background music
    const backgroundMusic = document.getElementById("game-music");
    backgroundMusic.currentTime = 0; // Reset to the beginning
    backgroundMusic.volume = 1; // Set volume to max
    backgroundMusic.play(); // Play the music
}

  
  function showModal() {
    const modal = new bootstrap.Modal(document.getElementById("gamemodal"));
    modal.show();
  }
  
  function closeModal() {
    const modal = bootstrap.Modal.getInstance(document.getElementById("gamemodal"));
    if (modal) {
      modal.hide();
    }
  }
  
  
document.getElementById('quiz-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior

  var hideSection = document.getElementById('game-title1');
  hideSection.classList.add('fade-out'); // Start fade-out animation

  // Once the fade-out transition is complete, proceed to reveal the target section
  hideSection.addEventListener('transitionend', function onTransitionEnd() {
      hideSection.removeEventListener('transitionend', onTransitionEnd); // Remove event listener to avoid multiple triggers

      // Reveal the section
      var targetSection = document.getElementById('family-quiz');
      targetSection.classList.remove('hidden-section');
      targetSection.classList.add('visible-section');

      hideSection.classList.remove('visible-section');
      hideSection.classList.add('hidden-section');

      // Play background music when family quiz is visible
      const backgroundMusic = document.getElementById('game-music');
      backgroundMusic.play();
      targetSection.scrollIntoView({ behavior: 'smooth' });
  }, { once: true });
});




document.getElementById('credit-link1').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior

  var hideSection = document.getElementById('family-quiz');
  hideSection.classList.add('fade-out');

  // Once the fade-out transition is complete, proceed to reveal the target section
  hideSection.addEventListener('transitionend', function onTransitionEnd() {
      // Remove event listener to avoid multiple triggers
      hideSection.removeEventListener('transitionend', onTransitionEnd);
 // Reveal the section
 var targetSection = document.getElementById('game-credit1');
 targetSection.classList.remove('hidden-section');
 targetSection.classList.add('visible-section');

 hideSection.classList.remove('visible-section');
 hideSection.classList.add('hidden-section');


   // Scroll to the section
   targetSection.scrollIntoView({ behavior: 'smooth' });
  }, { once: true });
});




  document.getElementById('notify-link4').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('game-credit1');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);
   // Reveal the section
   var targetSection = document.getElementById('family-narrative1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
 
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });

  });


document.getElementById('navigate-link3').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior


  var hideSection = document.getElementById('graduate');
  hideSection.classList.add('fade-out');

  // Once the fade-out transition is complete, proceed to reveal the target section
  hideSection.addEventListener('transitionend', function onTransitionEnd() {
      // Remove event listener to avoid multiple triggers
      hideSection.removeEventListener('transitionend', onTransitionEnd);

 // Reveal the section
 var targetSection = document.getElementById('own');
 targetSection.classList.remove('hidden-section');
 targetSection.classList.add('visible-section');

 hideSection.classList.remove('visible-section');
 hideSection.classList.add('hidden-section');


   // Scroll to the section
   targetSection.scrollIntoView({ behavior: 'smooth' });
  }, { once: true });
});


document.getElementById('ownbusiness').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior

  var hideSection = document.getElementById('own');
  hideSection.classList.add('fade-out');

  // Once the fade-out transition is complete, proceed to reveal the target section
  hideSection.addEventListener('transitionend', function onTransitionEnd() {
      // Remove event listener to avoid multiple triggers
      hideSection.removeEventListener('transitionend', onTransitionEnd);

 // Reveal the section
 var targetSection = document.getElementById('own-business');
 targetSection.classList.remove('hidden-section');
 targetSection.classList.add('visible-section');

 hideSection.classList.remove('visible-section');
 hideSection.classList.add('hidden-section');


   // Scroll to the section
   targetSection.scrollIntoView({ behavior: 'smooth' });
  }, { once: true });
});



document.getElementById('loading-link2').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior

  var hideSection = document.getElementById('own-business');
  hideSection.classList.add('fade-out');

  // Once the fade-out transition is complete, proceed to reveal the target section
  hideSection.addEventListener('transitionend', function onTransitionEnd() {
      // Remove event listener to avoid multiple triggers
      hideSection.removeEventListener('transitionend', onTransitionEnd);

 // Reveal the section
 var targetSection = document.getElementById('loading-business-game');
 targetSection.classList.remove('hidden-section');
 targetSection.classList.add('visible-section');

      // Set a timeout to make the button fade in after 5 seconds, while the loader stays visible
      setTimeout(function() {
        // Fade in the button by changing its opacity to 1
        const button = document.querySelector('.animated-button3');
        button.style.opacity = '1';
      }, 3000); // 3000 milliseconds = 3 seconds
      

 hideSection.classList.remove('visible-section');
 hideSection.classList.add('hidden-section');


   // Scroll to the section
   targetSection.scrollIntoView({ behavior: 'smooth' });
  }, { once: true });
});



document.getElementById('title-link2').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior

  var hideSection = document.getElementById('loading-business-game');
  hideSection.classList.add('fade-out');

  // Once the fade-out transition is complete, proceed to reveal the target section
  hideSection.addEventListener('transitionend', function onTransitionEnd() {
      // Remove event listener to avoid multiple triggers
      hideSection.removeEventListener('transitionend', onTransitionEnd);

 // Reveal the section
 var targetSection = document.getElementById('game-title2');
 targetSection.classList.remove('hidden-section');
 targetSection.classList.add('visible-section');

 hideSection.classList.remove('visible-section');
 hideSection.classList.add('hidden-section');


   // Scroll to the section
   targetSection.scrollIntoView({ behavior: 'smooth' });
  }, { once: true });
});




document.getElementById('own-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('game-title2');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

   // Reveal the section
   var targetSection = document.getElementById('game1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');

  
         // Play background music when family quiz is visible
         const backgroundMusic = document.getElementById('game-music');
         backgroundMusic.play();
         targetSection.scrollIntoView({ behavior: 'smooth' });
     }, { once: true });
 });
 

  document.getElementById('narrative-own1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('own1');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

   // Reveal the section
   var targetSection = document.getElementById('own-narrative1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');

  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });

  document.getElementById('narrative-own2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('own1');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

   // Reveal the section
   var targetSection = document.getElementById('own-narrative2');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');

  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });

  document.getElementById('narrative-own3').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('own1');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

   // Reveal the section
   var targetSection = document.getElementById('own-narrative3');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');

  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });


  document.getElementById('game-baked').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  

    var hideSection = document.getElementById('own-narrative1');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

   // Reveal the section
   var targetSection = document.getElementById('aftergame');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });

  const hiddenItems1 = {
    1: './img/business-game/after (1).png',
    2: './img/business-game/after (2).png',
    3: './img/business-game/after (3).png',
    4: './img/business-game/after (4).png',
    5: './img/business-game/after (5).png',
    6: './img/business-game/after (6).png',
    7: './img/business-game/after (7).png',
    8: './img/business-game/after (8).png',
    9: './img/business-game/after (9).png',
    10: './img/business-game/after (10).png',
    11: './img/business-game/after (11).png',
    12: './img/business-game/after (12).png'
};

let foundCount1 = 0;
let maxItems = 5; // Maximum items to be found
const clickSound = document.getElementById('click-sound'); // Select the sound effect
const audioElement = document.getElementById('game-music'); // Select the game music

function fadeOutAudio(duration) {
    let volume = audioElement.volume;
    const fadeOutInterval = 50; // milliseconds
    const fadeOutStep = volume / (duration / fadeOutInterval);

    const fadeOut = setInterval(() => {
        if (volume > 0) {
            volume -= fadeOutStep;
            if (volume < 0) volume = 0; // Prevent going below 0
            audioElement.volume = volume;
        } else {
            clearInterval(fadeOut);
            audioElement.pause(); // Pause the audio after fading out
        }
    }, fadeOutInterval);
}

function checkItem1(itemNumber) {
    if (foundCount1 >= maxItems) return;

    // Play the click sound
    clickSound.currentTime = 0; // Reset the sound to the beginning
    clickSound.play(); // Play the sound effect

    console.log(`Checking item number: ${itemNumber}`);
    const imgElement = document.querySelector(`img[data-item1="${itemNumber}"]`);

    if (hiddenItems1[itemNumber]) {
        console.log(`Found item: ${hiddenItems1[itemNumber]}`);
        imgElement.src = `${hiddenItems1[itemNumber]}?v=${new Date().getTime()}`; // Cache-busting
        foundCount1++;

        // Disable further clicks on the image
        imgElement.onclick = null; // Remove the onclick event

        // Check if 5 items are found and show the result
        if (foundCount1 === maxItems) {
            setTimeout(() => {
                document.getElementById('gameresult').innerText = 'Good Choice! That was easy!';
                document.getElementById('credit-link2').style.display = 'block'; // Display the button

                // Call fade out audio over 2 seconds
                fadeOutAudio(2000);
            }, 800); // 800 milliseconds before showing result
        }
    }
}





  document.getElementById('credit-link2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('game1');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

   // Reveal the section
   var targetSection = document.getElementById('game-credit2');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');

  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });


  
  document.getElementById('game-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('game-credit2');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

   // Reveal the section
   var targetSection = document.getElementById('own1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');

  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });




  document.getElementById('game-art').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('own-narrative2');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

   // Reveal the section
   var targetSection = document.getElementById('aftergame');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');

  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });


  const hiddenItems2 = {
    1: './img/groceries icons/yellow/arts1.png',
    6: '../img/groceries icons/yellow/arts2.png',
    8: '../img/groceries icons/yellow/arts3.png',
    12: '../img/groceries icons/yellow/arts4.png',
    14: '../img/groceries icons/yellow/arts5.png'
  };
  
  let foundCount2 = 0;
  
  function checkItem2(itemNumber) {
    console.log(`Checking item number: ${itemNumber}`);
    const imgElement = document.querySelector(`img[data-item2="${itemNumber}"]`);
  
    if (hiddenItems2[itemNumber]) {
      console.log(`Found item: ${hiddenItems2[itemNumber]}`);
      imgElement.src = `${hiddenItems2[itemNumber]}?v=${new Date().getTime()}`; // Cache-busting
      foundCount2++;
    } else {
      imgElement.src = '../img/holdon.png'; // Replace with empty box image
    }
  
    if (foundCount2 === 5) {
      document.getElementById('artsresult').innerText = 'Congratulations! You found all the items!';
      document.getElementById('game-link2').style.display = 'block'; // Display the button
    }
  }
  

  document.getElementById('game-digital').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior

    var hideSection = document.getElementById('own-narrative3');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

   // Reveal the section
   var targetSection = document.getElementById('aftergame');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
  
     // Scroll to the section
     targetSection.scrollIntoView({ behavior: 'smooth' });
    }, { once: true });
  });



//////////////////////////////////////////////////////////////////////////

  

  document.getElementById('saving-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('family1');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

    // Reveal the section
    var targetSection = document.getElementById('saving');
    targetSection.classList.remove('hidden-section');
    targetSection.classList.add('visible-section');
  
    hideSection.classList.remove('visible-section');
    hideSection.classList.add('hidden-section');

   
      // Scroll to the section
      targetSection.scrollIntoView({ behavior: 'smooth' });
     }, { once: true });
  });


  document.getElementById('hold-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('family1');
    hideSection.classList.add('fade-out');

    // Once the fade-out transition is complete, proceed to reveal the target section
    hideSection.addEventListener('transitionend', function onTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        hideSection.removeEventListener('transitionend', onTransitionEnd);

    // Reveal the section
    var targetSection = document.getElementById('hold');
    targetSection.classList.remove('hidden-section');
    targetSection.classList.add('visible-section');
  
    hideSection.classList.remove('visible-section');
    hideSection.classList.add('hidden-section');
  
   
      // Scroll to the section
      targetSection.scrollIntoView({ behavior: 'smooth' });
     }, { once: true });
  });

///////////////////////////////////////////////////////////////////////////
