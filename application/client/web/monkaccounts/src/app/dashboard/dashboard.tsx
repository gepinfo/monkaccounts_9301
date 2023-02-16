import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./dashboard.scss";
import  {service}   from './dashboard.service';

class Dashboard extends React.Component<any, any> {
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

    render(){
    return(
    <>
        <h2 className="screen-align">dashboard</h2>
        <div id="template-i4pr" className="gjs-row">
    <div id="template-if7o" className="gjs-cell">
        <div id="template-i70prs" className="gjs-row">
            <div id="template-iodn0e" className="gjs-cell">
                <div id="template-i13o" className="gjs-row">
                    <div id="template-i3iq" className="gjs-cell">
                        <div id="template-iawg">Cashflow
                            <br id="template-idl2f"></br>
                        </div>
                    </div>
                    <div id="template-ijmn" className="gjs-cell">
                        <div id="template-i66dd">Inflow
                            <br id="template-i6wp7"></br>
                        </div>
                        <div id="template-if4u4">Outflow</div>
                    </div>
                    <div id="template-idnz" className="gjs-cell">
                        <select id="template-iye3h" className="select ">
                            <option value="" id="template-ibx67">This Year</option>
                            <option id="template-i4ql3">This Year</option>
                            <option id="template-isxt5">This Quarter</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div id="template-i1zek" className="gjs-row">
            <div id="template-ii2o7" className="gjs-cell">
                <div id="template-iic2j" className="gjs-row">
                    <div id="template-iyhfx" className="gjs-cell">
                        <div id="template-ibnku">Sales Invoice</div>
                        <select id="template-iolw6" className="select ">
                            <option value="" id="template-i4z86o">This Year</option>
                            <option id="template-ifoiqt">This Year</option>
                            <option id="template-i0dmpf">This Quarter</option>
                            <option id="template-irk2jv">This Month</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="template-is2nu" className="gjs-cell">
                <div id="template-ieyob" className="gjs-row">
                    <div id="template-i32de" className="gjs-cell">
                        <div id="template-ihp0f">Purchase Invoice</div>
                        <select id="template-ifnd6" className="select ">
                            <option value="" id="template-i3w4yi">This Year</option>
                            <option id="template-i28m3a">This Year</option>
                            <option id="template-iipxzj">This Quater</option>
                            <option id="template-im5kws">This Month</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div id="template-i3a4l7" className="gjs-row">
            <div id="template-iy28fp" className="gjs-cell">
                <div id="template-iz148w" className="gjs-row">
                    <div id="template-iiiykh" className="gjs-cell">
                        <div id="template-i8ism">Profit and Loss</div>
                        <select id="template-im66mg" className="select ">
                            <option value="" id="template-i0zcxt">This Year</option>
                            <option id="template-i4ki02">This Year</option>
                            <option id="template-ixnrut">This Quater</option>
                            <option id="template-ig36bb">This Month</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="template-iuw5f9" className="gjs-cell">
                <div id="template-iahe85" className="gjs-row">
                    <div id="template-i1ane5" className="gjs-cell">
                        <div id="template-ibca8w">Top Expenses</div>
                        <select id="template-iq3zna" className="select ">
                            <option value="" id="template-i6ri5k">This Year</option>
                            <option id="template-inyx7i">This Year</option>
                            <option id="template-ipf36j">This Quater</option>
                            <option id="template-iifgkh">This Month</option>
                        </select>
                    </div>
                    <div id="template-i5do3f" className="gjs-cell">
                        <div id="template-iqof2h" className="gjs-row"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Dashboard;