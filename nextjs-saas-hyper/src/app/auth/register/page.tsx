import { Box, Button, TextField, Typography } from '@mui/material'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Cadastro
      </Typography>
      
      <Box component="form" sx={{ mt: 1, width: '100%', maxWidth: 400 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nome"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="new-password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirmar Senha"
          type="password"
          id="confirmPassword"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Cadastrar
        </Button>
        
        <Box sx={{ textAlign: 'center' }}>
          <Link href="/auth/login" passHref>
            <Typography variant="body2" color="text.secondary">
              Já tem uma conta? Faça login
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}