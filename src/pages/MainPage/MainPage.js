import React, {useEffect} from 'react'
import {connect} from "react-redux";
import StatisticBlock from "../../components/Statisctic/StatisticBlock";
import {
    avatarPNG,
    companyStatSVG,
    specStatSVG,
    userStatSVG
} from '../../assets/'
import {getActions, getStatistic} from "../../redux/reducers/mainReducer";

import './MainPage.css'
import {Link, Route} from "react-router-dom";
import TableContainer from "../../components/Table/TableContainer";
import {LastActionsColumns} from "../../configs/Main/tableColumnsConfig";




const MainPage = ({statistic,lastActions,getActions,username})=>{
    return(
        <>
            <a href="http://46.101.99.48/"  target={'_blank'} className = 'page-content__open-site'>Открыть сайт</a>
            <div className = 'page-content__profile'><span>{username.name}</span> <img  alt=""/></div>
            <span className='page-content__title'>{'Главная'}</span>
             <div className={'statistic-wrapper'}>
            <StatisticBlock img={userStatSVG} title={'Пользователи'} data={statistic.user_count}  />
            <StatisticBlock img ={specStatSVG} title={'Специалисты'} data={statistic.spec_count}/>
            <StatisticBlock img ={companyStatSVG} title={'Компании'} data={statistic.comp_count}/>
             </div>
            <span className='page-content__title' style={{marginBottom: '60px'}}>{'Последние действия'}</span>
                 <TableContainer
                     //isLoading={isLoading}
                     getDataFunc={getActions}
                     data={lastActions[0]}
                     columns={LastActionsColumns}
                     editing={false}
                 />

        </>
    )
}
const mapStateToProps = state=>{
    return{
        statistic: state.main.statistic,
        lastActions: state.main.lastActions,
        username: state.auth.username
    }
}


export  default connect(mapStateToProps,{getActions})
(MainPage)