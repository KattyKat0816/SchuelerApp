import { Grid, Typography } from "@mui/material";

function AboutPage() {
  return (
    <>
      <Grid container>
        <Grid item container xs={12} paddingTop={10}>
          <Grid item xs={3}>
            <img
              src={`/89-891579_picture-your-satisfaction-is-guaranteed.jpg`}
              alt={`guaranteed`}
              width="175"
              height="100"
            />
          </Grid>
          <Grid item xs={6} paddingLeft={0}>
            <Typography variant="h4" color="black">
              Über uns
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <img
              src={`/26969385-niedrigen-preis-produkt-promotion-verkauf-oder-schnäppchen-niedrigsten-preisen-beste-angebot-und-red.jpg`}
              alt={`low price`}
              width="100"
              height="100"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} paddingTop={5}>
          <Typography color="black">
            Wir sind ein Unternehmen, bei dem Kundenzufrieden das höchste Gut
            ist!
          </Typography>
        </Grid>
        <Grid item xs={12} paddingTop={5}>
          <img
            src={`/Bewertungen.jpg`}
            alt={`bewertungen`}
            width="650"
            height="600"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default AboutPage;
