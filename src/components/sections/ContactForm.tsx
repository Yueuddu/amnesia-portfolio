'use client'

import { useState, FormEvent } from 'react'
import { AmnesiaButton } from '@/components/ui/AmnesiaButton'
import { AmnesiaInput, AmnesiaTextarea } from '@/components/ui/AmnesiaInput'
import { contacts } from '@/data/contacts'
import './contact-section.scss'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Имитация отправки
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section className="contact-section">
      <div className="contact-section__container">
        <h2 className="contact-section__title heading-style">Связаться</h2>
        
        <div className="contact-section__grid">
          <div className="contact-section__info">
            <h3 className="contact-section__subtitle">Контакты</h3>
            
            <div className="contact-section__details">
              <div className="contact-section__detail">
                <span className="contact-section__label">Email:</span>
                <a href={`mailto:${contacts.email}`} className="contact-section__value">
                  {contacts.email}
                </a>
              </div>
              
              <div className="contact-section__detail">
                <span className="contact-section__label">Телефон:</span>
                <a href={`tel:${contacts.phone.replace(/\D/g, '')}`} className="contact-section__value">
                  {contacts.phone}
                </a>
              </div>
              
              <div className="contact-section__detail">
                <span className="contact-section__label">Telegram:</span>
                <a href={`https://t.me/${contacts.telegram.replace('@', '')}`} className="contact-section__value">
                  {contacts.telegram}
                </a>
              </div>
              
              <div className="contact-section__detail">
                <span className="contact-section__label">MAX:</span>
                <span className="contact-section__value">{contacts.max}</span>
              </div>
            </div>
            
            <div className="contact-section__social">
              <a href={contacts.social.github} target="_blank" rel="noopener noreferrer" className="contact-section__social-link">
                GitHub
              </a>
              <a href={contacts.social.vk} target="_blank" rel="noopener noreferrer" className="contact-section__social-link">
                VK
              </a>
            </div>
          </div>
          
          <form className="contact-section__form" onSubmit={handleSubmit}>
            <AmnesiaInput
              label="Имя"
              type="text"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              placeholder="Как к тебе обращаться?"
            />
            
            <AmnesiaInput
              label="Email"
              type="email"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              placeholder="Куда ответить?"
            />
            
            <AmnesiaTextarea
              label="Послание"
              value={formData.message}
              onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
              required
              placeholder="Изложи свою мысль..."
              rows={5}
            />
            
            <AmnesiaButton 
              type="submit" 
              variant="primary" 
              disabled={status === 'sending' || status === 'success'}
              className="contact-section__submit"
            >
              {status === 'sending' ? 'Отправка...' : status === 'success' ? 'Отправлено!' : 'Отправить'}
            </AmnesiaButton>
          </form>
        </div>
      </div>
    </section>
  )
}
