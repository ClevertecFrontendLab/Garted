import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/react';

const Menu = () => (
    <Box
        position='sticky'
        top='80px'
        h='calc(100vh - 80px)'
        paddingTop='24px'
        marginRight='24px'
        display={{ base: 'none', md: 'block' }}
    >
        <Accordion allowMultiple padding='10px 16px 0 10px' width='256px'>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Section 1 title
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>Lin</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Section 2 title
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>pp</AccordionPanel>
            </AccordionItem>
        </Accordion>
        <div>footer</div>
    </Box>
);

export default Menu;
