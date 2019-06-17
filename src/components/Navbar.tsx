import React from 'react'
import { Link } from 'gatsby'
import {Button, Menu, MenuItem} from "@material-ui/core";
//const cnbtext = require('../img/social/cnbtext.svg') as string;

export interface NavbarProps {

}
export interface NavbarState {
  active: boolean;
  navBarActiveClass: string;
}

const Navbar = class extends React.Component<NavbarProps, NavbarState> {
  constructor(props : NavbarProps) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        
        
        <div className="container">
          <div className="navbar-brand">
          {/* <Link to="/" className="navbar-item" title="Logo">
              <img src={cnbtext} alt="Cast and Burn Gaming" style={{ width: 'px' }} />
            </Link> */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link to="/" className="navbar-item" title="Logo">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                About The Host
              </Link>
              <Link className="navbar-item" to="/about-show">
                About The Show
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              {/* <Link className="navbar-item" to="/contact">
                Contact
              </Link> */}
              <Link className="navbar-item" to="/episodes">
                Episodes
              </Link>
              <SimpleMenu />              
            </div>            
          </div>
        </div>
      </nav>
    )
  }
}

const SimpleMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className="navbar-item">
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className="navbar-item"
      >
        Subscribe to the Show
      </Button>
      <Menu className="navbarMenu" id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <a 
          href="https://podcasts.apple.com/us/podcast/cast-and-burn-gaming-an-rpg-videogame-podcast/id1461509359?uo=4" target="_blank" rel="noopener noreferrer">Apple Podcasts</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a 
          href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9hNjY5NWUwL3BvZGNhc3QvcnNz" target="_blank" rel="noopener noreferrer">Google Podcasts</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a 
          href="https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&apn=com.google.android.music&link=https://play.google.com/music/m/Ibp5wu4ej4xi6nb7plp44grctgq?t%3DCast_and_Burn_Gaming:_An_RPG_Videogame_Podcast%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16" target="_blank" rel="noopener noreferrer">Google Play</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a 
          href="https://open.spotify.com/show/475FnbcEAQGuriUtH9smVz" target="_blank" rel="noopener noreferrer">Spotify</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a 
          href="https://anchor.fm/castandburngaming" target="_blank" rel="noopener noreferrer">Anchor</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a 
          href="hhttps://pca.st/yqAU" target="_blank" rel="noopener noreferrer">PocketCasts</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a 
          href="https://www.stitcher.com/podcast/anchor-podcasts/cast-and-burn-gaming-an-rpg-videogame-podcast" target="_blank" rel="noopener noreferrer">Stitcher</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a 
          href="https://radiopublic.com/cast-and-burn-gaming-an-rpg-video-Wwrdma" target="_blank" rel="noopener noreferrer">Radio Public</a>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar
