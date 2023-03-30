import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountMenu from './AccountMenu';
import Todo from './Todo'
import {Route, Routes} from 'react-router-dom';

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const handleOnClick = (page) => {
		console.log('open');
		if(!openForm) { 
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
  return (
    <Container maxWidth="sm">
	<AccountMenu onClick={handleOnClick} />
      <Box sx={{ my: 4 }}>
		<Routes>
		    <Route path="/" element={<Home />} />
			<Route path="/todo" element={<Todo />} />
		</Routes>
      </Box>
    </Container>
  );
}
function Home(){
	return(
		<Typography variant="h4" component="h1" gutterBottom>
		React Skills Test
	    </Typography>
	)
}
