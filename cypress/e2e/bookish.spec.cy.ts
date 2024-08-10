import { deleteData, postData } from "../../stub-server/serverOperations"

describe("Bookish application", () => {
	before(() => {
		async function deleteData() {
			const res = await fetch("http://localhost:8080/books?_cleanup=true", {
				method: "DELETE"
			})
			const data = await res.json()

			return data
		}

		return deleteData()
	})

	afterEach(() => {
		return deleteData()
	})

	beforeEach(() => {
		const books = [
			{ name: "Refactoring", id: 1 },
			{ name: "Domain-driven design", id: 2 },
			{ name: "Building Microsservices", id: 3 }
		]

		return books.map(item => postData(item))
	})

	it("visits the bookish", () => {
		cy.visit(" http://localhost:5173/")
		cy.get('h2[data-testing="heading"]').contains("Bookish")
	})

	it("shows a book list", () => {
		cy.visit("http://localhost:5173/")
		cy.get('div[data-test="book-list"]').should("exist")
		cy.get("div.book-item").should(books => {
			expect(books).to.have.length(3)
			const titles = [...books].map(x => x.querySelector("h2").innerHTML)
			expect(titles).to.deep.equal([
				"Refactoring",
				"Domain-driven design",
				"Building Microservices"
			])
		})
	})
})
