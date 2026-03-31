export function formatDate(date: string | number): string {
  return new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long'
  }).format(new Date(date))
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function cn(...classes: (string | Record<string, boolean | undefined> | undefined | null)[]): string {
  return classes
    .flatMap(cls => {
      if (typeof cls === 'string') return cls
      if (cls && typeof cls === 'object') {
        return Object.entries(cls)
          .filter(([_, value]) => value)
          .map(([key]) => key)
      }
      return []
    })
    .filter(Boolean)
    .join(' ')
}

export function getYearsExperience(startYear: number): number {
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
}
