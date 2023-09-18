"use client";
import React, {useState} from "react";
import Link from "next/link";
import {Grid, IconButton, Button} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import {usePathname} from "next/navigation";

interface HeaderProps {
	siteTitle: string;
	navLinks: {
		label: string;
		to: string;
	}[];
}

const Header: React.FC<HeaderProps> = ({siteTitle, navLinks}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	console.log(pathname);
	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header">
			<Grid container paddingX={48} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
				<Grid container item flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} xs={6}>
					{navLinks.map((link) => (
						<Grid key={link.label} item>
							<Button
								variant="text"
								sx={{
                color: pathname === link.to ? "#666" : "#fff",
								}}
							>
								<Link key={link.label} href={link.to} className="header_nav-link" aria-label={link.label}>
									{link.label}
								</Link>
							</Button>
						</Grid>
					))}
				</Grid>
				<Grid container item flexDirection={"row"} justifyContent={"flex-end"} alignItems={"center"} xs={6}>
					<IconButton aria-label="info-button" onClick={() => {}}>
						<InfoIcon
							sx={{
								color: "white",
							}}
						/>
					</IconButton>
				</Grid>
			</Grid>
		</header>
	);
};

export default Header;
