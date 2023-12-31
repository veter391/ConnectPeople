import { _url } from '../configVariables';

async function createEvent (obj: object) {
  const baseUrl = `${_url}/events/create/`;

  try {
    const resp = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:
        JSON.stringify(obj)
    });

    return await resp.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      return error;
    }
  }
}

export default createEvent;
