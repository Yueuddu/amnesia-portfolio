import { getYearsExperience } from '@/utils/helpers'
import './about-section.scss'

export function AboutSection() {
  const yearsExp = getYearsExperience(2022)

  return (
    <section className="about-section">
      <div className="about-section__content">
        <h2 className="about-section__title heading-style">Обо мне</h2>
        
        <div className="about-section__intro">
          <p>
            Приветствую тебя, путник. Я — веб-разработчик, создающий цифровые миры 
            с 2022 года. Моя стража — это код, мой меч — TypeScript, а мой щит — React.
          </p>
          <p>
            За годы странствий я прошёл через множество проектов: от небольших визиток 
            до сложных веб-приложений. Каждый проект — это новая глава в моей книге опыта.
          </p>
        </div>
        
        <div className="about-section__stats">
          <div className="about-section__stat">
            <span className="about-section__stat-value">{yearsExp}+</span>
            <span className="about-section__stat-label">лет опыта</span>
          </div>
          <div className="about-section__stat">
            <span className="about-section__stat-value">15+</span>
            <span className="about-section__stat-label">проектов</span>
          </div>
          <div className="about-section__stat">
            <span className="about-section__stat-value">∞</span>
            <span className="about-section__stat-label">чашек кофе</span>
          </div>
        </div>
        
        <div className="about-section__quote">
          «Тьма не пугает того, кто нашёл свет в коде»
        </div>
      </div>
    </section>
  )
}
