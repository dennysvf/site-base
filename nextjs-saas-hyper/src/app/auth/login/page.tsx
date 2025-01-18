import { Box, Button, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import { useNotification } from '@/lib/NotificationProvider'

export default function LoginPage() {
  const { showNotification } = useNotification()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    
    // Simulação de login
    showNotification({
      message: 'Login realizado com sucesso!',
      severity: 'success'
    })
  }
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
        Login
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%', maxWidth: 400 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Entrar
        </Button>
        
        <Box sx={{ textAlign: 'center' }}>
          <Link href="/auth/register" passHref>
            <Typography variant="body2" color="text.secondary">
              Não tem uma conta? Cadastre-se
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}