document.addEventListener('DOMContentLoaded', () => {
    
    // Accordion Logic for Practice Section
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 100 + 'px'; // +100 to give padding room
            } else {
                content.style.maxHeight = '0';
            }
        });
    });

    const commonSettings = {
        expressions: false,
        settingsMenu: false,
        zoomButtons: true,
        lockViewport: false
    };

    // 1.1: De la Secante a la Tangente
    const eltSec = document.getElementById('calc-secante');
    if (eltSec) {
        const calcSec = Desmos.GraphingCalculator(eltSec, { ...commonSettings, expressions: true });
        calcSec.setMathBounds({ left: -1, right: 4, bottom: -1, top: 9 });
        
        // Base function
        calcSec.setExpression({ id: 'f', latex: 'f(x) = x^2', color: Desmos.Colors.BLUE });
        
        // Slider h
        calcSec.setExpression({ id: 'h', latex: 'h=1.5', sliderBounds: { min: 0.01, max: 2, step: 0.01 } });
        
        // Points P and Q
        calcSec.setExpression({ id: 'P', latex: 'P=(1, f(1))', showLabel: true, color: Desmos.Colors.BLACK, label: "P" });
        calcSec.setExpression({ id: 'Q', latex: 'Q=(1+h, f(1+h))', showLabel: true, color: Desmos.Colors.PURPLE, label: "Q" });
        
        // Secant Line
        calcSec.setExpression({ id: 'sec', latex: 'y - f(1) = \\frac{f(1+h)-f(1)}{h}(x-1)', color: Desmos.Colors.GREEN, lineStyle: Desmos.Styles.DASHED });
        
        // Tangent Line
        calcSec.setExpression({ id: 'tan', latex: 'y - f(1) = 2(x-1)', color: Desmos.Colors.ORANGE });
    }

    // 2.2: Diferenciabilidad y el Problema del Pico
    const eltDif = document.getElementById('calc-diferenciabilidad');
    if (eltDif) {
        const calcDif = Desmos.GraphingCalculator(eltDif, commonSettings);
        calcDif.setMathBounds({ left: -3, right: 3, bottom: -1, top: 4 });
        
        // Absolute value function
        calcDif.setExpression({ id: 'f', latex: 'f(x) = |x|', color: Desmos.Colors.BLUE, lineWidth: 4 });
        
        // Problem point
        calcDif.setExpression({ id: 'P', latex: '(0,0)', color: Desmos.Colors.RED, showLabel: true, label: "¡Punto de no diferenciabilidad (Pico)!" });
        
        // Left and Right derivatives representation
        calcDif.setExpression({ id: 'l1', latex: 'y = -x \\{x \\le 0\\}', color: Desmos.Colors.ORANGE, lineStyle: Desmos.Styles.DASHED });
        calcDif.setExpression({ id: 'l2', latex: 'y = x \\{x \\ge 0\\}', color: Desmos.Colors.GREEN, lineStyle: Desmos.Styles.DASHED });
    }

    // Ejemplos Prácticos de Diferenciabilidad (Módulo 2.2)
    // Usamos IntersectionObserver para evitar exceder el límite de contextos WebGL de Desmos (máx ~8-16)
    const desmosConfigs = {};
    const activeCalculators = {};

    const registerDesmos = (id, initFn) => {
        desmosConfigs[id] = initFn;
    };

    const registerInitDesmos = (id, bounds, latex, pointCoords, pointColor) => {
        registerDesmos(id, (el) => {
            const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
            calc.setMathBounds(bounds);
            calc.setExpression({ id: 'f', latex: latex, color: Desmos.Colors.BLUE, lineWidth: 3 });
            if (pointCoords) {
                calc.setExpression({ id: 'p', latex: pointCoords, color: pointColor || Desmos.Colors.RED, showPoint: true, pointSize: 5 });
            }
            return calc;
        });
    };

    // Problem 2
    registerDesmos('calc-img-2', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: 0, right: 4, bottom: -4, top: 4});
        calc.setExpression({ id: 'f1', latex: 'y=3-2x \\{x < 2\\}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'f2', latex: 'y=3x-7 \\{x \\ge 2\\}', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(2,-1)', color: Desmos.Colors.RED, showPoint: true });
        return calc;
    });

    // Problem 3
    registerInitDesmos('calc-img-3', {left: 0, right: 6, bottom: -1, top: 4}, 'y=\\left| x-3 \\right|', '(3,0)');

    // Problem 4
    registerInitDesmos('calc-img-4', {left: -5, right: 1, bottom: 0, top: 5}, 'y=1+\\left| x+2 \\right|', '(-2,1)');

    // Problem 5
    registerDesmos('calc-img-5', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -3, right: 3, bottom: -3, top: 3});
        calc.setExpression({ id: 'f1', latex: 'y=-1 \\{x < 0\\}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'f2', latex: 'y=x-1 \\{x \\ge 0\\}', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(0,-1)', color: Desmos.Colors.RED, showPoint: true });
        return calc;
    });

    // Problem 8
    registerDesmos('calc-img-8', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: 0, right: 6, bottom: -2, top: 4});
        calc.setExpression({ id: 'f1', latex: 'y=x^2-4 \\{x < 2\\}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'f2', latex: 'y=\\sqrt{x-2} \\{x \\ge 2\\}', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(2,0)', color: Desmos.Colors.RED, showPoint: true });
        return calc;
    });

    // Problem 9
    registerDesmos('calc-img-9', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -2, right: 3, bottom: -1, top: 3});
        calc.setExpression({ id: 'f1', latex: 'y=\\sqrt{1-x} \\{x < 1\\}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'f2', latex: 'y=(1-x)^2 \\{x \\ge 1\\}', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(1,0)', color: Desmos.Colors.RED, showPoint: true });
        return calc;
    });

    // Problem 10
    registerDesmos('calc-img-10', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -3, right: 1, bottom: 0, top: 5});
        calc.setExpression({ id: 'f1', latex: 'y=x^2 \\{x < -1\\}', color: Desmos.Colors.GREEN, lineWidth: 3 });
        calc.setExpression({ id: 'f2', latex: 'y=-1-2x \\{x \\ge -1\\}', color: Desmos.Colors.GREEN, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(-1,1)', color: Desmos.Colors.RED, showPoint: true });
        return calc;
    });

    // Problem 11
    registerDesmos('calc-img-11', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: 0, right: 4, bottom: 0, top: 10});
        calc.setExpression({ id: 'f1', latex: 'y=2x^2-3 \\{x \\le 2\\}', color: Desmos.Colors.GREEN, lineWidth: 3 });
        calc.setExpression({ id: 'f2', latex: 'y=8x-11 \\{x > 2\\}', color: Desmos.Colors.GREEN, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(2,5)', color: Desmos.Colors.RED, showPoint: true });
        return calc;
    });

    // Problem 12
    registerDesmos('calc-img-12', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: 0, right: 5, bottom: -2, top: 5});
        calc.setExpression({ id: 'f1', latex: 'y=x^2-9 \\{x < 3\\}', color: Desmos.Colors.GREEN, lineWidth: 3 });
        calc.setExpression({ id: 'f2', latex: 'y=6x-18 \\{x \\ge 3\\}', color: Desmos.Colors.GREEN, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(3,0)', color: Desmos.Colors.RED, showPoint: true });
        return calc;
    });

    // Abs 1: |sin(x)|
    registerInitDesmos('calc-img-abs-1', {left: -4, right: 4, bottom: -0.5, top: 1.5}, 'y=\\left| \\sin(x) \\right|', '(0,0)');

    // Abs 2: Cúspide
    registerInitDesmos('calc-img-abs-2', {left: -3, right: 3, bottom: -1, top: 3}, 'y=(x^2)^{\\frac{1}{3}}', '(0,0)');

    // Abs 3: Tangente Vertical
    registerInitDesmos('calc-img-abs-3', {left: -3, right: 3, bottom: -2, top: 2}, 'y=\\sqrt[3]{x}', '(0,0)');

    // Problem 21
    registerDesmos('calc-img-21', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -2.5, right: 2.5, bottom: -1.5, top: 1.5});
        calc.setExpression({ id: 'f1', latex: 'y=1-x^2 \\{x \\le -1\\}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'f2', latex: 'y=x+1 \\{-1 < x \\le 0\\}', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'f3', latex: 'y=-x+1 \\{0 < x \\le 1\\}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'f4', latex: 'y=x-1 \\{x > 1\\}', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p1', latex: '(-1,0)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        calc.setExpression({ id: 'p2', latex: '(0,1)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        calc.setExpression({ id: 'p3', latex: '(1,0)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    // Problem 22
    registerDesmos('calc-img-22', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -3, right: 2.5, bottom: -0.5, top: 4.5});
        calc.setExpression({ id: 'f1', latex: 'y=(x+1)^2 \\{x \\le -1\\}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'f2', latex: 'y=2x+2 \\{-1 < x \\le 0\\}', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'f3', latex: 'y=-x+2 \\{0 < x \\le 1\\}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'f4', latex: 'y=x^2 \\{x > 1\\}', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p1', latex: '(-1,0)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        calc.setExpression({ id: 'p2', latex: '(0,2)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        calc.setExpression({ id: 'p3', latex: '(1,1)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    // Problem 23
    registerDesmos('calc-img-23', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -3, right: 3, bottom: -1, top: 3});
        calc.setExpression({ id: 'f1', latex: 'y=x+2 \\{x \\le -1\\}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'f2', latex: 'y=(-x)^{\\frac{1}{3}} \\{-1 < x \\le 0\\}', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'f3', latex: 'y=x^{\\frac{1}{3}} \\{0 < x \\le 1\\}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'f4', latex: 'y=x \\{x > 1\\}', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p1', latex: '(-1,1)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        calc.setExpression({ id: 'p2', latex: '(0,0)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        calc.setExpression({ id: 'p3', latex: '(1,1)', color: Desmos.Colors.RED, pointStyle: Desmos.Styles.OPEN, showPoint: true, pointSize: 5 });
        calc.setExpression({ id: 'p4', latex: '(1,0)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });


    // Ejercicios 41 a 52
    registerDesmos('calc-prob-41', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -5, right: 5, bottom: -15, top: 15});
        calc.setExpression({ id: 'f', latex: 'y=3x+6x^{-2}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'df', latex: 'y=3-12x^{-3}', color: Desmos.Colors.ORANGE, lineWidth: 2, lineStyle: Desmos.Styles.DASHED });
        return calc;
    });

    registerDesmos('calc-prob-42', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -3, right: 3, bottom: -3, top: 3});
        calc.setExpression({ id: 'f', latex: 'y=\\sqrt[3]{x}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'df', latex: 'y=\\frac{1}{3\\sqrt[3]{x^2}}', color: Desmos.Colors.ORANGE, lineWidth: 2, lineStyle: Desmos.Styles.DASHED });
        return calc;
    });

    registerDesmos('calc-prob-43', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: 0, right: 6, bottom: -3, top: 3});
        calc.setExpression({ id: 'f', latex: 'y=(x-1)^{-0.5}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'df', latex: 'y=-0.5(x-1)^{-1.5}', color: Desmos.Colors.ORANGE, lineWidth: 2, lineStyle: Desmos.Styles.DASHED });
        return calc;
    });

    registerDesmos('calc-prob-44', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: 0, right: 5, bottom: -10, top: 10});
        calc.setExpression({ id: 'f', latex: 'y=4(2x-5)^{-1}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'df', latex: 'y=-8(2x-5)^{-2}', color: Desmos.Colors.ORANGE, lineWidth: 2, lineStyle: Desmos.Styles.DASHED });
        return calc;
    });

    registerDesmos('calc-prob-45', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: 0, right: 4, bottom: 0, top: 20});
        calc.setExpression({ id: 'f', latex: 'y=2x^2+3', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'g', latex: '8x-y+3=0', color: Desmos.Colors.BLACK, lineStyle: Desmos.Styles.DASHED });
        calc.setExpression({ id: 't', latex: 'y=8x-5', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(2,11)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    registerDesmos('calc-prob-46', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -2, right: 1, bottom: -5, top: 5});
        calc.setExpression({ id: 'f', latex: 'y=3x^2-4', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'g', latex: '3x+y=4', color: Desmos.Colors.BLACK, lineStyle: Desmos.Styles.DASHED });
        calc.setExpression({ id: 't', latex: 'y=-3x-4.75', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(-0.5,-3.25)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    registerDesmos('calc-prob-47', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -1, right: 4, bottom: -1, top: 3});
        calc.setExpression({ id: 'f', latex: 'y=2-\\frac{1}{3}x^2', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'g', latex: 'x-y=0', color: Desmos.Colors.BLACK, lineStyle: Desmos.Styles.DASHED });
        calc.setExpression({ id: 't', latex: 'y=x-0.25', color: '#00FFFF', lineWidth: 3 }); 
        calc.setExpression({ id: 'p', latex: '(1.5,1.25)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    registerDesmos('calc-prob-48', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -4, right: 4, bottom: -5, top: 5});
        calc.setExpression({ id: 'f', latex: 'y=x^3-3x', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'g', latex: '2x+18y-9=0', color: Desmos.Colors.BLACK, lineStyle: Desmos.Styles.DASHED });
        calc.setExpression({ id: 't1', latex: 'y=-\\frac{1}{9}x+\\frac{20}{9}', color: '#00FFFF', lineWidth: 3 });
        calc.setExpression({ id: 'p1', latex: '(2,2)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        calc.setExpression({ id: 't2', latex: 'y=-\\frac{1}{9}x-\\frac{20}{9}', color: '#00FFFF', lineWidth: 3 });
        calc.setExpression({ id: 'p2', latex: '(-2,-2)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    registerDesmos('calc-prob-49', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -1, right: 3, bottom: -1, top: 8});
        calc.setExpression({ id: 'f', latex: 'y=4x^2', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(1,5)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        calc.setExpression({ id: 'lines', latex: 'y-5=m(x-1)', sliderBounds: {min: -5, max: 15, step: 0.1}, color: Desmos.Colors.BLACK, lineStyle: Desmos.Styles.DASHED });
        return calc;
    });

    registerDesmos('calc-prob-50', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -2, right: 3, bottom: -2, top: 5});
        calc.setExpression({ id: 'f', latex: 'y=4-x^2', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(1,2)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        calc.setExpression({ id: 'lines', latex: 'y-2=m(x-1)', sliderBounds: {min: -10, max: 10, step: 0.1}, color: Desmos.Colors.BLACK, lineStyle: Desmos.Styles.DASHED });
        return calc;
    });

    registerDesmos('calc-prob-51', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: 0, right: 4, bottom: -2, top: 2});
        calc.setExpression({ id: 'a', latex: 'a=2', hidden: true });
        calc.setExpression({ id: 'g', latex: 'g(x)=\\sin(x)', hidden: true });
        calc.setExpression({ id: 'f', latex: 'y=(x-a)g(x)', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=g(a)(x-a)', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(a,0)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    registerDesmos('calc-prob-52', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: 0, right: 4, bottom: -5, top: 10});
        calc.setExpression({ id: 'a', latex: 'a=1.5', hidden: true });
        calc.setExpression({ id: 'g', latex: 'g(x)=x^2', hidden: true });
        calc.setExpression({ id: 'f', latex: 'y=(x^2-a^2)g(x)', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=2a\\cdot g(a)(x-a)', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(a,0)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    
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
        calc.setExpression({ id: 'f', latex: 'y=\\sqrt{4-x}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=-\\frac{1}{6}x+\\frac{13}{6}', color: Desmos.Colors.ORANGE, lineWidth: 3 });
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
        calc.setExpression({ id: 'f', latex: 'y=\\frac{4}{x^2}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=-x+3', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'n', latex: 'y=x-1', color: '#00FFFF', lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(2,1)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    // Ejercicio 20: y = -8/sqrt(x), (4,-4), tan=0.5x-6, n=-2x+4
    registerDesmos('calc-prac-20', (el) => {
        const calc = Desmos.GraphingCalculator(el, { ...commonSettings, expressions: false });
        calc.setMathBounds({left: -2, right: 10, bottom: -10, top: 5});
        calc.setExpression({ id: 'f', latex: 'y=-\\frac{8}{\\sqrt{x}}', color: Desmos.Colors.BLUE, lineWidth: 3 });
        calc.setExpression({ id: 't', latex: 'y=0.5x-6', color: Desmos.Colors.ORANGE, lineWidth: 3 });
        calc.setExpression({ id: 'n', latex: 'y=-2x+4', color: '#00FFFF', lineWidth: 3 });
        calc.setExpression({ id: 'p', latex: '(4,-4)', color: Desmos.Colors.RED, showPoint: true, pointSize: 5 });
        return calc;
    });

    // Lazy load observer setup
    const graphObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            if (entry.isIntersecting) {
                if (!activeCalculators[id] && desmosConfigs[id]) {
                    activeCalculators[id] = desmosConfigs[id](entry.target);
                }
            } else {
                if (activeCalculators[id]) {
                    activeCalculators[id].destroy();
                    delete activeCalculators[id];
                    entry.target.innerHTML = ''; // Clean DOM
                }
            }
        });
    }, { rootMargin: '300px' }); // Renderize un poco antes de entrar a pantalla

    // Activar el observer para cada id registrado
    Object.keys(desmosConfigs).forEach(id => {
        const el = document.getElementById(id);
        if (el) graphObserver.observe(el);
    });

    // 5.1: Geometría - Recta Tangente y Recta Normal ortogonales
    const eltGeo = document.getElementById('calc-geometria');
    if (eltGeo) {
        const calcGeo = Desmos.GraphingCalculator(eltGeo, { ...commonSettings, expressions: true });
        calcGeo.setMathBounds({ left: -1, right: 6, bottom: -3, top: 4 });
        
        // Transcendental function
        calcGeo.setExpression({ id: 'f', latex: 'f(x) = \\ln(x)', color: Desmos.Colors.BLUE });
        
        // Coordinate slider a
        calcGeo.setExpression({ id: 'a', latex: 'a=1.5', sliderBounds: { min: 0.1, max: 5, step: 0.05 } });
        calcGeo.setExpression({ id: 'P', latex: '(a, f(a))', color: Desmos.Colors.BLACK, showLabel: true, label: "Punto Tangencial" });
        
        // Tangent line (orange)
        calcGeo.setExpression({ id: 'tan', latex: 'y = f(a) + \\frac{1}{a}(x-a)', color: Desmos.Colors.ORANGE });
        
        // Normal line (cyan)
        calcGeo.setExpression({ id: 'norm', latex: 'y = f(a) - a(x-a)', color: '#00FFFF' });
    }

    // 6.1: Cinemática Computacional - Posición, Velocidad y Aceleración
    const eltCin = document.getElementById('calc-cinematica');
    if (eltCin) {
        const calcCin = Desmos.GraphingCalculator(eltCin, { ...commonSettings, expressions: true });
        calcCin.setMathBounds({ left: -1, right: 5, bottom: -5, top: 15 });
        
        // Position, Velocity, Acceleration
        calcCin.setExpression({ id: 's', latex: 's(x) = x^3 - 6x^2 + 9x', color: Desmos.Colors.BLUE }); // Posición
        calcCin.setExpression({ id: 'v', latex: 'v(x) = 3x^2 - 12x + 9', color: Desmos.Colors.GREEN }); // Velocidad
        calcCin.setExpression({ id: 'a', latex: 'a(x) = 6x - 12', color: Desmos.Colors.RED }); // Aceleración
        
        // Time slider
        calcCin.setExpression({ id: 't0', latex: 't_0=1', sliderBounds: { min: 0, max: 4, step: 0.01 } });
        
        // Vertical scanline
        calcCin.setExpression({ id: 'line', latex: 'x = t_0', color: Desmos.Colors.BLACK, lineStyle: Desmos.Styles.DASHED });
        
        // Points traveling on curves
        calcCin.setExpression({ id: 'P1', latex: '(t_0, s(t_0))', color: Desmos.Colors.BLUE, showLabel: true, label: "s(t)" });
        calcCin.setExpression({ id: 'P2', latex: '(t_0, v(t_0))', color: Desmos.Colors.GREEN, showLabel: true, label: "v(t)" });
        calcCin.setExpression({ id: 'P3', latex: '(t_0, a(t_0))', color: Desmos.Colors.RED, showLabel: true, label: "a(t)" });
    }

});
