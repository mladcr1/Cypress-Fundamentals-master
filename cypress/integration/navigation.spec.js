/// <reference types="cypress" />

describe("Navigation", () => {
    it("should navigate to conference session pagina", () => {
        cy.visit("http://localhost:1337/conference");
        cy.get("h1").contains("View Sessions").click();
        cy.url().should("include", "/session");
    });
});