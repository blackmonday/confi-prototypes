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

  // Check whether the variable matches a condition
  if (whichPrototype == "1.0"){
    res.redirect('/prototype-1/index')
  } else {
    res.redirect('/index')
  }

})
//
//
//



//
//
// Run this code when a form is submitted from 'threats-type'
router.post('/threats-type-answer', function (req, res) {

  //
  // START Prototype 1 routes
  //
  var whichPrototype = req.session.data['which-prototype']
  if (whichPrototype == "1.0"){
  
    // Make a variable and give it the value from 'which-threat'
    var whichThreat = req.session.data['which-threat']
  
    // Check whether the variable matches a condition
    if (whichThreat == "sanctions"){
      res.redirect('/prototype-1/sanctions')
    } else if (whichThreat == "economic-crime"){
      res.redirect('/prototype-1/checks')
    } else {
        res.redirect('/prototype-1/community-engagement-principles')
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

  //
  // START Prototype 1 routes
  //
  var whichPrototype = req.session.data['which-prototype']
  if (whichPrototype == "1.0"){
  
    // Make a variable and give it the value from 'which-threat'
    var whichCheck = req.session.data['which-check']
  
    // Check whether the variable matches a condition
    if (whichCheck == "grants"){
      res.redirect('/prototype-1/how-many-orgs')
      /*res.redirect('/prototype-1/check-grants')*/
    } else if (whichCheck == "contracts"){
      res.redirect('/prototype-1/how-many-orgs')
      /*res.redirect('/prototype-1/check-contracts')*/
    } else {
        res.redirect('/prototype-1/how-many-orgs')
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

  //
  // START Prototype 1 routes
  //
  var whichPrototype = req.session.data['which-prototype']
  if (whichPrototype == "1.0"){

    // Make a variable and give it the value from 'how-many-orgs'
    var howManyOrgs = req.session.data['how-many-orgs']
  
    // Check whether the variable matches a condition
    if (howManyOrgs == "one"){
      res.redirect('/prototype-1/economic-crime-checks')
    } else {
        res.redirect('/prototype-1/two-or-more')
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

  //
  // START Prototype 1 routes
  //
  var whichPrototype = req.session.data['which-prototype']
  if (whichPrototype == "1.0"){

    // Make a variable and give it the value from 'which-check'
    var whichCheck = req.session.data['which-check']

    // Check whether the variable matches a condition
    if (whichCheck == "threats"){
      res.redirect('/prototype-1/results-threats')
    } else {
        res.redirect('/prototype-1/results')
    }

  }
  //
  // END Prototype 1 routes
  //

})