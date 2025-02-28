import { useAuth0 } from '@auth0/auth0-vue'

export const loginAsClient = () => {
  const { loginWithRedirect } = useAuth0()
  loginWithRedirect({
    authorizationParafsams: { screen_hint: 'login' }
  });
};

export const loginAsContractor = () => {
    const { loginWithRedirect } = useAuth0()
    loginWithRedirect({
      authorizationParams: { screen_hint: 'login' },
      appState: { targetUrl: "/contractor_dashboard"}
    });
  };
  
