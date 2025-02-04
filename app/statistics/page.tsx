"use client"
import Header from "@/app/components/Header";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { Mafs, Coordinates, Plot } from "mafs"
import Footer from "@/app/components/Footer";

export default function Statistics() {
    return (
        <>
            <Header/>
            <main>
                <div className="main">
                    <h1 id="1">Выборочный метод</h1>
                        <p>Статистическая совокупность&nbsp;&mdash; это подлежащее изучению множество однородных объектов, их количество&nbsp;&mdash; объем совокупности. Всем элементам совокупности присущ некоторый признак (случайная величина) при переходе от одного элемента к другому, значение признака варьируется.</p>
                        <p>Генеральная совокупность&nbsp;&mdash; это все мыслимые наблюдения, анализируемого признака. Для получения ряда значений признака проводят статистическое наблюдение (сплошное или выборочное).</p>
                        <p>Сплошное наблюдение&nbsp;&mdash; изучается каждый элемент совокупности. Однако оно может оказаться невозможным. Чаще проводят выборочное наблюдение.</p>
                        <p>Выборка&nbsp;&mdash; часть выборочной совокупности, обладающая свойствами генеральной совокупности. То есть выборка должна быть репрезентативной.</p> 
                        <p>Репрезентативность достигается наличием: равновероятности значений, большим объёмом данных, однородностью рассеивания значений элементов.</p>
                    <h2 id="2">Ряд распределений</h2>
                            <p>Вариационный ряд&nbsp;&mdash; это выборка из <Latex>{`$n$`}</Latex> значений (вариант изучаемого количественного признака <Latex>{`$X$`}</Latex>). Ранжированный вариационный ряд предполагает расположение вариант в порядке возрастания.</p>
                            <Latex>{`$$x_1 \\leq x_2 \\leq \\ldots \\leq x_n, ~i=\\overline{1,n}$$`}</Latex>
                            <p>Признак <Latex>{`$X$`}</Latex>&nbsp;&mdash; дискретный если варианты отличаются на конечную заранее известную величину (год рождения, тарифный разряд, число людей). Иначе&nbsp;&mdash; значения отличаются на сколь угодно малую величину. Признак непрерывен (вес, объём, стоимость).</p>
                            <p>Частотой <Latex>{`$m_i$`}</Latex> дискретного признака <Latex>{`$x$`}</Latex> называют число одинаковых вариантов <Latex>{`$x_i$`}</Latex> в выборке.</p>
                            <Latex>{`$$\\overbrace{\\underbrace{x_1, x_1, \\ldots, x_1}_m, \\cdots, \\underbrace{x_i, x_i, \\ldots, x_i}_{m_i}, \\cdots, \\underbrace{x_k, x_k, \\ldots, x_k}_{m_k}}^n$$`}</Latex>
                            <p>Компактная форма соответствия вариант дискретного признака и их частот называется статистическим распределением.</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><Latex>{`$x_1$`}</Latex></td>
                                        <td><Latex>{`$\\ldots$`}</Latex></td>
                                        <td><Latex>{`$x_i$`}</Latex></td>
                                        <td><Latex>{`$\\ldots$`}</Latex></td>
                                        <td><Latex>{`$x_k$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$m_1$`}</Latex></td>
                                        <td><Latex>{`$\\ldots$`}</Latex></td>
                                        <td><Latex>{`$m_i$`}</Latex></td>
                                        <td><Latex>{`$\\ldots$`}</Latex></td>
                                        <td><Latex>{`$m_k$`}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Статистическое распределение для непрерывного признака принято представлять интервальным рядом&nbsp;&mdash; таблицей где варианты представлены интервалом вида <Latex>{`$[x_{i-1} - x_i)$`}</Latex>, это не разность а интервал значений вариант.</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><Latex>{`$x_{i-1} - x_i$`}</Latex></td>
                                        <td><Latex>{`$x_0 - x_1$`}</Latex></td>
                                        <td><Latex>{`$x_1 - x_2$`}</Latex></td>
                                        <td><Latex>{`$\\ldots$`}</Latex></td>
                                        <td><Latex>{`$x_{k-1} - x_k$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$m_i$`}</Latex></td>
                                        <td><Latex>{`$m_1$`}</Latex></td>
                                        <td><Latex>{`$m_2$`}</Latex></td>
                                        <td><Latex>{`$\\ldots$`}</Latex></td>
                                        <td><Latex>{`$m_k$`}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Часто вместо частот в распределении указывают относительные частоты. <Latex>{`$w_i = \\frac{m_i}{n}$`}</Latex>&nbsp;&mdash; показывает процент вариант выборки (частость).</p>
                            <Latex>{`$$\\sum\\limits_{i=1}^k w_i = 1$$`}</Latex>
                            <p>Накопленной частотой называется число значений признака <Latex>{`$X<x.$`}</Latex></p>
                            <Latex>{`$$H(x)=m(X<x)$$`}</Latex>
                            <p>Таким образом можно прийти к ряду накопленных частот и эмпирической функции распределения.</p>
                            <Latex>{`$$F^*(x)=\\frac{H(x)}{n}=\\frac{m(X<x)}{n}$$`}</Latex>
                    <h2 id="3">Графическое представление</h2>
                        <p>Дискретный ряд изображают в виде полигона частот <Latex>{`$x_i, m_i$`}</Latex> или частости <Latex>{`$x_i, w_i$`}</Latex>.</p>
                        <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,5], y:[0,3]}}>
                            <Coordinates.Cartesian/>
                            <Plot.OfX
                                y={(x) => {
                                    if (x < 0) return 0;
                                    else if (x >= 0 && x < 1) return x;
                                    else if (x >= 1 && x < 2) return 2 * x - 1;
                                    else if (x >= 2 && x < 5) return -x + 5;
                                    else return 0;
                                }}
                            />
                        </Mafs>
                        <p>Интервальный ряд изображают в виде гистограммы&nbsp;&mdash; ступенчатой фигуры, состоящей из прямоугольников основания которых равны интервалам длины <Latex>{`$h_i$`}</Latex>, а высоты плотности частот <Latex>{`$\\frac{m_i}{h}$`}</Latex> или частости <Latex>{`$\\frac{w_i}{h}$`}</Latex>.</p>
                        <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,5], y:[0,3]}}>
                            <Coordinates.Cartesian/>
                            <Plot.OfX
                                y={(x) => {
                                    if (x < 0) return 0;
                                    else if (x >= 0 && x < 1) return 1;
                                    else if (x >= 1 && x < 2) return 2;
                                    else if (x >= 2 && x < 3) return 3;
                                    else if (x >= 3 && x < 4) return 2;
                                    else if (x >= 4 && x < 5) return 1;
                                    else return 0;
                                }}
                            />
                        </Mafs>
                        <p>Кумулятивные ряды изображают в виде кумуляты (аналог графика интегральной функции случайной величины).</p>
                        <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,5], y:[0,5]}}>
                            <Coordinates.Cartesian/>
                            <Plot.OfX
                                y={(x) => {
                                    if (x < 0) return 0;
                                    else if (x >= 0 && x < 1) return 1;
                                    else if (x >= 1 && x < 2) return 2;
                                    else if (x >= 2 && x < 3) return 3;
                                    else if (x >= 3 && x < 4) return 4;
                                    else if (x >= 4 && x < 5) return 5;
                                    else return 0;
                                }}
                            />
                        </Mafs>
                    <h2 id="4">Выборочные характеристики</h2>
                        <h3 id="4a">Выборочная средняя</h3>
                            <p>Характеризует типичное для выборки значение признака <Latex>{`$x$`}</Latex> причем лишь приближенно. В случае интервального вариационного ряда необходимо перейти к дискретному, путём нахождения середины интервала.</p>
                            <Latex>{`$$x_i' = \\frac{x_i+x_{i-1}}{2}$$`}</Latex>
                            <p>Если данные сгруппированы, то выборочная средняя  рассчитывается как взвешенная средняя.</p>
                            <Latex>{`$$\\overline x_B = \\frac{\\sum\\limits_{i=1}^k x_i m_i}{n}=\\sum\\limits_{i=1}^k x_i w_i$$`}</Latex>
                            <p>Если же данные наблюдения не сгруппированы, то выборочная средняя рассчитывается как простая средняя арифметическая.</p>
                            <Latex>{`$$\\overline x_B = \\frac{\\sum\\limits_{i=1}^n x_i}{n}$$`}</Latex>
                        <h3 id="4b">Структурные средние</h3>
                            <h4 id="4b1">Мода</h4>
                                <p>Мода&nbsp;&mdash; наиболее часто встречающиеся значения признака <Latex>{`$x.$`}</Latex></p>
                                <Latex>{`$$m_i = max \\Rightarrow x_{mo}=x_i$$`}</Latex>
                                <p>При вычислении моды в случае интервального ряда находят модальный интервал. В случае равновеликих интервалов (шаг одинаков) модальным будет тот, которому характерна максимальная частота, иначе модальным будет интервал в котором достигается максимальная плотность частоты (накопленная частость).</p>
                            <h4 id="4b2">Медиана</h4>							
                                <p>Медиана&nbsp;&mdash; серединное значение ранжированного вариационного ряда.</p>
                                <p>Если объем выборки&nbsp;&mdash; четное значение, то медиана рассчитывается как среднее арифметическое двух центральных элементов выборки.</p>
                                <Latex>{`$$x_{me} = \\frac{x_j + x_{j+1}}{2}, ~j=\\frac{n}{2}$$`}</Latex>
                                <p>Если же объем выборки&nbsp;&mdash; нечетное значение, то медиана рассчитывается как следующий элемент после середины выборки.</p>
                                <Latex>{`$$x_{me} = x_{j+1}, ~j=\\frac{n-1}{2}$$`}</Latex>
                        <h3 id="4c">Показатели вариации</h3>
                            <h4 id="4c1">Размах</h4>
                                <p>Размах&nbsp;&mdash; разность между наибольшим и наименьшим значениями результатов наблюдений.</p>
                                <Latex>{`$$R=x_{max}-x_{min}$$`}</Latex>
                            <h4 id="4c2">Дисперсия</h4>
                                <p>Дисперсия&nbsp;&mdash; мера, которая показывает разброс между результатами.</p>
                                <Latex>{`$$D_B=\\overline{x^2} - \\overline x_B^2$$`}</Latex>
                                <Latex>{`$$\\overline{x^2} =  \\frac{\\sum\\limits_{i=1}^k x_i^2 m_i}{n}$$`}</Latex>
                            <h4 id="4c3">Среднеквадратическое отклонение</h4>
                                <p>Среднеквадратическое отклонение&nbsp;&mdash; статистическая характеристика распределения случайной величины, показывающая среднюю степень разброса значений величины относительно математического ожидания.</p>
                                <Latex>{`$$\\sigma_B = \\sqrt{D_B}$$`}</Latex>
                            <h4 id="4c4">Коэффициент вариации</h4>
                                <p>Коэффициент вариации&nbsp;&mdash; величина, равная отношению среднеквадратичного отклонения случайной величины к ее математическому ожиданию. Применяется для сравнения вариативности одного и того же признака в нескольких совокупностях с различным средним арифметическим.</p>
                                <p><Latex>{`$$\\nu=\\frac{\\sigma_B}{\\overline x_B} \\cdot 100\\%$$`}</Latex></p>
                                <p>Если коэффициент вариации {'>'} 33%, выборка считается неоднородной и её следует кластеризовать.</p>
                    <h2 id="5">Статистическое оценивание</h2>
                        <p>Оценивание&nbsp;&mdash; это приближенное оценивание по выборочным данным параметров генеральной совокупности. Статистические оценки могут быть точными и интервальными. Точечной оценкой неизвестного параметра называют число, которое приблизительно равно оцениваемым параметрам и может заменить его с достаточной степенью точности в стат расчета.</p>
                        <Latex>{`$$\\theta \\approx \\theta^*$$`}</Latex>
                        <p>Для того чтобы точечные оценки обеспечивали достаточную точность, они должны обладать тремя свойствами:</p>
                        <ol>
                            <li>
                                <p>Несмещенность, то есть оценка <Latex>{`$\\theta^*$`}</Latex>, полученная по выборке должна в среднем соответствовать <Latex>{`$\\theta$`}</Latex>, иначе будет иметь место систематическая ошибка завышения или занижения результата.</p>
                                <Latex>{`$$M(\\theta^*)=\\theta$$`}</Latex>
                            </li>
                            <li>
                                <p>Дисперсия оценки должна быть минимальной при фиксированном объеме выборки <Latex>{`$n.$`}</Latex></p>
                                <Latex>{`$$D(\\theta^*)=min$$`}</Latex>
                            </li>
                            <li>
                                <p>Оценка с достаточной вероятностью при увеличении к объему выборки приближается к оцениваемому параметру.</p>
                                <Latex>{`$$\\theta^* \\xrightarrow{\\text{P}} \\theta, ~n \\to \\infty$$`}</Latex>
                            </li>
                        </ol>
                        <Latex>{`$$X_{gen}(M(X)) \\to \\overline{X_B}$$`}</Latex>
                        <Latex>{`$$D_{gen}(D(X)) \\to S^2$$`}</Latex>
                        <Latex>{`$$S^2 = D_B \\cdot \\frac{n}{n-1}$$`}</Latex>
                        <Latex>{`$$\\sigma_{gen}(\\sigma(x)) \\to S, ~S = \\sqrt{S^2}$$`}</Latex>
                        <p>На основе точечных оценок происходит построение интервальных оценок. Интервальной оценкой неизвестного параметра <Latex>{`$\\theta$`}</Latex> называют доверительный интервал <Latex>{`$(\\theta^{mb}, ~\\theta^{np})$`}</Latex>, который с заданной вероятностью <Latex>{`$\\gamma$`}</Latex> покрывает неизвестный параметр.</p>
                        <Latex>{`$$P(\\theta^{mb}<\\theta<\\theta^{np}) = \\gamma$$`}</Latex>
                        <p>Интервальная оценка&nbsp;&mdash; это доверительные интервал, <Latex>{`$\\gamma$`}</Latex>&nbsp;&mdash; доверительная вероятность или надежность интервальной оценки. Границы доверительного интервала находят по выборке, они могут меняться в зависимости от ее качественного состава. Следовательно, оценка тем точнее определяет неизвестный параметр, чем меньше разность между параметром и оценкой.</p>
                        <Latex>{`$$|\\theta - \\theta^*| \\to min$$`}</Latex>
                        <p>Доверительную вероятность задают заранее как правило числом близким к единице.</p>
                        <Latex>{`$$(\\gamma \\geq 0,9)$$`}</Latex>
                        <p>Находят точность интервальной оценки <Latex>{`$\\Delta$`}</Latex>.</p>
                        <Latex>{`$$P(\\theta^* - \\Delta < \\theta < \\theta^* + \\Delta) = \\gamma$$`}</Latex>
                        <h3 id="5a">Интервальная оценка математического ожидания нормального распределения при известном среднеквадратическим отклонении</h3>
                            <p>Пусть существует <Latex>{`$X\\sim N(a=M(X), ~\\sigma=\\sigma(X)).$`}</Latex> Предположим, что параметр <Latex>{`$\\sigma$`}</Latex> известен, требуют оценить неизвестный параметр <Latex>{`$a$`}</Latex> для этого проводится выборка объемом <Latex>{`$n$`}</Latex> и рассчитывается средняя выборочная. Известно что средняя выборочная является точной оценкой средней генеральной. С доверительной вероятность гамма найдем такое число <Latex>{`$\\Delta > 0,$`}</Latex> чтобы выполнялось равенство доверительного интервала для оценки истинного среднего значения генеральной совокупности.</p>
                            <Latex>{`$$P(\\overline{X_B} - \\Delta < \\overline X_{gen} < \\overline X_B + \\Delta) = \\gamma$$`}</Latex>
                            <Latex>{`$$\\gamma = 2\\Phi(\\frac{\\Delta \\sqrt n}{\\sigma})$$`}</Latex>
                            <Latex>{`$$\\Phi = \\frac{\\Delta \\sqrt n}{\\sigma} = \\frac{\\gamma}{2}$$`}</Latex>
                            <Latex>{`$$\\frac{\\Delta \\sqrt n}{\\sigma} = t \\Rightarrow \\Delta = \\frac{t \\cdot \\sigma}{\\sqrt n}$$`}</Latex>
                    <h2 id="6">Проверка статистических гипотез</h2>
                        <p>Статистическая гипотеза&nbsp;&mdash; это некоторое предположение о свойствах и характеристиках генеральной совокупности, сформулированная на основе анализа выборки. При этом выборка должна быть репрезентативной, то есть являться генеральной совокупностью в уменьшенном масштабе (все свойства должны быть сохранены в выборке).</p>
                        <p>Основная или нулевая гипотеза <Latex>{`$H_0$`}</Latex>&nbsp;&mdash; это гипотеза которой мы придерживаемся пока наблюдения (выборка) не заставят признать обратное, ей всегда соответствует альтернативная (конкурирующая) гипотеза <Latex>{`$H_1.$`}</Latex> Статистические методы не позволяют доказать гипотезу. По выборки мы можем опровергнуть гипотезу. Чтобы определить, когда гипотезу отвергать, а когда нет, применяют два понятия:</p>
                        <ol>
                            <li>
                                <p>Ошибка первого рода&nbsp;&mdash; ситуация когда <Latex>{`$H_0$`}</Latex> отвергается, хотя на самом деле она верная.</p>
                                <Latex>{`$$\\alpha = P_{H_0} (H_1)$$`}</Latex>
                            </li>
                            <li>
                                <p>Ошибка второго рода&nbsp;&mdash; ситуация когда <Latex>{`$H_0$`}</Latex> принимается, хотя на самом деле она не верная.</p>
                                <Latex>{`$$\\beta = P_{H_1} (H_0)$$`}</Latex>
                            </li>
                        </ol>
                        <p>Минимизировать обе ошибки невозможно, при уменьшении <Latex>{`$\\alpha,$`}</Latex> растет <Latex>{`$\\beta$`}</Latex> и наоборот. Обычно контролируют ошибку первого рода <Latex>{`$\\alpha < 0.1.$`}</Latex></p>
                        <p>Для проверки гипотезы используется статистический критерий&nbsp;&mdash; случайная величина, закон распределения которой описан и значения вычисляются по выборке (статистический критерий по другому называют статистикой).</p>
                        <p>Мощность критерия&nbsp;&mdash; это вероятность не совершить ошибку второго рода <Latex>{`$(1 - \\beta)$`}</Latex>. Наиболее мощным критерием с уровнем значимости <Latex>{`$\\alpha$`}</Latex> называется тот, который обладает наибольшей мощностью.</p>
                        <p>Для определения момента с которого мы отвергаем <Latex>{`$H_0$`}</Latex> необходимо определиться с критической областью&nbsp;&mdash; областью значений критерия при которой отвергается <Latex>{`$H_0.$`}</Latex></p>
                        <h3 id="6a">Виды критических областей</h3>
                            <ol>
                                <li><p>Правосторонняя <Latex>{`$\\omega \\in (\\varphi_{crit}; ~+\\infty).$`}</Latex></p></li>
                                <li><p>Левостороння <Latex>{`$\\omega \\in (-\\infty; ~\\varphi_{crit}).$`}</Latex></p></li>
                                <li><p>Двусторонняя <Latex>{`$\\omega \\in (-\\infty; ~\\varphi_{crit}) \\cup (\\varphi_{crit}; ~+\\infty).$`}</Latex></p></li>
                            </ol>
                            <p>Вид критической области определяется видом критерия и видом альтернативной гипотезы <Latex>{`$H_1.$`}</Latex> По выборке рассчитывают наблюдаемое значение критерия.</p>
                            <p>Правило&nbsp;&mdash; если наблюдаемое значение критерия принадлежит критической области, то <Latex>{`$H_0$`}</Latex> отвергается и принимается <Latex>{`$H_1$`}</Latex> с вероятностью совершить ошибку первого рода <Latex>{`$\\alpha.$`}</Latex></p>
                            <Latex>{`$$\\varphi \\in \\omega, ~H_0: "-", ~H_1: "+" | ~\\alpha$$`}</Latex>
                        <h3 id="6b">Проверка гипотезы о нормальном законе распределения генеральной совокупности</h3>
                            <Latex>{`$$H_0: X\\sim N$$`}</Latex>
                            <Latex>{`$$H_1: X\\sim M$$`}</Latex>
                            <Latex>{`$$f(\\chi^2) = \\frac{1}{2^{\\frac{k}{2}} \\Gamma (\\frac{k}{2})} \\cdot {\\chi^2}^{\\frac{k}{2} - 1} \\cdot e^{-\\frac{\\chi^2}{2}}$$`}</Latex>
                            <p>Где <Latex>{`$k = S - 3$`}</Latex>&nbsp;&mdash; число степеней свободы, <Latex>{`$S$`}</Latex>&nbsp;&mdash; число вариационных групп статистического распределения выборки.</p>
                            <p>В данном случаем применяется правосторонняя критическая область <Latex>{`$\\chi^2_{crit} (\\alpha; k).$`}</Latex> Рассчитывается приближенное значение критерия.</p>
                            <Latex>{`$$\\chi^2 = \\sum\\limits_{i=1}^S \\frac{(m_i^\\epsilon - m_i^T)^2}{m_i^T}$$`}</Latex>
                            <p>Где <Latex>{`$m_i^\\epsilon$`}</Latex>&nbsp;&mdash; эмпирические частоты, <Latex>{`$m_i^T$`}</Latex>&nbsp;&mdash; теоретические частоты.</p>
                            <Latex>{`$$\\chi^2 \\in \\omega, ~H_0: "-", ~H_1: "+" | ~\\alpha$$`}</Latex>
                        <h3 id="6c">Проверка гипотезы о равенстве генеральных дисперсий</h3>
                            <p>Допустим имеются две независимые выборки объемом <Latex>{`$n_x$`}</Latex> и <Latex>{`$n_y$`}</Latex> из соответствующих генеральных совокупностей <Latex>{`$X, Y$`}</Latex>. Известно, что закон распределения в обоих генеральных совокупностях&nbsp;&mdash; нормальный.</p>
                            <Latex>{`$$X \\sim N(a_x, \\sigma_x), ~Y \\sim N(a_y, \\sigma_y)$$`}</Latex>
                            <p>С применением выборочного метода, вычислены выборочные характеристики.</p>
                            <Latex>{`$$\\overline X_B, ~\\overline Y_B$$`}</Latex>
                            <Latex>{`$$S_x^2, ~S_y^2$$`}</Latex>
                            <p>Необходимо ответить на вопрос: сравнимы ли генеральные совокупности? Если будет доказано, что различия между исправленными выборочными дисперсиями&nbsp;&mdash; значимый, то генеральные совокупности сравнивать нельзя.</p>
                            <p><Latex>{`$H_0: D(x) = D(y)$`}</Latex>&nbsp;&mdash; <Latex>{`$X, ~Y$`}</Latex> можно сравнивать.</p>
                            <p><Latex>{`$H_1: D(x) > D(y)$`}</Latex>&nbsp;&mdash; <Latex>{`$X, ~Y$`}</Latex> нельзя сравнивать.</p>
                            <p>Задают уровень значимости <Latex>{`$\\alpha = P_{H_0} (H_1).$`}</Latex> В данном случае в качестве инструмента проверки используется случайная величина <Latex>{`$F$`}</Latex>, имеющая распределения Фишера-Снедекора с параметрами <Latex>{`$k_1, k_2.$`}</Latex> Где <Latex>{`$n_1$`}</Latex>&nbsp;&mdash; объём выборки с большей дисперсией, <Latex>{`$n_2$`}</Latex>&nbsp;&mdash; с меньшей.</p>
                            <Latex>{`$$k_1 = n_1 - 1, ~k_2 = n_2 - 1$$`}</Latex>
                            <Latex>{`$$f(F) = \\frac{k_1^{\\frac{k_1}{2}} k_2^{\\frac{k_2}{2}} \\Gamma(\\frac{k_1 + k_2}{2})}{\\Gamma(\\frac{k_1}{2}) \\Gamma(\\frac{k_2}{2})} \\cdot F^{\\frac{k_1}{2}-1} \\cdot (F k_1 + k_2)^{-\\frac{k_1 + k_2}{2}}$$`}</Latex>
                            <p>Рассчитывается наблюдаемое значение критерия.</p>
                            <Latex>{`$$F_{obs}=\\frac{S^2_{greater}}{S^2_{less}} \\geq 1$$`}</Latex>
                            <p>В данном случае критическая область является правосторонней.</p>
                            <Latex>{`$$\\omega \\in (F_{crit}; ~\\infty), ~F_{crit}(\\alpha; k_1; k_2)$$`}</Latex>
                            <Latex>{`$$F_{obs} \\in \\omega, ~H_0: "-", ~H_1: "+" | ~\\alpha$$`}</Latex>
                        <h3 id="6d">Сравнение генеральных средних двух нормально распределённых генеральных совокупностей дисперсии которых неизвестны и одинаковы</h3>
                            <p>Генеральные совокупности&nbsp;&mdash; сравнимы, критерий <Latex>{`$F$`}</Latex> применён и получены соответствующие выводы.</p>
                            <Latex>{`$$H_0: M(x) = M(y)$$`}</Latex>
                            <Latex>{`$$H_1': M(x) > M(y)$$`}</Latex>
                            <Latex>{`$$H_1'': M(x) < M(y)$$`}</Latex>
                            <Latex>{`$$H_1''': M(x) \\neq M(y)$$`}</Latex>
                            <p>Вид альтернативной гипотезы <Latex>{`$H_1$`}</Latex> зависит от постановки задачи.</p>
                            <p>Если требуется сравнить и сделать вывод о том какая из генеральных средних больше или меньше используется <Latex>{`$H_1', ~H_1''.$`}</Latex></p>
                            <p>Если требуется проверить различия генеральных средних, используется <Latex>{`$H_1'''.$`}</Latex></p>
                            <p>Задают уровень значимости <Latex>{`$\\alpha = P_{H_0} (H_1).$`}</Latex> Инструментом проверки является случайная величина <Latex>{`$T$`}</Latex>, имеющая распределение Стьюдента с параметром <Latex>{`$k$`}</Latex>.</p>
                            <Latex>{`$$k = n_x + n_y - 2$$`}</Latex>
                            <Latex>{`$$f(T) = \\frac{\\Gamma (\\frac{n+1}{2})}{\\sqrt{n \\pi} ~\\Gamma (\\frac{n}{2}) (1 + \\frac{T^2}{n})^{\\frac{n+1}{2}}}$$`}</Latex>
                            <p>Рассчитывается наблюдаемое значение критерия.</p>
                            <Latex>{`$$T_{obs} = \\frac{\\overline X_B - \\overline Y_B}{\\sqrt{(n_{x-1}) S_x^2 + (n_{y-1}) S_y^2}} \\cdot \\frac{n_x n_y (n_x + n_y - 2)}{n_x + n_y}$$`}</Latex>
                            <p>Определяется критическая точка.</p>
                            <Latex>{`$$H_1': \\omega \\in (T_{crit}; ~+\\infty)$$`}</Latex>
                            <Latex>{`$$H_1'': \\omega \\in (-\\infty; ~T_{crit})$$`}</Latex>
                            <Latex>{`$$H_1''': \\omega \\in (-\\infty; ~T_{crit}) \\cup (T_{crit}; ~+\\infty)$$`}</Latex>
                            <Latex>{`$$T_{obs} \\in \\omega, ~H_0: "-", ~H_1: "+" | ~\\alpha$$`}</Latex>
                        <h3 id="6e">Проверка гипотезы о равенстве вероятностей</h3>
                            <p>Пусть по отношению к событию <Latex>{`$A$`}</Latex> проводится <Latex>{`$n$`}</Latex> независимых испытаний. <Latex>{`$P(A) = p$`}</Latex> в каждом испытании <Latex>{`$p$`}</Latex>&nbsp;&mdash; заранее известно, но есть основание предположить, что она равна гипотетической вероятности <Latex>{`$P_0$`}</Latex>. Для этого находят статистическую вероятность <Latex>{`$\\frac{n}{m}$`}</Latex> и проверяют гипотезу.</p>
                            <Latex>{`$$H_0: p = P_0$$`}</Latex>
                            <Latex>{`$$H_1': p \\neq P_0$$`}</Latex>
                            <Latex>{`$$H_1'': p > P_0$$`}</Latex>
                            <Latex>{`$$H_1''': p < P_0$$`}</Latex>
                            <p>Задают уровень значимости <Latex>{`$\\alpha = P_{H_0} (H_1).$`}</Latex> В качестве инструмента используется случайная величина <Latex>{`$U \\sim N(\\alpha = 0, ~\\sigma = 1).$`}</Latex> Рассчитывается наблюдаемое значение критерия.</p>
                            <Latex>{`$$U_{obs} = \\frac{(\\frac{n}{m} - P_0) \\sqrt n}{\\sqrt{P_0 Q_0}}$$`}</Latex>
                            <p>Критическая точка определяется с помощью функции Лапласа.</p>
                            <Latex>{`$$H_1': p \\neq P_0, ~\\Phi(U_{crit}^{double}) = \\frac{1 - \\alpha}{2}$$`}</Latex>
                            <Latex>{`$$H_1'': p > P_0, ~\\Phi(U_{crit}^{right}) = \\frac{1}{2} - \\alpha$$`}</Latex>
                            <Latex>{`$$H_1''': p < P_0, ~\\Phi(-U_{crit}^{right}) = \\frac{1}{2} - \\alpha$$`}</Latex>
                            <Latex>{`$$U_{obs} \\in \\omega, ~H_0: "-", ~H_1: "+" | ~\\alpha$$`}</Latex>                     
                </div>
            </main>
            <Footer 
                prevPage="Теория вероятностей" prevHref="https://qqqqbbpp.github.io/math/probabilities" 
                nextPage="Дискретная математика" nextHref="https://qqqqbbpp.github.io/math/discrete"
            />
        </>
    )
}