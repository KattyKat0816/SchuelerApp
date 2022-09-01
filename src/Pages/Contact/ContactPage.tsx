import { Typography, TextField, Button, Grid } from "@mui/material";

function ContactPage() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} marginBottom={5}>
          <Typography fontSize={25}>
            Bitte gibt hier deine Daten ein!
          </Typography>
        </Grid>
        <Grid item container xs={12} marginBottom={5}>
          <Grid item xs={6} paddingRight={2.5}>
            <TextField label={"Vorname"} variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6} paddingLeft={2.5}>
            <TextField label={"Nachname"} variant="outlined" fullWidth />
          </Grid>
        </Grid>
        <Grid item xs={12} marginBottom={5}>
          <TextField label={"E-Mail Adresse"} variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} marginBottom={5}>
          <TextField
            label={"Nachricht"}
            variant="outlined"
            multiline
            rows={12}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} marginBottom={5}>
          <Button
            variant="contained"
            onClick={(event) => {
              alert(
                'Da vor der Adresszeile "Nicht sicher" steht sollten hier niemals Kontaktdaten eingegebn werden! Außerdem sollten genrell nur auf Webseiten Kontaktdaten angegeben werden, denen man wirklich vertraut.'
              );
            }}
          >
            Absenden
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactPage;
