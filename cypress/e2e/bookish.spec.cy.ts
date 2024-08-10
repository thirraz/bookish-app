import { deleteData, postData } from "../../stub-server/serverOperations"

describe("Bookish application", () => {
	before(() => {
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
		cy.visit("http://localhost:5173/")
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

	it("goes to the detail page", () => {
		cy.visit("http://localhost:5173/")
		cy.get("div.book-item").contains("View details").eq(0).click()
		cy.url().should("include", "/books/1")
		cy.get("h2.book-title").contains("Refactoring")
	})
})
