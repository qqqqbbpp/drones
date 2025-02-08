"use client"
import Header from "@/app/components/Header";
import { Mafs, Coordinates, Polygon, MovablePoint } from "mafs"
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import Footer from "@/app/components/Footer";

export default function Task2() {

const [position, setPosition] = useState([2, 7])

const [code, setCode] = useState (
    
`import rospy
from clover import srv
from std_srvs.srv import Trigger
    
rospy.init_node('flight')
    
get_telemetry = rospy.ServiceProxy('get_telemetry', srv.GetTelemetry)
navigate = rospy.ServiceProxy('navigate', srv.Navigate)
navigate_global = rospy.ServiceProxy('navigate_global', srv.NavigateGlobal)
set_position = rospy.ServiceProxy('set_position', srv.SetPosition)
set_velocity = rospy.ServiceProxy('set_velocity', srv.SetVelocity)
set_attitude = rospy.ServiceProxy('set_attitude', srv.SetAttitude)
set_rates = rospy.ServiceProxy('set_rates', srv.SetRates)
land = rospy.ServiceProxy('land', Trigger)

# Взлет на высоту 1 м
navigate(x=0, y=0, z=1, frame_id='body', auto_arm=True)

# Ожидание 3 секунды
rospy.sleep(3)

# Пролет вперед 1 метр
navigate(x=1, y=0, z=0, frame_id='body')

# Ожидание 3 секунды
rospy.sleep(3)

# Посадка
land()`);

    return (
        <>
            <Header/>
            <main>
                <div className="main">
                <h1>Задача №1</h1>
                    <h2>Часть 1</h2>
                    <p>Дрон-фермер начинает свой путь в точке (2, 7). Каждый свой ход он движется в одном из 8 направлений (в стороны или по диагонали) после чего обрабатывает удобрениями землю в квадратной области 2x2 вокруг себя.</p>
                    <ol>
                        <li><p>Какой оптимальный путь должен пройти дрон для того чтобы обработать наибольшую площадь за минимальное число ходов?</p></li>
                        <li><p>Найдите длину пути который пройдет дрон.</p></li>
                    </ol>
                    <Mafs preserveAspectRatio={false} height={400} viewBox={{x:[0, 9], y:[0, 8]}}>
                        <Coordinates.Cartesian />
                        <Polygon points={[[1, 1], [9, 1], [5, 6], [1, 6]]}/>
                        <Polygon
                            points={[
                                [position[0] - 1, position[1] - 1],
                                [position[0] + 1, position[1] - 1],
                                [position[0] + 1, position[1] + 1],
                                [position[0] - 1, position[1] + 1]]}
                                color="#0089ff"
                        />
                        <MovablePoint
                            point={[position[0], position[1]]}
                            constrain={([x, y]) => [Math.round(x), Math.round(y)]}
                            onMove={(newPosition) => setPosition([(newPosition[0]), (newPosition[1])])}
                            color="#0089ff"
                        />
                    </Mafs>
                    <div className="input">
                        <p><label htmlFor="speed"><Latex>{`$l=$`}</Latex></label> <input title="Длина пути" placeholder="" id="speed" type="text" /></p>
                    </div>
                    <h2>Часть 2</h2>
                    <p>Напишите код, который повторит маршрут дрона из первой части задания.</p>
                    <CodeEditor
                        value={code}
                        language="py"
                        placeholder="Пожалуйста, введите Python-код."
                        onChange={(evn) => setCode(evn.target.value)}
                        padding={15}
                        style={{
                            backgroundColor: "#000",
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
                        }}
                    />
                </div>
            </main>
            <Footer 
                prevPage="Оглавление" prevHref="https://qqqqbbpp.github.io/drones"
                nextPage="Задача №2" nextHref="https://qqqqbbpp.github.io/drones/task2"
            />
        </>
    )
}
