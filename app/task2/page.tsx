import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Task2() {
    return (
        <>
            <Header/>
            <main>
                <div className="main">
                    <h1>Задача №2</h1>
                </div>
            </main>
            <Footer 
                prevPage="Задача №1" prevHref="https://qqqqbbpp.github.io/drones/task1"
                nextPage="Задача №2" nextHref="https://qqqqbbpp.github.io/drones/task3"
            />
        </>
    )
}
