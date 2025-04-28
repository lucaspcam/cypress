describe('Cart', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('Adicionar produto ao carrinho com SUCESSO', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('.shopping_cart_badge')
          .should('be.visible')
          .and('have.text', '1')

        cy.get('#shopping_cart_container').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })

    it('Remover produtos do carrinho com SUCESSO ', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge')
          .should('be.visible')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    })
})