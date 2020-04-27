import React, { useState } from 'react';
import './SkillContainer.scss';
import Skill from '../../components/Skill/Skill';

const SkillContainer = () => {

    const [skills, setSkill] = useState({
        reactjs: {
            name: 'Reactjs',
        },
        html5: {
            name: 'html5',
        },
        sass: {
            name: 'Sass',
        },
        js: {
            name: 'Javascript',
        },
        php: {
            name: 'PHP',
        },
        C: {
            name: 'C',
        },
        salesForce: {
            name: 'SalesForce',
        }
        
    })

    const skillClickHandler = () => {
        console.log("clicked");
        // 
    }

        const skillData = [];
        
        for (let key in skills) {
            skillData.push({
                id: key,
                config: skills[key],
            });
        }
        let skill = ( 
                skillData.map( skill =>         
                    <Skill
                        key={skill.id}
                        name={skill.config.name}
                        clicked={skillClickHandler} 
                        className={skill.config.name}  
                    />
                )
        )
    return (
        <section className="SkillContainer">
            {skill}
        </section>

    )
}

export default SkillContainer;