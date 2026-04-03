import type { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'
import { generateSEO } from '@/utils/seo'
import './contacts-page.scss'

const seo = generateSEO({
  title: 'Контакты',
  description: 'Связаться с разработчиком Сухановым Владимиром. Email: suhanovv909@gmail.com, Telegram: @Pampakin'
})

export const metadata: Metadata = seo

export default function ContactsPage() {
  return (
    <div className="contacts-page">
      <ContactForm />
    </div>
  )
}
