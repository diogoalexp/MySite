import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from '../../components/Card/Project/Project';

import ss1 from '../../assets/images/items/ss-my-site.png';
import ss2 from '../../assets/images/items/ss-feirinha.png';

class Career extends Component {
    state = {
        items: [
            {   
                key:1,
                title: 'My Site',
                subTitle: 'Meu site pessoal',
                text: 'Esse site pessoal, o qual você está navegando nesse exato momento, foi construído com o objetivo de demonstrar um pouco sobre o meu perfil e meu trabalho, também é disponibilizado material artigos e materiais relativos as minhas áreas de interesse, em breve será possível colaborar, pois pretendo torná-lo cada vez mais interativo.',
                tec: ['ReactJS'],
                img: ss1,
                startDate: '2019',
                git: "https://github.com/diogoalexp/MySite"
            },
            {   
                key:2,
                title: 'Feirinha',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Esse sistema foi desenvolvido como projeto de conclusão de curso durante a pós gradução de Engenharia de Software da UFPR, o sistema possui finalidade social e pretente fornecer uma ferramenta que colabore com a organização e divulgação das informações refenrentes as feiras de rua na cidade Curitiba.',
                tec: ['ReactJS'],
                img: ss2,
                startDate: '2019', 
                git: "https://github.com/diogoalexp/feirinha"
            }
        ]
    }

    render () {
        return (
            <div>
                {this.state.items.map(item => (
                    <Project 
                        key={item.key}
                        title = {item.title}
                        subTitle = {item.subTitle}
                        description = {item.text}
                        img = {item.img}
                        startDate = {item.startDate}
                        tec = {item.tec}
                        git = {item.git}
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

export default connect( mapStateToProps, mapDispatchToProps )( Career );