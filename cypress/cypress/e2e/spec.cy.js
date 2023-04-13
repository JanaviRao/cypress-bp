import {cy} from 'cypress';
import {CalculatorSample} from '../support/locators';
import {AssertionProperties, ErrorMessages} from '../support/assertion'
import {CalculatorLink} from '../support/endpoint';
describe('Sample calculator', () => {
  beforeEach(()=>{
    cy.visit(CalculatorLink.CalculatorLink).click();
  })
  it('tc01_to validate if correctresult appears when two numbers are added', () => {
    cy.get(CalculatorSample.firstNumber).type("3");
    cy.get(CalculatorSample.secondNumber).type("2");
    cy.get(CalculatorSample.dropDown).select('0').invoke("").should(AssertionProperties.Equals, CalculatorSample.add);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should(AssertionProperties.HaveValue,'5');
    
  })
  it('tc02_to validate if correctresult appears when two numbers are subtracted', () => {
    cy.get(CalculatorSample.firstNumber).type("3");
    cy.get(CalculatorSample.secondNumber).type("2");
    cy.get(CalculatorSample.dropDown).select('0').invoke("").should(AssertionProperties.Equals, CalculatorSample.subtract);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should(AssertionProperties.HaveValue,'1');
    
  })
  it('tc03_to validate if correctresult appears when two numbers are multiplied', () => {
    cy.get(CalculatorSample.firstNumber).type("3");
    cy.get(CalculatorSample.secondNumber).type("2");
    cy.get(CalculatorSample.dropDown).select('0').invoke("").should(AssertionProperties.Equals, CalculatorSample.multiply);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should(AssertionProperties.HaveValue,'6');
    
  })
  it('tc04_to validate if correctresult appears when two numbers are divided', () => {
    cy.get(CalculatorSample.firstNumber).type("6");
    cy.get(CalculatorSample.secondNumber).type("2");
    cy.get(CalculatorSample.dropDown).select('0').invoke("").should(AssertionProperties.Equals, CalculatorSample.divide);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should(AssertionProperties.HaveValue,'3');
    
  })
  it('tc05_to validate if correctresult appears when two numbers are concatenated', () => {
    
    cy.get(CalculatorSample.firstNumber).type("3");
    cy.get(CalculatorSample.secondNumber).type("2");
    cy.get(CalculatorSample.dropDown).select('0').invoke("").should(AssertionProperties.Equals, CalculatorSample.concatenate);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should(AssertionProperties.HaveValue,'32');
  })
  it('tc06_to validate if we can divide by 0', () => {
    cy.get(CalculatorSample.firstNumber).type("3");
    cy.get(CalculatorSample.secondNumber).type("0");
    cy.get(CalculatorSample.dropDown).select('0').invoke("").should(AssertionProperties.Equals, CalculatorSample.divide);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should(AssertionProperties.HaveValue,ErrorMessages.Error);
    
  })
  it('tc07_to validate the input if they are numbers', () => {
    
    
  })
  it('tc08_to validate if you can 2 add negative numbers', () => {
    cy.get(CalculatorSample.firstNumber).type("-3");
    cy.get(CalculatorSample.secondNumber).type("-2");
    cy.get(CalculatorSample.dropDown).select('0').invoke("").should(AssertionProperties.Equals, CalculatorSample.add);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should(AssertionProperties.HaveValue,'-5');
    
  })
  it('tc09_to validate if you can subtract 2 negative numbers', () => {
    cy.get(CalculatorSample.firstNumber).type("-1");
    cy.get(CalculatorSample.secondNumber).type("-4");
    cy.get(CalculatorSample.dropDown).select('0').invoke("").should(AssertionProperties.Equals, CalculatorSample.subtract);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should(AssertionProperties.HaveValue,'3');
    
  })
  it('tc10_to validate if you can multiply 2 negative numbers', () => {
    cy.get(CalculatorSample.firstNumber).type("-1");
    cy.get(CalculatorSample.secondNumber).type("-4");
    cy.get(CalculatorSample.dropDown).select('0').invoke("").should(AssertionProperties.Equals, CalculatorSample.multiply);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should(AssertionProperties.HaveValue,'4');
    
  })
  it('tc10_to validate if you can divide 2 negative numbers', () => {
    cy.get(CalculatorSample.firstNumber).type("-1");
    cy.get(CalculatorSample.secondNumber).type("-4");
    cy.get(CalculatorSample.dropDown).select('0').invoke("").should(AssertionProperties.Equals, CalculatorSample.divide);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should(AssertionProperties.HaveValue,'0.25');
    
  })
  })
