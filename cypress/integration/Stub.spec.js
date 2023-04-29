/// <reference types="cypress" />
const thursdaySessionData = {
    data: {
        intro: [
            {
                id:"78170",
                title:"A Modern Architectural Review of Adventure Games",
                startsAt:"8:30",
                day:"Friday",
                room:"Jupiter",
                level:"Introductory and overview",
                speakers: [
                    {
                        id:"37313769-11ae-4245-93b3-e6e60d5d187c",
                        name:"Roberto Moore",
                        __typename:"Speaker"
                    },
                ],
                __typename:"Session",
            },
        ],
    },
};

describe("Sessions page", () => {
    beforeEach(() => {
        cy.visit("/conference");
        cy.get("h1").contains("View Sessions").click();
        // define aliases here

        cy.get("[data-cy=Thursday]").as("ThursdayBtn");

    });

    it("should filter sessions and only display Thursday sessions when Thursday button is clicked", () => {
        cy.intercept("POST", "http://localhost:4000/graphql", thursdaySessionData).as("getSessionInfo");
        cy.get("@ThursdayBtn").click();
        cy.wait("@getSessionInfo");
        // Assertions
        //Assert there are 100 sessions after Thursday button is clicked
        cy.get("[data-cy=day]").should("have.length", 0);
        cy.get("[data-cy=day]").contains("Thursday").should("be.visible");
    });
});