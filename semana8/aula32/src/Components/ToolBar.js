import React from 'react'
import { Button} from '@material-ui/core';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {completeAllTasks,deleteAllComplete,delAllTasks,setFilter} from '../Actions/index'
const Bar = styled.div`

`

const Toolbar  = (props) => {
    return(
        <Bar>
            <Button onClick={props.completeAllTasks}>Marcar Todas Completas</Button>
            <Button color="primary" onClick={()=>props.setFilter("all")}>Todas</Button>
            <Button color="primary" onClick={()=>props.setFilter("pending")}>Pendentes</Button>
            <Button color="primary" onClick={()=>props.setFilter("completed")}>Completas</Button>
            <Button onClick={props.delAllTasks}>Remover Completas</Button>
        </Bar>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        completeAllTasks: () => dispatch(completeAllTasks()),
       // deleteAllComplete: () => dispatch(deleteAllComplete()),
        delAllTasks: () => dispatch(delAllTasks()),
        setFilter: filter => dispatch(setFilter(filter))
    }
}
export default connect(null,mapDispatchToProps) (Toolbar)