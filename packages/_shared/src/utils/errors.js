/* eslint-disable max-len */
// ////// CAPTURE ////// //


// ////// PERSIST ////// //
export const persistedCassetteNotAnObject = cassette => `
Redux VCR error:
You tried to persist an invalid or nonexistent cassette.

Cassettes should be objects with a timestamp, an array of actions, and an optional 'data' object with cassette metadata.

You provided: ${JSON.stringify(cassette, null, 2)}, which is of type '${typeof cassette}'.

You are likely seeing this error because 'createCaptureMiddleware' was not set up properly, or because you're making a custom Capture module and it isn't conforming to the specification.

For more information, see PLACEHOLDER.
`;

export const persistedCassetteInvalidTimestamp = timestamp => `
Redux VCR error:
You tried to persist a cassette without a valid 'timestamp'.

Cassettes need a numeric timestamp, eg. the result of calling Date.now().

You provided: ${JSON.stringify(timestamp, null, 2)}, which is of type '${typeof timestamp}'.

You are likely seeing this error because 'createCaptureMiddleware' was not set up properly, or because you're making a custom Capture module and it isn't conforming to the specification.

For more information, see PLACEHOLDER.
`;

export const persistedCassetteInvalidActions = actions => `
Redux VCR error:
You tried to persist a cassette without an 'actions' array.

Cassettes need an array of actions.

You provided: ${JSON.stringify(actions, null, 2)}, which is of type '${typeof actions}'.

You are likely seeing this error because 'createCaptureMiddleware' was not set up properly, or because you're making a custom Capture module and it isn't conforming to the specification.

For more information, see PLACEHOLDER.
`;

export const persistedBeforeAuthentication = () => `
Redux VCR error:
You tried to persist a cassette before firebase authentication is complete.

All users need to be anonymously authenticated; this is how we ensure that a user can only update their own slice of the Firebase state, and they can't overwrite the actions of another user.

Authentication usually happens quite fast, and so the solution is to debounce your persist requests by a few hundred milliseconds.

If that solution fails, it is possible that your Firebase credentials are invalid.

For more information, see PLACEHOLDER.
`;


// ////// SHARED ////// //
export const invalidFirebaseAuth = firebaseAuth => `
Redux VCR error:
You supplied an invalid 'firebaseAuth' object.

You provided: ${JSON.stringify(firebaseAuth, null, 2)}

To access the data in Firebase, we need:
  - an 'apiKey'
  - an 'authDomain'
  - a 'databaseURL'

These fields should all be strings.

For more information, see PLACEHOLDER.
`;
