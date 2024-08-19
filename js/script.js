
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


  document.getElementById('notify-link4').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('family-narative');
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


document.getElementById('own-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('own-business');
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

  
     // Scroll to the section
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

function checkItem1(itemNumber) {
    if (foundCount1 >= maxItems) return;

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
                document.getElementById('gameresult').innerText = 'Congratulations! That was fun!';
                document.getElementById('game-link1').style.display = 'block'; // Display the button
            }, 700); // 2000 milliseconds = 2 seconds
        }
    }
}

  document.getElementById('game-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('game1');
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
  


  document.getElementById('game-link2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('game2');
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


  document.getElementById('game-link3').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    var hideSection = document.getElementById('game3');
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
