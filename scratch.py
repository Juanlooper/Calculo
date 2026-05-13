import re

html = """
                <!-- Ejercicio 9 (1) -->
                <div class="accordion-item glass">
                    <button class="accordion-header"><span><strong>Ejercicio 9:</strong> Recta Tangente a $y = 9 - x^2$</span><i class="icon-plus">+</i></button>
                    <div class="accordion-content">
                        <div class="solution-step">
                            <p><strong>Problema 1:</strong> Obtenga la ecuación de la recta tangente a la gráfica de $y = 9 - x^2$ en el punto $(2, 5)$.</p>
                            <p><strong>Paso 1 (Derivación):</strong> Encontramos la pendiente general derivando la función polinómica.</p>
                            <div class="math-box">$$y' = -2x$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 2 (Evaluación):</strong> Sustituimos la coordenada $x=2$ para encontrar la pendiente $m_t$ específica.</p>
                            <div class="math-box">$$m_t = y'(2) = -2(2) = -4$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 3 (Ecuación Tangente):</strong> Aplicamos la fórmula punto-pendiente con $m=-4$ y $P(2,5)$.</p>
                            <div class="math-box">$$y - 5 = -4(x - 2) \implies y - 5 = -4x + 8$$</div>
                            <div class="math-box result-box">$$y = -4x + 13$$</div>
                        </div>
                        <div class="interactive-module mt-4">
                            <h4 class="module-title">💡 Visualización Gráfica</h4>
                            <div id="calc-prac-9" class="desmos-container"></div>
                        </div>
                    </div>
                </div>

                <!-- Ejercicio 10 (2) -->
                <div class="accordion-item glass">
                    <button class="accordion-header"><span><strong>Ejercicio 10:</strong> Recta Tangente a $y = x^2 + 4$</span><i class="icon-plus">+</i></button>
                    <div class="accordion-content">
                        <div class="solution-step">
                            <p><strong>Problema 2:</strong> Obtenga la ecuación de la recta tangente a $y = x^2 + 4$ en el punto $(-1, 5)$.</p>
                            <p><strong>Paso 1 (Derivación):</strong> Derivamos la función término a término.</p>
                            <div class="math-box">$$y' = 2x$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 2 (Evaluación de Pendiente):</strong> Reemplazamos $x = -1$.</p>
                            <div class="math-box">$$m_t = 2(-1) = -2$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 3 (Recta Tangente):</strong> Usamos el punto $(-1, 5)$.</p>
                            <div class="math-box">$$y - 5 = -2(x - (-1)) \implies y - 5 = -2(x + 1)$$</div>
                            <div class="math-box result-box">$$y = -2x + 3$$</div>
                        </div>
                        <div class="interactive-module mt-4">
                            <div id="calc-prac-10" class="desmos-container"></div>
                        </div>
                    </div>
                </div>

                <!-- Ejercicio 11 (3) -->
                <div class="accordion-item glass">
                    <button class="accordion-header"><span><strong>Ejercicio 11:</strong> Recta Tangente a $y = 2x^2 + 4x$</span><i class="icon-plus">+</i></button>
                    <div class="accordion-content">
                        <div class="solution-step">
                            <p><strong>Problema 3:</strong> Obtenga la ecuación de la recta tangente a $y = 2x^2 + 4x$ en el punto $(-2, 0)$.</p>
                            <p><strong>Paso 1 (Derivación):</strong> La constante multiplica la bajada del exponente.</p>
                            <div class="math-box">$$y' = 4x + 4$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 2 (Evaluación):</strong></p>
                            <div class="math-box">$$m_t = 4(-2) + 4 = -8 + 4 = -4$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 3 (Ecuación):</strong> Evaluando en $(-2, 0)$.</p>
                            <div class="math-box">$$y - 0 = -4(x - (-2))$$</div>
                            <div class="math-box result-box">$$y = -4x - 8$$</div>
                        </div>
                        <div class="interactive-module mt-4">
                            <div id="calc-prac-11" class="desmos-container"></div>
                        </div>
                    </div>
                </div>

                <!-- Ejercicio 12 (7) -->
                <div class="accordion-item glass">
                    <button class="accordion-header"><span><strong>Ejercicio 12:</strong> Derivada de $f(x) = 3x^2 - 12x + 8$</span><i class="icon-plus">+</i></button>
                    <div class="accordion-content">
                        <div class="solution-step">
                            <p><strong>Problema 7:</strong> Derivación directa y análisis de tangente horizontal para $f(x) = 3x^2 - 12x + 8$.</p>
                            <p><strong>Paso 1:</strong> Aplicamos reglas básicas de potencias y constante.</p>
                            <div class="math-box result-box">$$f'(x) = 6x - 12$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Análisis Adicional:</strong> ¿Dónde la tangente es plana (horizontal)? Igualamos la derivada a cero.</p>
                            <div class="math-box">$$6x - 12 = 0 \implies x = 2$$</div>
                            <p>En el vértice de la parábola, en $x=2$, la pendiente es nula.</p>
                        </div>
                        <div class="interactive-module mt-4">
                            <div id="calc-prac-12" class="desmos-container"></div>
                        </div>
                    </div>
                </div>

                <!-- Ejercicio 13 (8) -->
                <div class="accordion-item glass">
                    <button class="accordion-header"><span><strong>Ejercicio 13:</strong> Derivada de $f(x) = 7 - 6x - x^2$</span><i class="icon-plus">+</i></button>
                    <div class="accordion-content">
                        <div class="solution-step">
                            <p><strong>Problema 8:</strong> Derivación de $f(x) = 7 - 6x - x^2$.</p>
                            <p><strong>Paso 1:</strong> La constante $7$ se vuelve $0$, $-6x$ es $-6$, y $-x^2$ baja el exponente.</p>
                            <div class="math-box result-box">$$f'(x) = -6 - 2x$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Análisis:</strong> Tangente horizontal cuando $-6 - 2x = 0 \implies x = -3$.</p>
                        </div>
                        <div class="interactive-module mt-4">
                            <div id="calc-prac-13" class="desmos-container"></div>
                        </div>
                    </div>
                </div>

                <!-- Ejercicio 14 (9) -->
                <div class="accordion-item glass">
                    <button class="accordion-header"><span><strong>Ejercicio 14:</strong> Derivada de $f(x) = x^3 - 6x^2 - 9x - 2$</span><i class="icon-plus">+</i></button>
                    <div class="accordion-content">
                        <div class="solution-step">
                            <p><strong>Problema 9:</strong> Derivación de $f(x) = x^3 - 6x^2 - 9x - 2$.</p>
                            <div class="math-box result-box">$$f'(x) = 3x^2 - 12x - 9$$</div>
                        </div>
                        <div class="interactive-module mt-4">
                            <div id="calc-prac-14" class="desmos-container"></div>
                        </div>
                    </div>
                </div>

                <!-- Ejercicio 15 (10) -->
                <div class="accordion-item glass">
                    <button class="accordion-header"><span><strong>Ejercicio 15:</strong> Derivada de $f(x) = 2x^3 - 3x^2$</span><i class="icon-plus">+</i></button>
                    <div class="accordion-content">
                        <div class="solution-step">
                            <p><strong>Problema 10:</strong> Derivación de $f(x) = 2x^3 - 3x^2$.</p>
                            <div class="math-box result-box">$$f'(x) = 6x^2 - 6x$$</div>
                        </div>
                        <div class="interactive-module mt-4">
                            <div id="calc-prac-15" class="desmos-container"></div>
                        </div>
                    </div>
                </div>

                <!-- Ejercicio 16 (12) -->
                <div class="accordion-item glass">
                    <button class="accordion-header"><span><strong>Ejercicio 16:</strong> Tangente y Normal con Raíces</span><i class="icon-plus">+</i></button>
                    <div class="accordion-content">
                        <div class="solution-step">
                            <p><strong>Problema 12:</strong> Obtenga las rectas tangente y normal a $y = \sqrt{4 - x}$ en $(-5, 3)$.</p>
                            <p><strong>Paso 1 (Derivación con Cadena):</strong> Reescribimos como $y = (4 - x)^{1/2}$.</p>
                            <div class="math-box">$$y' = \frac{1}{2}(4-x)^{-1/2} \cdot (-1) = \frac{-1}{2\sqrt{4-x}}$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 2 (Pendientes):</strong> En $x=-5$.</p>
                            <div class="math-box">$$m_t = \frac{-1}{2\sqrt{4 - (-5)}} = \frac{-1}{2\sqrt{9}} = -\frac{1}{6}$$</div>
                            <p>Pendiente normal (inverso negativo): $m_n = 6$.</p>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 3 (Ecuaciones):</strong> En el punto $(-5, 3)$.</p>
                            <p>Tangente:</p>
                            <div class="math-box result-box">$$y - 3 = -\frac{1}{6}(x + 5) \implies y = -\frac{1}{6}x + \frac{13}{6}$$</div>
                            <p>Normal:</p>
                            <div class="math-box result-box">$$y - 3 = 6(x + 5) \implies y = 6x + 33$$</div>
                        </div>
                        <div class="interactive-module mt-4">
                            <div id="calc-prac-16" class="desmos-container"></div>
                        </div>
                    </div>
                </div>

                <!-- Ejercicio 17 (13) -->
                <div class="accordion-item glass">
                    <button class="accordion-header"><span><strong>Ejercicio 17:</strong> Tangente y Normal Cúbica</span><i class="icon-plus">+</i></button>
                    <div class="accordion-content">
                        <div class="solution-step">
                            <p><strong>Problema 13:</strong> Tangente y normal a $y = 2x - x^3$ en $(-2, 4)$.</p>
                            <p><strong>Paso 1 (Derivada):</strong></p>
                            <div class="math-box">$$y' = 2 - 3x^2$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 2 (Pendientes):</strong> $x = -2$.</p>
                            <div class="math-box">$$m_t = 2 - 3(-2)^2 = 2 - 12 = -10$$</div>
                            <p>Pendiente normal: $m_n = \frac{1}{10} = 0.1$.</p>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 3 (Ecuaciones):</strong> En $(-2, 4)$.</p>
                            <p>Tangente:</p>
                            <div class="math-box result-box">$$y - 4 = -10(x + 2) \implies y = -10x - 16$$</div>
                            <p>Normal:</p>
                            <div class="math-box result-box">$$y - 4 = 0.1(x + 2) \implies y = 0.1x + 4.2$$</div>
                        </div>
                        <div class="interactive-module mt-4">
                            <div id="calc-prac-17" class="desmos-container"></div>
                        </div>
                    </div>
                </div>

                <!-- Ejercicio 18 (14) -->
                <div class="accordion-item glass">
                    <button class="accordion-header"><span><strong>Ejercicio 18:</strong> Tangente y Normal en el Origen</span><i class="icon-plus">+</i></button>
                    <div class="accordion-content">
                        <div class="solution-step">
                            <p><strong>Problema 14:</strong> Tangente y normal a $y = x^3 - 4x$ en $(0, 0)$.</p>
                            <div class="math-box">$$y' = 3x^2 - 4$$</div>
                            <div class="math-box">$$m_t = 3(0)^2 - 4 = -4 \quad \implies \quad m_n = \frac{1}{4} = 0.25$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Ecuaciones en $(0,0)$:</strong> Al pasar por el origen la ordenada es cero.</p>
                            <div class="math-box result-box">$$\text{Tangente: } y = -4x \quad \quad \text{Normal: } y = 0.25x$$</div>
                        </div>
                        <div class="interactive-module mt-4">
                            <div id="calc-prac-18" class="desmos-container"></div>
                        </div>
                    </div>
                </div>

                <!-- Ejercicio 19 (15) -->
                <div class="accordion-item glass">
                    <button class="accordion-header"><span><strong>Ejercicio 19:</strong> Tangente y Normal a Fracción</span><i class="icon-plus">+</i></button>
                    <div class="accordion-content">
                        <div class="solution-step">
                            <p><strong>Problema 15:</strong> Rectas tangente y normal a $y = \frac{4}{x^2}$ en $(2, 1)$.</p>
                            <p><strong>Paso 1:</strong> Subimos la variable: $y = 4x^{-2}$.</p>
                            <div class="math-box">$$y' = -8x^{-3} = -\frac{8}{x^3}$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 2:</strong> Pendientes en $x=2$.</p>
                            <div class="math-box">$$m_t = -\frac{8}{2^3} = -1 \quad \implies \quad m_n = 1$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 3:</strong> Ecuaciones.</p>
                            <p>Tangente:</p>
                            <div class="math-box result-box">$$y - 1 = -1(x - 2) \implies y = -x + 3$$</div>
                            <p>Normal:</p>
                            <div class="math-box result-box">$$y - 1 = 1(x - 2) \implies y = x - 1$$</div>
                        </div>
                        <div class="interactive-module mt-4">
                            <div id="calc-prac-19" class="desmos-container"></div>
                        </div>
                    </div>
                </div>

                <!-- Ejercicio 20 (16) -->
                <div class="accordion-item glass">
                    <button class="accordion-header"><span><strong>Ejercicio 20:</strong> Tangente y Normal a Raíz Invertida</span><i class="icon-plus">+</i></button>
                    <div class="accordion-content">
                        <div class="solution-step">
                            <p><strong>Problema 16:</strong> Rectas tangente y normal a $y = -\frac{8}{\sqrt{x}}$ en $(4, -4)$.</p>
                            <p><strong>Paso 1:</strong> Reescribimos como $y = -8x^{-1/2}$.</p>
                            <div class="math-box">$$y' = (-8)\left(-\frac{1}{2}\right)x^{-3/2} = 4x^{-3/2} = \frac{4}{\sqrt{x^3}}$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 2:</strong> Pendientes en $x=4$. ($4^3=64 \implies \sqrt{64}=8$).</p>
                            <div class="math-box">$$m_t = \frac{4}{8} = \frac{1}{2} = 0.5 \quad \implies \quad m_n = -2$$</div>
                        </div>
                        <div class="solution-step">
                            <p><strong>Paso 3:</strong> Ecuaciones en $(4, -4)$.</p>
                            <p>Tangente:</p>
                            <div class=\"math-box result-box\">$$y - (-4) = 0.5(x - 4) \implies y = 0.5x - 6$$</div>
                            <p>Normal:</p>
                            <div class=\"math-box result-box\">$$y + 4 = -2(x - 4) \implies y = -2x + 4$$</div>
                        </div>
                        <div class="interactive-module mt-4">
                            <div id="calc-prac-20" class="desmos-container"></div>
                        </div>
                    </div>
                </div>
"""

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('<!-- Ejercicio 8 -->', html + '\n                <!-- Ejercicio 8 -->')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
