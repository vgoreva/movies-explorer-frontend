import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className='footer__about'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <p className='footer__year'>&copy; 2023</p>
                <ul className="footer__links">
                    <li className='footer__string'>
                        <Link to={"https://practicum.yandex.ru/"} className="footer__link" target="_blank">Яндекс.Практикум</Link></li>
                    <li className='footer__string'>
                        <Link to={"https://github.com/"} className="footer__link" target="_blank">Github</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
