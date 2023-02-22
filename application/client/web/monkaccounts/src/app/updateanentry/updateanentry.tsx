import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./updateanentry.scss";
import  {service}   from './updateanentry.service';

class Updateanentry extends React.Component<any, any> {
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
        <h2 className="screen-align">updateanentry</h2>
        <div id="template-ia6r" className="gjs-row">
    <div id="template-i1og" className="gjs-cell">
        <div id="template-imai" className="gjs-row">
            <div id="template-imd6" className="gjs-cell">
                <div id="template-ijbu" className="gjs-row">
                    <div id="template-ifel" className="gjs-cell">
                        <label id="template-izjv" className="label ">EntryName</label>
                        <input id="template-i36cn" className="input form-control "
                        />
                    </div>
                    <div id="template-iahl" className="gjs-cell">
                        <label id="template-ivemo" className="label ">Currency_type</label>
                        <input id="template-iokdh" className="input form-control "
                        />
                    </div>
                </div>
                <div id="template-il9je" className="gjs-row">
                    <div id="template-idxm5" className="gjs-cell">
                        <label id="template-irb3u" className="label ">Account_ID</label>
                        <input id="template-iehlj" className="input form-control "
                        />
                    </div>
                    <div id="template-i1ngz" className="gjs-cell">
                        <label id="template-icr0o" className="label ">Account_Name</label>
                        <input id="template-i55aj" className="input form-control "
                        />
                    </div>
                </div>
                <div id="template-i4zrd" className="gjs-row">
                    <div id="template-iq7ij" className="gjs-cell">
                        <label id="template-i09wj" className="label ">Account_Type</label>
                        <input id="template-ijp0j" className="input form-control "
                        />
                    </div>
                    <div id="template-i9y1z" className="gjs-cell">
                        <label id="template-ipl8y" className="label ">Description</label>
                        <input id="template-i8k1u" className="input form-control "
                        />
                    </div>
                </div>
                <div id="template-ibmw2" className="gjs-row">
                    <div id="template-ib24o" className="gjs-cell">
                        <label id="template-ie7sa" className="label ">Debit</label>
                        <input id="template-i8mtk" className="input form-control "
                        />
                    </div>
                    <div id="template-idqeb" className="gjs-cell">
                        <label id="template-ik3bg" className="label ">Credit</label>
                        <input id="template-iabev" className="input form-control "
                        />
                    </div>
                </div>
                <div id="template-iib1q" className="gjs-row"></div>
                <button id="template-iwor8" className="button btn btn-primary ">Delete</button>
                <button id="template-i6q0a" className="button btn btn-primary ">Update</button>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Updateanentry;