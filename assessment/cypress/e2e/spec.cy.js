describe("Add To List App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); // change to your app URL
  });

  it("should render Title, input and button in UI", () => {
    cy.contains("Add Items to List").should("be.visible");
    cy.get("input[name='item']").should("exist");
    cy.get("button").contains("Add").should("exist");
  });

  it("should add item to list successfully", () => {
    cy.get("input[name='item']").type("Crio");
    cy.get("button").click();
    cy.contains("Crio").should("be.visible");
    cy.contains("Remove").should("be.visible");
  });
});

