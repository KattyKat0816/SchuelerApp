import React from 'react';
import {
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  app: {
    marginTop: '50px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0f4499',
    color: 'white',
    marginTop: '25px',
    marginBottom: '25px',
  },
  typography: {
    whiteSpace: 'pre-line',
    padding: '5px',
    margin: '25px',
  },
  linkTypography: {
    margin: '20px',
    color: 'green',
  },
  paper: {
    padding: '25px',
    margin: '25px',
    minWidth: '80%',
  },
}));

function TextContent() {
  const { classes } = useStyles();
  return (
    <Typography className={classes.typography}>
      Hallo liebe Schüler...
    </Typography>
  );
}

function LinkContent() {
  const { classes } = useStyles();
  return (
    <Typography className={classes.linkTypography}>
      <Grid container>
        <Grid item xs={6}>
          <Link href="https://xebia.com/">Xebia</Link>
        </Grid>
      </Grid>
    </Typography>
  );
}

function ButtonContent() {
  const { classes } = useStyles();
  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => {
        alert('Klick!');
      }}
    >
      Klick mich!
    </Button>
  );
}

function Button2Content() {
  const { classes } = useStyles();
  const [buttonDisabled, setButtonDisabled] = React.useState<boolean>();
  return (
    <Grid container spacing={4}>
      <Grid item>
        <Button
          disabled={buttonDisabled}
          className={classes.button}
          variant="contained"
          onClick={() => {
            alert('Klick!');
          }}
        >
          Klick mich!
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => {
            setButtonDisabled(!buttonDisabled);
          }}
        >
          Klick mich auch!
        </Button>
      </Grid>
    </Grid>
  );
}

function Calc() {
  const [operandA, setOperandA] = React.useState<number>();
  const [operandB, setOperandB] = React.useState<number>();
  const [result, setResult] = React.useState<number>();

  function calculation() {
    if (operandA === undefined) return;
    if (operandB === undefined) return;
    const value = operandA + operandB;
    setResult(value);
  }

  React.useEffect(() => {
    calculation();
  });

  return (
    <Grid container spacing={2}>
      <Grid item>
        <TextField
          variant="outlined"
          onChange={(event) => setOperandA(+event.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          variant="outlined"
          onChange={(event) => setOperandB(+event.target.value)}
        />
      </Grid>
      <Grid item>
        <Typography>{result}</Typography>
      </Grid>
    </Grid>
  );
}

function AppContent() {
  const { classes } = useStyles();
  return (
    <Paper className={classes.paper}>
      <TextContent />
      <ButtonContent />
      <LinkContent />
      {/* <Button2Content /> */}
      {/* <Calc /> */}
    </Paper>
  );
}

export default function App() {
  const { classes } = useStyles();
  return (
    <div className={classes.app}>
      <AppContent />
    </div>
  );
}
