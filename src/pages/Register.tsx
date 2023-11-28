import { useState } from "react";
import { Box, TextField, Button, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [successRegister, setSuccessRegister] = useState(false)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const [suite, setSuite] = useState("")
    const [city, setCity] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [catchPhrase, setCatchPhrase] = useState("")
    const [bs, setBs] = useState("")

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/v1/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    username,
                    password,
                    email,
                    address: {
                      street,
                      suite,
                      city,
                      zipcode,
                      lat,
                      lng,
                    },
                    phone,
                    website,
                    company: {
                      name,
                      catchPhrase,
                      bs,
                    },
                }),
            })

            if (response.ok) {
                setSuccessRegister((prev) => true);
            }
            else {
                console.log(`Failed Register!`)
            }
        }
        catch (error)
        {
            console.log(`Error while registering!`)
        }
    }

    return (
        <>
            <div className="container">
                <Snackbar
                    open={successRegister}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={3000}
                    onClose={() => {
                        setSuccessRegister((prev) => false);
                        navigate("/");
                    }}
                    message="created user success!"
                />
                <h2>Please fill in the following form</h2>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleFormSubmit}
                    >
                    <div>
                        <TextField
                        variant="outlined"
                        id="username"
                        label="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="password"
                        label="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="name"
                        label="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="email"
                        label="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="street"
                        label="street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="suite"
                        label="suite"
                        value={suite}
                        onChange={(e) => setSuite(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="city"
                        label="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="zipcode"
                        label="zipcode"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="lat"
                        label="lat"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="lng"
                        label="lng"
                        value={lng}
                        onChange={(e) => setLng(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="phone"
                        label="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="website"
                        label="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="companyName"
                        label="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="catchPhrase"
                        label="catchPhrase"
                        value={catchPhrase}
                        onChange={(e) => setCatchPhrase(e.target.value)}
                        size="small"
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        id="bs"
                        label="bs"
                        value={bs}
                        onChange={(e) => setBs(e.target.value)}
                        size="small"
                        />
                    </div>
                    <Button type="submit" variant="outlined" style={{maxWidth: '93%', maxHeight: '20%', minWidth: '93%', minHeight: '20%'}}>
                        Register
                    </Button>
                </Box>
            </div>
        </>
    )
}

export default Register;
