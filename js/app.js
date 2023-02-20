const container = document.querySelector('.container')

const ourTeam = [
	{
		name: 'Wayne Barnett',
		role: 'Founder & CEO',
		pic: './img/wayne-barnett-founder-ceo.jpg',
	},

	{
		name: 'Angela Caroll',
		role: 'Chief Editor',
		pic: './img/angela-caroll-chief-editor.jpg',
	},

	{
		name: 'Walter Gordon',
		role: 'Office Manager',
		pic: './img/walter-gordon-office-manager.jpg',
	},

	{
		name: 'Angela Lopez',
		role: 'Social Media Manager',
		pic: './img/angela-lopez-social-media-manager.jpg',
	},

	{
		name: 'Scott Estrada',
		role: 'Developer',
		pic: './img/scott-estrada-developer.jpg',
	},

	{
		name: 'Barbara Ramos',
		role: 'Graphic Designer',
		pic: './img/barbara-ramos-graphic-designer.jpg',
	},
]

for (let i in ourTeam) {
    console.log(i, ':', ourTeam[i])
    console.log(ourTeam[i].name)
    
    container.innerHTML += `
    <div class="elementTeam">
        <h4>${ourTeam[i].name}</h4>
        <p>${ourTeam[i].role}</p>
        <span>${ourTeam[i].pic}</span>
    </div>
    `
}
