/// <reference types="cypress"/>

export class loginPage {

    login_textbox_email = 'Email'
    login_textbox_password = 'Password'
    login_button_continue = '.sc-eCApnc > .sui-rounded'

    enterEmail(email) {
        cy.contains(this.login_textbox_email).type(email)
            .should('have.text', 'Email')
            .and('be.visible')
    }

    enterPassword(password) {
        cy.contains(this.login_textbox_password).type(password)
            .should('have.text', 'Password')
            .and('be.visible')
    }

    clickContinue() {
        return cy.get(this.login_button_continue)

    }
    

}