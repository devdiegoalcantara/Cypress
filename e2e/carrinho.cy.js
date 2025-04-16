describe("Carrinho", () => {
  it("Deve adicionar e remover produtos do carrinho", () => {
    // Arrange
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 1);
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.cart_item').should('have.length', 0);

    // Assert
  });
});