import '../styles/Portfolio.css'
import ProjectList from '../helpers/ProjectList'
import {useNavigate} from 'react-router-dom'
import React from 'react'

function PortfolioFull(){
    const Navigation = useNavigate("/")

    return(
        <>
            <div className='skillSec portfolioSec' id='PortfolioSec'>
                <h3>Portfolio</h3>
                <p className="comment">{"//"} There are projects on Which I have worked on</p>
                <div className="projectList">
                    {/* {ProjectListFull.map((item,index)=>{
                        return (
                            <div className="projectItem" key={index} onClick={()=>{Navigation(`/project/${index}`)}}>
                                <div className="textContent">
                                    <h2>{item.title}</h2>
                                    <div className="tags">
                                        {item.tags.map((tag,index)=>{
                                            return(
                                                <div key={index} className="tag">{tag}</div>
                                            )
                                        })}
                                    </div>
                                    <div className="desc">{item.description.substring(0, 147)}...</div>
                                </div>
                                <img src={item.img} alt="skill" />
                            </div>
                        )
                    })} */}
                    {ProjectList.map((item,index)=>{
                        
                        return (
                            // onClick={()=>{Navigation(`/project/${index}`)}}
                            <a href={item.link} key={index} target="_blank" style={{textDecoration:"none",color:"Black"}}>
                                <div className={index%2!=0?"projectItem projectItemReverse":"projectItem "} >
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
                        
                    })}
                </div>
            </div>
        </>
    )
}

export default PortfolioFull;


