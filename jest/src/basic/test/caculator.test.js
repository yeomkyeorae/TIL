const Calculator = require('../calculator');

describe('Calculator', () => {
  // 각각의 테스트는 독립적이어야 한다.
  // 각각 테스트 시행 전에 수행
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  })

  it('inits with 0', () => {
    expect(calc.value).toBe(0);
  });

  it('sets', () => {
    calc.set(10);

    expect(calc.value).toBe(10);
  });

  it('clear', () => {
    calc.set(100);
    calc.clear();

    expect(calc.value).toBe(0);
  });

  // 에러 테스트
  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      calc.add(101);
    }).toThrow('Value can not be greater than 100');
  })

  it('multiplies', () => {
    calc.set(5);
    calc.multiply(4);

    expect(calc.value).toBe(20);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      calc.divide(0);
      
      expect(calc.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      calc.set(1);
      calc.divide(0);

      expect(calc.value).toBe(Infinity);
    });

    it('4 / 4 === 1', () => {
      calc.set(4);
      calc.divide(4);

      expect(calc.value).toBe(1);
    })
  });
})