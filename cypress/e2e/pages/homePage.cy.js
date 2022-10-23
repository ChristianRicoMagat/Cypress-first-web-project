/// <reference types="cypress"/>

export class homePage {

    returnToHome() {
        const homeButton = cy.get('.sui-text-darkGray > [href="/cmp/contributor/dashboard"]', { timeout: 10000 })

        homeButton.click()
            .should('have.attr', 'href', '/cmp/contributor/dashboard')
            .and('have.text', 'Home')
    }

    userAvatar() {
        return cy.get('.sui-nav-settings')
    }

    myProfile() {
        return cy.get('.sui-pb-4 > :nth-child(2) > .sui-cursor-pointer')
            .should('have.attr', 'href', '/cmp/contributor/userprofile/basic-info')
            .and('have.text', 'My Profile')
    }

    signOut() {
        return cy.get(':nth-child(3) > .sui-cursor-pointer > .sui-ml-sm')
    }

}