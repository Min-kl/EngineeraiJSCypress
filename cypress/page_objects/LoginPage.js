class LoginPage{

    //locators
    chooseBaseBtn='.builderNowCta'
    cancelIconNatashaChat='.topPart > .closeButton > .icon-cancel'
    signInBtn='li > button'
   userNameTextbox='#loginEmailInput'
   passwordTextbox="//input[@type='password']"
    loginBtn="//button[contains(text(),'Sign in')]"
   userProfile='.userProfile'

   //steps
   goToLoginForm(){
        cy.get(this.chooseBaseBtn).click()
        cy.get(this.cancelIconNatashaChat).click()
        cy.get(this.signInBtn).click()
   }
   login(username,password){
    cy.get(this.userNameTextbox).type(username)
    cy.xpath(this.passwordTextbox).type(password)
    cy.xpath(this.loginBtn).click()
    cy.get(this.userProfile).should('be.visible')
   }

}
export default LoginPage