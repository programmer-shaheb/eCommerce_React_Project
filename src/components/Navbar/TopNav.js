import { Box, Container } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/logo.svg";
import { Flex } from "../../Global.styled";
import Badge from "@mui/material/Badge";
import { ThemeProvider } from "@mui/material/styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { IoGitCompareOutline } from "react-icons/io5";
import {
  iconStyle,
  inputStyle,
  searchContainer,
  searchIcon,
  theme,
  badgetext,
} from "./styles/TopNavStyles";
import { visibility } from "../../Global.style";

const TopNav = () => {
  return (
    <Container sx={{ my: "20px" }}>
      <Flex justify="space-around">
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <img src={logo} alt="" width="120px" />
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img src={logo} alt="" />
        </Box>

        <Box style={searchContainer} sx={visibility}>
          <Flex>
            <input
              style={inputStyle}
              type="text"
              placeholder="Search for Items"
            />
            <SearchIcon sx={searchIcon} />
          </Flex>
        </Box>

        <Box>
          <ThemeProvider theme={theme}>
            <Flex justify="space-evenly">
              <Flex>
                <Badge badgeContent={4} color="neutral">
                  <IoGitCompareOutline style={iconStyle} />
                </Badge>
                <Box sx={visibility}>
                  <p style={badgetext}>Compare</p>
                </Box>
              </Flex>
              <Flex>
                <Badge badgeContent={4} color="neutral">
                  <AiOutlineShoppingCart style={iconStyle} />
                </Badge>
                <Box sx={visibility}>
                  <p style={badgetext}>Cart</p>
                </Box>
              </Flex>
              <Flex>
                <Badge badgeContent={4} color="neutral">
                  <IoIosHeartEmpty style={iconStyle} />
                </Badge>
                <Box sx={visibility}>
                  <p style={badgetext}>Wishlist</p>
                </Box>
              </Flex>
              <Box sx={visibility}>
                <Flex>
                  <Box color="neutral">
                    <BsPerson style={iconStyle} />
                  </Box>
                  <Box>
                    <p style={badgetext}>Account</p>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </ThemeProvider>
        </Box>
      </Flex>
    </Container>
  );
};

export default TopNav;
