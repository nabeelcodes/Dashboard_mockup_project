window.addEventListener("DOMContentLoaded", (e) => {
   e.preventDefault();

   // Sidebar Menu Item set to class=".current" on Click
   const listItems = document.querySelectorAll(".sidebar-menu-item");

   listItems.forEach((eachListItem) => {
      eachListItem.addEventListener("click", function setsCurrent() {
         // first remove .current from all <li>s
         listItems.forEach((eachListItem) => {
            eachListItem.classList.remove("current");
         });
         // then add .current to the current clicked <li>
         this.classList.add("current");
      });
   });

   // Sidebar collapse functionality
   const chevronButton = document.querySelector(".before-collapse");
   const sidebar = document.querySelector("#sidebar");
   const mainSection = document.querySelector("#main");

   function collapsedState() {
      chevronButton.classList.remove("before-collapse");
      chevronButton.classList.add("after-collapse");
      sidebar.classList.add("sidebar-collapsed");
      mainSection.classList.add("main-section-expanded");
   }

   function expandedState() {
      chevronButton.classList.add("before-collapse");
      chevronButton.classList.remove("after-collapse");
      sidebar.classList.remove("sidebar-collapsed");
      mainSection.classList.remove("main-section-expanded");
   }

   chevronButton.addEventListener("click", () => {
      chevronButton.classList.contains("before-collapse") ? collapsedState() : expandedState();
   });
});
