import {Box, IconButton, Link as ChakraLink, Show, Text, useColorMode} from '@chakra-ui/react';
import theme from '../../config/theme.ts';
import Logo from './Logo.tsx';
import {NavLink as ReactRouterLink} from 'react-router-dom';
import GitHubButton from 'react-github-btn';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';

export default function Header() {
    const {colorMode, toggleColorMode} = useColorMode();

    return <Box
        display="flex"
        minHeight={'60px'}
        alignItems="center"
        background={theme.colors.white}
        justifyContent="space-between"
        boxShadow="base"
        _dark={{background: theme.colors.blue['900']}} px={5}>

        <ChakraLink as={ReactRouterLink} to="/" display="flex" alignItems="center" gap={4} style={{textDecoration: 'none'}}>
            <Logo height={40} style={{borderRadius: '10px'}}/>
            <Show breakpoint="(min-width: 700px)">
                <Text fontSize="xl" fontWeight="400" textDecoration="none">My folder online</Text>
            </Show>
        </ChakraLink>

        <Box display="flex" gap={5} alignItems="end">
            <GitHubButton href="https://github.com/buttons/github-buttons"
                          data-icon="octicon-star"
                          data-size="large"
                          data-show-count="true"
                          aria-label="Star buttons/github-buttons on GitHub">
                Star
            </GitHubButton>
            <IconButton aria-label={'Toggle theme'} onClick={toggleColorMode} rounded={'100%'} icon={
                colorMode === 'light' ? <MoonIcon/> : <SunIcon/>
            }/>
        </Box>
    </Box>;
}