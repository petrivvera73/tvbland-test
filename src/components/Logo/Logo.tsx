import { styled, Typography, Box } from '@mui/material';

const LogoCaption = styled(Typography)(({ theme }) => ({
  ...theme.typography.h2,
}));

const LogoContainer = styled(Box)(() => ({
  backgroundColor: 'transparent',
}));

export function Logo() {
  return (
    <LogoContainer>
      <LogoCaption>TV Bland</LogoCaption>
    </LogoContainer>
  );
}
