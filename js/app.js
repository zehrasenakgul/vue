const toDoText = document.querySelector("#toDoText");
const addBtn = document.querySelector("#addBtn");
const toDoList = document.querySelector("#toDoList");

addBtn.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.textContent = toDoText.value;
  toDoList.append(listItem);
});
