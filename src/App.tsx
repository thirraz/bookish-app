import BookListContainer from "./components/BookListContainer"

function App() {
	return (
		<div>
			<h2 data-testing="heading" className="text-red-600 text-8xl">
				Bookish
			</h2>

			<BookListContainer />
		</div>
	)
}

export default App
