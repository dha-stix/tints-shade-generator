import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import CopyToClipboard from "react-copy-to-clipboard";

const ShadesComponent = ({ shade }) => {
	const [value, setValue] = useState(`#${shade.hex}`);

	const onCopy = () => {
		let value = shade.hex;
		setValue("Copied");
		setTimeout(() => {
			setValue(`#${value}`);
		}, 1000);
	};

	return (
		<CopyToClipboard onCopy={onCopy} text={`#${shade.hex}`}>
			<Flex
				bg={`#${shade.hex}`}
				w='200px'
				h='200px'
				p='10px'
				m='10px'
				cursor='pointer'
				alignItems='flex-end'
				justifyContent='right'
				_hover={{ boxShadow: "md" }}
				borderRadius='md'
				onClick={onCopy}
			>
				<Text bg='#F1F6F9' p='5px' borderRadius='5px' fontSize='xs'>
					{value}
				</Text>
			</Flex>
		</CopyToClipboard>
	);
};

export default ShadesComponent;
