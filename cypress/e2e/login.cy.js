describe("Login", () => {
  it("should login with valid credentials", () => {
    // Arrange

    cy.visit("https://www.saucedemo.com/");

    // Act 

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    //Assert

    cy.url().should("include", "inventory.html");
  });
  it("should login with invalid credentials", () => {

    // Arrange
    cy.visit("https://www.saucedemo.com/");

    // Act 
    cy.get('[data-test="username"]').type("invalid_user");
    cy.get('[data-test="password"]').type("invalid_password");
    cy.get('[data-test="login-button"]').click();

    //Assert
    cy.get('[data-test="error"]').should("contain", "Epic sadface: Username and password do not match any user in this service");
    cy.url().should('eq', "https://www.saucedemo.com/");
  });
})