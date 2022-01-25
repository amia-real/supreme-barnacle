const useAuthProvide = () => {
    const [tenantId, setTenantId] = useState(
      window.localStorage.getItem('tenantId'),
    );
    const [userId, setUserId] = useState(window.localStorage.getItem('userId'));
    const [accessToken, setAccessToken] = useState(
      window.localStorage.getItem('access_token'),
    );
    const history = useHistory();
    const userLogin = async (
      email: string,
      password: string,
      redirectPath: string,
    ) => {
      try {
        const response = await axios({
          method: 'post',
          url: `https://domain.com/api/login`,
          data: {
            email,
            password,
          },
        });
        if (response.data) {
          console.log(JSON.stringify(response.data, null, 2));
          if (response.data.type !== 'tenant') {
            alert('Unauthorized User');
          } else {
            window.localStorage.setItem('userId', response.data.userId);
            setUserId(response.data.userId);
            window.localStorage.setItem('tenantId', response.data.tenantId);
            setTenantId(response.data.tenantId);
            console.log('tenantId:' + tenantId);
            window.localStorage.setItem(
              'access_token',
              response.data.accessToken,
            );
            setAccessToken(response.data.accessToken);
            history.push(redirectPath);
          }
        }
      } catch (e) {
        alert('Error Happened');
      }
    };
  
    // The way I would try to get user authentication to work would most likely be to try a more secure was of authentication such as OAuth through 3rd party programs to make it more secure
    // Possibly find a better way to encrypt the information being put in local storage would be helpful for security considering that local storage is not the most secure place to store important information. Having maybe just an access token stored or a session token that is returned from the api might be more secure and adding a potential session timer could also make it more secure.(Limiting the information that is returned from the POST request!)
    // in addition, If any error occurs in the code, there are 2 different Errors that are displayed: Error happened or Unauthorized User. By keeping it to 1 generic message, it will increase security and prevent any malicious people from taking advantage. However, this could make the user experience a lot worse as people might get confused. It would depend on the importance of the information to decide what to do here.
    