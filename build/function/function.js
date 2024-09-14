/* Hamburger and Sidebar */

var hamburger = document.getElementById('hamburger');
var sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('-left-full');
    sidebar.classList.toggle('left-0');
    sidebar.classList.toggle('border-r-2');
});

/* Carousel */

var carousel = document.getElementById('carousel-inner');
var items = document.querySelectorAll('.carousel-item');
var dotsContainer = document.getElementById('dots');
const totalItems = items.length;
let currentIndex = 0;
const intervalDuration = 5000;
let interval;

function createdots() {
    for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    updatedots();
}

function updatedots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    updatedots();
}

function goToSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    updatedots();
    resetInterval();
}

function startInterval() {
    interval = setInterval(moveToNextSlide, intervalDuration);
}

function resetInterval() {
    clearInterval(interval);
    startInterval();
}

createdots();
startInterval();

/* Footer year */

document.getElementById('year').innerHTML = new Date().getFullYear();

/* Header hide on scroll */

/* const header = document.getElementById('header');
const targetElement = document.getElementById('intersection');

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Target element is in the viewport, show the header
      header.classList.add('header-hidden');
    } else {
      // Target element is out of the viewport, hide the header
      header.classList.remove('header-hidden');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  root: null, // Viewport
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Start observing the target element
observer.observe(targetElement);

var body = document.getElementById('body');
body.onscroll = function() {
    targetElement.style.display = 'block';
}
body.onscrollend = function() {
    targetElement.style.display = 'none'
} */

/* Modal close function */

var modal = document.getElementById('modal');
var modalclose = document.getElementById('modalclose')

modalclose.addEventListener('click', () => {
    modal.classList.add('top-full');
    modal.classList.remove('top-0');
}) 

/* Pastwork desktop manual navigation */

var moveleft = document.getElementById('pastwork-move-left');
var moveright = document.getElementById('pastwork-move-right');
var scrollcontainer = document.getElementById('sub-pastwork').scrollBy
 
moveleft.addEventListener('click', () => {
    document.getElementById('sub-pastwork').scrollBy({
        left: -200,
        behavior: 'smooth'
    })
})
moveright.addEventListener('click', () => {
    document.getElementById('sub-pastwork').scrollBy({
        left: 200,
        behavior: 'smooth'
    })
})

/* Management team auto scroll */

document.addEventListener('DOMContentLoaded', () => {
    const people = document.querySelectorAll('.team-person');
    const teamdotscontainer = document.getElementById('team-dots-container');

    let currentIndex = 0;
    let itemsPerSlide = getItemsPerSlide();
    const slideCount = people.length;
    let intervalId;

    function getItemsPerSlide() {
        // Determine the number of items per slide based on the viewport width
        if (window.innerWidth >= 992) {
            return 3; // Large screens
        } else if (window.innerWidth >= 768) {
            return 2; // Medium screens
        } else {
            return 1; // Small screens
        }
    }

    function showPerson(index) {
        // Hide all items
        people.forEach((slide, i) => {
            slide.classList.remove('team-person-active');
        });

        // Show the correct items for the current slide
        const startIndex = index * itemsPerSlide;
        for (let i = startIndex; i < startIndex + itemsPerSlide && i < slideCount; i++) {
            people[i].classList.add('team-person-active');
        }

        updateTeamDots(index);
    }

    function updateTeamDots(index) {
        const teamDots = teamdotscontainer.querySelectorAll('.team-dot');
        teamDots.forEach((dot, i) => {
            dot.classList.toggle('team-dot-active', i === index);
        });
    }

    function createTeamDots() {
        const totalDots = Math.ceil(slideCount / itemsPerSlide);
        for (let i = 0; i < totalDots; i++) {
            const teamDot = document.createElement('span');
            teamDot.classList.add('team-dot');
            teamDot.addEventListener('click', () => {
                showPerson(i);
                currentIndex = i;
                restartCarousel();
            });
            teamdotscontainer.appendChild(teamDot);
        }
        updateTeamDots(currentIndex);
    }

    function startCarousel() {
        showPerson(currentIndex);
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % Math.ceil(slideCount / itemsPerSlide);
            showPerson(currentIndex);
        }, 5000); // Change slide every 3 seconds
    }

    function restartCarousel() {
        clearInterval(intervalId);
        startCarousel();
    }

    function onResize() {
        itemsPerSlide = getItemsPerSlide();
        createTeamDots(); // Recreate dots based on the new number of items per slide
        showPerson(currentIndex); // Show the correct items based on the new number of items per slide
    }

    // Initial setup
    createTeamDots();
    startCarousel();

    // Recalculate on resize
    window.addEventListener('resize', onResize);
});
