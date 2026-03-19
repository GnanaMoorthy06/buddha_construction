import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#212121',
        color: '#fff',
        p: 4,
      }}
    >
      {/* Top Section - Flexbox with three columns */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 4,
        }}
      >
        {/* Left Section - Company Description */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Buddha Constructions Pvt. Ltd.
          </Typography>
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            Building quality homes with care and precision since years. 
            Your trusted partner in construction.
          </Typography>
        </Box>

        {/* Middle Section - Services with bullet points */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Services
          </Typography>
          <List dense>
            {['House Construction', 'Building Construction', 'Turfs', 'Interior Design'].map((service, index) => (
              <ListItem key={index} sx={{ p: 0 }}>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 8, color: '#ccc' }} />
                </ListItemIcon>
                <ListItemText primary={service} primaryTypographyProps={{ color: '#ccc' }} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Right Section - Contact Info with icons */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Contact Info
          </Typography>
          <List dense>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon sx={{ color: '#ccc', minWidth: 32 }}>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="+91 7305793108" primaryTypographyProps={{ color: '#ccc' }} />
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon sx={{ color: '#ccc', minWidth: 32 }}>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="buddhaconstructionsltd@gmail.com" primaryTypographyProps={{ color: '#ccc' }} />
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon sx={{ color: '#ccc', minWidth: 32 }}>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Buddha constructions Pvt. Ltd. , second floor, shop no. 2, Velachery main road, Rajakilpakkam Kamarapuram, chengalpattu - 600073, chennai ,Tamil Nadu" primaryTypographyProps={{ color: '#ccc' }} />
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* Social Media Links */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Follow us on
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton sx={{ color: '#fff' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <YouTubeIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Divider above bottom bar */}
      <Divider sx={{ backgroundColor: '#fff', mt: 4 }} />

      {/* Bottom Bar */}
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="caption" sx={{ color: '#fff' }}>
          © 2024 Buddha Constructions Pvt. Ltd. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
