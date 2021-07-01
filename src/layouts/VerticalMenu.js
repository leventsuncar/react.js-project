import React from 'react'
import { Menu, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default function VerticalMenu() {
    return (
        <div>
            <Menu inverted pointing vertical>
                <Divider />
                <Link to={"/jobAdvertisements"}>
                    <Menu.Item >
                        İş İlanları
                    </Menu.Item>
                    <Divider />
                </Link>
                <Link to={"/jobPositions"}>
                    <Menu.Item>
                        İş Pozisyonları</Menu.Item>
                </Link>
                <Divider />
                <Link to={"/jobSeekers"}>
                    <Menu.Item>
                        İş Arayanlar
                    </Menu.Item>
                </Link>
                <Divider />
                <Link to={"/jobAdvertisements/add"}>
                    <Menu.Item>
                        İş İlanı Oluştur
                    </Menu.Item>
                </Link>
                <Divider />
            </Menu>
        </div>
    )
}
