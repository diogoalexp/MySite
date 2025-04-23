import React, { Component } from 'react';

import { Document, Page, pdfjs  } from "react-pdf";
import classes from './PDF.module.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class PDF extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
        rotate: 0
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }

    rotate (signal) {
        if (signal)
            if (this.state.rotate == 270)
                this.setState(prevState => ({ rotate: 0 }))
            else
                this.setState(prevState => ({ rotate: prevState.rotate + 90 }))
        else    
            if (this.state.rotate == 0)
                this.setState(prevState => ({ rotate: 270 }))
            else
            if (this.state.rotate == 90)
                this.setState(prevState => ({ rotate: 0 }))
            else
                this.setState(prevState => ({ rotate: prevState.rotate - 90 }))
    }

    render () {
        const { pageNumber, numPages, rotate } = this.state;

        
        return (
            <div className={classes.Main} >        
                <button onClick={() => this.state.pageNumber > 1 ?  this.setState(prevState => ({ pageNumber: prevState.pageNumber - 1 })) : null}>
                    ◄
                </button>
                <button onClick={() => this.state.pageNumber < numPages ?  this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 })) : null}>
                    ►
                </button>
                <button onClick={() => this.rotate(false)}>
                    -90º
                </button>
                <button onClick={() => this.rotate(true)}>
                    +90º
                </button>
                <Document className={classes.Document} file={this.props.file} onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page className={classes.Page} pageNumber={pageNumber}  height={window.innerHeight * 0.85} rotate={rotate}/>
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
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

export default PDF;