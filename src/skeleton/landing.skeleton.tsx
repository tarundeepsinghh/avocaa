import { Box, Skeleton, Grid2, Typography } from "@mui/material";

export default function LandingSkeleton() {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f6f4e7" }}>
      {/* Header Skeleton */}
      <Typography variant='h4'>
        <Skeleton width='50%' />
      </Typography>

      {/* Skeleton for Images and Texts */}
      <Grid2 container spacing={4} sx={{ marginTop: "20px" }}>
        {/* Left Side (Images) */}
        <Grid2 size={{ xs: 12 }}>
          <Skeleton
            variant='rectangular'
            height={300}
            sx={{ borderRadius: "8px", mb: 2 }}
          />
          <Skeleton
            variant='rectangular'
            height={100}
            sx={{ borderRadius: "8px", mb: 2 }}
          />
          <Skeleton
            variant='rectangular'
            height={100}
            sx={{ borderRadius: "8px" }}
          />
        </Grid2>

        {/* Right Side (Texts and Illustrations) */}
        <Grid2 size={{ xs: 12 }}>
          <Skeleton
            variant='circular'
            width={120}
            height={120}
            sx={{ mb: 2 }}
          />
          <Skeleton height={30} width='80%' sx={{ mb: 2 }} />
          <Skeleton height={30} width='60%' sx={{ mb: 2 }} />
          <Skeleton
            variant='rectangular'
            height={100}
            sx={{ borderRadius: "8px", mb: 2 }}
          />
          <Skeleton height={30} width='70%' sx={{ mb: 2 }} />
        </Grid2>
      </Grid2>

      {/* Bottom Section */}
      <Grid2 container spacing={4} sx={{ marginTop: "20px" }}>
        <Grid2 size={{ xs: 12 }}>
          <Skeleton
            variant='rectangular'
            height={200}
            sx={{ borderRadius: "8px", mb: 2 }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <Skeleton
            variant='rectangular'
            height={200}
            sx={{ borderRadius: "8px", mb: 2 }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
