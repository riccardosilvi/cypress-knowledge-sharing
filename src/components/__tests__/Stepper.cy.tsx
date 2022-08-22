import Stepper from '../Stepper'

describe('<Stepper>', () => {
    it('mounts', () => {
        cy.mount(<Stepper />)
        cy.findByText("Cypress Component Testing")
    })
})
