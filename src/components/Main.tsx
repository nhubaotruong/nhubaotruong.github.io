const Main = () => {
    const contactInfos = [
        { logo: "/github.svg", link: "https://github.com/nhubaotruong/" },
        { logo: "/linkedin.png", link: "https://www.linkedin.com/in/nhubaotruong/" }
    ]
    return (
        <div>
            <div class="justify-content-center align-items-center d-flex">
                <img src="/avatar.jpg" alt="logo" class="img-fluid rounded-circle" style="height: 15em" />
            </div>
            <h1 class="text-center text-white py-4 fw-semibold">Trương Như Bảo</h1>
            <h3 class="text-center text-white">Backend Engineer (you can tell from the css)</h3>
            <h3 class="text-center text-white">GNU/Linux user and gamer (Arch BTW)</h3>
            <h3 class="text-center text-white" onClick={() => window.open(atob("aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ=="), "_blank")}>sometimes a Rick Roller</h3>

            <h1 class="text-center text-white mt-5">
                Contacts:
            </h1>
            <h2 class="text-center text-white">
                {
                    contactInfos.map(({ logo, link }) => (
                        <a href={link} target='_blank'><img src={logo} class="img-fluid mx-3" alt={logo} style="height: 2em" /></a>
                    ))
                }
            </h2>
        </div>
    )
}

export default Main;
