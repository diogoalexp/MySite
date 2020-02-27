import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Language.module.css';
import * as actions from './../../store/actions/index';
import flagBr from './../../assets/images/flag-br.png';
import flagEn from './../../assets/images/flag-en.png';
import flagFr from './../../assets/images/flag-fr.png';
import noImg from './../../assets/images/no-image-icon.png'

class Language extends Component {
    state = {
        options: [
            {lang: 'pt', flag: flagBr}, 
            {lang: 'en', flag: flagEn}, 
            {lang: 'fr', flag: flagFr}, 
        ],
    }

    changeValue = (v) => {
        this.props.onChangeLanguage(v);
    }

    render(){
        let selected = this.props.language ;
        let img = noImg;
        switch(selected){
            case 'pt':
                img = flagBr;
                break;
            case 'en':
                img = flagEn;
                break;
            case 'fr':
                img = flagFr;
                break;            
        }
        return(
            <div>
                {/* <select
                className={classes.ptBr}
                    id="lang"
                    // className={inputClasses.join(' ')}
                    value={selected}
                    onChange={(e) => this.changeValue(e)}>
                    {this.state.options.map(option => (
                        // <img src={noImg} height="150" width="150" alt="no img" />
                        <option  key={option} value={option}>
                            {
                                option
                            }
                        </option>
                    ))}
                </select> */}
                <div className={classes.Main}>                    
                    <div className={classes.Options}>
                        <img className={classes.Image} src={img} height="32" width="32" alt="no img" />
                        {this.state.options.map(option => (
                            selected != option.lang ?
                            <div key={option.lang} className={classes.Option} onClick={() => this.changeValue(option.lang)}>
                                <img src={option.flag} height="32" width="32" alt="no img" />
                            </div>
                            : null
                        ))}                        
                        {/* <div className={classes.Option} onClick={() => this.changeValue("pt-br")}>
                            <img src={flagBr} height="32" width="32" alt="no img" />
                        </div>
                        <div className={classes.Option} onClick={() => this.changeValue("en")}>
                            <img src={flagEn} height="32" width="32" alt="no img" />
                        </div>
                        <div className={classes.Option} onClick={() => this.changeValue("fr")}>
                            <img src={flagFr} height="32" width="32" alt="no img" />
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }

};

const mapStateToProps = state => {
    return {
        // loading: state.auth.loading,
        // error: state.auth.error
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
        onChangeLanguage: (value) => dispatch( actions.setLanguage( value ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Language );