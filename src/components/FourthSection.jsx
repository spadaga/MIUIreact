import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab1Content from './Tab1Content';
import Tab2Content from './Tab2Content';
import Tab3Content from './Tab3Content';

export default function FourthSection() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" sx={{ fontStyle: 'normal', fontWeight: '500' }} />
                        <Tab label="Item Two" value="2" sx={{ fontStyle: 'normal', fontWeight: '500' }} />
                        <Tab label="Item Three" value="3" sx={{ fontStyle: 'normal', fontWeight: '500' }} />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Tab1Content />

                </TabPanel>
                <TabPanel value="2">

                    <Tab2Content />
                </TabPanel>
                <TabPanel value="3">

                    <Tab3Content />
                </TabPanel>
            </TabContext>
        </Box>
    );
}
