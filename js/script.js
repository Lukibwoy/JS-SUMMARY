const commentsAPI = 'https://jsonplaceholder.typicode.com/comments'

fetch(commentsAPI)
	.then(response => response.json())
	.then(data => {
		const tableBody = document.querySelector('table tbody')

		for (const comment of data) {
			const newRow = document.createElement('tr')
			const name = document.createElement('td')
			const email = document.createElement('td')
			const body = document.createElement('td')
			const action = document.createElement('td')
			const deleteButton = document.createElement('button')
			const editButton = document.createElement('button')
			

			name.textContent = comment.name
			email.textContent = comment.email
			body.textContent = comment.body
			editButton.textContent = 'Edit'
			deleteButton.textContent = 'Delete'

			const deleteRow = row => {
				row.remove(row)
			}

			deleteButton.addEventListener('click', () => {
				deleteRow(newRow)
			})

			action.appendChild(editButton)
			action.appendChild(deleteButton)
			newRow.appendChild(name)
			newRow.appendChild(email)
			newRow.appendChild(body)
			newRow.appendChild(action)
			tableBody.appendChild(newRow)
		}
	})
	.catch(error => console.error(error))

/////////////////////////////////////////////////////////////////////

const input = document.querySelector('.searchColor')
const li = document.querySelectorAll('li')

const searchColor = e => {
	const text = e.target.value.toLowerCase()
	console.log(text)

	li.forEach(el => {
		const task = el.textContent

		if (task.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}

input.addEventListener('keyup', searchColor)

///////////////////////////////////////////////////////////////////////////

// const container = document.querySelector('.grid-container');

// fetch('https://api.unsplash.com/photos/random/?client_id=YOUR_ACCESS_KEY&count=10')
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((photo) => {
//       const item = document.createElement('div');
//       item.classList.add('grid-item');

//       const img = document.createElement('img');
//       img.src = photo.urls.regular;
//       img.alt = photo.alt_description;

//       const author = document.createElement('div');
//       author.classList.add('author')
//       author.textContent = `By ${photo.user.name}`;

//       item.appendChild(img);
//       item.appendChild(author);

//       container.appendChild(item);
//     });
// })
// .catch((error) => console.log(error));

// /Zad.5///////////////////////////////////////////////////////////////////////////

const legoImg = document.querySelector('.lego')
let isZoomed = false

function zoomAndMoveImg() {
	isZoomed = !isZoomed
	legoImg.classList.toggle('zoom', isZoomed)
	if (isZoomed) {
		legoImg.addEventListener('mousemove', move)
	} else {
		legoImg.removeEventListener('mousemove', move)
	}
}

function move() {
	legoImg.addEventListener('mousemove', e => {
		if (isZoomed) {
			legoImg.style.backgroundPositionX = -e.offsetX + 'px'
			legoImg.style.backgroundPositionY = -e.offsetY + 'px'
		}
	})
}

legoImg.addEventListener('click', zoomAndMoveImg)

// ZAD.6////////////////////////////////////////////////////////////////////////

const meetings = [
	{
		day: 'Poniedziałek',
		date: '2022-05-09',
		time: '10:00',
		name: 'Spotkanie z XYZ',
		client: 'Jan Kowalski',
	},
	{
		day: 'Wtorek',
		date: '2022-05-10',
		time: '12:00',
		name: 'Spotkanie z ABC',
		client: 'Anna Nowak',
	},
	{
		day: 'Środa',
		date: '2022-05-11',
		time: '14:00',
		name: 'Spotkanie z KLM',
		client: 'Adam Nowakowski',
	},
	{
		day: 'Czwartek',
		date: '2022-05-12',
		time: '16:30',
		name: 'Spotkanie z DEF',
		client: 'Ewa Nowakowska',
	},
	{
		day: 'Piątek',
		date: '2022-05-13',
		time: '9:00',
		name: 'Spotkanie z GHI',
		client: 'Piotr Kowalczyk',
	},
]

const meetingsByTimeAndDay = {}
meetings.forEach(meeting => {
	const key = `${meeting.time} ${meeting.day}`
	meetingsByTimeAndDay[key] = meeting
})
