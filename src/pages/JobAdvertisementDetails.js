import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function JobAdvertisementDetails() {
    let { id } = useParams();

    const [advertisement, setAdvertisement] = useState({})

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getAdvertisementById(id).then(result => setAdvertisement(result.data.data))
    }, [])
    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{advertisement.jobDescription}</Card.Header>
                        <Card.Meta>{advertisement.jobPositionName}</Card.Meta>
                        <Card.Description>
                            {advertisement.jobDescription}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Başvur
                            </Button>
                            <Button basic color='blue'>
                                Mesaj Gönder
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
