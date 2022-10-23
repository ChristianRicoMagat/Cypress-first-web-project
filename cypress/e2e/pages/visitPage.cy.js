/// <reference types="cypress"/>

export class visitPage {

    mainUrl = 'https://www.telusinternational.ai/cmp'
    logInUrl = 'https://www.telusinternational.ai/cmp/login'
    languagesUrl = 'https://www.telusinternational.ai/cmp/contributor/userprofile/languages'

    myApp() {
        cy.visit(this.mainUrl, {timeout:50000})
    }

    page_languages() {
        return cy.url().should('eq', this.languagesUrl)
    }

    loginPage() {
        return cy.url().should('eq', this.logInUrl)
    }

}