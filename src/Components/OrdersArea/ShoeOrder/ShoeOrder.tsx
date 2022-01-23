import "./ShoeOrder.css";
import { Typography, TextField, ButtonGroup, Button ,Checkbox, FormControlLabel, createTheme, ThemeProvider } from '@material-ui/core'
import {Send, Clear} from '@material-ui/icons'
import {orange, green} from '@material-ui/core/colors'


function ShoeOrder(): JSX.Element {

    const theme = createTheme({
        typography: {
            fontFamily: 'Helvetica',
            fontSize: 15,
            h3: {fontSize: 30}
          },
      palette: {
          primary: {main:green[600]},
          secondary: {main: orange[600] }
        
      }
      
    })


    return (
        <ThemeProvider theme={theme}>
        <div className="ShoeOrder Box">
            <form>
                <Typography variant='h3' className="Headline">הזמנת נעליים</Typography>
                {/* <select name="shoe-order" id="shoeOrder">
                  <option value=""></option>
              </select> */}
                <TextField label="דגם" variant="outlined" className="TextBox" />
                <TextField label="מידה" variant="outlined" className="TextBox"  />
                <TextField label="צבע" variant="outlined" className="TextBox"  />
                <FormControlLabel label="תשלחו לי מיילים" control={<Checkbox/>}/>
                <ButtonGroup fullWidth variant="contained">
                    <Button endIcon={<Send/>} color="primary" > אישור&nbsp;&nbsp;</Button>
                    <Button endIcon={<Clear />}color="secondary"> ביטול&nbsp;&nbsp;</Button>
                </ButtonGroup>
            </form>
        </div>
        </ThemeProvider>
    );
}

export default ShoeOrder;
