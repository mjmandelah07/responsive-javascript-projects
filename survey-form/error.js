// redirect back to home page after some time
 // Using ES6 feature.
const button = document.querySelector('button');
button.setAttribute('disabled', true);
button.innerHTML = 'Redirecting in 3 secs ...';

const backHome = setTimeout(() => {
    // redirect page.
    window.location.href = 'index.html';

    window.clearTimeout(backHome);		// clear time out.

}, 3000);





