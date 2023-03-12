import '../styles/Portfolio.css'
import ProjectList from '../helpers/ProjectList'
import {useNavigate} from 'react-router-dom'
import React from 'react'

function Portfolio(){
    const Navigation = useNavigate("/")

    return(
        <>
            <div className='skillSec portfolioSec' id='PortfolioSec'>
                <h3>Portfolio</h3>
                <p className="comment">{"//"} There are some projects I have worked on</p>
                <div className="projectList">
                    {ProjectList.map((item,index)=>{
                        if(index>=2){
                            return;
                        }
                        else{
                            return (
                                // onClick={()=>{Navigation(`/project/${index}`)}}
                                <a href={item.link} key={index} target="_blank" style={{textDecoration:"none",color:"Black"}}>
                                    <div className="projectItem"  >
                                        <div className="textContent">
                                            <h2>{item.title}</h2>
                                            <div className="tags">
                                                {item.tags.map((tag,index)=>{
                                                    return(
                                                        <div key={index} className="tag">{tag}</div>
                                                    )
                                                })}
                                            </div>
                                            <div className="desc">{item.description.substring(0, 280)}</div>
                                        </div>
                                        <img src={item.img} alt="skill" />
                                    </div>
                                </a>
                            )
                        }
                    })}
                </div>
                <div style={{width:"100%",marginTop:"2rem",display:"flex",flexDirection:"row",justifyContent:"flex-end"}} className='viewContent'>
                    <a href="/#/projects" className="btn btnPrimary">View All<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path className='btnArrow' d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg></a>
                </div>
            </div>
        </>
    )
}

export default Portfolio;


