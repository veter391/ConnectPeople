import { _url } from './configVariables';

async function userLogIn (obj : object) {
  const baseUrl = `${_url}/users/signup`;

  try {
    console.log(obj);
    const resp = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    });
    return await resp.json();
  } catch (error : any) {
    console.error(error.message);
  }
}

export default userLogIn;
