import Stepper from '../Stepper'

describe('<Stepper>', () => {
    it('mounts', () => {
        cy.mount(<Stepper />)
        cy.findByText("Cypress Component Testing")
    })

    it('adds one to count, when plus button is clicked', () => {
        cy.mount(<Stepper />)
        cy.findByRole("button", { name: "increment"}).click()
        cy.dataCy("counter").contains("1")
    })
    it('subtracts one to count, when plus button is clicked', () =>{
        cy.mount(<Stepper />)
        cy.findByRole("button", { name: "decrement"}).click()
        cy.dataCy("counter").contains("-1")
    })
})
