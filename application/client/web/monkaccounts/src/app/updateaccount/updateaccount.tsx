import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./updateaccount.scss";
import  {service}   from './updateaccount.service';

class Updateaccount extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    account-info : {
    created_date: '',
    created_by: '',
    last_modified_by: '',
    last_modified_date: '',
    account-name: '',
    account-id: '',
    description: '',
    tags: '',
    account-storage-created: '',
    },
    
    rowData :[],options:[],
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ account-info: { ...this.state.account-info, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.account-info.created_by = sessionStorage.getItem('email')||'{}';
    }
    GpUpdate  () {
    this.test.GpUpdate(this.state.account-info).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">updateaccount</h2>
        <div id="template-i33p" className="gjs-row">
    <div id="template-ijs7" className="gjs-cell"></div>
    <div id="template-i1xqy" className="gjs-cell">
        <div id="template-idj23" className="gjs-row">
            <div id="template-ipaxj" className="gjs-cell">
                <div id="template-igw9g">Update Account</div>
            </div>
            <div id="template-izswk" className="gjs-cell">
                <div id="template-i0urs">Account Name</div>
                <input id="template-i7lv4" required="true" placeholder=""
                className="input form-control " />
            </div>
            <div id="template-iizpx" className="gjs-cell">
                <div id="template-i25od">Description</div>
                <textarea id="template-indcg" onChange={this.handlechange}
                name="description" value={this.state.monkchartofaccounts.description}className="textarea "></textarea>
            </div>
            <div id="template-ivzqb" className="gjs-cell">
                <div id="template-i9ain">Tags</div>
                <input id="template-i1b8c" required="true" onChange={this.handlechange}
                name="tags" value={this.state.monkchartofaccounts.tags}className="input form-control "
                />
            </div>
            <div id="template-io5ao" className="gjs-cell">
                <button id="template-isk6o" onClick={()=>this.GpUpdate()} className="button btn btn-primary "> Update
                    <br id="template-ii65f"></br>
                </button>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Updateaccount;