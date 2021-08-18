import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => (
  <AppBar elevation={0} {...rest}>
    <Toolbar>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
