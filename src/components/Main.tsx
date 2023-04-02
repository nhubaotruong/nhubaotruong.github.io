const Main = () => {
    const contactInfos = [
        { logo: <i class="fa-brands fa-github fa-xl" style="color: #fff;" alt="github" />, link: "https://github.com/nhubaotruong/" },
        { logo: <i class="fa-brands fa-linkedin fa-xl" style="color: #fff;" alt="linkedin" />, link: "https://www.linkedin.com/in/nhubaotruong/" },
        { logo: <i class="fa-solid fa-inbox fa-xl" style="color: #fff;" alt="gmail" />, link: "mailto:baoprokute1234@gmail.com" },
    ]
    return (
        <div>
            <h1 class="justify-content-center align-items-center d-flex">
                <img src="/avatar.webp" alt="avatar" class="img-fluid rounded-circle" style="height: 7.5em" />
            </h1>
            <h1 class="text-center py-4 fw-semibold">Trương Như Bảo</h1>
            <h3 class="text-center">Backend Engineer (you can tell from the css)</h3>
            <h3 class="text-center">GNU/Linux user and gamer (Arch BTW)</h3>
            <h3 class="text-center" onClick={() => window.open(atob("aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ=="), "_blank")}>sometimes a Rick Roller</h3>

            <h1 class="text-center mt-5 fw-semibold">
                Contacts:
            </h1>
            <h2 class="text-center d-flex justify-content-center mt-4">
                {
                    contactInfos.map(({ logo, link }) => (
                        <h1 class="mx-2">
                            <a href={link} target='_blank'>
                                {logo}
                            </a>
                        </h1>
                    ))
                }
            </h2>
        </div >
    )
}

export default Main;
