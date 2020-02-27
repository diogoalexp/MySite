import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from '../../components/Card/Project/Project';

import ss1 from '../../assets/images/items/ss-my-site.png';
import ss2 from '../../assets/images/items/ss-feirinha.png';
import ss3 from '../../assets/images/items/ss-hermano-flix.png';
import ss4 from '../../assets/images/items/ss-burger-builder.png';
import ss5 from '../../assets/images/items/ss-volvo-trucks.png';
import ss6 from '../../assets/images/items/ss-hlix-old.png';

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
            },
            {   
                key:4,
                title: 'Burger Builder',
                subTitle: 'Guia completo de React',
                text: 'Realizei um curso completo de React JS, com mais de 60 horas de aula e diversos exercícios práticos. O curso abordou assuntos como React Hooks, Router, Redux e etc. Durante o curso o projeto base para aprendizado foi esse site de confeccionar e ordenar hambúguers.',
                tec: ['ReactJS'],
                img: ss4,
                startDate: '2018', 
                git: "https://github.com/diogoalexp/react-complete-guide"
            },
            {   
                key:5,
                title: 'RestAPI',
                subTitle: 'Guia completo API em ASP.CORE',
                text: 'Realizei um treinamento de práticas com APIs constrúidas em ASP.CORE, esse projeto contém alguns dos fundamento aprendidos.',
                tec: ['ASP.CORE', 'C#'],
                img: null,
                startDate: '2018', 
                git: "https://github.com/diogoalexp/RESTAPI"
            },
            {   
                key:6,
                title: 'GitHub repositórios',
                subTitle: 'Lista de repositótios públicos',
                text: 'Desenvolvi esse sistema em um desafio de codificação promovido pela Ateliware.',
                tec: ['AngularJS', 'ASP.NET', 'C#'],
                img: null,
                startDate: '2018', 
                git: "https://github.com/diogoalexp/GitHub-repositories"
            },
            {   
                key:7,
                title: 'TFS repositórios',
                subTitle: 'Lista de repositótios do TFS',
                text: 'Solução feita para auxiliar uma migração do TFS 2010 para o TFS 2018.',
                tec: ['AngularJS'],
                img: null,
                startDate: '2018', 
                git: "https://github.com/diogoalexp/TFS-list"
            },
            {   
                key:8,
                title: 'Trucks',
                subTitle: 'Gerenciar Caminhões',
                text: 'Desenvolvi esse sistema em um desafio de codificação promovido pela Volvo do Brasil.',
                tec: ['ASP.CORE', 'C#'],
                img: ss5,
                startDate: '2019', 
                git: "https://github.com/diogoalexp/volvo"
            },
            {   
                key:9,
                title: 'HFLIX(OLD)',
                subTitle: 'Primeira versão da HFLIX',
                text: 'Desenvolvi esse sistema como uma biblioteca para organizar filmes e séries. Foi migrado para uma versão em React.',
                tec: ['AngularJS'],
                img: ss6,
                startDate: '2017', 
                git: "https://github.com/diogoalexp/HFLIX"
            },
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
            },
            {   
                key:4,
                title: 'Burger Builder',
                subTitle: 'React Complete Guide',
                text: 'I took a complete React JS course, with more than 60 hours of class and several practical exercises. The course covered subjects such as React Hooks, Router, Redux and etc. During the course the basic project for learning was this website to make and order hamburgers.',
                tec: ['ReactJS'],
                img: ss4,
                startDate: '2018', 
                git: "https://github.com/diogoalexp/react-complete-guide"
            },
            {   
                key:5,
                title: 'RestAPI',
                subTitle: 'Complete API Guide in ASP.CORE',
                text: 'I did a practice training with APIs built in ASP.CORE, this project contains some of the fundamentals learned.',
                tec: ['ASP.CORE', 'C#'],
                img: null,
                startDate: '2018', 
                git: "https://github.com/diogoalexp/RESTAPI"
            },
            {   
                key:6,
                title: 'GitHub repositories',
                subTitle: 'List of public repositories',
                text: 'I developed this system in a coding challenge promoted by Ateliware.',
                tec: ['AngularJS', 'ASP.NET', 'C#'],
                img: null,
                startDate: '2018', 
                git: "https://github.com/diogoalexp/GitHub-repositories"
            },
            {   
                key:7,
                title: 'TFS repositories',
                subTitle: 'List of TFS repositories',
                text: 'Solution designed to assist a migration from TFS 2010 to TFS 2018.',
                tec: ['AngularJS'],
                img: null,
                startDate: '2018', 
                git: "https://github.com/diogoalexp/TFS-list"
            },
            {   
                key:8,
                title: 'Trucks',
                subTitle: 'Manage Trucks',
                text: 'I developed this system in a coding challenge promoted by Volvo do Brasil.',
                tec: ['ASP.CORE', 'C#'],
                img: ss5,
                startDate: '2019', 
                git: "https://github.com/diogoalexp/volvo"
            },
            {   
                key:9,
                title: 'HFLIX(OLD)',
                subTitle: 'First version of HFLIX',
                text: 'I developed this system as a library to organize films and series. It has been migrated to a React version.',
                tec: ['AngularJS'],
                img: ss6,
                startDate: '2017', 
                git: "https://github.com/diogoalexp/HFLIX"
            },                
        ],
        fr: [
            {   
                key:1,
                title: 'My Site',
                subTitle: 'Mon site personnel',
                text: 'Ce site personnel, que vous parcourez actuellement, a été construit dans le but de démontrer un peu mon profil et mon travail, il est également disponible des articles et du matériel liés à mes domaines d\'intérêt, il sera bientôt possible de collaborer, car J\'ai l\'intention de le rendre de plus en plus interactif.',
                tec: ['ReactJS'],
                img: ss1,
                startDate: '2019',
                git: "https://github.com/diogoalexp/MySite"
            },
            {   
                key:2,
                title: 'Feirinha',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Ce système a été développé comme un projet pour conclure le cours pendant le cours de post-diplôme en génie logiciel à l\'UFPR, le système a un but social et vise à fournir un outil qui collabore avec l\'organisation et la diffusion d\'informations concernant les foires de rue dans la ville de Curitiba.',
                tec: ['ReactJS'],
                img: ss2,
                startDate: '2019', 
                git: "https://github.com/diogoalexp/feirinha"
            },
            {   
                key:3,
                title: 'HFlix',
                subTitle: 'Les films',
                text: 'J\'ai développé ce système comme une bibliothèque pour organiser des films et des séries, quelque chose de similaire à la façon dont Netflix fonctionne. Dans le système, il y a aussi la fonctionnalité d\'un lecteur direct dans l\'application, avec des contrôles vidéo, audio et de sous-titres.',
                tec: ['ReactJS'],
                img: ss3,
                startDate: '2019', 
                git: "https://github.com/diogoalexp/HermanoFlix"
            },
            {   
                key:4,
                title: 'Burger Builder',
                subTitle: 'Guide complet de React',
                text: 'J\'ai suivi un cours React JS complet, avec plus de 60 heures de cours et plusieurs exercices pratiques. Le cours a couvert des sujets tels que React Hooks, Router, Redux, etc. Pendant le cours, le projet de base pour l\'apprentissage était ce site Web pour fabriquer et commander des hamburgers.',
                tec: ['ReactJS'],
                img: ss4,
                startDate: '2018', 
                git: "https://github.com/diogoalexp/react-complete-guide"
            },
            {   
                key:5,
                title: 'RestAPI',
                subTitle: 'Guide complet de l\'API dans ASP.CORE',
                text: 'J\'ai fait une formation pratique avec des API intégrées dans ASP.CORE, ce projet contient certains des principes fondamentaux appris.',
                tec: ['ASP.CORE', 'C#'],
                img: null,
                startDate: '2018', 
                git: "https://github.com/diogoalexp/RESTAPI"
            },
            {   
                key:6,
                title: 'GitHub repositories',
                subTitle: 'Liste des référentiels publics',
                text: 'J\'ai développé ce système dans un défi de codage promu par Ateliware.',
                tec: ['AngularJS', 'ASP.NET', 'C#'],
                img: null,
                startDate: '2018', 
                git: "https://github.com/diogoalexp/GitHub-repositories"
            },
            {   
                key:7,
                title: 'TFS repositories',
                subTitle: 'Liste des référentiels TFS',
                text: 'Solution conçue pour faciliter la migration de TFS 2010 vers TFS 2018.',
                tec: ['AngularJS'],
                img: null,
                startDate: '2018', 
                git: "https://github.com/diogoalexp/TFS-list"
            },
            {   
                key:8,
                title: 'Trucks',
                subTitle: 'Gérer les camions',
                text: 'J\'ai développé ce système dans un défi de codage promu par Volvo do Brasil.',
                tec: ['ASP.CORE', 'C#'],
                img: ss5,
                startDate: '2019', 
                git: "https://github.com/diogoalexp/volvo"
            },
            {   
                key:9,
                title: 'HFLIX(OLD)',
                subTitle: 'Première version de HFLIX',
                text: 'J\'ai développé ce système comme une bibliothèque pour organiser des films et des séries. Il a été migré vers une version React.',
                tec: ['AngularJS'],
                img: ss6,
                startDate: '2017', 
                git: "https://github.com/diogoalexp/HFLIX"
            },      
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