import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 

   GpUpdate=(account-info:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.put(Web() + '/account-info' + `?jwt_token=${jwt_token}`, account-info);
    }
}