document.addEventListener('DOMContentLoaded', function() {
    let isChanged = false; // Flag to track the state

    function changeImage(imageSelector, newSrc) {
        const image = document.querySelector(imageSelector);
        image.classList.add('fade');
        
        setTimeout(() => {
            image.src = newSrc;
            image.classList.remove('fade');
        }, 1000); // Corresponds to the transition duration
    }
    
    document.querySelector('.container').addEventListener('click', function(event) {
        // Check if the clicked element is not the button
        if (!event.target.classList.contains('join-waitlist-button')) {
            if (!isChanged) {
                // Apply changes
                document.body.classList.add('white-background');
                document.querySelector('.sentence1').classList.add('hidden');
                document.querySelector('h1').classList.add('black-text'); // Change text color of "Wander"
                document.querySelector('.sentence2').classList.add('black-text'); // Change text color of sentence2
                document.querySelector('.sentence2').textContent = 'try “Media Social”: discover your world, connect serendipitously';
                document.querySelector('.logo').src = './images/AI2.png'; // Change logo image
                changeImage('.image', './images/landing2.jpg');
                document.querySelector('.eyes').src = './images/eye.png';
                document.querySelector('.join-waitlist-button').classList.add('pink-background');
            } else {
                // Revert changes
                document.body.classList.remove('white-background');
                document.querySelector('.sentence1').classList.remove('hidden');
                document.querySelector('h1').classList.remove('black-text'); // Revert text color of "Wander"
                document.querySelector('.sentence2').classList.remove('black-text'); // Revert text color of sentence2
                document.querySelector('.sentence2').textContent = '“Social Media” promises social... but pushes media';
                document.querySelector('.logo').src = './images/AI.png'; // Revert logo image
                changeImage('.image', './images/landing1.jpg');
                document.querySelector('.eyes').src = './images/eyes.png';
                document.querySelector('.join-waitlist-button').classList.remove('pink-background');
            }
            isChanged = !isChanged; // Toggle the state
        }
    });
});
