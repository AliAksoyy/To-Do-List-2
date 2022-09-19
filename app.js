window.addEventListener("load", () => {
   const form = document.querySelector("#new-task-form")
   console.log(form)
   const input = document.querySelector("#new-task-input")
   const list_el = document.querySelector("#tasks")

   form.addEventListener("submit", (e) => {
     console.log(e.target);
   });


})
