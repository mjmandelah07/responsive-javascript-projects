// redirect back to home page after some time
 // Using ES6 feature.
 let redirect_Page = (home) => {

    home.value = 'Redirecting in 3 secs ...';
    home.disabled = true;

    let backHome = setTimeout(function () {

        // redirect page.
        window.location.href = 'index.html';

        window.clearTimeout(backHome);		// clear time out.

    }, 3000);	// call function after 5000 milliseconds or 5 seconds
}



