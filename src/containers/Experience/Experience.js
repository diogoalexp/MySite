import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
// import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';
import Card from '../../components/Card/Item/Item';

import cinq from '../../assets/images/items/cinq.png';
import positivo from '../../assets/images/items/positivo.png';
import exxon from '../../assets/images/items/exxon.png';
import mps from '../../assets/images/items/mps.png';

class Experience extends Component {
    state = {
        items: [
            {   
                key:1,
                title: 'CINQ Technologies',
                subTitle: 'Senior Software Engineer',
                text: 'Consultor de análise e desenvolvimento de software, responsável pelo desenvolvimento de sistemas e melhoria de processos.',
                img: cinq
            },
            {   
                key:2,
                title: 'Grupo Positivo',
                subTitle: 'Analista de Sistemas',
                text: 'Responsável pela arquitetura de novos projetos e acompanhamento dos respectivos times de desenvolvimento, atuando como SCRUM Master e desenvolvedor FullStack em diversos projetos. Responsável por elaborar o processo de desenvolvimento, metodologia aplicada, padrões e convenções de código, documentação e DevOps. Responsável pela avaliação técnica de candidatos a ingressar na empresa.',
                img: positivo
            },
            {   
                key:3,
                title: 'ExxonMobil',
                subTitle: 'Analista de Sistemas',
                text: 'Atuando como desenvolvedor FullStack e como SCRUM Master nos setores de Operation Excellence e Projetos. Responsável por automatizar diversos serviços, levantar requisitos, liderança técnica e desenvolver sistemas web.',
                img: exxon
            },
            {   
                key:4,
                title: 'MPS Informática',
                subTitle: 'Desenvolvedor',
                text: 'Desenvolvimento e manutenção de softwares relacionados aos tribunais de justiça de diversos estados brasileiros. Software de grande porte sujeito a processo minucioso de auditória em banco de dados.',
                img: mps
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

export default connect( mapStateToProps, mapDispatchToProps )( Experience );