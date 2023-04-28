import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ShadesComponent from "./ShadesComponent";

const ColourShades = ({ shades, error }) => {
	return (
		<Flex
			p='30px'
			alignItems='center'
			flexWrap='wrap'
			justifyContent='center'
			minH='90vh'
		>
			{error ? (
				<Heading as='h3' color='red.500'>
					Incorrect hex code value
				</Heading>
			) : (
				shades.map((shade, index) => (
					<ShadesComponent key={index} shade={shade} />
				))
			)}
		</Flex>
	);
};

export default ColourShades;
