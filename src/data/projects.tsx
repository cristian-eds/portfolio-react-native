import React, { ReactNode } from 'react';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface Project {
    title: string,
    description: string,
    urlLink: string,
    icons: ReactNode[]
}

export const projects: Project[]  = [
    {
        title :'InfoMed - API',
        description: 'Personal project to create an API for medicine control.',
        urlLink: 'github.com/cristian-eds/infomed',
        icons: [<MaterialCommunityIcons name="language-java" size={24} color="black" key={"java"}/>]
    },
    {
        title :'InfoMed Front',
        description: 'Development frontend to Infomed API with React.',
        urlLink: 'github.com/cristian-eds/infomed-front',
        icons: [<MaterialCommunityIcons name="react" size={24} color="black" key={"react"}/>]
    },
    {
        title :'Reservas App',
        description: 'Development an App for reservations of roast meats with React Native.',
        urlLink: 'private',
        icons: [
        <MaterialCommunityIcons name="react" size={24} color="black" key={"react-native"}/>, 
        <MaterialCommunityIcons name="firebase" size={24} color="black" key={"firebase"}/>]
    }
]

