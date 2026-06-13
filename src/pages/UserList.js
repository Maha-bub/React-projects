import React, {useEffect, useState} from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import axios from 'axios';



export default function UserList() {
         const [users, setUsers]=useState();
         useEffect(()=>{
            axios.get('http://localhost/React-projects/api/user_list.php')
            .then(res=>{setUsers(res.data)});
         },[]);

         console.log(users);


    return (
        <>
        <Nav></Nav>
        <Header></Header>
        <div>UserList</div>
        <Footer></Footer>
        </>
        
    )
}
