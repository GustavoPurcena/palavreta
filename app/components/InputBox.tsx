"use client";
import React, {useState} from "react";
import {Grid, IconButton, Button, Fade, Collapse, Box} from "@mui/material";

export type InputBoxProps = {
	active: boolean;
	letter?: string;
	triedLetter?: string;
	status?: "successful" | "semi" | "failed";
};

export default function InputBox({active, letter, triedLetter, status}: InputBoxProps) {
	return (
		<Box component={"div"}>
			<Grid container flexDirection={"row"} justifyContent={"center"} alignItems={"center"} item xs>
				<Box component={"span"}>{triedLetter}</Box>
			</Grid>
		</Box>
	);
}
