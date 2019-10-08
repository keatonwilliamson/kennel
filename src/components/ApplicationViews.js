import { Route } from 'react-router-dom'
import React from 'react'
import Home from './home/Home'
import CardList from './content/CardList'
import CardDetail from './content/CardDetail'
import CardForm from './content/CardForm'
import CardEditForm from './content/CardEditForm'
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
      {/* --------------------------------------------------- */}
      <Route exact path="/animals" render={(props) => {
        return <CardList database="animals" {...props} />
      }} />
      <Route exact path="/animals/:cardId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <CardDetail database="animals" cardId={parseInt(props.match.params.cardId)} {...props} />
      }} />
      <Route path="/animals/new" render={(props) => {
        return <CardForm database="animals" {...props} />
      }} />
      <Route
        path="/animals/:cardId(\d+)/edit" render={props => {
          return <CardEditForm database="animals" cardId={parseInt(props.match.params.cardId)} {...props} />
        }}
      />
      {/* --------------------------------------------------- */}
      <Route exact path="/locations" render={(props) => {
        return <CardList database="locations" {...props} />
      }} />
      <Route exact path="/locations/:cardId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <CardDetail database="locations" cardId={parseInt(props.match.params.cardId)} {...props} />
      }} />
      <Route path="/locations/new" render={(props) => {
        return <CardForm database="locations" {...props} />
      }} />
      <Route
        path="/locations/:cardId(\d+)/edit" render={props => {
          return <CardEditForm database="locations" cardId={parseInt(props.match.params.cardId)} {...props} />
        }}
      />
      {/* --------------------------------------------------- */}
      <Route exact path="/employees" render={(props) => {
        return <CardList database="employees" {...props} />
      }} />
      <Route exact path="/employees/:cardId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <CardDetail database="employees" cardId={parseInt(props.match.params.cardId)} {...props} />
      }} />
      <Route path="/employees/new" render={(props) => {
        return <CardForm database="employees" {...props} />
      }} />
      <Route
        path="/employees/:cardId(\d+)/edit" render={props => {
          return <CardEditForm database="employees" cardId={parseInt(props.match.params.cardId)} {...props} />
        }}
      />
      {/* --------------------------------------------------- */}
      <Route exact path="/owners" render={(props) => {
        return <CardList database="owners" {...props} />
      }} />
      <Route exact path="/owners/:cardId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <CardDetail database="owners" cardId={parseInt(props.match.params.cardId)} {...props} />
      }} />
      <Route path="/owners/new" render={(props) => {
        return <CardForm database="owners" {...props} />
      }} />
      <Route
        path="/owners/:cardId(\d+)/edit" render={props => {
          return <CardEditForm database="owners" cardId={parseInt(props.match.params.cardId)} {...props} />
        }}
      />

    </React.Fragment>
  )
}


export default ApplicationViews