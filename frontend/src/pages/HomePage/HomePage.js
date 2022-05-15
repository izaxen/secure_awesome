import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HomePage = () => {
  return (
    <>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Att göra:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Klart
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Stack
          </Typography>
          <Typography variant="body2" color="text.secondary">
            API: Java Spring Boot<br></br>
            Frontend: React med Material UI och Graphql med Apollo<br></br>
            DB: MongoDB
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Broken Access Control
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Minimerat riskerna med Spring Security där vi låst rutterna som är användbara samt vad som behöver authentiseras
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Cryptographic Failures
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Använder oss av springs inbyggda krypterings bcrypt för lösen. Sedan token har SHA256 kryptering
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Injection
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Först och främst använder vi oss utav MongoDB som gör det mindre sårbart för injections. Sedan avgränsar vi med spring security som inte tillåter felaktiga inmatningar typ onerror
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Insecure Design
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Designen är inte snygg men graphql underlättar med inmatningarna
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Security Misconfiguration
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Saknar default account. Rollerna styrs via enum som sätts manuellt.
            Spring security hjälper till mycket här också att hålla rätt på sakerna.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Vulnerable and Outdated Components
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Senaste paketen installerade
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Identification and Authentication Failures
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lösenorden har minst en längd på 8 tecken. Admin account har ej admin/admin. Och allting sköts sedan via JWT
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Software and Data Integrity Failures
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Använder bara validerade pluginmoduler
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Security Logging and Monitoring Failures
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Loggning kring exceptions finns i API. Vid problem med inloggning kastas ett exception
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Server-Side Request Forgery (SSRF)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Graphql hjälper till med detta.
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default HomePage
