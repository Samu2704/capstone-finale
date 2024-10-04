export const apiBaseUrl = "http://localhost:5000";

export const getMeUrl = `${apiBaseUrl}/auth/me`;
export const getProfileUrl = `${apiBaseUrl}/profile`;


export const loginUrl = "http://localhost:5000/auth/login";
export const registerUrl = "http://localhost:5000/auth/register";
export const meUrl = "http://localhost:5000/auth/me";

export const login = async (formValue) => {
  try {
    const res = await fetch(loginUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formValue),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const errorData = await res.json();
      return { error: errorData.message };
    }
  } catch (error) {
    return { error: error.message };
  }
};

export const register = async (regFormValue, avatar) => {
  const formData = new FormData();
  formData.append("avatar", avatar);
  formData.append("name", regFormValue.name);
  formData.append("surname", regFormValue.surname);
  formData.append("email", regFormValue.email);
  formData.append("password", regFormValue.password);
  /* formData.append('age', regFormValue.age); */
  console.log(formData);

  try {
    const res = await fetch(registerUrl, {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const errorData = await res.json();
      return { error: errorData.message };
    }
  } catch (error) {
    return { error: error.message };
  }
};

export const me = async () => {
  const res = await fetch(meUrl, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  if (!res.ok) {
    throw new Error(res.status);
  }
  const data = await res.json();
  return data;
};


//chiamiamo tutti i prodotti più venduti
export const getAllprodottiVenduti = async () => {
  try {
    const res = await fetch(apiBaseUrl + `/api/prodottiVenduti`, {
      // headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
      //},
    });
    if (!res.ok) throw new Error(res);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createProdotti = async () => {
  try {
    // Richiesta POST al server
    const response = await fetch(apiBaseUrl + `/api/prodottiVenduti`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(), // Converte l'oggetto in JSON
    });

    // Verifica se la richiesta è andata a buon fine
    if (response.ok) {
      const data = await response.json();
      console.log('Prodotto creato con successo:', data);
    } else {
      console.error('Errore nella creazione del prodotto');
    }
  } catch (error) {
    console.error('Errore:', error);
  }
};//CHIEDERE AD ALE FETCH PER METTERE A VIDEO QUESTI BENEDETTI PRODOTTI VENDUTI E QUANDRANTE VICINO E VERIFICARE LOGIN E REGISTER


export const getAllcorsiPadel = async () => {
  try {
    const res = await fetch(apiBaseUrl + `/api/corsoPadel`, {
      // headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
      //},
    });
    if (!res.ok) throw new Error(res);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const createCorsoPadel = async () => {
  try {
    // Richiesta POST al server
    const response = await fetch(apiBaseUrl + `/api/corsoPadel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(), // Converte l'oggetto in JSON
    });

    // Verifica se la richiesta è andata a buon fine
    if (response.ok) {
      const data = await response.json();
      console.log('corso padel creato con successo:', data);
    } else {
      console.error('Errore nella creazione del corso');
    }
  } catch (error) {
    console.error('Errore:', error);
  }
};
//CHIEDERE AD ALE FETCH PER METTERE A VIDEO QUESTI BENEDETTI PRODOTTI VENDUTI E QUANDRANTE VICINO E VERIFICARE LOGIN E REGISTER
