class DeliveryObject{

    //locators
    selecttemplate=':nth-child(1) > .templateCard > .header > .title > .titleText > span'
    buildnowbtn='.getStart'
    totalcst='.maxpriceBox > h3 > strong'
    duration='.durationBox > h3 > strong'
    plndelivry='.nextButton'

    //steps
    selecttemp()
    {
       cy.get(this.selecttemplate).click()
       cy.get(this.buildnowbtn).click()

    }

    deliverypagevalidate(){
        var templatetotalcost="0"
      const totalcostbuilder="₹8,75,508.00"
        var duration="0"
      const expectedweek=" 18 weeks "
      cy.wait(5000)
      cy.get(this.totalcst).then(function($element)
      {
        templatetotalcost=$element.text()
        assert.equal(templatetotalcost,totalcostbuilder)
      })
      cy.wait(5000)
      cy.get(this.duration).then(function($element)
      {
        duration=$element.text()
        assert.equal(duration,expectedweek)
      })
      cy.wait(10000)
      cy.get(this.plndelivry).click()
    }

}

export default DeliveryObject