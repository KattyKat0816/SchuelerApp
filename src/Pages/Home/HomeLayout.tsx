import { ButtonBase, Card, CardMedia, Grid, Typography } from "@mui/material";

const imageOben = "/1_csm_Crunchips_Startseite_WOW_.jpg";
const imageRechts = "/images.png";

function HomeLayout() {
  return (
    <>
      <Grid container>
        <Grid item>
          <Card sx={{ maxWidth: 600, marginLeft: 52 }}>
            <ButtonBase
              sx={{ display: "block", textAlign: "initial" }}
              onClick={(event) =>
                alert(
                  "Das hier ist eine normale Werbung! Es wäre aber trotzdem besser hier nicht drauf zu klicken."
                )
              }
            >
              <CardMedia
                component="img"
                height="450"
                image={imageOben}
                alt="fake Werbung"
              />
            </ButtonBase>
          </Card>
        </Grid>
        <Grid item container xs={12}>
          <Grid
            item
            xs={6}
            sx={{ paddingTop: 15, paddingLeft: 25, paddingRight: 25 }}
          >
            <Typography>
              Die ist eine Übungswebseite. Schaut euch an welche Stellen der
              Webseite euch verdächtig vorkommen. Ihr könnt hier alles
              ausprobieren, ohne dass etwas passiert!
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 260, marginLeft: 50, marginTop: 10 }}>
              <ButtonBase
                sx={{ display: "block", textAlign: "initial" }}
                onClick={(event) =>
                  alert("Hier hättest du nicht drauf klicken sollen!")
                }
              >
                <CardMedia
                  component="img"
                  height="230"
                  image={imageRechts}
                  alt="fake Werbung"
                />
              </ButtonBase>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default HomeLayout;
