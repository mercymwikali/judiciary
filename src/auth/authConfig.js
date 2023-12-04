import { LogLevel, PublicClientApplication } from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        clientId: '29485525-39e3-4865-a1b2-0163ba7d94ae',
        authority: 'https://login.microsoftonline.com/b35a7f97-47ac-4b38-8491-ecd39ed08e13',
        redirectUri: 'http://localhost:3000/',
        scopes:'https://api.portal.greencom.co.ke:8082/Judiciary/.default'
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        break;
                    case LogLevel.Info:
                        console.info(message);
                        break;
                    case LogLevel.Verbose:
                        console.debug(message);
                        break;
                    case LogLevel.Warning:
                        console.warn(message);
                        break;
                    default:
                        break;
                }
            },
        },
    },
};

// Function to acquire an access token
export async function acquireToken() {
    try {
        // Create MSAL instance
        const msalInstance = new PublicClientApplication(msalConfig);

        // Define scopes for which you want to acquire a token
        const request = {
            scopes: ['https://portal.greencom.co.ke:8082/Jumuika/b35a7f97-47ac-4b38-8491-ecd39ed08e13/.default']
        };

        // Use MSAL to acquire a token
        const response = await msalInstance.acquireTokenSilent(request);

        // Access token is available in response.accessToken
        console.log('Access Token:', response.accessToken);
    } catch (error) {
        // Handle token acquisition error
        console.error('Token acquisition error:', error);
    }
}
