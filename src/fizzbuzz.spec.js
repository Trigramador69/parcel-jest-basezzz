import generarFizzBuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
    it("generar el mismo numero si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(1)).toEqual("1");
    });

    it("generar el mismo numero si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });

    it("generar el Fizz para el 3", () => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });

    it("generar el Fizz para multiplos de 3", () => {
    expect(generarFizzBuzz(9)).toEqual("Fizz");
    });

    it("generar el Fizz para el 5", () => {
    expect(generarFizzBuzz(5)).toEqual("Buzz");
    });

    it("generar el Fizz para multiplos de 5", () => {
    expect(generarFizzBuzz(25)).toEqual("Buzz");
    });

    it("generar para multiplos de 3 y 5", () => {
    expect(generarFizzBuzz(15)).toEqual("FizzBuzz");
    });
});