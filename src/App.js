import { Button, Typography, styled } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": { backgroundColor: "lightblue" },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        ADD NEW POST
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>My Button</BlueButton>
    </div>
  );
}

export default App;
