const forEach = (array, iteratee) => {
  	Array.prototype.forEach.call(array, iteratee);
}

const select = document.getElementById("example-select");
select.style.display = "none";

generateNewSelect(select);

function generateNewSelect(oldSelect) {
	const newSelect = document.createElement("div");
	const newSelected = document.createElement("div");
	const newOptions = document.createElement("ul");
	newSelect.classList.add(oldSelect.classList.value);
	newSelect.appendChild(newSelected);
	newSelect.appendChild(newOptions);

	forEach(oldSelect,(option, index) => {
		const newOption = document.createElement("li");
		const newOptionClass = option.classList.value;
		if(newOptionClass) newOption.classList.add(newOptionClass);
		newOption.innerHTML = option.innerHTML;
		newOptions.appendChild(newOption);
		if(option.hasAttribute("selected")){
			newSelected.innerHTML = option.innerHTML;
		}
	});
	oldSelect.parentElement.insertBefore(newSelect, oldSelect.nextElementSibling);

	newSelect.addEventListener("click", (event)=>{
		if(event.target.tagName !== "LI") return
		newSelected.innerHTML = event.target.innerHTML;
	}, false)
}







// select.addEventListener("change", (e) => {
// 	console.log(select);
// });