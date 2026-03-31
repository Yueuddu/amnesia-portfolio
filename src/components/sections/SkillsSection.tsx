import { skills } from '@/data/skills'
import './skills-section.scss'

export function SkillsSection() {
  return (
    <section className="skills-section">
      <h2 className="skills-section__title heading-style">Навыки</h2>
      
      <div className="skills-section__grid">
        {skills.map((skillGroup, index) => (
          <div key={skillGroup.category} className="skills-section__category">
            <h3 className="skills-section__category-title">{skillGroup.category}</h3>
            <div className="skills-section__tags">
              {skillGroup.items.map((skill, skillIndex) => (
                <span 
                  key={skill} 
                  className="skills-section__tag"
                  style={{ animationDelay: `${(index * 10 + skillIndex) * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
