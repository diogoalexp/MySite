import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Item.module.css';
import noImg from '../../../assets/images/no-image-icon.png';

class Card extends Component {
    // const img = this.props.img != null ? "data:image/png;base64,"+this.props.img : noImg;
    state = {
        pt: {   
            actually:"Atualmente",
            years: 'Anos',
            year: 'Ano',
            months: 'Meses',
            month: 'Mês'
        },
        en: {   
            actually:"Actually",
            years: 'Years',
            year: 'Year',
            months: 'Months',
            month: 'Month'
        },
        fr: {   
            actually:"Actuellement",
            years: 'Années',
            year: 'Année',
            months: 'Mois',
            month: 'Mois'
        }     
    }

    calcDate(date1,date2, lang) {
        if (!this.props.calcDate)
            return '';
        let diff = Math.floor(date1.getTime() - date2.getTime());
        let day = 1000 * 60 * 60 * 24;
    
        let days = Math.floor(diff/day);
        let months = Math.floor(days/31);
        let years = Math.floor(months/12);
        months = Math.floor(months - (years * 12)) +1;
        
    
        let message = ' : ';
        if (years > 1)
            message += years + " "+lang.years+" \n"
        if (years === 1)
            message += years + " "+lang.year+" \n"
        if (months > 1)
            message += months + " "+lang.months+""
        if (months === 1)
            message += months + " "+lang.month+""

        return message
    }

    render(){
        let lang = this.props.language == 'en' ? this.state.en : (this.props.language == 'fr' ? this.state.fr : this.state.pt);

        let period = '';
        let endDate = lang.actually;
        let calculatedDate = '';
        if(this.props.startDate !== null){
            period = this.props.startDate;
            if(this.props.endDate !== null){
                calculatedDate = this.calcDate(new Date(this.props.endDate), new Date(this.props.startDate), lang);
                endDate = this.props.endDate;
            }
            period = this.props.startDate + " - " + endDate + calculatedDate;
        }

        return (
            <div className={classes.container}>
                <div className={classes.dateHeader}>
                    <label>{period}</label>
                </div>
                <div className={classes.avatarflip}>
                    <img src={this.props.img ? this.props.img : noImg} height="150" width="150" alt="no img"/>
                    <img src={this.props.img ? this.props.img : noImg} height="150" width="150" alt="no img"/>
                </div>
                <div className={classes.content2}>
                    <h2 className={classes.title}>{this.props.title}</h2>
                    <h4 className={classes.subTitle}>{this.props.subTitle}</h4>
                    <p className={classes.text}>{this.props.text}</p>
                </div>
                <div className={classes.dateFooter} >
                    <label>{period}</label>
                </div>
            </div> 
        );
    }
};

const mapStateToProps = state => {
    return {
        // loading: state.auth.loading,
        // error: state.auth.error,
        // isAuthenticated: state.auth.token !== null,
        // buildingBurger: state.burgerBuilder.building,
        // authRedirectPath: state.auth.authRedirectPath
        language: state.language.value
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
        // onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/' ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Card );