import React from 'react'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import JobAdvertisementDetails from '../pages/JobAdvertisementDetails'
import JobAdvertisementForm from '../pages/JobAdvertisementForm'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobPositions from '../pages/JobPositions'
import JobSeekerCV from '../pages/JobSeekerCV'
import JobSeekers from '../pages/JobSeekers'
import MainPage from '../pages/MainPage'




import VerticalMenu from './VerticalMenu'
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column style={{ marginRight: "5em" }} width="3">
                        <VerticalMenu />
                    </Grid.Column>
                    <Grid.Column style={{ marginTop: "3em" }} width="12">
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/jobAdvertisements" component={JobAdvertisementList} />
                        <Route path="/jobAdvertisementDetails/:id" component={JobAdvertisementDetails} />
                        <Route exact path="/jobPositions" component={JobPositions} />
                        <Route exact path="/jobSeekers" component={JobSeekers} />
                        <Route exact path="/jobAdvertisements/add" component={JobAdvertisementForm} />

                        <Route exact path="/jobSeekerCVDetails/:id" component={JobSeekerCV} />


                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
            </Grid>
        </div>
    )
}
