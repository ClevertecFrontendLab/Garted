import { Box } from '@chakra-ui/react';

import Header from '~/components/Header';
import Main from '~/components/Main';
import Menu from '~/components/Menu';
import Sidebar from '~/components/Sidebar';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <Box maxW={['100%', '768px', '1440px', '1920px']} minW='320px'>
            <Header />
            <Box display='flex'>
                <Menu />
                <Main />
                <Sidebar />
            </Box>
        </Box>
    );
}

export default App;
