import {
	Box,
	Button,
	Flex,
	FormControl,
	Heading,
	Icon,
	Input,
	Text,
	Alert,
	AlertTitle,
	AlertIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
	let [colour, setColour] = useState("");
	const [alert, setAlert] = useState(false);
	const navigate = useNavigate();

	const redirectPage = (e) => {
		e.preventDefault();
		if (colour.startsWith("#") && colour.length >= 4) {
			colour = colour.substring(1);
			return navigate(`/colour/${colour}`);
		} else {
			setAlert(true);
		}
	};
	return (
		<Box>
			<Flex
				w='full'
				h='10vh'
				p={{ base: "10px 30px", md: "10px 40px" }}
				alignItems='center'
				justifyContent='space-between'
				borderBottom='1px'
				borderBottomColor='gray.200'
			>
				<Text fontSize='26px' color='gray.600' fontWeight='bold'>
					TintTastic
				</Text>
				<Flex alignItems='center'>
					<Icon
						as={FaGithub}
						boxSize={6}
						color='#9BA4B5'
						cursor='pointer'
						_hover={{ color: "#212A3E" }}
						mr='50px'
					/>
					<Icon
						as={FaTwitter}
						boxSize={6}
						color='#9BA4B5'
						cursor='pointer'
						_hover={{ color: "#212A3E" }}
					/>
				</Flex>
			</Flex>
			<Flex
				alignItems='center'
				justifyContent='center'
				minH='90vh'
				p={{ base: "30px", md: "30px 80px" }}
				flexDirection='column'
			>
				<Heading
					as='h1'
					size='3xl'
					textAlign={{ base: "left", md: "center" }}
					fontWeight='900'
					mb='30px'
				>
					<span
						style={{
							color: "#F97B22",
						}}
					>
						Effortlessly
					</span>{" "}
					create beautiful color palettes for your projects
				</Heading>
				<Heading
					as='h4'
					size='md'
					fontWeight='normal'
					textAlign={{ base: "left", md: "center" }}
					mb='30px'
				>
					TintTastic is a user-friendly tint and shade generator that will
					elevate your color game in no time.
				</Heading>

				<FormControl
					as='form'
					display='flex'
					alignItems={{ base: "left", md: "center" }}
					justifyContent='center'
					flexDirection={{ base: "column", md: "row" }}
					onSubmit={redirectPage}
				>
					<Input
						placeholder='#ffffff'
						type='text'
						name='color'
						id='color'
						w={{ base: "full", md: "50%" }}
						mr='30px'
						required
						mb={{ base: "15px", md: "0px" }}
						value={colour}
						onChange={(e) => setColour(e.target.value)}
					/>
					<Button
						w={{ lg: "25%" }}
						colorScheme='orange'
						size='lg'
						type='submit'
					>
						Generate Shades
					</Button>
				</FormControl>
				{alert && (
					<Alert
						status='error'
						w={{ base: "full", lg: "50%" }}
						mt='30px'
						borderRadius='5px'
					>
						<AlertIcon />
						<AlertTitle>Only accepts hex code values!</AlertTitle>
					</Alert>
				)}
			</Flex>
		</Box>
	);
};

export default Home;
