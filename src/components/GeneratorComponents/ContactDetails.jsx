import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Global';
import { Input, InputDiv, InputLabel } from '../../styled/Input.styled';

const ContactDetails = () => {
    const { name, setName, position, setPosition, phone, setPhone, phoneIconUrl, setPhoneIconUrl, phoneIconWidth, setPhoneIconWidth, email, setEmail, emailIconUrl, setEmailIconUrl, emailIconWidth, setEmailIconWidth, website, setWebsite } = useContext(GlobalContext);
    return (
        <div>
            <InputDiv>
                <InputLabel>Name: </InputLabel>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <InputLabel>Position: </InputLabel>
                <Input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <InputLabel>Phone: </InputLabel>
                <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <InputLabel>Phone Icon URL: </InputLabel>
                <Input type="text" value={phoneIconUrl} onChange={(e) => setPhoneIconUrl(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <InputLabel>Phone Icon Width: </InputLabel>
                <Input type="number" value={phoneIconWidth} onChange={(e) => setPhoneIconWidth(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <InputLabel>Email: </InputLabel>
                <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <InputLabel>Email Icon URL: </InputLabel>
                <Input type="text" value={emailIconUrl} onChange={(e) => setEmailIconUrl(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <InputLabel>Email Icon Width: </InputLabel>
                <Input type="number" value={emailIconWidth} onChange={(e) => setEmailIconWidth(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <InputLabel>Website: </InputLabel>
                <Input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </InputDiv>
        </div>
    )
}

export default ContactDetails