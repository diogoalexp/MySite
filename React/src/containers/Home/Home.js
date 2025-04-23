import React, { Component } from 'react';
import { connect } from 'react-redux';

import fotoProfile from '../../assets/images/foto_profile_nb.png';
import matrix from '../../assets/images/matrix.gif';

import Card from '../../components/Card/Profile/Profile';

import * as actions from './../../store/actions/index';
// import * as langs from './../../store/languages/index';
import * as util from './../../shared/utility';

class Home extends Component {
    state = {
        pt: [
            {   
                key:1,
                title: 'Diogo Alexandro Pereira',
                subTitle: 'Engenheiro de Software & SCRUM Master',
                text: 'Sou um cientista da computação com especialidade em engenharia de software, entusiasta das metodologias agéis e tornei essas vertentes a minha profissão, minha paixão e parte do meu dia a dia.',
                img1: fotoProfile,
                img2: matrix
            }          
        ],
        en: [
            {   
                key:1,
                title: 'Diogo Alexandro Pereira',
                subTitle: 'Software Engineer & SCRUM Master',
                text: 'I am a computer scientist with a specialty in software engineering, an enthusiast of agile methodologies and I have made these aspects my profession, my passion and part of my daily life.',
                img1: fotoProfile,
                img2: matrix
            }          
        ],
        fr: [
            {   
                key:1,
                title: 'Diogo Alexandro Pereira',
                subTitle: 'Ingénieur Logiciel & SCRUM Master',
                text: 'Je suis un informaticien spécialisé en génie logiciel, passionné de méthodologies agiles et j\'ai fait de ces aspects mon métier, ma passion et une partie de ma vie quotidienne.',
                img1: fotoProfile,
                img2: matrix
            }          
        ]
    }

    componentDidMount(){
    }

    render () {
        let items = this.props.language == 'en' ? this.state.en : (this.props.language == 'fr' ? this.state.fr : this.state.pt);
        return (
            <div>
                {items.map(item => (
                    <Card 
                        key={item.key}
                        title = {item.title}
                        subTitle = {item.subTitle}
                        text = {item.text}
                        img = {fotoProfile}
                        img2 = {matrix}
                    />
                        
                ))}
            </div>
        );
    }
}

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
        // onChangeLanguage: () => dispatch( actions.setLanguage( '/' ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );