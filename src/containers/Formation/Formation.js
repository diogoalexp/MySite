import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Formation.module.css';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';
import Card from '../../components/Card/Item/Item';

import ufpr from '../../assets/images/items/ufpr.png';
import celin from '../../assets/images/items/celin.png';
import influx from '../../assets/images/items/influx.png';


class Formation extends Component {
    state = {
        items: [
            {   
                key:1,
                title: 'Especialização em Engenharia de Software',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Especialização com o foco em metogolodias de desenvolvimento, neste curso aprimorei conceitos de engenharia de requisitos, modelagem de software, gestão de projetos e desenvolvimento JAVA. Meu trabalho de conclusão de curso foi a construção de um sistema, contemplando todas as fases de um projeto, para realizar o cadatramento das feiras de rua na cidade de Curitiba.',
                img: ufpr
            },
            {   
                key:2,
                title: 'Bacharelado em Ciência da Computação',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Curso com fundamentação em lógica computacional, curso com uma base muito forte para a compreensão de estruturas algoritmicas. Nessa graduação é explorado todos os níveis de codificação, sendo parte do conteúdo algoritmos, matemática, estatística, análise assintótica, indução, grafos, inteligência artificial, compiladores e etc.',
                img: ufpr
            },
            {   
                key:3,
                title: 'Escola Técnica da UFPR',
                subTitle: 'Universidade Federal do Paraná',
                text: 'Ensino médio realizado dentro da Universidade Federal do Paraná, considerado por anos como excelência em ensino médio e com processo seletivo concorrido, atualmente a instituição não oferta mais esse serviço. Neste local realizei as disciplinas elementares no nivel médio e módulos suplementares, como informática, matemática financeira e Espanhol(3 anos).',
                img: ufpr
            },
            {   
                key:4,
                title: 'Curso de Inglês',
                subTitle: 'Influx English School',
                text: 'Escola de inglês com programa de aprendizado e meta de fluência em 2 anos e meio. Realizei todos os niveis ofertados.',
                img: influx
            },
            {   
                key:5,
                title: 'Curso de Francês',
                subTitle: 'Centro de Línguas e Interculturalidade',
                text: 'Cursando atualmente o nível intermediário 2...',
                img: celin
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
                        img = {item.img}
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

export default connect( mapStateToProps, mapDispatchToProps )( Formation );