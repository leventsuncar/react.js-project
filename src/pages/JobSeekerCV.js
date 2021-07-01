import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image, Card, Icon, Grid, Header } from 'semantic-ui-react'
import JobSeekerCVService from '../services/jobSeekerCVService';

export default function JobSeekerCV() {
  let { id } = useParams();
  const [jobSeekerCV, setJobSeekerCV] = useState({})



  useEffect(() => {
    let jobSeekerCVService = new JobSeekerCVService();
    jobSeekerCVService.getCVById(id).then(result => setJobSeekerCV(result.data.data))
  });


  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="6">
            <Card>
              <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>{jobSeekerCV.jobSeekerFirstName} {jobSeekerCV.jobSeekerLastName}</Card.Header>
                <Card.Meta>
                  <span className='date'>Doğum Yılı {jobSeekerCV.jobSeekerBirthYear}</span>
                </Card.Meta>
                <Card.Description>
                  {jobSeekerCV.cvSocialLinkDto?.linkedinLink}

                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width="10">
            <Header as="h1">Ön Yazı</Header>
            <p>{jobSeekerCV.coverLetter}</p>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </div>
  )
}
