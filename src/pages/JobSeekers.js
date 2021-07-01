import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button, Image, Card } from 'semantic-ui-react'
import JobSeekerCVService from '../services/jobSeekerCVService'
import JobSeekerService from '../services/jobSeekerService'
export default function JobSeekers() {


    const [jobSeekers, setjobSeekers] = useState([])
    


    


    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekers().then(result => setjobSeekers(result.data.data))
    }, [])

   
       
    

    return (
        <div>
            <Card.Group itemsPerRow="3">
                {jobSeekers.map(jobSeeker => (
                    <Card key="jobSeeker.id">

                        <Card.Content>
                            <Image
                                floated='right'
                                size='mini'
                                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                            />
                            <Card.Header>{jobSeeker.firstName + " " + jobSeeker.lastName}</Card.Header>
                            <Card.Meta>{jobSeeker.coverLetter}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <div>
                                <Link to={`/jobSeekerCVDetails/${jobSeeker.id}`}>
                                    <Button basic className="fluid button" color='green'>
                                        Ayrıntılar
                                    </Button>
                                </Link>
                            </div>
                        </Card.Content>
                    </Card>))

                }
            </Card.Group>
        </div>
    )
}
