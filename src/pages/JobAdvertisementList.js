import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
export default function JobAdvertisementList() {
    const [advertisements, setAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getAdvertisements().then(result => setAdvertisements(result.data.data))
    }, [])


    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Unit Price</Table.HeaderCell>
                        <Table.HeaderCell>Units in Stoct</Table.HeaderCell>
                        <Table.HeaderCell>Quantity Per Unit</Table.HeaderCell>
                        <Table.HeaderCell>Category Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {
                        advertisements.map(advertisement => (
                            //advertisements.map diyince adeta bir for each döngüsü şeklinde bir yapı oluşturuyor.
                            //her advertisement için bir satır oluşturuyor
                            //ilk tablo hücresini link olarak kullandık

                            <Table.Row key="advertisement.id">
                                <Table.Cell><Link to={`/jobAdvertisementDetails/${advertisement.id}`}>{advertisement.jobPositionName}</Link></Table.Cell>
                                <Table.Cell>{advertisement.jobDescription}</Table.Cell>
                                <Table.Cell>{advertisement.applicationDeadline}</Table.Cell>
                                <Table.Cell>{advertisement.employerCompanyName}</Table.Cell>
                                <Table.Cell>{advertisement.cityName}</Table.Cell>

                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
