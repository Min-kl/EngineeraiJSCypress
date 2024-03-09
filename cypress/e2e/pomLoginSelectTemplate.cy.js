/// <reference types="cypress"/>
import LoginPage from "../page_objects/LoginPage"
import DeliveryObject from "../page_objects/DeliveryObject"
import BuildersObjects from "../page_objects/BuildersObjects"
import PaymentSummaryObject from "../page_objects/PaymentSummaryObject"

describe('Login & Select template E2E', () => {
    let jsonData
   before(()=>{
    cy.fixture('data').then(function (data){
        cy.log(data.username)
        jsonData=data
        cy.log(jsonData.username)
    })
   }) 
   beforeEach(()=>{
       
      cy.visit(Cypress.env('appUrl'))

      const loginPage=new LoginPage()
        loginPage.goToLoginForm()
        loginPage.login(jsonData.username,jsonData.password)
    })

    /*it("Verify login with correct credentials",()=>{
        const loginPage=new LoginPage()
        loginPage.goToLoginForm()
        loginPage.login(jsonData.username,jsonData.password)
    })*/
    
    it("TemplateSelection",()=>{
        const deliverypage=new DeliveryObject()
        const builderspage=new BuildersObjects()
        const paymentsumpage=new PaymentSummaryObject()
        deliverypage.selecttemp()
        //cy.wait(10000)
        deliverypage.deliverypagevalidate()
        
        
       // cy.wait(10000)
        builderspage.builderpagevalidate()
       // cy.wait(5000)
        builderspage.paymentsumry()
        //cy.wait(5000)
        paymentsumpage.paymentsumryvalidate()
        cy.wait(5000)

    })

    
    

})
