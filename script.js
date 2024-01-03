document.addEventListener('DOMContentLoaded', function() {
    let isChanged = false; // Flag to track the theme state

    function changeImage(imageSelector, newSrc) {
        const image = document.querySelector(imageSelector);
        image.classList.add('fade');
        
        setTimeout(() => {
            image.src = newSrc;
            image.classList.remove('fade');
        }, 1000); // Time for the image transition
    }

    // setInterval(() => {
    //     changeTheme();
    // }, 5000);

    function changeTheme() {
        if (!isChanged) {
            // Apply the second theme
            document.body.classList.add('white-background');
            // document.querySelector('.sentence1').classList.add('hidden');
            document.querySelector('h1').classList.add('black-text');
            document.querySelector('.sentence2').classList.add('black-text');
            document.querySelector('.sentence2').textContent = 'try “Media Social”: discover your world, connect serendipitously';
            document.querySelector('.logo').src = './images/AI2.png';
            changeImage('.image', './images/landing2.jpg');
            document.querySelector('.eyes').src = './images/eye.png';
            document.querySelector('.join-waitlist-button').classList.add('pink-background');
            document.querySelector('.join-waitlist-button').textContent = 'Join the Waitlist';
            document.querySelector('email-sentence').classList.add('black-text');
        } else {
            // Revert to the default theme
            document.body.classList.remove('white-background');
            // document.querySelector('.sentence1').classList.remove('hidden');
            document.querySelector('h1').classList.remove('black-text');
            document.querySelector('.sentence2').classList.remove('black-text');
            document.querySelector('.sentence2').textContent = '“Social Media” promises social... but pushes media';
            document.querySelector('.logo').src = './images/AI.png';
            changeImage('.image', './images/landing1.jpg');
            document.querySelector('.eyes').src = './images/eyes.png';
            document.querySelector('.join-waitlist-button').classList.remove('pink-background');
            document.querySelector('.join-waitlist-button').textContent = 'Alternative Future';
            document.querySelector('email-sentence').classList.remove('black-text');
        }
        isChanged = !isChanged; // Toggle the theme state
    }

    function redirectToForm() {
        window.location.href = 'https://forms.gle/oPNox1H5knt4bJHa7';
    }

    document.querySelector('.container').addEventListener('click', function(event) {
        if (!event.target.classList.contains('join-waitlist-button')) {
            changeTheme();
        }
    });

    document.querySelector('.join-waitlist-button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the button
        if (!isChanged) {
            changeTheme();
            // setTimeout(() => {
            //     redirectToForm();
            // }, 2000); // Time for the theme transition
        } else {
            redirectToForm();
        }
    });
});
