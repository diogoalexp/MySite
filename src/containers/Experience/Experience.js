import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../../components/Card/Item/Item';

import cinq from '../../assets/images/items/cinq.png';
import positivo from '../../assets/images/items/positivo.png';
import exxon from '../../assets/images/items/exxon.png';
import mps from '../../assets/images/items/mps.png';

class Experience extends Component {
    state = {
        pt: [
            {   
                key:1,
                title: 'CINQ Technologies',
                subTitle: 'Senior Software Engineer',
                text: 'Consultor de análise e desenvolvimento de software, responsável pelo desenvolvimento de sistemas e melhoria de processos.',
                img: cinq,
                startDate: '10/15/2018', 
                endDate: null
            },
            {   
                key:2,
                title: 'Grupo Positivo',
                subTitle: 'Analista de Sistemas',
                text: 'Responsável pela arquitetura de novos projetos e acompanhamento dos respectivos times de desenvolvimento, atuando como SCRUM Master e desenvolvedor FullStack em diversos projetos. Responsável por elaborar o processo de desenvolvimento, metodologia aplicada, padrões e convenções de código, documentação e DevOps. Responsável pela avaliação técnica de candidatos a ingressar na empresa.',
                img: positivo,
                startDate: '09/15/2017', 
                endDate: '10/15/2018'
            },
            {   
                key:3,
                title: 'ExxonMobil',
                subTitle: 'Analista de Sistemas',
                text: 'Atuando como desenvolvedor FullStack e como SCRUM Master nos setores de Operation Excellence e Projetos. Responsável por automatizar diversos serviços, levantar requisitos, liderança técnica e desenvolver sistemas web.',
                img: exxon,
                startDate: '01/01/2015', 
                endDate: '09/20/2017'
            },
            {   
                key:4,
                title: 'MPS Informática',
                subTitle: 'Desenvolvedor',
                text: 'Desenvolvimento e manutenção de softwares relacionados aos tribunais de justiça de diversos estados brasileiros. Software de grande porte sujeito a processo minucioso de auditória em banco de dados.',
                img: mps,
                startDate: '10/01/2011', 
                endDate: '12/31/2014'
            }      
        ],
        en: [
            {   
                key:1,
                title: 'CINQ Technologies',
                subTitle: 'Senior Software Engineer',
                text: 'Software analysis and development consultant, responsible for systems development and process improvement.',
                img: cinq,
                startDate: '10/15/2018', 
                endDate: null
            },
            {   
                key:2,
                title: 'Grupo Positivo',
                subTitle: 'Systems Analyst',
                text: 'Responsible for the architecture of new projects and monitoring of the respective development teams, acting as SCRUM Master and FullStack developer in several projects. Responsible for developing the development process, applied methodology, code, documentation and DevOps standards and conventions. Responsible for the technical evaluation of candidates to join the company.',
                img: positivo,
                startDate: '09/15/2017', 
                endDate: '10/15/2018'
            },
            {   
                key:3,
                title: 'ExxonMobil',
                subTitle: 'Systems Analyst',
                text: 'Acting as FullStack developer and SCRUM Master in the Operation Excellence and Projects sectors. Responsible for automating various services, raising requirements, technical leadership and developing web systems.',
                img: exxon,
                startDate: '01/01/2015', 
                endDate: '09/20/2017'
            },
            {   
                key:4,
                title: 'MPS Informática',
                subTitle: 'Developer',
                text: 'Development and maintenance of software related to the courts of justice of several Brazilian states. Large software subject to a thorough database auditing process.',
                img: mps,
                startDate: '10/01/2011', 
                endDate: '12/31/2014'
            }            
        ],
        fr: [
            {   
                key:1,
                title: 'CINQ Technologies',
                subTitle: 'Ingénieur logiciel senior',
                text: 'Consultant en analyse et développement de logiciels, responsable du développement des systèmes et de l"amélioration des processus.',
                img: cinq,
                startDate: '10/15/2018', 
                endDate: null
            },
            {   
                key:2,
                title: 'Grupo Positivo',
                subTitle: 'Analyste de systèmes',
                text: 'Responsable de l"architecture des nouveaux projets et du suivi des équipes de développement respectives, agissant en tant que SCRUM Master et développeur FullStack dans plusieurs projets. Responsable du développement du processus de développement, de la méthodologie appliquée, des normes et conventions de code et de documentation et DevOps. Responsable de l"évaluation technique des candidats à rejoindre l"entreprise.',
                img: positivo,
                startDate: '09/15/2017', 
                endDate: '10/15/2018'
            },
            {   
                key:3,
                title: 'ExxonMobil',
                subTitle: 'Analyste de systèmes',
                text: 'Agir en tant que développeur FullStack et SCRUM Master dans les secteurs Excellence opérationnelle et Projets. Responsable de l"automatisation de divers services, de l"augmentation des exigences, du leadership technique et du développement de systèmes Web.',
                img: exxon,
                startDate: '01/01/2015', 
                endDate: '09/20/2017'
            },
            {   
                key:4,
                title: 'MPS Informática',
                subTitle: 'Développeur',
                text: 'Développement et maintenance de logiciels liés aux cours de justice de plusieurs états brésiliens. Grand logiciel soumis à un processus d"audit de base de données approfondi.',
                img: mps,
                startDate: '10/01/2011', 
                endDate: '12/31/2014'
            }           
        ]
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
                        img = {item.img}
                        startDate = {item.startDate}
                        endDate = {item.endDate}
                        calcDate = {true}
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

export default connect( mapStateToProps, mapDispatchToProps )( Experience );