//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


//
//
// Run this code when a form is submitted from 'which-prototype'
router.post('/which-prototype', function (req, res) {

  // Make a variable and give it the value from 'which-prototype'
  var whichPrototype = req.session.data['which-prototype']

  // Check which prototype type version to run
  if (whichPrototype == "1.0"){
    res.redirect('/prototype-1/index')
  } else {
    res.redirect('/index-error')
  }

})
//
//
//


//
//
// Run this code when a form is submitted from 'threats-type'
router.post('/threats-type-answer', function (req, res) {

  var whichPrototype = req.session.data['which-prototype']

  //
  // START Prototype 1 routes
  //
  if (whichPrototype == "1.0"){
  
    // Make a variable and give it the value from 'which-threat'
    var whichThreat = req.session.data['which-threat']
  
    // Check whether the variable matches a condition
    if (whichThreat == "sanctions"){
      res.redirect('/prototype-1/sanctions')
    } else if (whichThreat == "economic-crime"){
      res.redirect('/prototype-1/checks')
    } else  if (whichThreat == "community-engagement-principles"){
        res.redirect('/prototype-1/community-engagement-principles')
    } else {
      res.redirect('/prototype-1/threats-error')
    }
  
  } 
  //
  // END Prototype 1 routes
  //

})



//
//
// Run this code when a form is submitted from 'threats-type'
router.post('/which-check-answer', function (req, res) {

  var whichPrototype = req.session.data['which-prototype']

  //
  // START Prototype 1 routes
  //
  if (whichPrototype == "1.0"){
  
    // Make a variable and give it the value from 'which-threat'
    var whichCheck = req.session.data['which-check']
    var whichGrantScheme = req.session.data['grantsSchemeDetail']
    var whichContract = req.session.data['contractsDetail']
  
    // Check whether the variable matches a condition
    if (whichCheck == "grants"){
      if (whichGrantScheme == ""){
        res.redirect('/prototype-1/checks-grants-error')
      } else {
        res.redirect('/prototype-1/how-many-orgs')
      }
    } else if (whichCheck == "contracts"){
      if (whichContract == ""){
        res.redirect('/prototype-1/checks-contracts-error')
      } else {
        res.redirect('/prototype-1/how-many-orgs')
      }
    } else if (whichCheck == "threats") {
        res.redirect('/prototype-1/how-many-orgs')
    } else {
      res.redirect('/prototype-1/checks-error')
    }
  
  }
  //
  // END Prototype 1 routes
  //

})



//
//
// Run this code when a form is submitted from 'how-many-orgs'
router.post('/how-many-orgs', function (req, res) {

  var whichPrototype = req.session.data['which-prototype']

  //
  // START Prototype 1 routes
  //
  if (whichPrototype == "1.0"){

    // Make a variable and give it the value from 'how-many-orgs'
    var howManyOrgs = req.session.data['how-many-orgs']
  
    // Check whether the variable matches a condition
    if (howManyOrgs == "one"){
      res.redirect('/prototype-1/economic-crime-checks')
    } else if (howManyOrgs == "two-or-more"){
        res.redirect('/prototype-1/two-or-more')
    } else {
      res.redirect('/prototype-1/how-many-orgs-error')
    }
  
  }
  //
  // END Prototype 1 routes
  //

})



//
// 
// Run this code when a form is submitted from 'economic-crime-checks'
router.post('/economic-crime-checks', function (req, res) {

  var whichPrototype = req.session.data['which-prototype']

  //
  // START Prototype 1 routes
  //
  if (whichPrototype == "1.0"){

    // Make a variable and give it the value from 'which-check'
    var whichCheck = req.session.data['which-check']
    var organisationNameInput = req.session.data['organisationName']
    var charityCommissionInput = req.session.data['charityCommissionRegisteredNumber']
    var CompanysHouseInput = req.session.data['companysHouseRegisteredNumber']

    var addressLine1Input = req.session.data['addressLine1']
    var addressTownInput = req.session.data['addressTown']
    var addressPostcodeInput = req.session.data['addressPostcode']


    // Check whether the variable matches a condition
    if (organisationNameInput == "" && charityCommissionInput == "" && CompanysHouseInput == "" && addressLine1Input == "" && addressTownInput == "" && addressPostcodeInput == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-1')
    } else if (charityCommissionInput == "" && CompanysHouseInput == "" && addressLine1Input == "" && addressTownInput == "" && addressPostcodeInput == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-2')
    } else if (organisationNameInput == "" && addressLine1Input == "" && addressTownInput == "" && addressPostcodeInput == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-3')
    } else if (addressLine1Input == "" && addressTownInput == "" && addressPostcodeInput == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-4')
    } else if (addressTownInput == "" && addressPostcodeInput == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-5')
    } else if (organisationNameInput == "" && addressPostcodeInput == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-9')
    } else if (charityCommissionInput == "" && CompanysHouseInput == "" && addressPostcodeInput == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-12')
    } else if (charityCommissionInput == "" && CompanysHouseInput == "" && addressTownInput == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-11')
    } else if (charityCommissionInput == "" && CompanysHouseInput == "" && addressLine1Input == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-10')
    } else if (addressPostcodeInput == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-6')
    } else if (organisationNameInput == "" && addressTownInput == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-8')
    } else if (addressTownInput == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-13')
    } else if (addressLine1Input == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-14')
    } else if (organisationNameInput == ""){
      res.redirect('/prototype-1/economic-crime-checks-errors-7')
    } else {
      if (whichCheck == "threats"){
        res.redirect('/prototype-1/results-threats')
      } else {
          res.redirect('/prototype-1/results')
      }  
    } 

  }
  //
  // END Prototype 1 routes
  //

})