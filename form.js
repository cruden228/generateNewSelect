const forEach = (array, iteratee) => {
  	Array.prototype.forEach.call(array, iteratee);
}
class Select {
	constructor(configs){
		this.configs = configs;
		this.select = document.querySelector(configs.el);
	}

	generateNewSelect() {
		const originalSelect = this.select;
		const newSelect = document.createElement("div");
		const newSelected = document.createElement("div");
		const newOptions = document.createElement("ul");
		newSelect.classList.add(originalSelect.classList.value);
		newSelect.appendChild(newSelected);
		newSelect.appendChild(newOptions);

		forEach(originalSelect.children,(option, index) => {
			const newOption = document.createElement("li");
			const newOptionClass = option.classList.value;
			if(newOptionClass) newOption.classList.add(newOptionClass);
			newOption.innerHTML = option.innerHTML;
			newOptions.appendChild(newOption);
			if(option.hasAttribute("selected")){
				newSelected.innerHTML = option.innerHTML;
			}
		});

		originalSelect.style.display = "none";
		originalSelect.parentElement.insertBefore(newSelect, originalSelect.nextElementSibling);

		newSelect.addEventListener("click", (event)=>{
			if(event.target.tagName !== "LI") return
			newSelected.innerHTML = event.target.innerHTML;
		}, false)
	}
}

new Select( { el: "#example-select" } ).generateNewSelect();







// select.addEventListener("change", (e) => {
// 	console.log(select);
// });