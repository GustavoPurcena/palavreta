import {Grid, Button} from "@mui/material";
import Header from "./components/Header";

export default function Template({children}: {children: React.ReactNode}) {
	return (
		<Grid container flexDirection={"column"}>
			<Grid
				container
				flexDirection={"row"}
				justifyContent={"flex-start"}
				alignItems={"flex-start"}
				sx={{
					padding: "1rem",
				}}
			>
				<Header
					siteTitle="Palavreta"
					navLinks={[
						{label: "uno", to: "/"},
						{label: "duo", to: "/duo"},
						{label: "quad", to: "/quad"},
						{label: "octa", to: "/octa"},
					]}
				/>
			</Grid>
			{children}
		</Grid>
	);
}
