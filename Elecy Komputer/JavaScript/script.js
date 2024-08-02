document.addEventListener("DOMContentLoaded", function () {
	const menuToggle = document.getElementById("menuToggle");
	const navbarLinks = document.getElementById("navbarLinks");

	menuToggle.addEventListener("click", function () {
		navbarLinks.classList.toggle("show");
	});

	navbarLinks.addEventListener("click", function () {
		navbarLinks.classList.remove("show");
	});

	document.addEventListener("click", function (event) {
		if (!event.target.closest(".navbar-container")) {
			navbarLinks.classList.remove("show");
		}
	});

	window.addEventListener("resize", function () {
		const navbar = document.querySelector(".navbar");
		document.body.style.marginTop = navbar.clientHeight + "px";
	});

	const initialNavbar = document.querySelector(".navbar");
	document.body.style.marginTop = initialNavbar.clientHeight + "px";
});