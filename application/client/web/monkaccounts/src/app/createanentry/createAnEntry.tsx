import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./createAnEntry.scss";
import  {service}   from './createAnEntry.service';

class CreateAnEntry extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    entry : {
    created_date: '',
    created_by: '',
    last_modified_by: '',
    last_modified_date: '',
    entry-name: '',
    account-id: '',
    account-name: '',
    description: '',
    currency-type: '',
    ammount: '',
    },
    
    rowData :[],options:[],
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ entry: { ...this.state.entry, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.entry.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">createAnEntry</h2>
        <div id="template-ig23">This a place holder - REMOVE<span id="template-ir42">
</span>

</div>
    </>
    );
    };
    };

    export default CreateAnEntry;