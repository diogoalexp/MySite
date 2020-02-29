import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Document, Page, pdfjs, StyleSheet  } from "react-pdf";
import classes from './Library.module.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import PDF from '../../components/PDF/PDF';

import fPos from '../../assets/files/pos.pdf';
import fBCC from '../../assets/files/bcc.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Library extends Component {
    state = {
        file: null,
        articles: [
            {   
                id:1,
                title: 'Sistema de cadastro de feiras de rua',
            },
            {   
                id:2,
                title: 'Aprendizado dinâmico de modelagens de desenvolvimento de software através de dinâmicas de sistemas',
            }
        ]
    }

    checkoutContinuedHandler = (id) => {
        const queryParams = [];
        queryParams.push('id=' + id);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/library',
            search: '?' + queryString
        });
        this.selectFile(id);
    }

    componentDidMount () {
        const query = new URLSearchParams( this.props.location.search );
        let id = 0;
        for ( let param of query.entries() ) {
            if (param[0] === 'id') {
                id = param[1];                
            }
        }
        this.selectFile(id);        
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.selectFile(null);   
        }
    }

    selectFile (id) {
        switch (Number(id)) {
            case 1:
                this.setState({file: fPos});
                break;
            case 2:
                this.setState({file: fBCC});
                break;                
            default:
                this.setState({file: null});
                break;
        }
    }

    render () {
        let container = null

        if (this.state.file != null )
            container = <PDF file={this.state.file}></PDF>
        else
            container = 
                this.state.articles.map(article => (
                    <div key={article.id}  className={classes.Links}>
                        <label>• <a href={"?id="+article.id} onClick={()=>this.selectFile(article.id)}>{article.title}</a></label>
                        <b />
                    </div>
                ));
            


        return (
            <div className={classes.Main} >                       
                {container}
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

export default connect( mapStateToProps, mapDispatchToProps )( Library );