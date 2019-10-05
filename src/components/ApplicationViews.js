import { Route } from 'react-router-dom'
import React from 'react'
import Home from './home/Home'
import CardList from './content/CardList'
//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
// import EmployeeCard from './employee/EmployeeCard'
// import OwnerCard from './owner/OwnerCard'


const ApplicationViews = () => {

    return (
      <React.Fragment>
        <Route exact path="/" render={() => {
          return <Home />
        }} />
        <Route path="/animals" render={() => {
          return <CardList database="animals"/>
        }} />
        <Route path="/locations" render={() => {
          return <CardList database="locations"/>
        }} />
        <Route path="/employees" render={() => {
          return <CardList database="employees"/>
        }} />
        <Route path="/owners" render={() => {
          return <CardList database="owners"/>
        }} />
      </React.Fragment>
    )
  }


export default ApplicationViews