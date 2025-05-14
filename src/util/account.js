const inputs = document.querySelectorAll(".input");
const editBtn = document.getElementById("edit-button");
const cancelBtn = document.getElementById("cancel-button");
const finishBtn = document.getElementById("finish-button");
const originalData = Array.from(inputs).map((input) => input.value);

editBtn.addEventListener("click", () => {
  console.log("btn clicked");
  inputs.forEach((input) => (input.disabled = false));
  cancelBtn.classList.remove("hidden");
  finishBtn.classList.remove("hidden");
  editBtn.classList.add("hidden");
});

cancelBtn.addEventListener("click", () => {
  console.log("btn clicked");
  inputs.forEach((input) => (input.disabled = true));
  cancelBtn.classList.add("hidden");
  finishBtn.classList.add("hidden");
  editBtn.classList.remove("hidden");
});
finishBtn.addEventListener("click", () => {
  inputs.forEach((input) => (input.disabled = true));

  inputs.forEach((input, index) => {
    originalData[index] = input.value;
  });

  cancelBtn.classList.add("hidden");
  finishBtn.classList.add("hidden");
  editBtn.classList.remove("hidden");

  console.log("Saved data:", originalData);
});
