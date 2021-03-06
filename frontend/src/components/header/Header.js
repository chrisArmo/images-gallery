import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Search from '../search/Search';

const Header = ({ title, darkMode = false }) => {
  const bgVariant = darkMode ? 'dark' : 'light';
  return (
    <>
      <Navbar bg={bgVariant} variant={bgVariant}>
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
        </Container>
      </Navbar>
      <Search />
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  dartMode: PropTypes.bool,
};

export default Header;
