import React, { useEffect, useState } from 'react'
import '../Project/Project.css'
import Projectlist from '../Projectlist/Projectlist'
import { all,html,wordpress,react,seo } from '../../data'
const Project = () => {
    const [selected,setSelected]=useState("all")
    const [data,setData]=useState([])
    const list=[
        {
            id:"all",
            title:"All",
        },
        {
            id:"html",
            title:"Html",
        },
        {
            id:"wordpress",
            title:"Wordpress",
        },
        {
            id:"react",
            title:"React",
        },
         {
            id:"seo",
            title:"Seo",
         }
    ]
    useEffect(()=>{
        switch (selected) {
            case "all":
                setData(all);
                
                break;
                case "html":
                    setData(html);
                    
                    break;

                    case "wordpress":
                        setData(wordpress);
                        
                        break;
                        
                        case "react":
                            setData(react);
                            
                            break;
                            case "seo":
                                setData(seo);
                                
                                break;
                                
                            
        
            default:
                setData(all);

                break;
        }
    },[selected])
  return (
    <div className='projects container' id='project'>
        <ul>
        {list.map((item)=>(
            <Projectlist title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
        ))}
        </ul>
     <div className="project_wapper">
        {data.map((dm) => {
             const {img,title}=dm;
             return(
                <div className="item">
                <img src={img} alt="" />
                <h3>{title}</h3>
                </div>
             )
        })}
     </div>

    </div>
  )
}

export default Project