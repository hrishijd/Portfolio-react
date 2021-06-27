import React from 'react'
import './Skills.css'
function Skills() {
    return (
        <div className="Skills">
            <div className="Skill">
                <img src="./form.png" alt="front-end" />
                <h4>Front-End</h4>
                HTML
                <div className="Bar">
                    <div className="Bar-html"></div>
                </div>
                CSS
                <div className="Bar">
                    <div className="Bar-html"></div>
                </div>
                JavaScript
                <div className="Bar">
                    <div className="Bar-html"></div>
                </div>
                React.js
                <div className="Bar">
                    <div className="Bar-html"></div>
                </div>
            </div>
            <div className="Skill">
                <img src="./web-api.png" alt="back-end" />
                <h4>Back-End</h4>
                Java
                <div className="Bar">
                    <div className="Bar-html"></div>
                </div>
                Servlets
                <div className="Bar">
                    <div className="Bar-html"></div>
                </div>
                Spring MVC
                <div className="Bar">
                    <div className="Bar-html"></div>
                </div>
                Spring-boot
                <div className="Bar">
                    <div className="Bar-html"></div>
                </div>
                Rest API's
                <div className="Bar">
                    <div className="Bar-html"></div>
                </div>
            </div>
            <div className="Skill">
            <img src="./database.png" alt="back-end" />
                <h4>Databases</h4>
                MySQL
                <div className="Bar">
                    <div className="Bar-html"></div>
                </div>
                PostgreSQL
                <div className="Bar">
                    <div className="Bar-html"></div>
                </div>
                SQL
                <div className="Bar">
                    <div className="Bar-html"></div>
                </div>
            </div>
        </div>
    )
}

export default Skills
