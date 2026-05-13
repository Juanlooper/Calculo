js = """
    // Ejercicio 9: y = 9 - x^2, pt (2,5), tan y=-4x+13
    registerDesmos('calc-prac-9', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -5, right: 5, bottom: -5, top: 15});
        calc.setExpression({ id: 'f', latex: 'y=9-x^2', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=-4x+13', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(2,5)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    // Ejercicio 10: y = x^2 + 4, pt (-1,5), tan y=-2x+3
    registerDesmos('calc-prac-10', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -5, right: 3, bottom: 0, top: 15});
        calc.setExpression({ id: 'f', latex: 'y=x^2+4', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=-2x+3', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(-1,5)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    // Ejercicio 11: y = 2x^2 + 4x, pt (-2,0), tan y=-4x-8
    registerDesmos('calc-prac-11', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -5, right: 1, bottom: -5, top: 10});
        calc.setExpression({ id: 'f', latex: 'y=2x^2+4x', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=-4x-8', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(-2,0)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    // Ejercicio 12: y = 3x^2 - 12x + 8
    registerDesmos('calc-prac-12', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -2, right: 6, bottom: -10, top: 10});
        calc.setExpression({ id: 'f', latex: 'y=3x^2-12x+8', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=6x-12', color: Desmos.Colors.ORANGE, lineWidth: 2, lineStyle: Desmos.Styles.DASHED });
        return calc;
    });

    // Ejercicio 13: y = 7 - 6x - x^2
    registerDesmos('calc-prac-13', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -10, right: 4, bottom: -10, top: 20});
        calc.setExpression({ id: 'f', latex: 'y=7-6x-x^2', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=-6-2x', color: Desmos.Colors.ORANGE, lineWidth: 2, lineStyle: Desmos.Styles.DASHED });
        return calc;
    });

    // Ejercicio 14: y = x^3 - 6x^2 - 9x - 2
    registerDesmos('calc-prac-14', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -5, right: 10, bottom: -50, top: 50});
        calc.setExpression({ id: 'f', latex: 'y=x^3-6x^2-9x-2', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=3x^2-12x-9', color: Desmos.Colors.ORANGE, lineWidth: 2, lineStyle: Desmos.Styles.DASHED });
        return calc;
    });

    // Ejercicio 15: y = 2x^3 - 3x^2
    registerDesmos('calc-prac-15', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -2, right: 3, bottom: -5, top: 5});
        calc.setExpression({ id: 'f', latex: 'y=2x^3-3x^2', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=6x^2-6x', color: Desmos.Colors.ORANGE, lineWidth: 2, lineStyle: Desmos.Styles.DASHED });
        return calc;
    });

    // Ejercicio 16: y = sqrt(4-x), (-5,3), tan=-1/6x+13/6, n=6x+33
    registerDesmos('calc-prac-16', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -10, right: 5, bottom: -5, top: 10});
        calc.setExpression({ id: 'f', latex: 'y=\\\\sqrt{4-x}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=-\\\\frac{1}{6}x+\\\\frac{13}{6}', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'n', latex: 'y=6x+33', color: '#00FFFF', lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(-5,3)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    // Ejercicio 17: y = 2x-x^3, (-2,4), tan=-10x-16, n=0.1x+4.2
    registerDesmos('calc-prac-17', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -5, right: 5, bottom: -10, top: 10});
        calc.setExpression({ id: 'f', latex: 'y=2x-x^3', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=-10x-16', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'n', latex: 'y=0.1x+4.2', color: '#00FFFF', lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(-2,4)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    // Ejercicio 18: y = x^3-4x, (0,0), tan=-4x, n=0.25x
    registerDesmos('calc-prac-18', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -5, right: 5, bottom: -10, top: 10});
        calc.setExpression({ id: 'f', latex: 'y=x^3-4x', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=-4x', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'n', latex: 'y=0.25x', color: '#00FFFF', lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(0,0)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    // Ejercicio 19: y = 4/x^2, (2,1), tan=-x+3, n=x-1
    registerDesmos('calc-prac-19', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -5, right: 5, bottom: -5, top: 10});
        calc.setExpression({ id: 'f', latex: 'y=\\\\frac{4}{x^2}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=-x+3', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'n', latex: 'y=x-1', color: '#00FFFF', lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(2,1)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    // Ejercicio 20: y = -8/sqrt(x), (4,-4), tan=0.5x-6, n=-2x+4
    registerDesmos('calc-prac-20', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -2, right: 10, bottom: -10, top: 5});
        calc.setExpression({ id: 'f', latex: 'y=-\\\\frac{8}{\\\\sqrt{x}}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=0.5x-6', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'n', latex: 'y=-2x+4', color: '#00FFFF', lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(4,-4)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });
"""

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('// Lazy load observer setup', js + '\n    // Lazy load observer setup')

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('JS patched.')
