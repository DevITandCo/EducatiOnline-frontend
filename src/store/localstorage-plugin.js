const LocalStorage = store => {
    // Chargement de l'état initial du store à partir de LocalStorage
    const storedState = localStorage.getItem('vuex');
    if (storedState) {
      store.replaceState(JSON.parse(storedState));
    }
  
    // Abonnez-vous à tous les changements du store
    store.subscribe((mutation, state) => {
      // Stocker l'état dans LocalStorage après chaque mutation
      localStorage.setItem('vuex', JSON.stringify(state));
    });
  };
  
  export default LocalStorage;
  