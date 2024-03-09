import BuildersObjects from "./BuildersObjects"

class PaymentSummaryObject{
    custmizationcst2='.costDuration > :nth-child(1) > p > strong'
    fixedcst2=':nth-child(2) > p > strong'
    totalcst3='.totalCostContainer > .detailRow > .ng-star-inserted'


    paymentsumryvalidate(){
        var custmizationcost="0"
        var fixedcost="0"
        var totalcost="0"

        const expectcustmizationcst=" ₹1,96,910.77 "
        const expectfixedcst=" ₹6,78,596.95 "
        const totalcostbuilder=" ₹8,75,507.71"

        cy.get(this.custmizationcst2).then(function($element){
            custmizationcost=$element.text()
            assert.equal(custmizationcost,expectcustmizationcst)
        })

        cy.get(this.fixedcst2).then(function($element){
            fixedcost=$element.text()
            assert.equal(fixedcost,expectfixedcst)
        })

        cy.get(this.totalcst3).then(function($element){
            totalcost=$element.text()
            assert.equal(totalcost,totalcostbuilder)
        })
    }
}

export default PaymentSummaryObject