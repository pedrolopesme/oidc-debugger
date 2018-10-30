import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import deepOrange from '@material-ui/core/colors/deepOrange';


export default createMuiTheme({
    palette: {
        primary: blue,
        secondary: deepOrange
    },
    overrides: {
        MuiButton: {
            root: {
                color: 'white',
                '&:hover': {
                    backgroundColor: 'purple'
                }
            }
        }
    }
});