import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button, Container, Menu, Input, Search } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()
    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("/")
    }
    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item
                        name='home'>
                        <Link to={`/`}>Ana Sayfa</Link>
                    </Menu.Item>
                    <Menu.Item
                        name='messages' />

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input action={{ type: 'submit', icon:'search' }}
                                placeholder='Ara...' />
                        </Menu.Item>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />
                            // bildiğimiz if.
                            //? if, : else
                            //SignedIn'in içinde signOut diye bir fonksiyon varmış gibi
                        }





                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
