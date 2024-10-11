//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Prototype 1 routes - P1

// Run this code when a form is submitted from 'threats-type'
router.post('/threats-type-answer', function (req, res) {

    // Make a variable and give it the value from 'which-threat'
    var whichThreat = req.session.data['which-threat']
  
    // Check whether the variable matches a condition
    if (whichThreat == "sanctions"){
      res.redirect('/prototype-1/sanctions')
    } else if (whichThreat == "financial-crime"){
      res.redirect('/prototype-1/checks')
    } else {
        res.redirect('/prototype-1/extremism-adverse-media')
    }
  
  })

// Run this code when a form is submitted from 'threats-type'
router.post('/which-check-answer', function (req, res) {

    // Make a variable and give it the value from 'which-threat'
    var whichCheck = req.session.data['which-check']
  
    // Check whether the variable matches a condition
    if (whichCheck == "grants"){
      res.redirect('/prototype-1/check-grants')
    } else if (whichCheck == "contracts"){
      res.redirect('/prototype-1/check-contracts')
    } else {
        res.redirect('/prototype-1/how-many-orgs')
    }
  
  })

// Run this code when a form is submitted from 'how-many-orgs'
router.post('/how-many-orgs', function (req, res) {

    // Make a variable and give it the value from 'which-threat'
    var howManyOrgs = req.session.data['how-many-orgs']
  
    // Check whether the variable matches a condition
    if (howManyOrgs == "one"){
      res.redirect('/prototype-1/financial-crime-checks')
    } else {
        res.redirect('/prototype-1/two-or-more')
    }
  
  })
