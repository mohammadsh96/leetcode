const {fizzBuzz}=require('./index')
describe("fizzBuzz test",()=>{
    it("returns Fizz for multiples of 3",()=>{
      const result=fizzBuzz(9);
      result.forEach((elem, i)=>{
        if((i+1)%3==0 && (i+1)%5!=0) expect(elem).toBe("Fizz");
      });
    });
  
    it("returns Buzz for multiples of 5",()=>{
      const result=fizzBuzz(10);
      result.forEach((elem, i)=>{
        if((i+1)%5==0 && (i+1)%3!=0) expect(elem).toBe("Buzz");
      });
    });
  
    it("returns FizzBuzz for numbers that are multiples of both 3 & 5",()=>{
      const result=fizzBuzz(30);
      result.forEach((elem, i)=>{
        if((i+1)%15==0) expect(elem).toBe("FizzBuzz");
      });
    });
  
    it("returns the number itself for all other numbers",()=>{
      const result=fizzBuzz(16);
      result.forEach((elem, i)=>{
        if((i+1)%3!=0 && (i+1)%5!=0) expect(elem).toBe((i+1).toString());
      });
    });
  });