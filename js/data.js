// 1. creare il contenitore di html in cui inserire le icone
// 2. creare l'innerHTML dove inserire il codice dell'icona
	// 2.1 creare un ciclo per mettere in ordine corretto gli elementi degli oggetti
	// 2.2 aggiunta di condizione per il cmabio di colore
// 3. creare il css per i contenitori delle icone


const icons = [

		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},

		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},

		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},

		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},

		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},

		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},

		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},

		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas',
			color: 'green'
		},

		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas',
			color: 'green'
		},

		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas',
			color: 'green'
		},

		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas',
			color: 'green'
		},

		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas',
			color: 'blue'
		},

		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas',
			color: 'blue'
		},

		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas',
			color: 'blue'
		},

		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas',
			color: 'blue'
		}
];

// container
const containerBig = document.getElementById("container");
const scrollbar = document.querySelector("scroll");

// creazione html
let iconCont = document.createElement("div");
icons.forEach((structure) => {
	if (structure.color === `orange`) {
		iconCont.innerHTML += `
			<div class="square_icon">
				<div class="icon_orange icon_size">
					<i class="${structure.family} ${structure.prefix}${structure.name}"></i>
				</div>
				<p class="icon_text">
					${structure.name}
				</p>
			</div>
		`;
	} else if (structure.color === `green`) {
		iconCont.innerHTML += `
			<div class="square_icon">
				<div class="icon_green icon_size">
					<i class="${structure.family} ${structure.prefix}${structure.name}"></i>
				</div>
				<p class="icon_text">
					${structure.name}
				</p>
			</div>
		`;
	} else {
		iconCont.innerHTML += `
			<div class="square_icon">
				<div class="icon_blue icon_size">
					<i class="${structure.family} ${structure.prefix}${structure.name}"></i>
				</div>
				<p class="icon_text">
					${structure.name}
				</p>
			</div>
		`;
	}
	
});

containerBig.appendChild(iconCont);
