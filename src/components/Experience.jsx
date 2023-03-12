import '../styles/Experience.css'
import skillsList from "../helpers/SkillsList";
import React from 'react'

function Experience(){

    return(
        <>
            <div className='skillSec' id='SkillSec'>
                <h3>Experience</h3>
                <p className="comment">{"//"} There are the technology I have worked with</p>
                <div className="skillList">
                    {skillsList.map((item,index)=>{
                        return(
                            <div key={index} className="skillItem">
                                <span></span>
                                <img src={item.path} alt="skill" />
                                <p>{item.title}</p>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </>
    )
}

export default Experience;


