import { Box, Skeleton } from '@mui/material'

export default function Loading() {
  return (
    <Box sx={{ p: 3 }}>
      <Skeleton variant="rectangular" width="100%" height={64} sx={{ mb: 2 }} />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Skeleton variant="rectangular" width="30%" height={200} />
        <Skeleton variant="rectangular" width="30%" height={200} />
        <Skeleton variant="rectangular" width="30%" height={200} />
      </Box>
    </Box>
  )
}