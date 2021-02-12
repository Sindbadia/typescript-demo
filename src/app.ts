let appId = 'abc'
const button = document.querySelector('button')! as HTMLInputElement

// function add(n1: number, n2: number) {
// 	if (n1 + n2 > 0) {
// 		return n1 + n2
// 	}
// }

function clickHandler(message: string) {
	// let userName = 'Max'
	console.log('Clicked', message)
}

//  a comment
button.addEventListener('click', clickHandler.bind(null, 'You are welcome', 3))
