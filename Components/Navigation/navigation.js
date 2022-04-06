const btnsubmenus = document.querySelectorAll(".btn-submenu");
// Navigation-submenu js function

function NavBarSubMenu() {
	const submenuIcon = this.querySelector(".icon-submenu");

	const submenu = this.closest(".submenu-container").querySelector(".sub-menu");
	submenuIcon.classList.toggle("fa-chevron-down");
	submenuIcon.classList.toggle("fa-chevron-up");
	submenu.classList.toggle("btn-sub-menu-active");
}
btnsubmenus.forEach((btnsubmenu) =>
	btnsubmenu.addEventListener("click", NavBarSubMenu)
);

// navbar with Hamburger js function
const btnDismiss = document.querySelectorAll(".btn-dismiss");
const drawerToggels = document.querySelectorAll(".drawer-toggle");
function closeDrawer() {
	const drawerClose = this.closest(".drawer");
	drawerClose.classList.remove("active");
}
function openDrawer() {
	const drawerOpen = document.querySelector(this.dataset.drawerTarget);
	drawerOpen.classList.add("active");
}
drawerToggels.forEach((toggle) => toggle.addEventListener("click", openDrawer));
btnDismiss.forEach((btn) => btn.addEventListener("click", closeDrawer));