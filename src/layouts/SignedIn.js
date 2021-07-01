import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://upload.wikimedia.org/wikipedia/tr/thumb/6/61/HarryPotterOotP.jpg/220px-HarryPotterOotP.jpg" />
                <Dropdown pointing="top left" text="Levent" >
                    <Dropdown.Menu>
                        <Dropdown.Item text="Profil" icon="info " />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out " />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
