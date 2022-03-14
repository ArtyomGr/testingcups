export const I = () => {
    return{
        do: () => {
            return {
                enterWorkingArea: (selector) => {cy.visit('https://testingcup.pgs-soft.com/')
                    .get(selector)
                    .click()
                },
                clickButton: (selector) => {
                    cy.get(selector)
                        .click()
                },
                typeText: (selector, text) => {
                    cy.get(selector)
                        .clear()
                        .type(text)
                },
                forceclickBtn: (selector) =>{
                    cy.get(selector)
                        .click({force:true})
                }
            }
        },
        must: () => {
            return{
                checkText: (selector,text) => {
                    cy.get(selector)
                        .should('contain', text)
                },
                checkDisability: (selector) => {
                    cy.get(selector)
                        .should('be.disabled')
                },
                checkNonDisability: (selector) =>{
                    cy.get(selector)
                        .should('not.be.disabled')
                },
                checkExistance: (selector) =>{
                    cy.get(selector)
                        .should('exist')
                }
            }
        }
    }
}