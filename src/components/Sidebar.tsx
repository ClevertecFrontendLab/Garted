import { Box } from '@chakra-ui/react';

const Sidebar = () => (
    <Box
        width='208px'
        bg='purple'
        marginLeft='72px'
        position='sticky'
        top='80px'
        h='calc(100vh - 80px)'
        display={{ base: 'none', md: 'block' }}
    >
        <div>stats</div>
        <div>write reciept</div>
    </Box>
);

export default Sidebar;
