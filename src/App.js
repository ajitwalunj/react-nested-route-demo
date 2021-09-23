import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Sidebar from "./components/sidebar";
import { Container, Box } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import routes from "./route";

const mdTheme = createTheme();


function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <ThemeProvider theme={mdTheme}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Switch>
                {
                  routes.map((route, i) => {
                    return <Route key={i} path={route.path} render={props => (
                      // pass the sub-routes down to keep nesting
                      <route.component {...props} routes={route.routes} />
                    )} />
                  })
                }
                <Redirect from='/' to='/m1' />
              </Switch>
            </Container>
          </Box>
        </ThemeProvider>
      </Box>
    </Router >
  );
}

export default App;