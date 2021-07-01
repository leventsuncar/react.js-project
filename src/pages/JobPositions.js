import React, { useEffect, useState } from 'react'
import JobPositionService from '../services/jobPositionService'
import { Button, Image, Card } from 'semantic-ui-react'
export default function JobPositions() {

    const [positions, setPositions] = useState([])

    useEffect(() => {
        let jobPositonService = new JobPositionService()
        jobPositonService.getPositions().then(result => setPositions(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group itemsPerRow="3">
                {
                    positions.map(position => (


                        <Card>
                            <Card.Content>
                               
                               
                                <Card.Header>{position.name}</Card.Header>
                                
                                
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        Approve
                                    </Button>
                                    <Button basic color='red'>
                                        Decline
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>

                    ))
                }

            </Card.Group>
        </div>
    )
}

