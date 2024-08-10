import { Book } from "../types"

type Props = {
	books: Book[]
}

function BookList({ books }: Props) {
	return (
		<div data-test="book-list">
			{books.map(book => (
				<div key={book.id} className="book-item">
					<h2 className="title">{book.name}</h2>
					<a href={`/books/${book.id}`}>View Details</a>
				</div>
			))}
		</div>
	)
}

export default BookList
