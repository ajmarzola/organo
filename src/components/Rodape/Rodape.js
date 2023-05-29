import './Rodape.css';
export const Rodape = () => {
    return (
        <footer className="rodape">
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/ajmarzola" target="_blank">
                            <img src="/images/fb.png" alt="Facebok" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/tbn_pepe" target="_blank">
                            <img src="/images/tw.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ajmarzola" target="_blank">
                            <img src="/images/ig.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="Organo" />
            </section>
            <section>
                <p>
                    Desenvolvido por A.J.
                </p>
            </section>
        </footer>
    )
}