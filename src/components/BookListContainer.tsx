import { useEffect, useState } from "react"
import BookList from "./BookList"

function BookListContainer() {
	const [books, setBooks] = useState([])
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)

	useEffect(() => {
		async function fetchData() {
			setError(false)
			setLoading(true)

			try {
				const req = await fetch("http://localhost:8080/books")
				const data = await req.json()
				setBooks(data)
			} catch (err) {
				setError(true)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])
	return <BookList books={books} />
}

export default BookListContainer
