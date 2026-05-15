describe('Teste com Sauce Demo', () => {
    it('Deve realizar login e verificar url', () => {

        // Acessar a página de login do Sauce Demo
        cy.visit('https://www.saucedemo.com')

        // Preencher o formulário de login (usuário e senha)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')

        // Clicar no botão 'Login'
        cy.get('#login-button').click()

        // Verificar se a URL contém '/inventory.html'
        cy.url().should('include', '/inventory.html')
    })
})
