const {sum}=require("../sum");
test("Sum should calculate the sum of two numbers",()=>{
    const res=sum(4,3);
    expect(res).toBe(7); //Assertion
})