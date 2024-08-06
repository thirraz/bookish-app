import { Book } from "../types"

type Props = {
	books: Book[]
}

function BookList({ books }: Props) {
	return (
		<div data-test="book-list">
			{books.map(book => (
				<div key={book.name} className="book-item">
					<h2 className="title">{book.name}</h2>
				</div>
			))}
		</div>
	)
}

export default BookList
