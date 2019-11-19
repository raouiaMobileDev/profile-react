import React, {Component} from 'react';
import Layout from '../../components/Layout/Layout';
import UserBuilder from '../UserBuilder/UserBuilder'


class Home extends Component
{
    
    render(){

        return(
            <div>
                <Layout>
                 <UserBuilder/>
                </Layout>
            </div>
        )
    }
}

export default  Home;