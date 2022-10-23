/// <reference types="cypress"/>

export class languagesPage {

    languagesPage() {
        return cy.get('a[href*="/cmp/contributor/userprofile/languages"]', {timeout:10000})
    }

    editPrimaryLanguage() {
       return cy.get('.col-auto > .row')
    }

    languageTextbox() {
        return cy.get('.sui-c-floating-label-dropdown.sui-c-input-dropdown__single-value.css-1uccc91-singleValue',{timeout:10000})
    }

    savePrimaryLang() {
        return cy.get('.sui-gap-2 > .sui-c-btn-primary')
            .should('be.enabled')
            .and('have.text', 'Save')
    }

    addOtherLanguage() {
        return cy.get('.col-lg-2 > .sui-rounded', {timeout:10000})
            .should('be.enabled')
            .and('have.text', 'Add')
    }

    addLanguageTextbox() {
        return cy.get('#new-language-form > .col-12 > :nth-child(1) > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-c-input-dropdown__value-container')
    }

    saveOtherLang() {
        return cy.get('.sui-c-btn-primary')
            .and('have.text', 'Save')
    }

    addLanguageProficiencyTextbox() {
        return cy.get('.figma-input-field-margin > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-c-input-dropdown__value-container')
    }
}