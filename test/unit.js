/*
 * Unit Tests
 *
 */


// Dependencies
var lib = require('./../app/lib.js');
var assert = require('assert');

// Container for Tests
var unit = {};

// Assert that the countSquares should return a number if positive numbers are passed as parameters
unit['lib.countSquares  should return number'] = function(done){
  var val = lib.countSquares(3,10);
  assert.equal(typeof(val),'number');
  done();
};

//Assert that the numbers should be greater than 0 or else return an false
unit['lib.countSquares  should return false if numbers are not greater than 0'] = function(done){
    var val = lib.countSquares(-3,10);
    assert.equal(val,false);
    done();
  };
  
//Assert whether word contains an upperCase letter
unit['lib.upperCase should return true id word contains upper case']=function(done){
    var val=lib.uppercase("Rakki");
    assert.equal(val,true);
    done();
}
//Assert whether word contains an upperCase letter
unit['lib.upperCase should return false if word  doesnt contains upper case']=function(done){
    var val=lib.uppercase("akki");
    assert.equal(val,true);
    done();
}

//Assert whether word contains an lowercase letter
unit['lib.lowerCase should return true id word contains lower case']=function(done){
    var val=lib.lowercase("Rakki");
    assert.equal(val,true);
    done();
}
//Assert whether word contains an lowercase letter
unit['lib.lowerCase should return false if word  doesnt contains lower case']=function(done){
    var val=lib.lowercase("ADHIRA");
    assert.equal(val,true);
    done();
}

//Assert whether word contains an special  character
unit['lib.specialCharacter should return true id word contains special character']=function(done){
    var val=lib.specialCharacters("1R$");
    assert.equal(val,true);
    done();
}
///Assert whether word contains an special  character
unit['lib.specialCharacter should return false if word  doesnt contains special character']=function(done){
    var val=lib.specialCharacters("Ra");
    assert.equal(val,false);
    done();
}

//Assert whether password meets the required criteria for a strong password
unit['lib.validatePassword should return true id word satisfies all the criteria for a strong password']=function(done){
    var val=lib.validatePassword("Rakki");
    assert.equal(val,true);
    done();
}
//Assert whether password meets the required criteria for a strong password
unit['lib.validatePassword should return false id word does not satisfies all the criteria for a strong password']=function(done){
    var val=lib.validatePassword("Rakki");
    assert.equal(val,false);
    done();
}


// Export the tests to the runner
module.exports = unit;
