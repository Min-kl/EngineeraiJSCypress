class BuildersObjects{

    custmizationcst='.customizeCost > h3 > strong'
    fixedcst='.reusableCost > h3 > strong'
    totalcost2='.maxpriceBox > h3 > strong'
    duration2='.durationBox > h3 > strong'
    donebtn='.nextButton'
    buildcartname='.popHolder > .ng-pristine'
    savebtn='.popHolder > button'
    custmizationcst2='.costDuration > :nth-child(1) > p > strong'
    fixedcst2=':nth-child(2) > p > strong'
    totalcst3='.totalCostContainer > .detailRow > .ng-star-inserted'

    builderpagevalidate(){
        var templatetotalcost="0"
        const totalcostbuilder="₹8,75,508.00"
          var duration="0"
        const expectedweek=" 18 weeks "
        var custmizationcst="0"
        const expectcustmizationcst="₹1,96,910.77"
        var fixcst="0"
        const expectfixedcst="₹6,78,597.00"

        cy.get(this.custmizationcst).then(function($element){
            custmizationcst=$element.text()
            assert.equal(custmizationcst,expectcustmizationcst)

        })

        cy.get(this.fixedcst).then(function($element){
            fixcst=$element.text()
            assert.equal(fixcst,expectfixedcst)

        })

        cy.get(this.totalcost2).then(function($element){
            templatetotalcost=$element.text()
            assert.equal(templatetotalcost,totalcostbuilder)
        })

        cy.get(this.duration2).then(function($element){
            duration=$element.text()
            assert.equal(duration,expectedweek)

        })
        cy.wait(5000)
        cy.get(this.donebtn).click()
    
    }
    paymentsumry(){
        cy.get(this.buildcartname).type("Booking")
        cy.wait(3000)
        cy.get(this.savebtn).click()
        cy.wait(5000)
    }

    

}

export default BuildersObjects
