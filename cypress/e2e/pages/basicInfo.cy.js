/// <reference types="cypress"/>

export class basicInfo {

    editContactInfo() {
        return cy.get('.figma-section-header-text-margin > .col-lg-2 > .sui-rounded')
    }

    saveContactInfo() {
        return cy.get('.figma-form-buttons-margin > .sui-gap-2 > .sui-c-btn-primary')
    }

    editLastName() {
        return cy.contains('Last name')
    }

    editLocation() {
        return cy.get(':nth-child(1) > :nth-child(1) > .col-lg-2 > .sui-rounded')
    }

    saveLocationInfo() {
        return cy.get('.col-auto > .pl-0 > .sui-gap-2 > .sui-c-btn-primary')
    }

    editPostalCode() {
        return cy.contains('Postal code')
    }
}