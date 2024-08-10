import BookList from "./components/BookList"
import { useEffect, useState } from "react"

function App() {
	const [books, setBooks] = useState([])

	useEffect(() => {
		async function fetchData() {
			const req = await fetch("http://localhost:8080/books")
			const data = await req.json()
			setBooks(data)
			console.log(data)
		}

		fetchData()
	}, [])

	return (
		<div>
			<h2 data-testing="heading" className="text-red-600 text-8xl">
				Bookish
			</h2>

			<BookList books={books} />
		</div>
	)
}

export default App
