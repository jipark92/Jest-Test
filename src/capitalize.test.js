const capitalize = require('./capitalize')

test('fortnite to Fortnite' , () =>{
    expect(capitalize('fortnite')).toBe('F');
})