/// <reference types="cypress" />

context('Linear Algebra', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    describe('Initialize linear algebra page', () => {
        describe('Initialize controllers', () => {
            it('Should have row and column values set to zero', () => {
                cy.get('.number-input').should('have.value', '');
                cy.get('.number-input').invoke('attr', 'placeholder').should('equal', '0');
            });

            it('Should disable step forward and step backward buttons when playing', () => {
                cy.get('[data-testid=play]').click();
                cy.get('[data-testid=step-backward]').should('be.disabled');
                cy.get('[data-testid=step-forward]').should('be.disabled');
            });

            it('Should change the icon from play to pause when playing', () => {
                cy.get('[data-testid=play]').click();
                cy.get('[data-testid=play] svg').first().invoke('attr', 'data-icon').should('equal', 'pause');
            });

            it('Should change the icon from pause to play when paused', () => {
                cy.get('[data-testid=play]').click();
                cy.get('[data-testid=play]').click();
                cy.get('[data-testid=play] svg').first().invoke('attr', 'data-icon').should('equal', 'play');
            });

            it('Should reset the state of controls when the stop button is pressed', () => {
                cy.get('[data-testid=play]').click();
                cy.get('[data-testid=step-backward]').should('be.disabled');
                cy.get('[data-testid=step-forward]').should('be.disabled');
                cy.get('[data-testid=stop]').click();
                cy.get('[data-testid=step-backward]').should('be.enabled');
                cy.get('[data-testid=step-forward]').should('be.enabled');
                cy.get('[data-testid=play] svg').first().invoke('attr', 'data-icon').should('equal', 'play');
            });

        });
    });
})