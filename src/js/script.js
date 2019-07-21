document.getElementById("github-button").addEventListener("click", visitGithub);
document.getElementById("linkedin-button").addEventListener("click", visitLinkedIn);

function visitGithub() {
    window.location.assign("https://github.com/ralphsun");
}

function visitLinkedIn() {
    window.location.assign("https://www.linkedin.com/in/ralphsun/");
}