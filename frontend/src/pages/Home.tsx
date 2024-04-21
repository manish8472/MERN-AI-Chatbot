
import { Box} from "@mui/material";
import Footer from "../components/footer/Footer";

const Home = () => {
  // const theme = useTheme();
  // const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width={"100%"} height={"100%"} flex={"flex"} mx={"auto"}>
      {/* <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box>
          <TypingAnimation />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column", sm: "column"},
            gap: 5,
            my: 10,
          }}
        >
          <img
            src="robot.png"
            alt="robot"
            style={{ width: "200px", margin: "auto" }}
          />
          <img
            className="image-inverted rotate"
            src="openai.png"
            alt="openai"
            style={{ width: "200px", margin: "auto" }}
          />
        </Box>
      </Box> */}
      <Box sx={{ display: "flex", width: "100%", mx: "auto" }}>
        <img
          src="chat.png"
          alt="chatbot"
          style={{
            display: "flex",
            margin: "auto",
            width: "60%",
            borderRadius: 20,
            boxShadow: "-5px -5px 105px #64f3d5",
            marginTop: 20,
            marginBottom: 30,
          }}
        />
      </Box>
      <Box> <Footer /> </Box>
    </Box>
  );
};

export default Home;
