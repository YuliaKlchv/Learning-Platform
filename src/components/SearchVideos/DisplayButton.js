import React, { useState, useEffect } from 'react'
import { Redirect, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Button } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ArrowsFullscreen, Star } from "react-bootstrap-icons";

const DisplayButton = (props) => {
    const history = useHistory();

    const displayVideo = () => {
        props.actions.storeVideoData(props.video)
        history.push('/displayVideo')
    }

    return (
        <>
        <Button className="btn" variant="primary" onClick={displayVideo}>
            <Star size={18} /> Rate this Video! <Star size={18} />
        </Button>
        </>
    )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(DisplayButton)