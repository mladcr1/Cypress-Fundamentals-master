/// <reference types="cypress" />

describe("Navigation", () => {
    it("should navigate to conference session page", () => {
        cy.visit("http://localhost:1337/conference");
        cy.get("h1").contains("View Sessions").click();
        cy.url().should("include", "/session");
        
        cy.request("https://jsonplaceholder.cypress.io/comments").as("comments");
        cy.get("@comments").should((response) => {
          expect(response.body).to.have.length(500);
          expect(response).to.have.property("headers");
          expect(response).to.have.property("duration");
          expect(response).to.have.property("duration");
        });
    });
});