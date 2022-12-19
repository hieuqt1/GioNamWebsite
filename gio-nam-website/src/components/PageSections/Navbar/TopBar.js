import { Navbar, Dropdown, Button, Link, Text } from "@nextui-org/react";
import { icons } from "./Icons.js";
import './TopBar.css'
import transparent_logo from "../../../assets/gio-nam-transparent-logo.png"

export default function TopBar() {
  return (
      <Navbar
        css={{
          // solid background color
          $$navbarBackgroundColor: "#b80000",
          // blur background color, alpha channel
          $$navbarBlurBackgroundColor: "transparent"
        }}
        height="65px"
        maxWidth="fluid"
        disableBlur="false"
        isBordered
        variant="sticky"
      >
        <Navbar.Brand css={{marginLeft: "5.208vw"}}>
            <Link href="/">
                <img className="image-brand" src = {transparent_logo} />
            </Link> 
            <Link className="name-brand gio-nam-topbar-font" href="/">
                Gió Nam Múa Lân
            </Link>                     
        </Navbar.Brand>        
        <Navbar.Content css={{marginRight: "5.208vw", fontFamily: "Quicksand", fontWeight: "300"}}>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                  fontFamily: "Quicksand"
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                About Us
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4"
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold"
                  }
                }
              }}
            >
              <Dropdown.Item
                key="autoscaling"
                icon={icons.scale}
              >
                About Us
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                icon={icons.activity}
              >
                Team Philosophy
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                icon={icons.flash}
              >
                Meet the Instructors
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link href="#">
            History
          </Navbar.Link>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                  fontFamily: "Quicksand"
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                Media
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4"
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold"
                  }
                }
              }}
            >
              <Dropdown.Item
                key="autoscaling"
                icon={icons.scale}
              >
                About Us
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                icon={icons.activity}
              >
                Team Philosophy
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                icon={icons.flash}
              >
                Meet the Instructors
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link href="/join">Join Us</Navbar.Link>
          <Navbar.Link href="/contact-us">Contact</Navbar.Link>
        </Navbar.Content>
      </Navbar>
  );
}
