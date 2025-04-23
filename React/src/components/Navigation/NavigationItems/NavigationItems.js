import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Language from './../../Language/Language';

class NavigationItems extends Component {
// const navigationItems = ( props ) => (
    state = {
        pt: {   
            home:"Home",
            formation: 'Formação',
            experience: 'Experiência',
            portfolio: 'Portfólio',
            library: 'Biblioteca'
        },
        en: {   
            home:"Home",
            formation: 'Formation',
            experience: 'Experience',
            portfolio: 'Portfolio',
            library: 'Library'
        },
        fr: {   
            home:"Home",
            formation: 'Formation',
            experience: 'Expérience',
            portfolio: 'Portfolio',
            library: 'Bibliothèque'
        }     
    }

    render(){
        let menu = this.props.language == 'en' ? this.state.en : (this.props.language == 'fr' ? this.state.fr : this.state.pt);
        return(
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/" exact>{menu.home}</NavigationItem>
                <NavigationItem link="/formation">{menu.formation}</NavigationItem>
                <NavigationItem link="/experience">{menu.experience}</NavigationItem>
                <NavigationItem link="/portfolio">{menu.portfolio}</NavigationItem>
                <NavigationItem link="/library">{menu.library}</NavigationItem>
                {/* <NavigationItem link="/library">Biblioteca</NavigationItem> */}
                {/* {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null} */}
                {/* {!props.isAuthenticated
                    ? <NavigationItem link="/auth">Authenticate</NavigationItem>
                    : <NavigationItem link="/logout">Logout</NavigationItem>} */}
                <Language></Language>
            </ul>
        );
    };
// );
}

const mapStateToProps = state => {
    return {
        language: state.language.value
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( NavigationItems );