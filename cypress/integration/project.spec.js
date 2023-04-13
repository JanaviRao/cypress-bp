import { cy, describe, it } from 'cypress'

describe('My First Test', () => {
  it('Visits the Cypress homepage', () => {
    cy.visit('https://www.google.com/')
  })
})