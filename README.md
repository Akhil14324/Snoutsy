# Snoutsy

> A Pet Shop Website Made Using HTML, CSS and Javascript
> Snoutsy is a pet shop website with Firebase Google OAuth authentication. It is a responsive website for buying, selling, and adopting pets.

## Firebase Setup Instructions

### For New Developers (Cloning from GitHub)

If you've cloned this repository and Google login isn't working, you need to add your domain to Firebase Console:

1. **Go to Firebase Console**

   - Visit [Firebase Console](https://console.firebase.google.com/)
   - Select the project: `snoutsy-df81c`

2. **Add Authorized Domains**

   - Go to **Authentication** → **Settings** → **Authorized domains**
   - Click **Add domain**
   - Add the following domains:
     - `localhost` (for local development)
     - `127.0.0.1` (if using IP address)
     - Your local IP address (e.g., `192.168.1.100`) if accessing from another device
     - Any custom domain you're using

3. **Enable Google Sign-In**

   - Go to **Authentication** → **Sign-in method**
   - Make sure **Google** is enabled
   - Add your OAuth client ID if needed

4. **Common Issues & Troubleshooting**

   - **Error: "unauthorized-domain"** → Add your domain to authorized domains (see step 2)
   - **Error: "operation-not-allowed"** → Enable Google sign-in in Firebase Console
   - **Popup blocked** → Allow popups in your browser settings
   - **Still not working even with authorized domain?** → Check these:
     - **Port number matters**: If using `localhost:3000`, Firebase checks the full origin (domain + port). Make sure the exact origin is authorized
     - **Protocol matters**: `http://` vs `https://` are different origins. Both need to be authorized if you use both
     - **Browser cache**: Clear browser cache and cookies, then try again
     - **Check browser console**: Open DevTools (F12) → Console tab. Look for error messages when clicking login
     - **Firewall/Network**: Some networks block OAuth popups. Try a different network
     - **Third-party cookies**: Ensure third-party cookies are enabled in browser settings
     - **Browser extensions**: Disable ad blockers or privacy extensions that might block popups
     - **Different browser**: Try Chrome, Firefox, or Edge to rule out browser-specific issues

### Running Locally

1. Clone the repository
2. Open `pages/login.html` in a browser or use a local server
3. Make sure `localhost` is added to Firebase authorized domains
4. Click "Sign in with Google" button

## Website Output
