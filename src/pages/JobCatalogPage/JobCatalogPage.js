import React, {Component} from 'react';
import axios from 'axios';
import style, {} from './style.js';
import baseUrl from "../../constants/baseUrl.js";
import header from "../../constants/header.js";
import JobCard from '../../components/JobCard/JobCard.js';

export default class JobCatalogPage extends Component {
    render() {
        return (
            <div>
                <JobCard/>
            </div>
        );
    };
};