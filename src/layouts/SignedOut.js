import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item style={{ marginTop: "0.2em" }}>
                <Button primary onClick={signIn} > Giriş Yap </Button>
                <Button primary style={{ marginLeft: "0.7em" }} > Kayıt Ol </Button>
            </Menu.Item>
        </div>
    )
}
