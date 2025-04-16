describe("Carrinho de Compras", () => {
  it("adicionar produtos ao carrinho", () => {
    // Arrange

    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Act 

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();


    //Assert

    cy.get('.shopping_cart_badge').should('contain', '2');
    cy.get('.shopping_cart_link').click();

    cy.contains("Sauce Labs Backpack").should("be.visible");
    cy.contains("Sauce Labs Bike Light").should("be.visible");
  });
})