import React from 'react';

import classes from './Project.module.css';
import noImg from '../../../assets/images/no-image-icon.png';
import gitIcon from '../../../assets/images/github-icon.png';


const project = ( props ) => {
    // const img = props.img != null ? "data:image/png;base64,"+props.img : noImg;
    const img = props.img != null ? props.img : noImg;
    // const img = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jvg9Rf3mvsVTnhuyxPlN0eEL76C.jpg";
    const CardClasses = [classes.Project];

    const tecColor = (option) => {
        switch(option){
            case 'ReactJS':
                return classes.TecOptionJS;
                break;
            case 'AngularJS':
                return classes.TecOptionJS;
                break;                
            case 'ASP.NET':
                return classes.TecOptionASP;
                break;
            case 'ASP.CORE':
                return classes.TecOptionASP;
                break;
            case 'C#':
                return classes.TecOptionASP;
                break;
        }
        return classes.TecOption;
    }

    return (
            <div className={CardClasses.join(" ")} onClick={props.clicked}>
                <div className={classes.Title}>
                   <b>{props.title}</b>
                </div>             
                <div className={classes.Ano}>
                   <b>{props.startDate}</b>
                </div>
                <div className={classes.Imagem}>
                    <img src={img} alt="Sem Foto" />
                </div>
                <div className={classes.Tec}>
                    {/* <b>&nbsp;{props.tec}&nbsp;</b> */}
                    {props.tec.map(option => (
                            <label key={option} className={tecColor(option)}>
                                <b>&nbsp;{option}&nbsp;</b>
                            </label>
                        ))}   
                </div>
                <div className={classes.SubTitle}>
                    <b>{props.subTitle}</b>
                </div>  
                <div className={classes.Description}>
                   <b>{props.description}</b>
                </div>
                <div className={classes.Git}>
                    <a target="_blank" rel="noopener noreferrer"  href={props.git}>
                        <img src={gitIcon} className="githubIcon" />
                    </a>                    
                </div>                
            </div>
    );
};

export default project;
