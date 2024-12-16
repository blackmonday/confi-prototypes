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
  //var modUser = req.session.data['view-as-mod']
  var whichUser = req.session.data['which-user']

  // Check which prototype type version to run
  if (whichPrototype == "1.0"){
    res.redirect('/prototype-1/index')

  } else if (whichPrototype == "2.0"){
    res.redirect('/prototype-2/index')

  } else if (whichPrototype == "3.0"){
    if (whichUser == "user1"){
      req.session.data['contracts-text'] = "View and manage your contracts and suppliers"
      req.session.data['threats-text'] = "Run sanction checks on individuals and organisations"
      req.session.data['grants-text'] = "View and manage your grant schemes and applicants"
      res.redirect('/prototype-3/index')
    } else if (whichUser == "user2"){
      req.session.data['threats-text'] = "Conduct due diligence checks on entities."
      res.redirect('/prototype-3/index')
    } else {
      res.redirect('/index-error-v3')
    }

  } else if (whichPrototype == "4.0"){
    if (whichUser == "user1"){
      req.session.data['contracts-text'] = "View and manage your contracts and suppliers"
      req.session.data['threats-text'] = "Run sanction checks on individuals and organisations"
      req.session.data['grants-text'] = "View and manage your grant schemes and applicants"
      res.redirect('/prototype-4/index')
    } else if (whichUser == "user2"){
      req.session.data['threats-text'] = "Conduct due diligence checks on entities."
      res.redirect('/prototype-4/index')
    } else {
      res.redirect('/index-error-v4')
    }

  } else if (whichPrototype == "5.0"){
    if (whichUser == "user1"){
      req.session.data['contracts-text'] = "View and manage your contracts and suppliers"
      req.session.data['threats-text'] = "Run sanction checks on individuals and organisations"
      req.session.data['grants-text'] = "View and manage your grant schemes and applicants"
      res.redirect('/prototype-5/index')
    } else if (whichUser == "user2"){
      req.session.data['threats-text'] = "Conduct due diligence checks on entities."
      res.redirect('/prototype-5/index')
    } else {
      res.redirect('/index-error-v5')
    }

  } else{
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
  
  //
  // START Prototype 2 routes
  //
  } else if (whichPrototype == "2.0"){
  
    // Make a variable and give it the value from 'which-threat'
    var whichThreat = req.session.data['which-threat']
  
    // Check whether the variable matches a condition
    if (whichThreat == "sanctions"){
      res.redirect('/prototype-2/sanctions')
    } else if (whichThreat == "economic-crime"){
      res.redirect('/prototype-2/how-many-orgs')
    } else  if (whichThreat == "community-engagement-principles"){
        res.redirect('/prototype-2/community-engagement-principles')
    } else {
      res.redirect('/prototype-2/threats-error')
    }
  
  //
  // START Prototype 3 routes
  //
  } else if (whichPrototype == "3.0"){
    
    // Make a variable and give it the value from 'which-threat'
    var whichThreat = req.session.data['which-threat']

    // Check whether the variable matches a condition
    if (whichThreat == "sanctions"){
      res.redirect('/prototype-3/sanctions')
    } else if (whichThreat == "economic-crime"){
      res.redirect('/prototype-3/results-history')
    } else {
      res.redirect('/prototype-3/threats-error')
    }

  //
  // START Prototype 4 routes
  //
  } else if (whichPrototype == "4.0"){
      
    // Make a variable and give it the value from 'which-threat'
    var whichThreat = req.session.data['which-threat']

    // Check whether the variable matches a condition
    if (whichThreat == "sanctions"){
      res.redirect('/prototype-4/sanctions')
    } else if (whichThreat == "economic-crime"){
      res.redirect('/prototype-4/results-history')
    } else {
      res.redirect('/prototype-4/threats-error')
    }

  //
  // START Prototype 5 routes
  //
  } else if (whichPrototype == "5.0"){
        
    // Make a variable and give it the value from 'which-threat'
    var whichThreat = req.session.data['which-threat']

    // Check whether the variable matches a condition
    if (whichThreat == "sanctions"){
      res.redirect('/prototype-5/sanctions')
    } else if (whichThreat == "economic-crime"){
      res.redirect('/prototype-5/results-history')
    } else {
      res.redirect('/prototype-5/threats-error')
    }

  }

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
  
  //
  // START Prototype 2 routes
  //
  } else if (whichPrototype == "2.0"){

    // Make a variable and give it the value from 'how-many-orgs'
    var howManyOrgs = req.session.data['how-many-orgs']
    var orgLocation = req.session.data['org-location']
  
    // Check whether the variable matches a condition
    if (howManyOrgs == "one"){
      if (orgLocation == "uk"){
        res.redirect('/prototype-2/economic-crime-checks')
      } else if (orgLocation == "international") {
        res.redirect('/prototype-2/economic-crime-checks-international')
      } else {
        res.redirect('/prototype-2/how-many-orgs-error-2')
      }
    } else if (howManyOrgs == "two-or-more"){
        res.redirect('/prototype-2/two-or-more')
    } else {
      res.redirect('/prototype-2/how-many-orgs-error')
    }

  //
  // START Prototype 3 routes
  //
  } else if (whichPrototype == "3.0"){

    // Make a variable and give it the value from 'how-many-orgs'
    var howManyOrgs = req.session.data['how-many-orgs']
    var orgLocationForOne = req.session.data['org-location-for-one']
    var orgLocationForTwoOrMore = req.session.data['org-location-for-two-or-more']

    // Check whether the variable matches a condition
    if (howManyOrgs == "one"){
      if (orgLocationForOne == "uk"){
        res.redirect('/prototype-3/economic-crime-checks-uk')
      } else if (orgLocationForOne == "international"){
        res.redirect('/prototype-3/economic-crime-checks-international')
      }
    } else if (howManyOrgs == "two-or-more"){
      if (orgLocationForTwoOrMore == "uk"){
        res.redirect('/prototype-3/two-or-more')
      } else if (orgLocationForTwoOrMore == "international"){
        res.redirect('/prototype-3/two-or-more')
      }
    } else {
      res.redirect('/prototype-3/how-many-orgs-error')
    }
  
    //
    // START Prototype 4 routes
    //
  } else if (whichPrototype == "4.0"){

    // Make a variable and give it the value from 'how-many-orgs'
    var howManyOrgs = req.session.data['how-many-orgs']
    var orgLocationForOne = req.session.data['org-location-for-one']
    var orgLocationForTwoOrMore = req.session.data['org-location-for-two-or-more']

    // Check whether the variable matches a condition
    if (howManyOrgs == "one"){
      if (orgLocationForOne == "uk"){
        res.redirect('/prototype-4/economic-crime-checks')
      } else if (orgLocationForOne == "international"){
        res.redirect('/prototype-4/economic-crime-checks')
      }
    } else if (howManyOrgs == "two-or-more"){
      if (orgLocationForTwoOrMore == "uk"){
        res.redirect('/prototype-4/two-or-more')
      } else if (orgLocationForTwoOrMore == "international"){
        res.redirect('/prototype-4/two-or-more')
      }
    } else {
      res.redirect('/prototype-4/how-many-orgs-error')
    }

    
    //
    // START Prototype 5 routes
    //
  } else if (whichPrototype == "5.0"){

      // Make a variable and give it the value from 'how-many-orgs'
      var howManyOrgs = req.session.data['how-many-orgs']
      var orgLocationForOne = req.session.data['org-location-for-one']
      var orgLocationForTwoOrMore = req.session.data['org-location-for-two-or-more']

      // Check whether the variable matches a condition
      if (howManyOrgs == "one"){
        req.session.data['org-location-for-two-or-more'] = ""
        if (orgLocationForOne == "uk"){
          res.redirect('/prototype-5/economic-crime-checks')
        } else if (orgLocationForOne == "international"){
          res.redirect('/prototype-5/economic-crime-checks')
        }
      } else if (howManyOrgs == "two-or-more"){
        req.session.data['org-location-for-one'] = ""
        if (orgLocationForTwoOrMore == "uk"){
          res.redirect('/prototype-5/two-or-more')
        } else if (orgLocationForTwoOrMore == "international"){
          res.redirect('/prototype-5/two-or-more')
        }
      } else {
        res.redirect('/prototype-5/how-many-orgs-error')
      }

  } 
    
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

  //
  // START Prototype 2 routes
  //
  } else if (whichPrototype == "2.0"){
    // Make a variable and give it the value from 'which-check'
    var orgLocation = req.session.data['org-location']

    // Check whether the variable matches a condition
    if (orgLocation == "uk"){
      res.redirect('/prototype-2/results-UK')
    } else {
      res.redirect('/prototype-2/results-international')
    }
  }
})

router.post('/economic-crime-checks-uk', function (req, res) {
  //
  // START Prototype 3 routes
  //
  // Make a variable and give it the value from 'which-check'
  var orgLocationForOne = req.session.data['org-location-for-one']
  var orgLocationForTwoOrMore = req.session.data['org-location-for-two-or-more']

  // Check whether the variable matches a condition
  if (orgLocationForOne == "uk"){
    res.redirect('/prototype-3/review-uk')
  } else {
    res.redirect('/prototype-3/review-international')
  }
})

router.post('/economic-crime-checks-international', function (req, res) {
  //
  // START Prototype 3 routes
  //
  // Make a variable and give it the value from 'which-check'
  var orgLocationForOne = req.session.data['org-location-for-one']
  var orgLocationForTwoOrMore = req.session.data['org-location-for-two-or-more']

  // Check whether the variable matches a condition
  if (orgLocationForOne == "uk"){
    res.redirect('/prototype-3/review-uk')
  } else {
    res.redirect('/prototype-3/review-international')
  }
})

//
// START Prototype 4 routes
//
router.post('/economic-crime-checks-v4', function (req, res) {
  res.redirect('/prototype-4/review')
})

//
// START Prototype 5 routes
//
router.post('/economic-crime-checks-v5', function (req, res) {
  res.redirect('/prototype-5/review')
})

router.post('/pepsadversemediacheck', function (req, res) {
  req.session.data['PEPSAdverseMediaChecked'] = "Yes"
  res.redirect('/prototype-5/peps-adversemedia-upload-summary-checking')
})

router.post('/orgadversemediacheck', function (req, res) {
  req.session.data['orgAdverseMediaChecked'] = "Yes"
  res.redirect('/prototype-5/orgadversemedia-upload-summary-checking')
})