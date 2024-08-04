describe("Bookish application", () => {
	it("Visits the bookish", () => {
		cy.visit(" http://localhost:5173/")
		cy.get('h2[data-testing="heading"]').contains("Bookish")
	})
})
