import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} padding={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup spacing="small">
          <Avatar sx={{ bgcolor: "azure" }} alt="Rex" src="/broken-image.jpg" />
          <Avatar
            sx={{ bgcolor: "deepskyblue" }}
            alt="Troy"
            src="/broken-image.jpg"
          />
          <Avatar
            sx={{ bgcolor: "darkorange" }}
            alt="Dozer"
            src="/broken-image.jpg"
          />
          <Avatar
            sx={{ bgcolor: "azure" }}
            alt="Hank"
            src="/broken-image.jpg"
          />
          <Avatar
            sx={{ bgcolor: "deepskyblue" }}
            alt="Pickle"
            src="/broken-image.jpg"
          />
        </AvatarGroup>
        <Typography
          variant="h6"
          fontWeight={100}
          marginTop={2}
          marginBottom={2}
        >
          Recent Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/bike.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography
          variant="h6"
          fontWeight={100}
          marginTop={2}
          marginBottom={2}
        >
          News Around You
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
