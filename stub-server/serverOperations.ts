async function postData(bookData: { name: string; id: number }) {
	const res = await fetch("http://localhost:8080/books?_cleanup=true", {
		method: "POST",
		body: JSON.stringify(bookData),
		headers: { "Content-Type": "application/json" }
	})
	const data = await res.json()

	return data
}

async function deleteData() {
	const res = await fetch("http://localhost:8080/books?_cleanup=true", {
		method: "DELETE"
	})
	const data = await res.json()

	return data
}

export { deleteData, postData }
