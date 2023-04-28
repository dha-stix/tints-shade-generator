import React, { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import ColourShades from "./ColourShades";
import { Link, useParams } from "react-router-dom";
import Values from "values.js";

const Colours = () => {
	const { id } = useParams();
	const [shades, setShades] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		function fetchShades() {
			try {
				let shades = new Values(`#${id}`).all(10);
				setShades(shades);
			} catch (err) {
				setError(true);
			}
		}
		fetchShades();
	}, [id]);

	return (
		<Box w='full' minH='100vh'>
			<Flex
				h='10vh'
				w='full'
				position='sticky'
				top='0'
				alignItems='center'
				justifyContent='center'
				bg={!error && shades.length > 0 ? `#${shades[10].hex}` : "#ffffff"}
				borderBottom='1px'
				borderBottomColor='gray.200'
			>
				<Link to='/'>
					<Heading as='h3' size='md' color='gray.600'>
						#{id}
					</Heading>
				</Link>
			</Flex>
			<ColourShades shades={shades} error={error} />
		</Box>
	);
};

export default Colours;
