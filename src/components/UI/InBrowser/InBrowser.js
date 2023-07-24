// Import the axios HTTP library and the SDK methods you'll be calling
// import axios from 'axios';
import React from 'react';

import {
  initialize,
  getInAppMessages
} from '@iterable/web-sdk';
import { Button } from 'bootstrap';

const InBrowser = () => {

    const API_KEY = "e038e8bc4c4541b388fcb7dc94e469fc";

    // (() => {

        const yourAsyncJWTGeneratorMethod = ({ email }) => {
            // In this method, call your server to fetch a valid JWT token for the current
            // user. Pass along the relevant userId or email, so the server can include
            // use it to generate the token. This method should return the JWT token.
            let value = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZm9uc28uaG9AZW1hdGljc29sdXRpb25zLmNvbSIsImlhdCI6MTY5MDE4MDkxNiwiZXhwIjoxNjkyODU5MzAyfQ.19jSk-VDYr9UDWfRVI7A3ecZylYgl_8_DY4HX--_tsI";
            return value;
        };

        // If you use userId instead of email, import setUserId instead
        const { setEmail } = initialize(
            API_KEY || '',
            yourAsyncJWTGeneratorMethod
        );

        const { request } = getInAppMessages(
            {
            // Here, configure the SDK. For more information, check out the 
            // web SDK's GitHub repository: https://github.com/iterable/iterable-web-sdk
            count: 20,
            displayInterval: 1000,
            onOpenScreenReaderMessage: '...',
            onOpenNodeToTakeFocus: 'input',
            packageName: '<Unique identifier for your website integration in Iterable>',
            rightOffset: '20px',
            topOffset: '20px',
            bottomOffset: '20px',
            handleLinks: 'external-new-tab',
            closeButton: {
                color: 'black',
                size: '16px',
                topOffset: '20px'
            }
            },
            { display: 'immediate' }
        );

        // Set the email address, and make the request to get the in-app messages 
        // that are available for that user. Display them automatically.
        setEmail('alfonso.ho@ematicsolutions.com').then(() => {
            request()
            .then()
            .catch();
        });

    // })();

    const getMessagesAutoDisplay = ({ request }) => {
        return request()
            .then((response) => {
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <React.Fragment>
            <div
                onclick={getMessagesAutoDisplay}
            >
                <h2>Click Me</h2>
            </div>
        </React.Fragment>
    )

}

export default InBrowser;