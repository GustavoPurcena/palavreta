"use client";
import React, {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Grid, IconButton, Button, Fade, Collapse} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SettingsIcon from "@mui/icons-material/Settings";
interface HeaderProps {
	siteTitle: string;
	navLinks: {
		label: string;
		to: string;
	}[];
}

export default function Header({siteTitle, navLinks}: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header">
			<Collapse in={isMenuOpen}>
				<Grid
					className="header_nav"
					container
					paddingX={48}
					flexDirection={"row"}
					justifyContent={"space-around"}
					alignItems={"center"}
				>
					<Grid container item flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} xs={6}>
						{navLinks.map((link) => (
							<Grid key={link.label} item>
								<Link key={link.label} href={link.to} className="header_nav-link" aria-label={link.label}>
									<Button
										variant="text"
										sx={{
											fontSize: "0.8rem",
											color: pathname === link.to ? "#666" : "#fff",
										}}
									>
										{link.label}
									</Button>
								</Link>
							</Grid>
						))}
					</Grid>
					<Grid
						className="header_options"
						container
						item
						flexDirection={"row"}
						justifyContent={"flex-end"}
						alignItems={"center"}
						xs={6}
					>
						<Fade in={isMenuOpen}>
							<IconButton aria-label="info-button" onClick={() => {}}>
								<InfoIcon
									sx={{
										fontSize: "1.2rem",
										color: "white",
									}}
								/>
							</IconButton>
						</Fade>
					</Grid>
				</Grid>
			</Collapse>
			<Grid container flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
				<Grid className="header_expand" container item flexDirection={"row"} justifyContent={"flex-start"} alignItems={"center"} xs={2.5}>
					<IconButton className="transition-arrow" aria-label="info-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
								<ExpandLessIcon
									className={isMenuOpen ? "expanded" : ""}
									sx={{
										color: "white",
									}}
								/>
					</IconButton>
				</Grid>
				<Grid container item flexDirection={"row"} justifyContent={"center"} alignItems={"center"} xs={1} >
					<h1>{siteTitle}</h1>
				</Grid>
				<Grid container item flexDirection={"row"} justifyContent={"flex-end"} alignItems={"center"} xs={2.5}>
					<IconButton aria-label="info-button" onClick={() => {}}>
						<SettingsIcon
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

