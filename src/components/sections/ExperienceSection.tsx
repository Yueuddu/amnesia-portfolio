import { experience } from '@/data/experience'
import './experience-section.scss'

export function ExperienceSection() {
  return (
    <section className="experience-section">
      <h2 className="experience-section__title heading-style">Опыт работы</h2>
      
      <div className="experience-section__timeline">
        {experience.map((exp, index) => (
          <div key={exp.id} className="experience-section__item">
            <div className="experience-section__marker" />
            
            <div className="experience-section__card">
              <div className="experience-section__header">
                <h3 className="experience-section__position">{exp.position}</h3>
                <span className="experience-section__period">{exp.period}</span>
              </div>
              
              <p className="experience-section__company">{exp.company}</p>
              <p className="experience-section__description">{exp.description}</p>
              
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="experience-section__achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="experience-section__achievement">
                      <span className="experience-section__bullet">›</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="experience-section__tech">
                {exp.technologies.map(tech => (
                  <span key={tech} className="experience-section__tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
