import React, { Component } from 'react';
import { connect } from 'react-redux';

import fotoProfile from '../../assets/images/foto_profile_nb.png';
import matrix from '../../assets/images/matrix.gif';

import Card from '../../components/Card/Profile/Profile';

class Home extends Component {
    state = {
        items: [
            {   
                key:1,
                title: 'Diogo Alexandro Pereira',
                subTitle: 'Software Engineer & SCRUM Master',
                text: 'Sou um cientista da computação com especialidade em engenharia de software, entusiasta das metodologias agéis e tornei essas vertentes a minha profissão, minha paixão e parte do meu dia a dia.',
                img1: fotoProfile,
                img2: matrix
            }          
        ]
    }

    render () {
        return (
            <div>
                {this.state.items.map(item => (
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
        // error: state.auth.error,
        // isAuthenticated: state.auth.token !== null,
        // buildingBurger: state.burgerBuilder.building,
        // authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
        // onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/' ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );