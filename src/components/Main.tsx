import { useEffect } from "preact/hooks";
import pako from "pako";

const Main = () => {
    useEffect(() => {
        const text = `eJyNmDmO7CAQhnOf4mUkyAeAQ/gQkNkSqY//aoVi63FJPW7ZDB9/beC+385yznIZ7AneufPEz+k8Wowhv0vLw/3jvncDe0ZiCFIcQBz+iWlDGTAAQcrNNmPgbykPIEJkyEkgQjm/1TIpgbnv+1KMZREEGQCJkZbPs7Ohx7ZaeghNe10Xg14riZWAq1AJWgLjSyAqUMo85xSA456MgA3y5gCTKeQRQ3kBKQvI2l0yNbnsqjClPJWBEgYKBaUP5hzdQwgVYkwgIiT2UtAgGZL6R8VPzKbkYpI4i3niMZiKGGhYGxCgVCExzZGYi0KViNUM0OeQweypqBZw7kiaQF1pU9/t29JdLSgCaQhYMDhNc4ogT2JK0jLJnYIR0WXX1S5VR4HFPnChFGaGiUoyE/2qFwuRyNvHGRYdCjPEY0wpPYS7wxZyWcocM3FUhXRp3JW7NDlzp6746BP37cfgBTtXhVjEk4qMW6+/zdlDpiGUmeot77jHB4FkXusc6B5y30erwW5JVl55gqYxFSWJKbk6ZEPpIZViH5v2UsRdTGF3leaN0c3zMo/WURYaeJFFGaarLAO8hSxj3ltRBucWk77sIwNkOUbm0cZSU5ikQPg/7Ypox586sN5lszIJnCOkWio/KrCq4RS+uio08SA1wJACF2ehFYDQsYWELVmaEy3w9/gQBXAWadgTZzCJglkjnyrgMOEjbzUwuEwwWu46JgCQbpizJnCi3kvfgJG9Hl3oFMZVytvNrOsYhVB7x+o+YRaf6FjXIGAUiFwq45QTXz0sQbCGk9LBe1Wdv9Aprv5PyLm6iyC0ULjpz1/mvD1f3AaSsRFGb5d4xreUEBUS0Ot0nvzNQIrZzqROmIGHt2FwpOhQ5lJgWUYYh80Q94hvMEAVknNYDU5a6KwGnQX++xMCjq6QbCFxMx5qobwP74uUyX5iTB5ARzfK8cphps+XDhLpKMG5RZk6jnSAHqOULKRWybODOG8gTJogINH1d3KvRPJ3CwElEPC2zc9KTqh6hrhAkpw5Yrz1/QRs6y6HEEhkchTbPCSGiBfIjJLgcVi9BCFyF/jTY4OkM+rGXSAF+glW6iN5EUeIfk07CKyy7b9Ld531tBSwcbo4tJUPEDzU+2YLd53E4MM4yvT9C9jRvm4h0PAC91h11xx58JWezhy7eA1ZVTxDsATVWyRlHoL5RdumprIzsT/uvyHoLy9v1eKw4TmpRF+BmsptLvviLoZIWwn8Sto/592/IKXlaKMYyLZQTo3GUoYuQ3Z/U/numSF5u0kAxLy8E2iOvadXy2jua7/vIPtqlHf2KsitKLPpBmkh28h7dZW2FfmR5W8Kh+Wjkjq7ZtgXxKntpUHyr5ho8oLT5LMs/EkeS/mYXV6zqyn6JaC2t1hGyFZJrI7kn4Yiu28a968pkAsfKY//Ux9jjg==`
        const decodedText = String.fromCharCode.apply(null, Array.from(pako.ungzip(Uint8Array.from(atob(text), c => c.charCodeAt(0)))));
        console.log(decodedText);
        document.body.prepend(document.createComment(decodedText));
    }, [])

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
