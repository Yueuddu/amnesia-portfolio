'use client'

import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/helpers'
import '@/../styles/components/_forms.scss'

interface AmnesiaInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const AmnesiaInput = forwardRef<HTMLInputElement, AmnesiaInputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, '-')

    return (
      <div className="amnesia-form__group">
        {label && (
          <label htmlFor={inputId} className="amnesia-input__label">
            {label}
          </label>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={cn('amnesia-input', { 'amnesia-input--error': !!error }, className)}
          {...props}
        />
        
        {error && <span className="amnesia-input__error">{error}</span>}
      </div>
    )
  }
)

AmnesiaInput.displayName = 'AmnesiaInput'

interface AmnesiaTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const AmnesiaTextarea = forwardRef<HTMLTextAreaElement, AmnesiaTextareaProps>(
  ({ className, label, error, id, rows = 4, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, '-')

    return (
      <div className="amnesia-form__group">
        {label && (
          <label htmlFor={inputId} className="amnesia-input__label">
            {label}
          </label>
        )}
        
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={cn('amnesia-input amnesia-textarea', { 'amnesia-input--error': !!error }, className)}
          {...props}
        />
        
        {error && <span className="amnesia-input__error">{error}</span>}
      </div>
    )
  }
)

AmnesiaTextarea.displayName = 'AmnesiaTextarea'
