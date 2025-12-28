import { Box, Container, Skeleton } from '@mui/material'

const LoadingState = () => {
  return (
    <Box sx={{ minHeight: '100vh', py: 3 }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        {/* Header Skeleton */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="text" width={120} height={24} />
          </Box>
          <Skeleton variant="rounded" width={100} height={40} sx={{ borderRadius: 1 }} />
        </Box>

        {/* Heading Skeleton */}
        <Skeleton 
          variant="text" 
          sx={{ fontSize: '3rem', maxWidth: 800, mx: 'auto', mb: 4 }} 
        />

        {/* Search Bar Skeleton */}
        <Box sx={{ display: 'flex', gap: 2, maxWidth: 800, mx: 'auto', mb: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Skeleton variant="rounded" height={56} sx={{ flex: 1, borderRadius: 1 }} />
          <Skeleton variant="rounded" width={{ xs: '100%', sm: 100 }} height={56} sx={{ borderRadius: 1 }} />
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 360px' }, gap: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Weather Card Skeleton with Loading Animation */}
            <Box sx={{
              background: 'linear-gradient(135deg, #5E73FF 0%, #7B5CFA 100%)',
              borderRadius: '20px',
              p: { xs: 4, md: 6 },
              minHeight: { xs: 240, md: 320 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2
            }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[1,2,3].map((i) => (
                  <Box key={i} sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    animation: 'pulse 1.4s ease-in-out infinite',
                    animationDelay: `${(i-1) * 0.2}s`
                  }} />
                ))}
              </Box>
              <Box sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.125rem', fontWeight: 500 }}>
                Loading...
              </Box>
            </Box>

            {/* Metrics Skeleton */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
              {[1,2,3,4].map((i) => (
                <Skeleton key={i} variant="rounded" height={100} sx={{ borderRadius: 2 }} />
              ))}
            </Box>

            {/* Daily Forecast Skeleton */}
            <Box>
              <Skeleton variant="text" width={150} height={32} sx={{ mb: 2 }} />
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(7, 1fr)' }, gap: 1.5 }}>
                {[1,2,3,4,5,6,7].map((i) => (
                  <Skeleton key={i} variant="rounded" height={140} sx={{ borderRadius: 2 }} />
                ))}
              </Box>
            </Box>
          </Box>

          {/* Sidebar Skeleton */}
          <Box>
            <Skeleton variant="rounded" height={600} sx={{ borderRadius: 3 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default LoadingState
