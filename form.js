class Select {
	constructor(object){
		this.object = object;
		this.forEach = (array, iteratee) => {
		  	Array.prototype.forEach.call(array, iteratee);
		}
		this.select = document.getElementById(object.el);
	}

	generateNewSelect() {
		const oldSelect = this.select;
		const newSelect = document.createElement("div");
		const newSelected = document.createElement("div");
		const newOptions = document.createElement("ul");
		newSelect.classList.add(oldSelect.classList.value);
		newSelect.appendChild(newSelected);
		newSelect.appendChild(newOptions);

		this.forEach(oldSelect.children,(option, index) => {
			const newOption = document.createElement("li");
			const newOptionClass = option.classList.value;
			if(newOptionClass) newOption.classList.add(newOptionClass);
			newOption.innerHTML = option.innerHTML;
			newOptions.appendChild(newOption);
			if(option.hasAttribute("selected")){
				newSelected.innerHTML = option.innerHTML;
			}
		});

		oldSelect.style.display = "none";
		oldSelect.parentElement.insertBefore(newSelect, oldSelect.nextElementSibling);

		newSelect.addEventListener("click", (event)=>{
			if(event.target.tagName !== "LI") return
			newSelected.innerHTML = event.target.innerHTML;
		}, false)
	}
}

new Select( { el: "example-select" } ).generateNewSelect();







// select.addEventListener("change", (e) => {
// 	console.log(select);
// });