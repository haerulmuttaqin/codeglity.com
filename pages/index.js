import Image from 'next/image'
import Head from 'next/head'
export default function Home() {
    return (
        <div>
            <Head>
                <title>Codeglity</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Haerul Muttaqin's Personal Website" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css" />
            </Head>
            <div className="container-main">
                <header>
                    <div className="container">
                        <nav className="navbar navbar-dark bg-transparenet">
                            <a data-aos="fade-down" data-aos-once="false" data-aos-delay="500" className="navbar-brand" href="#">
                                <span className="navbar-logo">{'< ... >'}</span>
                            </a>
                            <span data-aos="fade-up" data-aos-once="false" data-aos-delay="600" className="navbar-text ml-auto d-none d-sm-inline-block">
                                www.codeglity.com{" "}
                            </span>
                            <span data-aos="fade-up" data-aos-once="false" data-aos-delay="700" className="navbar-text d-none d-sm-inline-block">
                                codeglity@gmail.com
                            </span>
                        </nav>
                    </div>
                </header>
                <main className="my-auto">
                    <div className="container">

                        <Image src="/logo.webp" width={200} height={200} data-aos="flip-left" />

                        <h1 className="page-title" data-aos="fade-up" data-aos-once="false">We're coming soon</h1>
                        <p className="page-description" data-aos="fade-up" data-aos-once="false" data-aos-delay="300">
                            <b>Codeglity</b> 🇮🇩
                            <br />
                            My journey as a programmer, and a creative person.
                            <br />
                            👩‍💻 Learn // Coder // Programmer // Desk Setup // ..
                            <br />
                            Part of @pasbe.id @dev.pasbe.id
                            <br />
                            <a href="#/">www.codeglity.com</a>
                        </p>
                        <p data-aos="fade-up" data-aos-once="false" data-aos-delay="400">Stay connected</p>
                        <nav className="footer-social-links" data-aos="fade-up" data-aos-once="false" data-aos-delay="500">
                            <a href="https://web.facebook.com/codeglity/" className="social-link" target={'_blank'}>
                                <i className="mdi mdi-facebook-box" />
                            </a>
                            <a href="https://www.instagram.com/codeglity/" target={'_blank'} className="social-link">
                                <i className="mdi mdi-instagram" />
                            </a>
                            <a href="mailto:codeglity@gmail.com" className="social-link" target={'_blank'}>
                                <i className="mdi mdi-google" />
                            </a>
                        </nav>
                    </div>
                </main>
            </div>
        </div>
    )
}
