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
});
