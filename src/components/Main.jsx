import { useState } from 'preact/hooks';

const Main = () => {
    const [count, setCount] = useState(0);
    return (
        <div class="bg-light vh-100 p-3">
            <div class="bg-dark justify-content-center align-items-center d-flex h-100 rounded shadow-lg">
                <div>
                    <div class="justify-content-center align-items-center d-flex">
                        <img src="/avatar.jpg" alt="logo" class="img-fluid rounded-circle" style="height: 250px" />
                    </div>
                    <h1 class="text-center text-white py-4">Trương Như Bảo</h1>
                    <h3 class="text-center text-white">Backend Engineer (you can tell from the css)</h3>
                    <h3 class="text-center text-white">GNU/Linux user and gamer (Arch BTW)</h3>
                    <h3 class="text-center text-white" onClick={() => window.open(atob("aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ=="), "_blank")}>sometimes a Rick Roller</h3>

                    <h1 class="text-center text-white mt-5">
                        Contacts:
                    </h1>
                    <h1 class="text-center text-white">
                        <a href='https://github.com/nhubaotruong/' target='_blank'><img src="/github.svg" class="img-fluid mx-3" alt="github" style="height: 70px" /></a>
                        <a href='https://www.linkedin.com/in/nhubaotruong/' target='_blank'><img src="/linkedin.png" class="img-fluid mx-3" alt="linkedin" style="height: 70px" /></a>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Main;
