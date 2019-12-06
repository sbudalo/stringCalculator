let Add = require('../src/calculatorSrc');

describe("A simple string calculator", function() {

    it ("should return zero to an empty string", function() {
      expect(Add("")).toEqual(0);
    });
  
    it ("should return 1", function() {
      expect(Add("1")).toEqual(1);
    });
  
    it("should return 2", function(){
      expect(Add("1,1")).toEqual(2);
    });

    it("should return hande multiple integers", function(){
      expect(Add("1,2,3,4")).toEqual(10);
    });

    it("should handle new lines between numbers", function(){
      expect(Add("1,\n2,3")).toEqual(6);
    });
    
    it("should support different delimiters", function(){
     expect(Add("//;\n1;2")).toEqual(3);
    });

    it("should support different delimiters", function(){
     expect(Add("//4\n142")).toEqual(4);
    });

    it("should not allow negative numbers", function(){
     expect(function(){Add("-1,-2,3,4");}).toThrow("negatives not allowed  -1,-2");
    });

  
    it("should ignore numbers that are greater than 1000", function(){
      expect(Add("//;\n1000,1,2")).toEqual(3);
    });
  
    it("should allow multiple delimeters" , function (){
      expect(Add("//***\n1***2***3")).toEqual(6);
    });
  
    it("should allow multiple delimeters with length longer than one char" , function (){
      expect(Add("//[:D][%]\n1:D2%3")).toEqual(6);
    });

    it("should allow multiple delimeters with length longer than one char" , function (){
      expect(Add("//[***][%%%]\n1***2%%%3")).toEqual(6);
    });

    it("should return hande multiple integers", function(){
      expect(Add("//;\n1000;1;2;").toEqual('ERROR: invalid input');
    });

    it("should return hande multiple integers", function(){
      expect(Add("   //;\n1000,1;2")).toEqual('ERROR: invalid input');
    });
  
    it("should return hande multiple integers", function(){
      expect(Add("1,2,3//;\n1000,1;2")).toEqual('ERROR: invalid input');
    });

    
  });