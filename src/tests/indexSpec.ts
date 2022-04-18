// import myFnc from "../index";
const {arr2 , arr3 , myFnc} = require('../index');

it('expect myFnc(5) to equal 25' , ()=>{
    expect(myFnc(5)).toEqual(25);
})



//Test differ between .toBe and .toEqual
const x= 5;
const y = 5;
describe('Test differ between .toBe and .toEqual', ()=>{
    it("test for values" , ()=>{
        expect(x).toBe(y);
    })
    it("test for values" , ()=>{
        expect(x).toEqual(y);
    })

    it('describe the differ between toBe and toEqual' , ()=>{
        expect(arr2).toBe(arr3);
    })
    it('describe the differ between toBe and toEqual' , ()=>{
        expect(arr2).toEqual(arr3);
    })
});
