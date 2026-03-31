import Link from 'next/link'
import { contacts } from '@/data/contacts'
import './footer.scss'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h4 className="footer__title">VovlichenKOS</h4>
            <p className="footer__text">
              Веб-разработчик, создающий цифровые миры с 2022 года.
            </p>
          </div>
          
          <div className="footer__section">
            <h4 className="footer__title">Навигация</h4>
            <ul className="footer__links">
              <li><Link href="/">Главная</Link></li>
              <li><Link href="/about">Обо мне</Link></li>
              <li><Link href="/projects">Проекты</Link></li>
              <li><Link href="/contacts">Контакты</Link></li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h4 className="footer__title">Контакты</h4>
            <ul className="footer__contacts">
              <li>
                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
              </li>
              <li>
                <a href={`tel:${contacts.phone.replace(/\D/g, '')}`}>{contacts.phone}</a>
              </li>
              <li>
                <a href={`https://t.me/${contacts.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                  {contacts.telegram}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} VovlichenKOS. Все права защищены.
          </p>
          <p className="footer__made">
            Создано с тьмой в душе и светом в коде
          </p>
        </div>
      </div>
    </footer>
  )
}
