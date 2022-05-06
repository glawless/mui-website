import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import pom1 from "../Images/pom.jpg";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="dog">
            D
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title="Pomeranians"
        subheader="Small Floofs"
      />
      <CardMedia component="img" height="20%" image={pom1} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Pomeranians are also called Pom-Poms
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder sx={{ color: "red" }} />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share sx={{ color: "blue" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
