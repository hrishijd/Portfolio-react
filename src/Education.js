import React from 'react'
import './Education.css'
function Education() {
    return (
        <div>
            <div className="Studies">
            <div className="Content-study" style={{borderLeft:"none"}}>
                <div className="Image-s">
                <img src="https://www.dauniv.ac.in/new/sports/images/logo.png" alt="IIPS, DAVV"/>
                </div>
                <div className="Intro-s"><p>
                I am pursuing B.Tech+M.Tech(2018-2023) integrated which majors in IT, from IIPS, DAVV.<br/>
                </p></div>
            </div>
            <div className="Content-study">
                <div className="Image-s">
                <img src="https://www.gujaratibedind.org/wp-content/uploads/2020/09/Gujarati-Samaj-logo-150x150.png" alt="AMNEM, SGS"/>
                </div>
                <div className="Intro-s"><p>
                I have completed my HSC from SGS AMNEM(CBSE), Indore.<br/>
                </p></div>
            </div>
            <div className="Content-study">
                <div className="Image-s">
                <img src="http://sicaschool54.org/new54/images/Ed_web_logo-png.png" alt="SICA"/>
                </div>
                <div className="Intro-s"><p>
                I have completed my SSC from SICA 54 AMNEM(CBSE), Indore.<br/>
                </p></div>
            </div>
            </div>

        </div>
    )
}

export default Education
