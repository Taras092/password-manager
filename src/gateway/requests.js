const baseUrl = 'https://61b8921e64e4a10017d19082.mockapi.io/api/v1/users';

export const createUser = userData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to create User');
    }
    return response.json();
  });
};

export const fetchUsersData = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(usersData => usersData.map(({ _id, ...event }) => ({ id: _id, ...event })));
};

export const findUser = userId => {
  return fetch(`${baseUrl}/${userId}`).then(response => response.json())
}

export const updateUser = (userId, userData) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to put user');
    }
    return response.json();
  });
};

export const createCredential = (userId, credentialData) => {
  return fetch(`${baseUrl}/${userId}/credentials`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentialData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to create User');
    }
    return response.json();
  });
};

export const fetchCredentialsData = (userId) => {
  return fetch(`${baseUrl}/${userId}/credentials`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(usersData => usersData.map(({ _id, ...event }) => ({ id: _id, ...event })));
};

export const updateCredential = (userId, credentialId, credentialData) => {
  return fetch(`${baseUrl}/${userId}/credentials/${credentialId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentialData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to put user');
    }
    return response.json();
  });
};