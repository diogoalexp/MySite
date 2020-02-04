import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Item/Item';

import ufpr from '../../assets/images/items/ufpr.png';
import celin from '../../assets/images/items/celin.png';
import influx from '../../assets/images/items/influx.png';


class Formation extends Component {
    state = {
        pt: [
            {   
                key:1,
                title: 'Especialização em Engenharia de Software',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Especialização com o foco em metogolodias de desenvolvimento, neste curso aprimorei conceitos de engenharia de requisitos, modelagem de software, gestão de projetos e desenvolvimento JAVA. Meu trabalho de conclusão de curso foi a construção de um sistema, contemplando todas as fases de um projeto, para realizar o cadatramento das feiras de rua na cidade de Curitiba.',
                img: ufpr,
                startDate: '2018', 
                endDate: '2019'
            },
            {   
                key:2,
                title: 'Bacharelado em Ciência da Computação',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Curso com fundamentação em lógica computacional, curso com uma base muito forte para a compreensão de estruturas algoritmicas. Nessa graduação é explorado todos os níveis de codificação, sendo parte do conteúdo algoritmos, matemática, estatística, análise assintótica, indução, grafos, inteligência artificial, compiladores e etc.',
                img: ufpr,
                startDate: '2012', 
                endDate: '2015'
                
            },
            {   
                key:3,
                title: 'Escola Técnica da UFPR',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Ensino médio realizado dentro da Universidade Federal do Paraná, considerado por anos como excelência em ensino médio e com processo seletivo concorrido, atualmente a instituição não oferta mais esse serviço. Neste local realizei as disciplinas elementares no nivel médio e módulos suplementares, como informática, matemática financeira e Espanhol(3 anos).',
                img: ufpr,
                startDate: '2004', 
                endDate: '2006'
            },
            {   
                key:4,
                title: 'Curso de Inglês',
                subTitle: 'Influx English School',
                text: 'Escola de inglês com programa de aprendizado e meta de fluência em 2 anos e meio. Realizei todos os niveis ofertados.',
                img: influx,
                startDate: '2010', 
                endDate: '2012'
            },
            {   
                key:5,
                title: 'Curso de Francês',
                subTitle: 'Centro de Línguas e Interculturalidade',
                text: 'Cursando atualmente o nível intermediário 2...',
                img: celin,
                startDate: '2017', 
                endDate: null
            }          
        ],
        en: [
            {   
                key:1,
                title: 'Specialization in Software Engineering',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Specialization with a focus on development metogolodies, in this course I improved requirements engineering concepts, software modeling, project management and JAVA development. My course completion work was the construction of a system, covering all phases of a project, to register the street fairs in the city of Curitiba.',
                img: ufpr,
                startDate: '2018', 
                endDate: '2019'
            },
            {   
                key:2,
                title: 'Bachelor of Computer Science',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Course based on computational logic, course with a very strong basis for understanding algorithmic structures. In this graduation all levels of coding are explored, being part of the content algorithms, mathematics, statistics, asymptotic analysis, induction, graphs, artificial intelligence, compilers and etc.',
                img: ufpr,
                startDate: '2012', 
                endDate: '2015'
                
            },
            {   
                key:3,
                title: 'UFPR Technical School',
                subTitle: 'Universidade Federal do Paraná',
                text: 'High school held within the Federal University of Paraná, considered for years as excellence in high school and with a competitive selection process, currently the institution no longer offers this service. In this place I took elementary courses at the medium level and supplementary modules, such as computer science, financial mathematics and Spanish (3 years).',
                img: ufpr,
                startDate: '2004', 
                endDate: '2006'
            },
            {   
                key:4,
                title: 'English course',
                subTitle: 'Influx English School',
                text: 'English school with learning program and fluency goal in 2 ½ years. I performed all the levels offered.',
                img: influx,
                startDate: '2010', 
                endDate: '2012'
            },
            {   
                key:5,
                title: 'French course',
                subTitle: 'Centro de Línguas e Interculturalidade',
                text: 'Currently attending intermediate level 2 ...',
                img: celin,
                startDate: '2017', 
                endDate: null
            }      
        ],
        fr: [
            {   
                key:1,
                title: 'Spécialisation en génie logiciel',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Spécialisation en mettant l"accent sur les métogolodies de développement, dans ce cours, j"ai amélioré les concepts d"ingénierie des exigences, la modélisation logicielle, la gestion de projet et le développement JAVA. Mon travail de fin de cours était la construction d"un système, couvrant toutes les phases d"un projet, pour enregistrer les foires de rue dans la ville de Curitiba.',
                img: ufpr,
                startDate: '2018', 
                endDate: '2019'
            },
            {   
                key:2,
                title: 'Baccalauréat en informatique',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Cours basé sur la logique de calcul, cours avec une base très solide pour comprendre les structures algorithmiques. Dans cette graduation, tous les niveaux de codage sont explorés, faisant partie des algorithmes de contenu, mathématiques, statistiques, analyse asymptotique, induction, graphiques, intelligence artificielle, compilateurs, etc.',
                img: ufpr,
                startDate: '2012', 
                endDate: '2015'
                
            },
            {   
                key:3,
                title: 'Ecole Technique UFPR',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Lycée détenu au sein de l"Université fédérale du Paraná, considéré pendant des années comme l"excellence au lycée et avec un processus de sélection compétitif, actuellement l"établissement n"offre plus ce service. À cet endroit, j"ai suivi des cours élémentaires de niveau moyen et des modules supplémentaires, tels que l"informatique, les mathématiques financières et l"espagnol (3 ans).',
                img: ufpr,
                startDate: '2004', 
                endDate: '2006'
            },
            {   
                key:4,
                title: 'Cours d"anglais',
                subTitle: 'Influx English School',
                text: 'Ecole d"anglais avec programme d"apprentissage et objectif de maîtrise en 2 ans et demi. J"ai effectué tous les niveaux proposés.',
                img: influx,
                startDate: '2010', 
                endDate: '2012'
            },
            {   
                key:5,
                title: 'Cours de français',
                subTitle: 'Centro de Línguas e Interculturalidade',
                text: 'Actuellement au niveau intermédiaire 2 ...',
                img: celin,
                startDate: '2017', 
                endDate: null
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

export default connect( mapStateToProps, mapDispatchToProps )( Formation );