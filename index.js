function shout(string)
{
  return string.toUpperCase()
}
function whisper(string)
{
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
var uppercase = "HELLO!"
var lowercase = 'hello!'
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase //

function sayHiToGrandma(string)
{
  if (lowercase.toLowerCase() === lowercase)
  return '${"I can\'t hear you!"}'
  else if (uppercase.toUpperCase() === uppercase)
  return '${"YES INDEED!"}'
  else if (string===('I love you, Grandma'))
  return `${"I love you, too."}` 
}


describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})