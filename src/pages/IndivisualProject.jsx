import React from 'react'
import { useParams } from "react-router-dom";
import Carousel from '../components/Carousel';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectListFull from '../helpers/ProjectListFull';
import '../styles/IndivisualProject.css'

function IndivisualProject() {
    const params = useParams();
    console.log(ProjectListFull[params.id].img);
    const backStyle={
        // background:`linear-gradient(0deg,#890affcc,#8909ffcc ), url(${ProjectListFull[params.id].img}),no-repeat`,
        background:`linear-gradient(0deg,#890affcc,#8909ffcc ), url(${ProjectListFull[params.id].img}) center center / cover no-repeat`,
    }
  return (
    <>
        <Navbar />
        <div className="indivisualContainer">
            <div className="indiHeader" style={backStyle} key={params.id} >
                <h1>{ProjectListFull[params.id].title}</h1>
                <div className="tags">
                    {ProjectListFull[params.id].tags.map((tag,index)=>{
                        return(
                            <div key={index} className="tag">{tag}</div>
                        )
                    })}
                </div>
            </div>
            <div className="indiLink">
            Live View:-{ProjectListFull[params.id].demoLink==="Not Available"?<span>{"Not Available"} </span>:<a href={ProjectListFull[params.id].demoLink}>Click Here</a>}
            </div>
            <div className="indivisualDesc">
                {ProjectListFull[params.id].description}
            </div>
            <div className="indiFullImg">
                {/* <img src={ProjectListFull[params.id].imgFull} alt="" /> */}
                <Carousel images={ProjectListFull[params.id].imgFull} />
            </div>
            <div className="indivisualDesc">
                {ProjectListFull[params.id].description2}
            </div>

            
        </div>
        <Footer />
    </>
  )
}

export default IndivisualProject