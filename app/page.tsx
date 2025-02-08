import Header from "./components/Header";
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className="table-of-contents">
                            <Link aria-label="Задача №1" href="https://qqqqbbpp.github.io/drones/task1">Задача №1</Link>
                            <Link aria-label="Задача №2" href="https://qqqqbbpp.github.io/drones/task2">Задача №2</Link>
                            <Link aria-label="Задача №3" href="https://qqqqbbpp.github.io/drones/task3">Задача №3</Link>
                    </div>
                </div>
            </main>
        </>
    );
}
