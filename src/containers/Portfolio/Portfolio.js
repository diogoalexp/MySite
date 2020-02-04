import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from '../../components/Card/Project/Project';

import ss1 from '../../assets/images/items/ss-my-site.png';
import ss2 from '../../assets/images/items/ss-feirinha.png';
import ss3 from '../../assets/images/items/ss-hermano-flix.png';

class Career extends Component {
    state = {
        pt: [
            {   
                key:1,
                title: 'My Site',
                subTitle: 'Meu site pessoal',
                text: 'Esse site pessoal, o qual você está navegando nesse exato momento, foi construído com o objetivo de demonstrar um pouco sobre o meu perfil e meu trabalho, também é disponibilizado artigos e materiais relativos as minhas áreas de interesse, em breve será possível colaborar, pois pretendo torná-lo cada vez mais interativo.',
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
            },
            {   
                key:3,
                title: 'HFlix',
                subTitle: 'Filmes',
                text: 'Desenvolvi esse sistema como uma biblioteca para organizar filmes e séries, algo similar ao funcionamento da Netflix. No sistema também existe a funcionalidade de player direto na aplicação, com controles de video, som e legenda.',
                tec: ['ReactJS'],
                img: ss3,
                startDate: '2019', 
                git: "https://github.com/diogoalexp/HermanoFlix"
            }  
        ],
        en: [
            {   
                key:1,
                title: 'My Site',
                subTitle: 'My personal website',
                text: 'This personal website, which you are currently browsing, was built with the aim of demonstrating a little about my profile and my work, it is also available articles and materials related to my areas of interest, it will soon be possible to collaborate, because I intend to make it more and more interactive.',
                tec: ['ReactJS'],
                img: ss1,
                startDate: '2019',
                git: "https://github.com/diogoalexp/MySite"
            },
            {   
                key:2,
                title: 'Feirinha',
                subTitle: 'Universidade Federal do Paraná',
                text: 'This system was developed as a project to conclude the course during the post-graduation course in Software Engineering at UFPR, the system has a social purpose and aims to provide a tool that collaborates with the organization and dissemination of information referring to street fairs in the city of Curitiba.',
                tec: ['ReactJS'],
                img: ss2,
                startDate: '2019', 
                git: "https://github.com/diogoalexp/feirinha"
            },
            {   
                key:3,
                title: 'HFlix',
                subTitle: 'Movies',
                text: 'I developed this system as a library to organize movies and series, something similar to the way Netflix works. In the system there is also the functionality of a direct player in the application, with video, sound and subtitle controls.',
                tec: ['ReactJS'],
                img: ss3,
                startDate: '2019', 
                git: "https://github.com/diogoalexp/HermanoFlix"
            }         
        ],
        fr: [
            {   
                key:1,
                title: 'My Site',
                subTitle: 'Mon site personnel',
                text: 'Ce site personnel, que vous parcourez actuellement, a été construit dans le but de démontrer un peu mon profil et mon travail, il est également disponible des articles et du matériel liés à mes domaines d"intérêt, il sera bientôt possible de collaborer, car J"ai l"intention de le rendre de plus en plus interactif.',
                tec: ['ReactJS'],
                img: ss1,
                startDate: '2019',
                git: "https://github.com/diogoalexp/MySite"
            },
            {   
                key:2,
                title: 'Feirinha',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Ce système a été développé comme un projet pour conclure le cours pendant le cours de post-diplôme en génie logiciel à l"UFPR, le système a un but social et vise à fournir un outil qui collabore avec l"organisation et la diffusion d"informations concernant les foires de rue dans la ville de Curitiba.',
                tec: ['ReactJS'],
                img: ss2,
                startDate: '2019', 
                git: "https://github.com/diogoalexp/feirinha"
            },
            {   
                key:3,
                title: 'HFlix',
                subTitle: 'Les films',
                text: 'J"ai développé ce système comme une bibliothèque pour organiser des films et des séries, quelque chose de similaire à la façon dont Netflix fonctionne. Dans le système, il y a aussi la fonctionnalité d"un lecteur direct dans l"application, avec des contrôles vidéo, audio et de sous-titres.',
                tec: ['ReactJS'],
                img: ss3,
                startDate: '2019', 
                git: "https://github.com/diogoalexp/HermanoFlix"
            }           
        ]        

    }

    render () {
        let items = this.props.language == 'en' ? this.state.en : (this.props.language == 'fr' ? this.state.fr : this.state.pt);
        return (
            <div>
                {items.map(item => (
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
        language: state.language.value
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
        // onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/' ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Career );