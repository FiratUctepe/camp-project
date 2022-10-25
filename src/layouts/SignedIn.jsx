import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'
export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://patika-prod.s3-eu-central-1.amazonaws.com/userFiles/firatuctepe/profilePicture"/>
            <Dropdown pointing="top left" text="Fırat">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
