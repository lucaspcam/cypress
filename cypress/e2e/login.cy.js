describe('Login', () => {
    it('Login com SUCESSO', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('equal', 'https://www.saucedemo.com/inventory.html')
    })

    it('Login com FALHA', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('login_invalido')
        cy.get('#password').type('senha_invalida')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]')
          .should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        cy.url().should('equal', 'https://www.saucedemo.com/')
    })
})