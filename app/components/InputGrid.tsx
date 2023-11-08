"use client";
import React, {useState} from "react";
import {Grid, IconButton, Button, Fade, Collapse} from "@mui/material";

export type InputGridProps = {
	rowsNum: 6 | 7 | 9 | 12;
	word: string;
};

export default function InputGrid({rowsNum, word}: InputGridProps) {
	const [triedWords, setTriedWords] = useState<string[]>([]);

	return (
		<Grid container flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
			{[...Array(rowsNum)].map((_, i) => (
				<Grid key={i} container item flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
					{triedWords[i] ? (
						<></>
					) : (
						[...Array(rowsNum)].map((_, j) => (
							<Grid key={j} item xs>
								
							</Grid>
						))
					)}
				</Grid>
			))}
		</Grid>
	);
}
